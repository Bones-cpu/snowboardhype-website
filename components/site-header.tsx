"use client"

import { useState } from "react"
import { Mountain, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Start Here", href: "#start" },
  { label: "Gear", href: "#gear" },
  { label: "First Turns", href: "#turns" },
  { label: "Safety", href: "#safety" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Mountain className="size-5" />
          </span>
          <span className="font-heading text-lg font-extrabold tracking-tight">
            Snowboard<span className="text-primary">Hype</span>
          </span>
        </a>

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

        <div className="hidden md:block">
          <Button
            render={<a href="#start" />}
            nativeButton={false}
            className="rounded-full font-semibold"
          >
            Get Riding
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-full border border-border md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-foreground/80 hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
            <Button
              render={<a href="#start" onClick={() => setOpen(false)} />}
              nativeButton={false}
              className="mt-2 rounded-full font-semibold"
            >
              Get Riding
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
