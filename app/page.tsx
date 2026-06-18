import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { Steps } from "@/components/steps"
import { GearGuide } from "@/components/gear-guide"
import { Turns } from "@/components/turns"
import { Safety } from "@/components/safety"
import { CTA } from "@/components/cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Steps />
        <GearGuide />
        <Turns />
        <Safety />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  )
}
