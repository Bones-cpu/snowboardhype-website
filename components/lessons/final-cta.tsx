import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCta() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="flex flex-col items-center gap-6 rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground shadow-lg md:px-12">
        <h2 className="max-w-2xl font-heading text-3xl font-black leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
          Ready to Start Snowboarding?
        </h2>
        <p className="max-w-md text-lg leading-relaxed text-pretty text-primary-foreground/90">
          Book your lesson today and learn with a BASI Certified Snowboard
          Instructor.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            render={<a href="#booking" />}
            nativeButton={false}
            size="lg"
            variant="secondary"
            className="rounded-full font-semibold"
          >
            Book a Lesson
            <ArrowRight className="size-4" />
          </Button>
          <Button
            render={<a href="mailto:snowboardhype@gmail.com" />}
            nativeButton={false}
            size="lg"
            variant="outline"
            className="rounded-full border-primary-foreground/40 bg-primary-foreground/10 font-semibold text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
          >
            <Mail className="size-4" />
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
