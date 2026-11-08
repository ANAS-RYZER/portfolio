import { cn } from "@/lib/utils"

/** Fluent 3D emoji (MIT, microsoft/fluentui-emoji) served from /public/3d. */
export function Icon3D({ name, className, float }: { name: string; className?: string; float?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/3d/${name}.png`}
      alt=""
      aria-hidden
      draggable={false}
      className={cn("pointer-events-none select-none drop-shadow-[0_20px_30px_rgba(0,0,0,0.55)]", float && "float-3d", className)}
    />
  )
}
