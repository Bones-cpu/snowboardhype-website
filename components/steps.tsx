import Image from "next/image"

const steps = [
  {
    no: "01",
    title: "Find your stance",
    text: "Regular or goofy? Figure out which foot leads so every turn feels natural from your very first ride.",
  },
  {
    no: "02",
    title: "Get comfy on snow",
    text: "Strap one foot in, skate around the flats, and learn to stand, sit and stop without the panic.",
  },
  {
    no: "03",
    title: "Master the falling leaf",
    text: "Slide side to side on your heel and toe edge to control speed before you ever point downhill.",
  },
  {
    no: "04",
    title: "Link your first turns",
    text: "Connect heelside to toeside and suddenly you're not surviving the slope — you're riding it.",
  },
]

export function Steps() {
  return (
    <section id="start" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Start here
          </span>
          <h2 className="font-heading text-4xl font-black leading-tight tracking-tight text-balance sm:text-5xl">
            Four steps from couch to confident
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            Everyone starts somewhere. Follow this path in order and you&apos;ll
            be linking turns way sooner than you think — no gatekeeping, just
            good progression.
          </p>
          <div className="relative mt-2 aspect-[5/4] overflow-hidden rounded-3xl border border-border shadow-lg">
            <Image
              src="/images/lesson.png"
              alt="A snowboard instructor teaching a beginner on a gentle slope"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <ol className="flex flex-col">
          {steps.map((step) => (
            <li
              key={step.no}
              className="group flex gap-5 border-b border-border py-6 first:pt-0 last:border-b-0"
            >
              <span className="font-heading text-3xl font-black text-primary/30 transition-colors group-hover:text-primary">
                {step.no}
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-heading text-xl font-bold">{step.title}</h3>
                <p className="leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
