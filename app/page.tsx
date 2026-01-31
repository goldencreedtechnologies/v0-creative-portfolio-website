import { Navigation } from "@/components/sections/navigation"
import { HeroSection } from "@/components/sections/hero"
import { ValueStripSection } from "@/components/sections/value-strip"
import { AboutSection } from "@/components/sections/about"
import { ServicesSection } from "@/components/sections/services"
import { ProjectsSection } from "@/components/sections/projects"
import { RetainersSection } from "@/components/sections/retainers"
import { SkillsSection } from "@/components/sections/skills"
import { ProcessSection } from "@/components/sections/process"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <HeroSection />
      <ValueStripSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <RetainersSection />
      <SkillsSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
