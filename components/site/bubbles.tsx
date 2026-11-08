"use client"

import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion"

// Soft glow blobs drift slowly and shift with scroll.
// Fixed positions (no randomness) so server and client render the same markup.
const blobs = [
  { left: "-8%", top: "5%", size: 520, color: "124 58 237", travel: 260, dur: 18 },
  { left: "70%", top: "25%", size: 460, color: "6 182 212", travel: -220, dur: 22 },
  { left: "35%", top: "65%", size: 420, color: "236 72 153", travel: 320, dur: 20 },
  { left: "80%", top: "80%", size: 380, color: "212 255 63", travel: 180, dur: 24 },
]

function Layer({ progress, travel, children, className, style }: {
  progress: MotionValue<number>; travel: number; children?: React.ReactNode; className: string; style: React.CSSProperties
}) {
  const y = useTransform(progress, [0, 1], [0, -travel])
  return <motion.div aria-hidden style={{ ...style, y }} className={className}>{children}</motion.div>
}

export function Bubbles() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 60, damping: 20, mass: 0.6 })
  const p = reduce ? scrollYProgress : progress

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {blobs.map((b, i) => (
        <Layer
          key={`blob-${i}`}
          progress={p}
          travel={reduce ? 0 : b.travel}
          className="absolute"
          style={{ left: b.left, top: b.top, width: b.size, height: b.size }}
        >
          <div
            className="float-3d h-full w-full rounded-full blur-[90px]"
            style={{ background: `rgb(${b.color} / 0.22)`, animationDuration: `${b.dur}s` }}
          />
        </Layer>
      ))}
    </div>
  )
}
