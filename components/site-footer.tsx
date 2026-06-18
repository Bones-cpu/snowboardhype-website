import { Mountain } from "lucide-react"

const columns = [
  {
    title: "Learn",
    links: ["Start Here", "Gear Guide", "First Turns", "Safety"],
  },
  {
    title: "Resort",
    links: ["Find a Mountain", "Book a Lesson", "Rentals", "Lift Tickets"],
  },
  {
    title: "Community",
    links: ["Stories", "Instagram", "YouTube", "Newsletter"],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-3">
            <a href="#top" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Mountain className="size-5" />
              </span>
              <span className="font-heading text-lg font-extrabold tracking-tight">
                Snowboard<span className="text-primary">Hype</span>
              </span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              The beginner&apos;s guide that gets everyone on the mountain — no
              gatekeeping, all hype.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h3 className="font-heading text-sm font-bold uppercase tracking-wide">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} SnowboardHype. Ride safe out there.</p>
          <p>Built for first-timers, by snow lovers.</p>
        </div>
      </div>
    </footer>
  )
}
