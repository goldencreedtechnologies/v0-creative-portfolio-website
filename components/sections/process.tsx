"use client"

import * as React from "react"
import { Search, Lightbulb, Film, Settings, Send } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start with a conversation to understand your brand, audience, content goals, and current challenges.",
    icon: Search,
  },
  {
    number: "02",
    title: "Content Strategy",
    description:
      "I develop a content approach tailored to your platforms, including formats, posting cadence, and style guidelines.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Editing & Production",
    description:
      "Your raw footage is transformed into polished, platform-optimized content with hooks, captions, and effects.",
    icon: Film,
  },
  {
    number: "04",
    title: "Optimization",
    description:
      "Each piece is refined based on platform best practices, trending elements, and performance insights.",
    icon: Settings,
  },
  {
    number: "05",
    title: "Delivery & Iteration",
    description:
      "Content is delivered on schedule with clear organization. We review performance and adjust the approach continuously.",
    icon: Send,
  },
]

export function ProcessSection() {
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
      id="process"
      ref={sectionRef}
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background timeline graphics */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gold" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gold" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gold" />
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-gold"
            style={{ left: `${(i + 1) * 10}%` }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-gold font-medium tracking-wider uppercase text-sm">
            How I Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-balance">
            A <span className="text-gold">Systematic Approach</span> to Content
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            A proven process that ensures consistent quality and clear
            communication from start to finish.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gold/20 via-gold/60 to-gold/20 -translate-y-1/2" />

          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Number marker */}
                <div className="relative z-10 mx-auto mb-6">
                  <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center shadow-lg shadow-gold/30 mx-auto">
                    <span className="text-xl font-bold text-black">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content card */}
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 text-center group">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                    <step.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-gold transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
