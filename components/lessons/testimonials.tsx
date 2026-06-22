import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Hannah M.",
    role: "First-time rider",
    quote:
      "I'd never touched a snowboard before. By the end of the day I was linking turns and actually having fun. So patient and encouraging!",
  },
  {
    name: "Daniel R.",
    role: "Beginner",
    quote:
      "Brilliant coaching. Everything was broken down into simple steps and I felt safe the whole time. Worth every penny.",
  },
  {
    name: "The Patel Family",
    role: "Family lesson",
    quote:
      "Our kids loved it and so did we. A relaxed, friendly session that got the whole family confident on the snow together.",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
          Happy riders
        </span>
        <h2 className="max-w-2xl font-heading text-3xl font-black leading-tight tracking-tight text-balance sm:text-4xl">
          What Beginners Are Saying
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 shadow-sm"
          >
            <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="size-4 fill-primary text-primary"
                  aria-hidden="true"
                />
              ))}
            </div>
            <blockquote className="leading-relaxed text-foreground/90 text-pretty">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-auto">
              <p className="font-heading font-bold">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
