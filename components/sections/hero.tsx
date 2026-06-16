"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SocialIconsBackground } from "@/components/ui/background-elements"

export function HeroSection() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <SocialIconsBackground />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 py-24 pt-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                <span className="text-gold">Charles</span>{" "}
                <span className="text-foreground">Samuel</span>
              </h1>
              
              <p className="text-xl md:text-2xl font-medium text-muted-foreground">
                Creative Director{" "}
                <span className="text-gold">•</span> Video Editor{" "}
                <span className="text-gold">•</span> Content Systems Builder
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Helping creators and startups stay consistent online through monthly short-form content editing and social media support.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold font-medium">
                Remote
              </span>
              <span className="px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold font-medium">
                Monthly Retainers
              </span>
              <span className="px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold font-medium">
                Flexible Collaboration
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-dark text-black font-semibold rounded-full px-8 group"
              >
                <Link href="/portfolio">
                  View Portfolio
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gold/30 hover:bg-gold/10 hover:border-gold rounded-full px-8 group bg-transparent"
              >
                <Link
                  href="https://wa.me/2349018896320?text=Hi%20Charles,%20I%20saw%20your%20portfolio%20and%20I%20want%20to%20discuss%20a%20project"
                  target="_blank"
                >
                  <MessageCircle className="mr-2 h-4 w-4 text-gold" />
                  Book WhatsApp Collaboration
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full animate-glow" />
              
              {/* Frame border */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-gold/30 shadow-2xl shadow-gold/10">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-gold rounded-tl-3xl" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-gold rounded-tr-3xl" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-gold rounded-bl-3xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-gold rounded-br-3xl" />
                
                <Image
                  src="/images/charles-samuel.png"
                  alt="Charles Samuel - Creative Director and Video Editor"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gold accent divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  )
}
