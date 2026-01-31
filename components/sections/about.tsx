"use client"

import * as React from "react"
import {
  Film,
  Youtube,
  Music,
  Type,
  Calendar,
  Globe,
  CheckCircle2,
  Sparkles,
} from "lucide-react"

const skills = [
  { icon: Film, label: "Short-form video editing" },
  { icon: Youtube, label: "Long-form YouTube editing" },
  { icon: Music, label: "Content pacing & sound overlays" },
  { icon: Type, label: "Caption alignment & formatting" },
  { icon: Calendar, label: "Social media content planning" },
  { icon: Globe, label: "Basic website design & updates" },
]

export function AboutSection() {
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
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-card relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border border-gold rounded-full" />
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-gold rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Main Content */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-4">
              <span className="text-gold font-medium tracking-wider uppercase text-sm">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                Building Content Systems That{" "}
                <span className="text-gold">Actually Work</span>
              </h2>
            </div>

            <div className="p-8 rounded-2xl bg-background border-2 border-gold/20 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a content editor and social media manager with hands-on experience supporting creators, artists, startups, and brands through ongoing content execution and platform-ready editing.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                My work focuses on helping clients stay consistent online by transforming raw footage into clean, engaging short-form and long-form content that aligns with platform behavior and brand goals. Rather than one-off projects, I prioritize structured workflows and long-term collaboration that reduce friction and improve content performance over time.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I&apos;ve worked across a range of content types including social media clips, artist promotions, brand campaigns, event recaps, and YouTube content, adapting each edit to the specific audience and platform.
              </p>
            </div>
          </div>

          {/* Right Column - Skills & Value */}
          <div
            className={`space-y-8 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Skills Grid */}
            <div className="p-8 rounded-2xl bg-background border-2 border-gold/20">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-5 h-5 text-gold" />
                <h3 className="text-xl font-bold">Skills & Expertise</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gold/5 border border-gold/10 hover:border-gold/30 transition-colors"
                  >
                    <skill.icon className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      {skill.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* How I Add Value */}
            <div className="p-8 rounded-2xl bg-gold/5 border-2 border-gold/30">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-5 h-5 text-gold" />
                <h3 className="text-xl font-bold">How I Add Value</h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                What sets me apart is my reliability and system-based approach. I work as an ongoing content partner, ensuring consistent delivery, clear communication, and edits that support visibility and growth, not just aesthetics.
              </p>
              
              <p className="text-foreground font-medium">
                Clients work with me when they want their content handled professionally, predictably, and without constant supervision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
