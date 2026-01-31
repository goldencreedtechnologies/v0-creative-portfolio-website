"use client"

import * as React from "react"
import { Film, RefreshCcw, Zap, Monitor } from "lucide-react"

const values = [
  {
    icon: Film,
    title: "Short-form content systems",
  },
  {
    icon: RefreshCcw,
    title: "Retainer-based editing support",
  },
  {
    icon: Zap,
    title: "Fast turnaround workflows",
  },
  {
    icon: Monitor,
    title: "Platform-optimized delivery",
  },
]

export function ValueStripSection() {
  return (
    <section className="py-12 bg-card border-y border-gold/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl bg-background border border-border hover:border-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5 hover:-translate-y-1"
            >
              {/* Icon container */}
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <value.icon className="w-6 h-6 text-gold" />
              </div>
              
              <h3 className="font-semibold text-foreground group-hover:text-gold transition-colors">
                {value.title}
              </h3>
              
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
