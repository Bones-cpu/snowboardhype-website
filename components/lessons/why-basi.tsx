import { Smile, BadgeCheck, UserRound } from "lucide-react"

const reasons = [
  {
    icon: Smile,
    title: "Beginner-Friendly Coaching",
    text: "Patient instruction designed for first-time riders, so you feel relaxed and supported from your very first turn.",
  },
  {
    icon: BadgeCheck,
    title: "Professional Qualifications",
    text: "BASI certified with a strong focus on safety, technique and steady, confidence-building progression.",
  },
  {
    icon: UserRound,
    title: "Personalised Lessons",
    text: "Private, group and family sessions available, each shaped around your goals and pace on the snow.",
  },
]

export function WhyBasi() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
          Why learn with us
        </span>
        <h2 className="max-w-2xl font-heading text-3xl font-black leading-tight tracking-tight text-balance sm:text-4xl">
          Why Learn With a BASI Certified Instructor
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {reasons.map((reason) => (
          <div
            key={reason.title}
            className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <reason.icon className="size-6" />
            </span>
            <h3 className="font-heading text-xl font-bold">{reason.title}</h3>
            <p className="leading-relaxed text-muted-foreground">{reason.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
