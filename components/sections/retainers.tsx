"use client"

import * as React from "react"
import Link from "next/link"
import { Check, MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const retainerPlans = [
  {
    name: "Starter Retainer",
    description: "Perfect for creators just getting started with consistent content.",
    deliverables: [
      "4 short-form videos per month",
      "Basic captions & formatting",
      "1 platform optimization",
      "Email support",
      "48-hour turnaround",
    ],
    featured: false,
  },
  {
    name: "Growth Retainer",
    description: "For creators ready to scale their content presence significantly.",
    deliverables: [
      "8 short-form videos per month",
      "2 long-form edits per month",
      "Advanced captions & effects",
      "Multi-platform optimization",
      "Content calendar planning",
      "Priority support",
      "24-hour turnaround",
    ],
    featured: true,
  },
  {
    name: "Full Content Partner",
    description: "Complete content management for serious creators and brands.",
    deliverables: [
      "Unlimited short-form videos",
      "4 long-form edits per month",
      "Full social media management",
      "Content strategy sessions",
      "Custom thumbnails & graphics",
      "Dedicated Slack channel",
      "Same-day turnaround available",
      "Monthly performance reviews",
    ],
    featured: false,
  },
]

export function RetainersSection() {
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
      ref={sectionRef}
      className="py-24 bg-card relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-gold rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-gold rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-gold font-medium tracking-wider uppercase text-sm">
            Retainer Plans
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-balance">
            Choose Your <span className="text-gold">Content Partnership</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Flexible retainer options designed to match your content needs and
            growth goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {retainerPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 ${
                plan.featured
                  ? "bg-gold/10 border-2 border-gold shadow-xl shadow-gold/20"
                  : "bg-background border-2 border-border hover:border-gold/40"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold rounded-full flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-black" />
                  <span className="text-sm font-semibold text-black">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? "text-gold" : ""}`}>
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.featured ? "text-gold" : "text-gold/70"
                      }`}
                    />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full rounded-full font-semibold ${
                  plan.featured
                    ? "bg-gold hover:bg-gold-dark text-black"
                    : "bg-transparent border-2 border-gold/30 hover:bg-gold/10 hover:border-gold text-foreground"
                }`}
                size="lg"
              >
                <Link
                  href="https://wa.me/2349018896320?text=Hi%20Charles,%20I%20saw%20your%20portfolio%20and%20I%20want%20to%20discuss%20a%20project"
                  target="_blank"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Request Quote
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
