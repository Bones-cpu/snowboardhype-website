import Image from "next/image"
import { ArrowRight, MessageCircle, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LessonsHero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/lesson-hero.png"
          alt="A BASI certified instructor teaching a beginner snowboarder on a gentle snowy slope"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/55" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-24 md:px-6 md:py-36">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-background/30 bg-background/15 px-4 py-1.5 text-sm font-medium text-background backdrop-blur-sm">
          <Award className="size-4" />
          BASI Certified Snowboard Instructor
        </span>
        <h1 className="max-w-3xl font-heading text-4xl font-black leading-[1.05] tracking-tight text-balance text-background sm:text-5xl lg:text-6xl">
          Book Your Snowboard Lesson
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-pretty text-background/90">
          Start your snowboarding journey with confidence. Learn from a BASI
          Certified Snowboard Instructor with lessons tailored for complete
          beginners and progressing riders.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button
            render={<a href="#booking" />}
            nativeButton={false}
            size="lg"
            className="rounded-full font-semibold"
          >
            Book a Lesson
            <ArrowRight className="size-4" />
          </Button>
          <Button
            render={<a href="#booking" />}
            nativeButton={false}
            size="lg"
            variant="outline"
            className="rounded-full border-background/40 bg-background/10 font-semibold text-background backdrop-blur-sm hover:bg-background/20 hover:text-background"
          >
            <MessageCircle className="size-4" />
            Ask a Question
          </Button>
        </div>
      </div>
    </section>
  )
}
