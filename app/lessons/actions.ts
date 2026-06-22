"use server"

import { headers } from "next/headers"
import { Resend } from "resend"
import { BookingEmail } from "@/components/lessons/booking-email"
import {
  validateBooking,
  type BookingPayload,
  type BookingState,
} from "@/lib/booking-schema"

const RECIPIENT_EMAIL = process.env.BOOKING_RECIPIENT_EMAIL || "snowboardhype@gmail.com"
// Resend requires a verified domain. Until one is configured, their shared
// onboarding sender works for testing.
const FROM_EMAIL = process.env.BOOKING_FROM_EMAIL || "SnowboardHype <onboarding@resend.dev>"

// Very small in-memory rate limiter (per server instance). Keyed by IP.
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 3
const submissions = new Map<string, number[]>()

function isRateLimited(ip: string) {
  const now = Date.now()
  const timestamps = (submissions.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  )
  if (timestamps.length >= RATE_LIMIT_MAX) {
    submissions.set(ip, timestamps)
    return true
  }
  timestamps.push(now)
  submissions.set(ip, timestamps)
  return false
}

export async function submitBooking(
  _prevState: BookingState,
  formData: FormData,
): Promise<BookingState> {
  // Honeypot: real users never fill this hidden field.
  if ((formData.get("company") as string)?.trim()) {
    return { status: "success", message: "Thank you for your enquiry! We'll get back to you within 24 hours." }
  }

  const headerList = await headers()
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headerList.get("x-real-ip") ||
    "unknown"

  if (isRateLimited(ip)) {
    return {
      status: "error",
      message: "You've sent a few enquiries already. Please wait a moment before trying again.",
    }
  }

  const data: BookingPayload = {
    name: (formData.get("name") as string) || "",
    email: (formData.get("email") as string) || "",
    phone: (formData.get("phone") as string) || "",
    ageGroup: (formData.get("ageGroup") as string) || "",
    experienceLevel: (formData.get("experienceLevel") as string) || "",
    preferredLocation: (formData.get("preferredLocation") as string) || "",
    preferredDates: (formData.get("preferredDates") as string) || "",
    numberOfRiders: (formData.get("numberOfRiders") as string) || "",
    message: (formData.get("message") as string) || "",
  }

  const errors = validateBooking(data)
  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      errors,
    }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log("[v0] RESEND_API_KEY is not set")
    return {
      status: "error",
      message:
        "Sorry, something went wrong. Please try again or email snowboardhype@gmail.com directly.",
    }
  }

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAIL,
      replyTo: data.email,
      subject: "New Snowboard Lesson Booking Enquiry",
      react: BookingEmail({ data }),
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
    console.log("[v0] Failed to send booking email:", err)
    return {
      status: "error",
      message:
        "Sorry, something went wrong. Please try again or email snowboardhype@gmail.com directly.",
    }
  }
}
