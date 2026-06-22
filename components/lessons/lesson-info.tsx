import { Clock, CalendarCheck, Backpack, Ticket, ShieldCheck } from "lucide-react"

const items = [
  {
    icon: Clock,
    title: "Fast response",
    text: "I usually reply to enquiries within 24 hours.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible lesson options",
    text: "Times and formats arranged to suit your schedule.",
  },
  {
    icon: Backpack,
    title: "Equipment advice",
    text: "Guidance on what to hire, buy or simply borrow.",
  },
  {
    icon: Ticket,
    title: "Lift pass guidance",
    text: "Help choosing the right pass for your lesson day.",
  },
  {
    icon: ShieldCheck,
    title: "Safety-focused",
    text: "Every session is built around safe, steady progress.",
  },
]

export function LessonInfo() {
  return (
    <section className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <h2 className="max-w-2xl font-heading text-3xl font-black leading-tight tracking-tight text-balance sm:text-4xl">
          Everything Sorted Before You Ride
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-background/15">
                <item.icon className="size-5" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                <p className="leading-relaxed text-secondary-foreground/85">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
