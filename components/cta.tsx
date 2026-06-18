import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6 md:pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-border">
        <Image
          src="/images/group.png"
          alt="A group of friends laughing together with their snowboards at a resort"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1152px"
        />
        <div className="absolute inset-0 bg-foreground/65" />
        <div className="relative flex flex-col items-center gap-6 px-6 py-16 text-center text-background md:py-24">
          <h2 className="max-w-2xl font-heading text-4xl font-black leading-tight tracking-tight text-balance sm:text-5xl">
            Your first run is waiting
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-background/80 text-pretty">
            Grab a buddy, book a lesson and bring the hype. The mountain
            doesn&apos;t care where you started — only that you showed up.
          </p>
          <Button
            render={<a href="#top" />}
            nativeButton={false}
            size="lg"
            className="rounded-full font-semibold"
          >
            Start the guide
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
