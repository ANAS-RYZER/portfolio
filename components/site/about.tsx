"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"
import { SectionLabel } from "./section-label"
import { Icon3D } from "./icon-3d"

const statement =
  "I build fast, accessible products for the web — from pixel-perfect interfaces to the APIs and real-time systems behind them. Currently CTO at Ryzer X and co-founder of Lumo, building AI property intelligence, CRM, cross-border payments and learning products."

const stats = [
  { value: "15+", label: "Projects shipped", icon: "rocket" },
  { value: "20+", label: "Technologies", icon: "gem_stone" },
  { value: "CTO", label: "Ryzer X", icon: "fire" },
  { value: "1.2M", label: "Lines of code", icon: "laptop" },
]

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.15, 1])
  return (
    <span className="relative mr-[0.25em] inline-block">
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  )
}

export function About() {
  const textRef = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: textRef, offset: ["start 0.85", "end 0.4"] })

  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress: sectionProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
  const blobY = useTransform(sectionProgress, [0, 1], ["-30%", "40%"])
  const statsY = useTransform(sectionProgress, [0, 1], ["20%", "-20%"])

  const words = statement.split(" ")

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden py-28 md:py-40">
      <motion.div
        aria-hidden
        style={{ y: blobY }}
        className="pointer-events-none absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-lime/10 blur-[120px]"
      />
      <div className="relative mx-auto max-w-[1400px] px-4 md:px-8">
        <SectionLabel>About me</SectionLabel>
        <p ref={textRef} className="max-w-6xl font-display text-3xl font-bold leading-[1.15] tracking-tight md:text-6xl">
          {words.map((w, i) => {
            const start = i / words.length
            return (
              <Word key={i} progress={scrollYProgress} range={[start, start + 1 / words.length]}>
                {w}
              </Word>
            )
          })}
        </p>

        <motion.dl style={{ y: statsY }} className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="group bg-ink-2/70 backdrop-blur-xl p-6 md:p-10">
              <Icon3D name={s.icon} className="mb-5 w-12 transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-12 group-hover:scale-125 md:w-16" />
              <dt className="text-xs uppercase tracking-[0.2em] text-paper-dim">{s.label}</dt>
              <dd className="mt-4 font-display text-5xl font-extrabold tracking-tighter text-lime xl:text-7xl">{s.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
