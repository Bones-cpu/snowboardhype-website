"use server"

import { headers } from "next/headers"
import { Resend } from "resend"
import {
  renderBookingHtml,
  renderBookingText,
  type BookingEnquiry,
} from "@/lib/booking-email"

const RECIPIENT_EMAIL = process.env.BOOKING_RECIPIENT_EMAIL || "snowboardhype@gmail.com"
// Resend's shared onboarding sender works without a verified domain.
// Set BOOKING_FROM_EMAIL to a verified domain address for production branding.
const FROM_EMAIL = process.env.BOOKING_FROM_EMAIL || "SnowboardHype <onboarding@resend.dev>"

export type BookingFormState = {
  status: "idle" | "success" | "error"
  message?: string
  errors?: Partial<Record<keyof BookingEnquiry, string>>
}

// Basic in-memory rate limiting (per server instance).
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 3
const submissions = new Map<string, number[]>()

function isRateLimited(key: string) {
  const now = Date.now()
  const recent = (submissions.get(key) || []).filter(
    (ts) => now - ts < RATE_LIMIT_WINDOW_MS,
  )
  if (recent.length >= RATE_LIMIT_MAX) {
    submissions.set(key, recent)
    return true
  }
  recent.push(now)
  submissions.set(key, recent)
  return false
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitBooking(
  _prevState: BookingFormState,
  formData: FormData,
): Promise<BookingFormState> {
  // Honeypot: real users leave this hidden field empty.
  if ((formData.get("company") as string)?.trim()) {
    return { status: "success", message: "Thank you for your enquiry!" }
  }

  const data: BookingEnquiry = {
    name: ((formData.get("name") as string) || "").trim(),
    email: ((formData.get("email") as string) || "").trim(),
    phone: ((formData.get("phone") as string) || "").trim(),
    ageGroup: ((formData.get("ageGroup") as string) || "").trim(),
    experienceLevel: ((formData.get("experience") as string) || "").trim(),
    preferredLocation: ((formData.get("location") as string) || "").trim(),
    preferredDates: ((formData.get("dates") as string) || "").trim(),
    numberOfRiders: ((formData.get("riders") as string) || "").trim(),
    message: ((formData.get("message") as string) || "").trim(),
  }

  const errors: BookingFormState["errors"] = {}
  if (!data.name) errors.name = "Please enter your name."
  if (!data.email) {
    errors.email = "Please enter your email address."
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.email = "Please enter a valid email address."
  }
  if (!data.ageGroup) errors.ageGroup = "Please select an age group."
  if (!data.experienceLevel) errors.experienceLevel = "Please select your experience level."

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please fix the highlighted fields.", errors }
  }

  const headerList = await headers()
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headerList.get("x-real-ip") ||
    "unknown"

  if (isRateLimited(ip)) {
    return {
      status: "error",
      message: "Too many enquiries in a short time. Please wait a moment and try again.",
    }
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      status: "error",
      message:
        "Sorry, something went wrong. Please try again or email snowboardhype@gmail.com directly.",
    }
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAIL,
      replyTo: data.email,
      subject: "New Snowboard Lesson Booking Enquiry",
      text: renderBookingText(data),
      html: renderBookingHtml(data),
    })

    if (error) {
      console.log("[v0] Resend error:", error)
      return {
        status: "error",
        message:
          "Sorry, something went wrong. Please try again or email snowboardhype@gmail.com directly.",
      }
    }

    return {
      status: "success",
      message: "Thank you for your enquiry! We'll get back to you within 24 hours.",
    }
  } catch (err) {
    console.log("[v0] Booking submission failed:", err)
    return {
      status: "error",
      message:
        "Sorry, something went wrong. Please try again or email snowboardhype@gmail.com directly.",
    }
  }
}
