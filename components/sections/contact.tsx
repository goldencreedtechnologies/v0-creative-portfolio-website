"use client"

import * as React from "react"
import Link from "next/link"
import { MessageCircle, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
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
      id="contact"
      ref={sectionRef}
      className="py-24 bg-card relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - CTA */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-4">
              <span className="text-gold font-medium tracking-wider uppercase text-sm">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                Let&apos;s Build Your{" "}
                <span className="text-gold">Content Engine</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Ready to transform your content workflow? Let&apos;s discuss how I
                can help you stay consistent and grow your audience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-dark text-black font-semibold rounded-full px-8"
              >
                <Link
                  href="https://wa.me/2349018896320?text=Hi%20Charles,%20I%20saw%20your%20portfolio%20and%20I%20want%20to%20discuss%20a%20project"
                  target="_blank"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Request Quote on WhatsApp
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gold/30 hover:bg-gold/10 hover:border-gold rounded-full px-8 bg-transparent"
              >
                <Link href="mailto:charlesgold59@gmail.com">
                  <Mail className="w-5 h-5 mr-2 text-gold" />
                  charlesgold59@gmail.com
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Trusted by creators and brands across industries
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Fast Response",
                  "Clear Pricing",
                  "Flexible Terms",
                  "Quality Guaranteed",
                ].map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-sm font-medium text-gold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <form className="p-8 rounded-2xl bg-background border-2 border-gold/20 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="rounded-xl border-border focus:border-gold focus:ring-gold"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="rounded-xl border-border focus:border-gold focus:ring-gold"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectType">Project Type</Label>
                <select
                  id="projectType"
                  className="w-full h-10 px-3 rounded-xl border border-border bg-background text-foreground focus:border-gold focus:ring-gold focus:outline-none"
                >
                  <option value="">Select a project type</option>
                  <option value="retainer">Monthly Retainer</option>
                  <option value="short-form">Short-Form Content</option>
                  <option value="long-form">Long-Form/YouTube</option>
                  <option value="social">Social Media Management</option>
                  <option value="campaign">Campaign Support</option>
                  <option value="website">Website Design</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="rounded-xl border-border focus:border-gold focus:ring-gold resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gold hover:bg-gold-dark text-black font-semibold rounded-full"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
