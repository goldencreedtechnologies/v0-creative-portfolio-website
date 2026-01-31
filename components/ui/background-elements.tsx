"use client"

import { cn } from "@/lib/utils"

export function SocialIconsBackground({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Play button */}
      <svg
        className="absolute top-[10%] left-[5%] w-24 h-24 text-gold/5 blur-[1px]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M8 5v14l11-7z" />
      </svg>

      {/* Camera frame */}
      <svg
        className="absolute top-[20%] right-[10%] w-32 h-32 text-gold/5 blur-[1px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 8h4l2-4h8l2 4h4" />
      </svg>

      {/* Waveform lines */}
      <div className="absolute bottom-[30%] left-[15%] flex items-end gap-1 opacity-5">
        {[40, 60, 30, 80, 50, 70, 35, 55, 45, 65, 25, 75].map((height, i) => (
          <div
            key={i}
            className="w-1 bg-gold rounded-full"
            style={{ height: `${height}px` }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div className="absolute top-[40%] right-[20%] w-40 h-40 opacity-5">
        <div className="grid grid-cols-3 gap-2 w-full h-full">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="border border-gold rounded" />
          ))}
        </div>
      </div>

      {/* Timeline marker */}
      <svg
        className="absolute bottom-[15%] right-[5%] w-20 h-20 text-gold/5 blur-[0.5px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>

      {/* Social icons scattered */}
      <svg
        className="absolute top-[60%] left-[8%] w-16 h-16 text-gold/5"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>

      {/* Play button circle */}
      <div className="absolute top-[75%] right-[25%] w-16 h-16 rounded-full border-2 border-gold/5 flex items-center justify-center">
        <div className="w-0 h-0 border-l-[12px] border-l-gold/10 border-y-[8px] border-y-transparent ml-1" />
      </div>
    </div>
  )
}

const timelineWidths = [
  [65, 120, 45, 90, 75, 110, 55, 85],
  [100, 50, 80, 115, 60, 95, 70, 105],
  [75, 95, 55, 125, 45, 85, 110, 65],
]

export function EditingUIBackground({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Timeline bars */}
      <div className="absolute bottom-[10%] left-[5%] right-[5%] flex flex-col gap-3 opacity-5">
        {timelineWidths.map((rowWidths, row) => (
          <div key={row} className="flex gap-2">
            {rowWidths.map((width, i) => (
              <div
                key={i}
                className="h-8 bg-gold rounded"
                style={{ width: `${width}px` }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Bezier curve */}
      <svg
        className="absolute top-[20%] left-[60%] w-48 h-32 text-gold/5"
        viewBox="0 0 200 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M0 80 Q50 10, 100 50 T200 20" />
      </svg>

      {/* Scrubber head */}
      <div className="absolute top-[50%] left-[30%] w-1 h-24 bg-gold/10 rounded-full">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gold/20 rounded" />
      </div>
    </div>
  )
}
