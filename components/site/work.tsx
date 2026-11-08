"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/data"
import { SectionLabel } from "./section-label"

type Project = (typeof projects)[number]

// One soft glow per card so the stack reads as separate layers.
const glows = ["124 58 237", "6 182 212", "212 255 63", "236 72 153", "250 204 21", "59 130 246"]

function StackCard({ project, index, total, progress }: { project: Project; index: number; total: number; progress: MotionValue<number> }) {
  // Cards further back in the stack shrink a little as later ones slide over them.
  const scale = useTransform(progress, [index / total, 1], [1, 1 - (total - 1 - index) * 0.04])
  const soon = "comingsoon" in project && project.comingsoon
  const href = !soon && project.live ? project.live : undefined
  const glow = glows[index % glows.length]

  return (
    <div className="sticky top-0 flex h-[100svh] items-start justify-center" style={{ paddingTop: `calc(5.5rem + ${index * 22}px)` }}>
      <motion.article
        style={{ scale, backgroundImage: `radial-gradient(70% 90% at 100% 0%, rgb(${glow} / 0.22), transparent 60%)` }}
        className="relative grid w-full origin-top gap-6 overflow-hidden rounded-[2rem] border border-line bg-ink-2 p-5 shadow-[0_-20px_60px_rgba(0,0,0,0.45)] md:p-8 lg:grid-cols-12 lg:gap-10"
      >
        <div className="flex flex-col lg:col-span-4">
          <div className="flex items-center justify-between">
            <span className="font-display text-sm text-lime">
              {String(index + 1).padStart(2, "0")} / {project.category}
            </span>
            {soon && <span className="rounded-full border border-lime/40 px-3 py-1 text-[10px] uppercase tracking-widest text-lime">In progress</span>}
          </div>
          <h3 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">{project.name}</h3>
          <p className="mt-4 line-clamp-4 leading-relaxed text-paper-dim md:line-clamp-none">{project.description}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((t) => (
              <li key={t} className="rounded-full border border-line bg-ink/40 px-3 py-1 text-xs text-paper-dim">
                {t}
              </li>
            ))}
          </ul>
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-auto hidden w-fit items-center gap-2 pt-6 text-sm font-semibold text-lime lg:inline-flex"
            >
              Visit live
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          )}
        </div>

        {/* Screenshot in a browser frame, shown whole (images are 16:10). */}
        <a
          href={href}
          target={href ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="group block overflow-hidden rounded-2xl border border-line bg-ink shadow-2xl lg:col-span-8"
        >
          <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </a>
      </motion.article>
    </div>
  )
}

export function Work() {
  const stackRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: stackRef, offset: ["start start", "end end"] })

  return (
    <section id="work" className="mx-auto max-w-[1400px] px-4 pt-28 md:px-8 md:pt-40">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <SectionLabel>Selected work</SectionLabel>
          <h2 className="font-display text-5xl font-extrabold leading-[0.9] tracking-tighter md:text-8xl">
            Things I&apos;ve
            <br />
            <span className="text-outline-lime">built</span>
          </h2>
        </div>
        <p className="max-w-sm text-paper-dim">
          From AI property intelligence and CRM to RWA investing and cross-border payments — what I&apos;m building now.
        </p>
      </div>

      <div ref={stackRef} className="relative">
        {projects.map((p, i) => (
          <StackCard key={p.id} project={p} index={i} total={projects.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  )
}
