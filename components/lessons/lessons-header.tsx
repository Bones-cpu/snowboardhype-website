import Link from "next/link"
import { Mountain } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Why Us", href: "#why" },
  { label: "Lessons", href: "#lessons" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
]

export function LessonsHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Mountain className="size-5" />
          </span>
          <span className="font-heading text-lg font-extrabold tracking-tight">
            Snowboard<span className="text-primary">Hype</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            render={<Link href="/" />}
            nativeButton={false}
            variant="ghost"
            className="hidden rounded-full font-semibold sm:inline-flex"
          >
            Home
          </Button>
          <Button
            render={<a href="#booking" />}
            nativeButton={false}
            className="rounded-full font-semibold"
          >
            Book a Lesson
          </Button>
        </div>
      </div>
    </header>
  )
}
