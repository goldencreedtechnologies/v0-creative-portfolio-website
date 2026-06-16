"use client"

import * as React from "react"
import Image from "next/image"
import { BarChart3, Film, Calendar, Globe, Settings } from "lucide-react"

const skills = [
  {
    name: "Premiere Pro",
    icon: "https://cdn.simpleicons.org/adobepremierepro",
    isImage: true,
  },
  {
    name: "After Effects",
    icon: "https://cdn.simpleicons.org/adobeaftereffects",
    isImage: true,
  },
  {
    name: "CapCut",
    icon: "https://cdn.simpleicons.org/capcut",
    isImage: true,
  },
  {
    name: "Canva",
    icon: "https://cdn.simpleicons.org/canva",
    isImage: true,
  },
  {
    name: "Social Media Strategy",
    icon: BarChart3,
    isImage: false,
  },
  {
    name: "Short-Form Editing",
    icon: Film,
    isImage: false,
  },
  {
    name: "Content Planning",
    icon: Calendar,
    isImage: false,
  },
  {
    name: "Web Design",
    icon: Globe,
    isImage: false,
  },
  {
    name: "Brand Content Systems",
    icon: Settings,
    isImage: false,
  },
]

export function SkillsSection() {
  const [isVisible, setIsVisible] = React.useState(false)
  const sectionRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-card relative">
      {/* Gold divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container mx-auto px-6">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-gold font-medium tracking-wider uppercase text-sm">
            Skills & Tools
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-balance">
            The <span className="text-gold">Arsenal</span> Behind the Work
          </h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
<div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                {skill.isImage ? (
                  <Image
                    src={skill.icon as string}
                    alt={skill.name}
                    width={28}
                    height={28}
                    className="object-contain"
                    unoptimized
                  />
                ) : (
                  <skill.icon className="w-6 h-6 text-gold" />
                )}
              </div>
              <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Gold divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </section>
  )
}
