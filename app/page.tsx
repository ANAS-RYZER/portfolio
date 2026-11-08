import { Hero } from "@/components/site/hero"
import { Bubbles } from "@/components/site/bubbles"
import { Marquee } from "@/components/site/marquee"
import { Work } from "@/components/site/work"
import { About } from "@/components/site/about"
import { Stack } from "@/components/site/stack"
import { Experience } from "@/components/site/experience"
import { Leadership } from "@/components/site/leadership"
import { Contact } from "@/components/site/contact"
import { Footer } from "@/components/site/footer"

const services = ["AI Products", "Co-founder @ Lumo", "Team Leadership", "Full Stack Development", "Client Delivery", "Real-time Systems", "ISO 27001"]

export default function Home() {
  return (
    <>
      <Bubbles />
      <main>
        <Hero />

        {/* Tilted infinite ribbons */}
        <div className="relative z-10 -my-6 py-12">
          <div className="-rotate-2 bg-lime py-4 text-ink">
            <Marquee baseVelocity={3}>
              {services.map((s) => (
                <span key={s} className="flex items-center font-display text-2xl font-bold uppercase tracking-tight md:text-4xl">
                  <span className="px-6">{s}</span>✦
                </span>
              ))}
            </Marquee>
          </div>
          <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 rotate-2 border-y border-line bg-ink-2 py-4">
            <Marquee baseVelocity={-3}>
              {services.map((s) => (
                <span key={s} className="flex items-center font-display text-2xl font-bold uppercase tracking-tight text-paper-dim md:text-4xl">
                  <span className="px-6">{s}</span>✦
                </span>
              ))}
            </Marquee>
          </div>
        </div>

        <Work />
        <About />
        <Stack />
        <Experience />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
