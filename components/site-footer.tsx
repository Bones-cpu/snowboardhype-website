import { Mountain, Mail } from "lucide-react"

type IconProps = { className?: string }

function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
    </svg>
  )
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.6 4.5-4.6 1.3 0 2.7.2 2.7.2v2.9h-1.5c-1.5 0-1.9.9-1.9 1.8V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12Z" />
    </svg>
  )
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.1.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.1-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4a3.7 3.7 0 0 1-1.4-.9 3.7 3.7 0 0 1-.9-1.4c-.1-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.1 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 3.2A6.6 6.6 0 1 0 18.6 12 6.6 6.6 0 0 0 12 5.4Zm0 10.9A4.3 4.3 0 1 1 16.3 12 4.3 4.3 0 0 1 12 16.3Zm6.9-11.2a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5Z" />
    </svg>
  )
}

function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.5 5.5a4.8 4.8 0 0 1-1-.1v6.9a5.3 5.3 0 1 1-5.3-5.3c.2 0 .4 0 .6.1v2.5a2.8 2.8 0 1 0 2 2.7V2h2.4a4.8 4.8 0 0 0 4.1 4.1v2.5a7.2 7.2 0 0 1-2.8-.6Z" />
    </svg>
  )
}

const learnLinks = ["Start Here", "Gear Guide", "First Turns", "Safety"]

const socials = [
  {
    label: "Email SnowboardHype",
    display: "snowboardhype@gmail.com",
    href: "mailto:snowboardhype@gmail.com",
    icon: Mail,
  },
  {
    label: "SnowboardHype on YouTube",
    display: "YouTube",
    href: "https://www.youtube.com/@SnowboardHype",
    icon: YoutubeIcon,
  },
  {
    label: "SnowboardHype on Facebook",
    display: "Facebook",
    href: "https://www.facebook.com/snowboardhype",
    icon: FacebookIcon,
  },
  {
    label: "SnowboardHype on Instagram",
    display: "Instagram",
    href: "https://www.instagram.com/snowboard_hype",
    icon: InstagramIcon,
  },
  {
    label: "SnowboardHype on TikTok",
    display: "TikTok",
    href: "https://www.tiktok.com/@snowboardhype",
    icon: TikTokIcon,
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1.5fr]">
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

          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide">
              Learn
            </h3>
            <ul className="flex flex-col gap-2">
              {learnLinks.map((link) => (
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

          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide">
              Connect
            </h3>
            <ul className="flex flex-col gap-2">
              {socials.map((social) => {
                const Icon = social.icon
                const isExternal = social.href.startsWith("http")
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span className="flex size-8 items-center justify-center rounded-full bg-muted text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="size-4" />
                      </span>
                      {social.display}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} SnowboardHype. All rights reserved.</p>
          <p>Built for first-timers, by snow lovers.</p>
        </div>
      </div>
    </footer>
  )
}
