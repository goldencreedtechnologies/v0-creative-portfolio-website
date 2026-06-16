"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EditingUIBackground } from "@/components/ui/background-elements"
import { portfolioCategories } from "@/lib/portfolio-data"

export function ProjectsSection() {
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
      id="work"
      ref={sectionRef}
      className="py-24 bg-primary text-primary-foreground relative overflow-hidden"
    >
      <EditingUIBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-gold font-medium tracking-wider uppercase text-sm">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-balance">
            Projects That <span className="text-gold">Delivered Results</span>
          </h2>
          <p className="text-primary-foreground/70 mt-4 text-lg">
            A selection of client work showcasing different content approaches
            and outcomes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioCategories.map((category, index) => (
            <div
              key={category.slug}
              className={`group relative rounded-2xl overflow-hidden bg-secondary border border-border hover:border-gold/40 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/20 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />

                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-gold/50" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-gold/50" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-gold/50" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-gold/50" />
              </div>

              {/* Content */}
              <div className="p-5 bg-[#1a1a1a]">
                <h3 className="font-bold text-lg text-[#F5F5F0] group-hover:text-gold transition-colors mb-3">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-gold/10 text-gold border border-gold/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Portfolio button */}
        <div
          className={`flex justify-center mt-12 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Button
            asChild
            size="lg"
            className="bg-gold hover:bg-gold-dark text-black font-semibold rounded-full px-8 group"
          >
            <Link href="/portfolio">
              View All Portfolio
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
