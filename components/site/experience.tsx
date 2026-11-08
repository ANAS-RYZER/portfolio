"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { experiences } from "@/lib/data"
import { SectionLabel } from "./section-label"

export function Experience() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.6"] })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])
  const bigY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])

  return (
    <section ref={ref} id="experience" className="relative mx-auto max-w-[1400px] px-4 py-28 md:px-8 md:py-40">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-32">
            <SectionLabel>Experience</SectionLabel>
            <motion.h2 style={{ y: bigY }} className="font-display text-5xl font-extrabold leading-[0.9] tracking-tighter md:text-7xl">
              Where
              <br />
              I&apos;ve <span className="text-outline-lime">been</span>
            </motion.h2>
          </div>
        </div>

        <div className="relative md:col-span-8">
          <div className="absolute left-0 top-0 h-full w-px bg-line" />
          <motion.div style={{ scaleY: lineScale }} className="absolute left-0 top-0 h-full w-px origin-top bg-lime" />
          <ol className="space-y-20 pl-8 md:pl-14">
            {experiences.map((e, i) => (
              <motion.li
                key={e.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <span className="absolute -left-[calc(2rem+4.5px)] top-2 h-2.5 w-2.5 rounded-full bg-lime md:-left-[calc(3.5rem+4.5px)]" />
                <p className="text-xs uppercase tracking-[0.2em] text-paper-dim">{e.period}</p>
                <h3 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
                  {e.role} <span className="text-lime">@ {e.company}</span>
                </h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-paper-dim">{e.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-paper/80">
                  {e.achievements.map((a) => (
                    <li key={a} className="flex gap-3">
                      <span className="mt-2 h-1 w-3 shrink-0 bg-lime" />
                      {a}
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
