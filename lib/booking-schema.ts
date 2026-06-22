export type BookingPayload = {
  name: string
  email: string
  phone: string
  ageGroup: string
  experienceLevel: string
  preferredLocation: string
  preferredDates: string
  numberOfRiders: string
  message: string
}

export type BookingState = {
  status: "idle" | "success" | "error"
  message?: string
  errors?: Partial<Record<keyof BookingPayload, string>>
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateBooking(data: BookingPayload) {
  const errors: Partial<Record<keyof BookingPayload, string>> = {}

  if (!data.name.trim()) {
    errors.name = "Please enter your name."
  }
  if (!data.email.trim()) {
    errors.email = "Please enter your email address."
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.email = "Please enter a valid email address."
  }
  if (!data.ageGroup.trim()) {
    errors.ageGroup = "Please select an age group."
  }
  if (!data.experienceLevel.trim()) {
    errors.experienceLevel = "Please select your experience level."
  }

  return errors
}
