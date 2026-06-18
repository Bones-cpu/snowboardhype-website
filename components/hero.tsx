import Image from "next/image"
import { ArrowRight, Snowflake } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-12 md:grid-cols-2 md:px-6 md:pb-24 md:pt-16">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground/70">
            <Snowflake className="size-4 text-secondary" />
            Zero experience required
          </span>
          <h1 className="font-heading text-5xl font-black leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Strap in.
            <br />
            Drop in.
            <br />
            <span className="text-primary">Ride the hype.</span>
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            SnowboardHype is the no-nonsense beginner&apos;s guide that takes you
            from never-touched-snow to linking confident turns down the mountain.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              render={<a href="#start" />}
              nativeButton={false}
              size="lg"
              className="rounded-full font-semibold"
            >
              Start the guide
              <ArrowRight className="size-4" />
            </Button>
            <Button
              render={<a href="#gear" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="rounded-full font-semibold"
            >
              Browse the gear
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-xl">
            <Image
              src="/images/hero-rider.png"
              alt="A snowboarder carving down a sunlit snowy slope"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-lg sm:block">
            <p className="font-heading text-3xl font-black text-primary">1 day</p>
            <p className="text-sm text-muted-foreground">to your first turns</p>
          </div>
        </div>
      </div>
    </section>
  )
}
