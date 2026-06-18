import Image from "next/image"
import { Snowflake, Shirt, Footprints, Glasses } from "lucide-react"

const gear = [
  {
    icon: Snowflake,
    name: "The board",
    text: "Go soft-flex and a touch shorter than usual. Forgiving boards make learning way less brutal.",
  },
  {
    icon: Footprints,
    name: "Boots & bindings",
    text: "Comfort beats everything. Snug heel, no toe-crunch — your boots are the most important buy.",
  },
  {
    icon: Shirt,
    name: "Layers",
    text: "Waterproof shell, a warm mid-layer and moisture-wicking base. Skip the cotton, always.",
  },
  {
    icon: Glasses,
    name: "Goggles & helmet",
    text: "Protect your eyes and your head. A helmet is non-negotiable — confidence loves safety.",
  },
]

export function GearGuide() {
  return (
    <section id="gear" className="bg-foreground py-16 text-background md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative order-last aspect-[4/5] overflow-hidden rounded-3xl lg:order-first">
            <Image
              src="/images/gear.png"
              alt="A snowboarder holding their board and checking their gear at a resort"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Gear up
              </span>
              <h2 className="font-heading text-4xl font-black leading-tight tracking-tight text-balance sm:text-5xl">
                What you actually need
              </h2>
              <p className="max-w-md text-lg leading-relaxed text-background/70 text-pretty">
                You can rent almost all of it on day one. Here&apos;s the
                beginner kit, ranked by what matters most.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {gear.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col gap-3 rounded-2xl border border-background/15 bg-background/5 p-5"
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <item.icon className="size-5" />
                  </span>
                  <h3 className="font-heading text-lg font-bold">{item.name}</h3>
                  <p className="text-sm leading-relaxed text-background/70">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
