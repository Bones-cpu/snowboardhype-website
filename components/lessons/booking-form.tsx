"use client"

import { useState } from "react"
import { Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const fieldClass =
  "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
const labelClass = "mb-1.5 block text-sm font-medium text-foreground"

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

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
        {submitted ? (
          <div className="flex flex-col items-center gap-3 py-10 text-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <CheckCircle2 className="size-7" />
            </span>
            <h3 className="font-heading text-2xl font-bold">Enquiry sent!</h3>
            <p className="max-w-sm leading-relaxed text-muted-foreground">
              Thanks for getting in touch. I&apos;ll reply to your enquiry as soon
              as possible, usually within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
                  className={fieldClass}
                  placeholder="Your full name"
                />
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
                  className={fieldClass}
                  placeholder="you@example.com"
                />
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
                <select id="ageGroup" name="ageGroup" required className={fieldClass}>
                  <option value="">Select…</option>
                  <option>Adult</option>
                  <option>Child</option>
                </select>
              </div>
              <div>
                <label htmlFor="experience" className={labelClass}>
                  Experience Level
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  className={fieldClass}
                >
                  <option value="">Select…</option>
                  <option>Complete Beginner</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                </select>
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

            <Button
              type="submit"
              size="lg"
              className="mt-2 w-full rounded-full font-semibold"
            >
              <Send className="size-4" />
              Send Booking Enquiry
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
