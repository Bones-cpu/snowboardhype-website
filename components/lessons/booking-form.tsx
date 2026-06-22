"use client"

import { useActionState, useEffect, useRef } from "react"
import { useFormStatus } from "react-dom"
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { submitBooking, type BookingFormState } from "@/app/lessons/actions"

const fieldClass =
  "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
const labelClass = "mb-1.5 block text-sm font-medium text-foreground"
const errorClass = "mt-1 text-sm text-destructive"

const initialState: BookingFormState = { status: "idle" }

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={`${id}-error`} className={errorClass} role="alert">
      {message}
    </p>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className="mt-2 w-full rounded-full font-semibold"
    >
      {pending ? (
        <>
          <Loader2 className="size-4 animate-spin" />
          Sending…
        </>
      ) : (
        <>
          <Send className="size-4" />
          Send Booking Enquiry
        </>
      )}
    </Button>
  )
}

export function BookingForm() {
  const [state, formAction] = useActionState(submitBooking, initialState)
  const formRef = useRef<HTMLFormElement>(null)
  const errors = state.errors ?? {}

  // Reset the form fields after a successful submission.
  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset()
    }
  }, [state.status])

  return (
    <section id="booking" className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
          Get in touch
        </span>
        <h2 className="max-w-2xl font-heading text-3xl font-black leading-tight tracking-tight text-balance sm:text-4xl">
          Send Your Booking Enquiry
        </h2>
        <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
          Fill in a few details and I&apos;ll get back to you, usually within 24
          hours, to plan your perfect lesson.
        </p>
      </div>

      <div className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
        {state.status === "success" ? (
          <div className="flex flex-col items-center gap-3 py-10 text-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <CheckCircle2 className="size-7" />
            </span>
            <h3 className="font-heading text-2xl font-bold">Enquiry sent!</h3>
            <p className="max-w-sm leading-relaxed text-muted-foreground">
              {state.message ??
                "Thank you for your enquiry! We'll get back to you within 24 hours."}
            </p>
          </div>
        ) : (
          <form ref={formRef} action={formAction} noValidate className="flex flex-col gap-5">
            {state.status === "error" && (
              <div
                role="alert"
                className="flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
              >
                <AlertCircle className="mt-0.5 size-4 shrink-0" />
                <span>{state.message}</span>
              </div>
            )}

            {/* Honeypot field — hidden from real users, catches bots. */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={fieldClass}
                  placeholder="Your full name"
                />
                <FieldError id="name" message={errors.name} />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={fieldClass}
                  placeholder="you@example.com"
                />
                <FieldError id="email" message={errors.email} />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className={fieldClass}
                  placeholder="07000 000000"
                />
              </div>
              <div>
                <label htmlFor="ageGroup" className={labelClass}>
                  Age Group
                </label>
                <select
                  id="ageGroup"
                  name="ageGroup"
                  required
                  aria-invalid={!!errors.ageGroup}
                  aria-describedby={errors.ageGroup ? "ageGroup-error" : undefined}
                  className={fieldClass}
                >
                  <option value="">Select…</option>
                  <option>Adult</option>
                  <option>Child</option>
                </select>
                <FieldError id="ageGroup" message={errors.ageGroup} />
              </div>
              <div>
                <label htmlFor="experience" className={labelClass}>
                  Experience Level
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  aria-invalid={!!errors.experienceLevel}
                  aria-describedby={errors.experienceLevel ? "experience-error" : undefined}
                  className={fieldClass}
                >
                  <option value="">Select…</option>
                  <option>Complete Beginner</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                </select>
                <FieldError id="experience" message={errors.experienceLevel} />
              </div>
              <div>
                <label htmlFor="location" className={labelClass}>
                  Preferred Location
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  className={fieldClass}
                  placeholder="Resort or dry slope"
                />
              </div>
              <div>
                <label htmlFor="dates" className={labelClass}>
                  Preferred Dates
                </label>
                <input
                  id="dates"
                  name="dates"
                  type="text"
                  className={fieldClass}
                  placeholder="e.g. 12–15 Feb"
                />
              </div>
              <div>
                <label htmlFor="riders" className={labelClass}>
                  Number of Riders
                </label>
                <input
                  id="riders"
                  name="riders"
                  type="number"
                  min={1}
                  defaultValue={1}
                  className={fieldClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                Message / Questions
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={fieldClass}
                placeholder="Tell me about your goals or any questions you have…"
              />
            </div>

            <SubmitButton />
          </form>
        )}
      </div>
    </section>
  )
}
