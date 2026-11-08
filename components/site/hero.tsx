"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { personalInfo } from "@/lib/data"
import { Icon3D } from "./icon-3d"

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })

  // Parallax layers: each moves at its own speed as the hero scrolls away.
  const lineLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"])
  const lineRight = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"])
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const metaY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  // 3D icons: nearer ones (bigger) move faster for depth.
  const iconFar = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"])
  const iconMid = useTransform(scrollYProgress, [0, 1], ["0%", "-160%"])
  const iconNear = useTransform(scrollYProgress, [0, 1], ["0%", "-260%"])

  const [first, last] = personalInfo.name.toUpperCase().split(" ")

  const icons = [
    { name: "rocket", y: iconNear, delay: 1.2, className: "left-[6%] top-[22%] w-20 md:left-[14%] md:top-[20%] md:w-36" },
    { name: "robot", y: iconMid, delay: 1.35, className: "right-[5%] top-[30%] w-16 md:right-[13%] md:top-[24%] md:w-28" },
    { name: "laptop", y: iconFar, delay: 1.5, className: "left-[22%] top-[48%] hidden w-24 md:block" },
    { name: "high_voltage", y: iconFar, delay: 1.6, className: "right-[24%] top-[52%] hidden w-16 md:block" },
  ]

  return (
    <section ref={ref} id="top" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-10 pt-28">
      {icons.map((ic) => (
        <motion.div key={ic.name} style={{ y: ic.y, opacity: fade }} className={`absolute z-20 ${ic.className}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.4, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease, delay: ic.delay }}
          >
            <Icon3D name={ic.name} float className="w-full" />
          </motion.div>
        </motion.div>
      ))}

      {/* Portrait — slowest layer */}
      <motion.div
        style={{ y: photoY, scale: photoScale }}
        className="absolute left-1/2 top-[18%] h-[46vh] w-[min(78vw,380px)] -translate-x-1/2 md:top-[12%] md:h-[64vh]"
      >
        <motion.div
          initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.2, ease, delay: 0.2 }}
          className="relative h-full w-full overflow-hidden rounded-[2rem]"
        >
          <Image src={personalInfo.avatar} alt={personalInfo.name} fill priority className="object-cover object-top" sizes="(min-width: 768px) 1100px, 800px" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
        </motion.div>
      </motion.div>

      {/* Floating meta — fastest layer */}
      <motion.div style={{ y: metaY, opacity: fade }} className="relative z-10 mx-auto mb-auto flex w-full max-w-[1400px] justify-between px-4 text-xs uppercase tracking-[0.2em] text-paper-dim md:px-8">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-lime" /> Available for work
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="hidden sm:block">
          Based in India — Open to remote
        </motion.span>
      </motion.div>

      {/* Giant name — two lines slide apart */}
      <div className="relative z-10 select-none font-display font-extrabold leading-[0.82] tracking-tighter">
        <motion.div style={{ x: lineLeft }} className="overflow-hidden px-4 md:px-8">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease, delay: 0.4 }}
            className="text-[9.6vw] md:text-[9.8vw]"
          >
            {first}
          </motion.h1>
        </motion.div>
        <motion.div style={{ x: lineRight }} className="overflow-hidden px-4 text-right md:px-8">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease, delay: 0.5 }}
            className="text-outline text-[9.6vw] md:text-[9.8vw]"
          >
            {last}
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity: fade }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="relative z-10 mx-auto mt-8 flex w-full max-w-[1400px] flex-col gap-6 px-4 md:flex-row md:items-end md:justify-between md:px-8"
      >
        <p className="max-w-md text-base leading-relaxed text-paper-dim md:text-lg">
          <span className="text-paper">{personalInfo.title}</span>. Building AI products, real-time systems and
          multi-tenant platforms with Next.js, NestJS &amp; Python.
        </p>
      </motion.div>
    </section>
  )
}
