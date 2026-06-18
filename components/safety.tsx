import { ShieldCheck, Users, CloudSnow, Heart } from "lucide-react"

const rules = [
  {
    icon: ShieldCheck,
    title: "Know the code",
    text: "People below you have the right of way. Look uphill before you start and never stop where you can't be seen.",
  },
  {
    icon: Users,
    title: "Take a lesson",
    text: "One pro lesson beats ten YouTube videos. Good habits early save you weeks of frustration later.",
  },
  {
    icon: CloudSnow,
    title: "Respect the mountain",
    text: "Check the weather, stick to open runs, and stay on slopes that match your level. Ego is the real hazard.",
  },
  {
    icon: Heart,
    title: "Fuel and rest",
    text: "Hydrate, snack often and stop when you're tired. Most spills happen on that 'one last run'.",
  },
]

export function Safety() {
  return (
    <section id="safety" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
          Stay safe
        </span>
        <h2 className="max-w-2xl font-heading text-4xl font-black leading-tight tracking-tight text-balance sm:text-5xl">
          Ride hard, ride smart
        </h2>
        <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
          Confidence comes from knowing the basics. Keep these four in your back
          pocket every time you head up.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {rules.map((rule) => (
          <div
            key={rule.title}
            className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <rule.icon className="size-5" />
            </span>
            <h3 className="font-heading text-lg font-bold">{rule.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {rule.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
