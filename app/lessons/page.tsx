import type { Metadata } from "next"
import { LessonsHeader } from "@/components/lessons/lessons-header"
import { LessonsHero } from "@/components/lessons/lessons-hero"
import { WhyBasi } from "@/components/lessons/why-basi"
import { LessonTypes } from "@/components/lessons/lesson-types"
import { BookingForm } from "@/components/lessons/booking-form"
import { LessonInfo } from "@/components/lessons/lesson-info"
import { Testimonials } from "@/components/lessons/testimonials"
import { Faq } from "@/components/lessons/faq"
import { FinalCta } from "@/components/lessons/final-cta"
import { LessonsFooter } from "@/components/lessons/lessons-footer"

export const metadata: Metadata = {
  title: "Book a Snowboard Lesson — SnowboardHype",
  description:
    "Book private or group snowboard lessons with a BASI Certified Snowboard Instructor. Beginner-friendly coaching for first-time riders and progressing snowboarders.",
}

export default function LessonsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LessonsHeader />
      <main className="flex-1">
        <LessonsHero />
        <WhyBasi />
        <LessonTypes />
        <BookingForm />
        <LessonInfo />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <LessonsFooter />
    </div>
  )
}
