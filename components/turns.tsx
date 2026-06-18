import Image from "next/image"

const tips = [
  {
    title: "Look where you want to go",
    text: "Your board follows your eyes and shoulders. Stare at your feet and you'll head straight there.",
  },
  {
    title: "Bend your knees",
    text: "A low, athletic stance keeps you balanced and absorbs the bumps. Tall and stiff means falling.",
  },
  {
    title: "Falling is fine",
    text: "Everyone eats snow on day one. Fall onto your forearms or your butt — never your wrists.",
  },
]

export function Turns() {
  return (
    <section id="turns" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
              First turns
            </span>
            <h2 className="font-heading text-4xl font-black leading-tight tracking-tight text-balance sm:text-5xl">
              Three things that change everything
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            {tips.map((tip, i) => (
              <div
                key={tip.title}
                className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <span className="font-heading text-2xl font-black text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading text-lg font-bold">{tip.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {tip.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-lg">
          <Image
            src="/images/portrait.png"
            alt="A confident snowboarder sitting in the snow with their board"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
      </div>
    </section>
  )
}
