"use client"

import * as React from "react"
import {
  RefreshCcw,
  Share2,
  Film,
  Compass,
  Megaphone,
  Globe,
} from "lucide-react"
import { SocialIconsBackground } from "@/components/ui/background-elements"

const services = [
  {
    icon: RefreshCcw,
    title: "Monthly Short-Form Editing Retainers",
    description:
      "Consistent, ongoing editing support for your social content with predictable workflows.",
    deliverables: [
      "Weekly batch editing",
      "Platform-specific formats",
      "Quick revision cycles",
      "Content calendar alignment",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Content Management",
    description:
      "End-to-end content support from ideation to posting, keeping your profiles active and engaging.",
    deliverables: [
      "Content scheduling",
      "Caption writing",
      "Hashtag strategy",
      "Engagement tracking",
    ],
  },
  {
    icon: Film,
    title: "Video Editing (Reels, TikTok, Shorts, YouTube)",
    description:
      "Professional editing for all major platforms, optimized for engagement and watch time.",
    deliverables: [
      "Hooks & retention edits",
      "Trending audio integration",
      "Captions & subtitles",
      "Thumbnail creation",
    ],
  },
  {
    icon: Compass,
    title: "Content Direction & Structure",
    description:
      "Strategic guidance on content formats, series, and themes that resonate with your audience.",
    deliverables: [
      "Content pillars",
      "Series development",
      "Format optimization",
      "Brand consistency",
    ],
  },
  {
    icon: Megaphone,
    title: "Campaign Content Support",
    description:
      "Dedicated editing and content support for launches, campaigns, and promotional periods.",
    deliverables: [
      "Campaign asset creation",
      "Multi-platform adaptation",
      "Timeline management",
      "Performance-ready edits",
    ],
  },
  {
    icon: Globe,
    title: "Website & Landing Page Design",
    description:
      "Clean, conversion-focused web design that showcases your brand and drives action.",
    deliverables: [
      "Landing page design",
      "Portfolio websites",
      "Basic maintenance",
      "Mobile optimization",
    ],
  },
]

export function ServicesSection() {
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
      id="services"
      ref={sectionRef}
      className="py-24 bg-background relative overflow-hidden"
    >
      <SocialIconsBackground className="opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-gold font-medium tracking-wider uppercase text-sm">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-balance">
            Everything You Need to{" "}
            <span className="text-gold">Stay Consistent</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Comprehensive content services designed for creators and brands who
            value reliability over one-off projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-card border-2 border-border hover:border-gold/40 transition-all duration-500 hover:shadow-xl hover:shadow-gold/10 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-gold" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Deliverables */}
              <ul className="space-y-2">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-gold/30 rounded-tr-2xl group-hover:border-gold transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
