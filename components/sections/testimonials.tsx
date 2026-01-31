"use client"

import * as React from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Anita Darlington",
    role: "Content Creator",
    content:
      "Charles transformed our content workflow completely. His systematic approach meant we always knew what was coming and when. The quality and consistency of his edits helped us grow our audience by 150% in just three months.",
    rating: 5,
  },
  {
    name: "David Operah",
    role: "Tech Founder",
    content:
      "Working with Charles was a game-changer for our product launch. He understood our vision immediately and delivered content that perfectly captured our brand. The launch video alone generated over 100K views.",
    rating: 5,
  },
  {
    name: "Mateen Lander",
    role: "Independent Artist",
    content:
      "As an artist, I need someone who gets creative vision. Charles doesn't just edit - he enhances. Every video he touches comes back better than I imagined. His music promo work helped my single reach 500K+ combined views.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Brand Manager, Ezyride",
    content:
      "Charles managed our entire content calendar with precision. He's reliable, communicative, and his edits always hit the mark. Our app downloads increased 30% during his campaign work with us.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <Quote className="absolute top-10 left-10 w-64 h-64 text-gold" />
        <Quote className="absolute bottom-10 right-10 w-48 h-48 text-gold rotate-180" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-gold font-medium tracking-wider uppercase text-sm">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-balance">
            What Clients <span className="text-gold">Say</span>
          </h2>
        </div>

        <div
          className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Testimonial Card */}
          <div className="relative p-8 md:p-12 rounded-3xl bg-secondary border border-border">
            {/* Quote icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-gold flex items-center justify-center">
              <Quote className="w-6 h-6 text-black" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-gold" />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-primary-foreground">
              &ldquo;{testimonials[currentIndex].content}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-lg text-primary-foreground">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full border-gold/30 hover:bg-gold/10 hover:border-gold bg-transparent"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full border-gold/30 hover:bg-gold/10 hover:border-gold bg-transparent"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-gold w-8"
                      : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
