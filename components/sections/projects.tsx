"use client"

import * as React from "react"
import { Play, X, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EditingUIBackground } from "@/components/ui/background-elements"

const projects = [
  {
    title: "Brand Campaign Series",
    client: "Anita Darlington",
    tags: ["Short-form", "Brand Content", "Social"],
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    summary: "A comprehensive brand campaign designed to increase social presence and engagement.",
    objective: "Create a series of engaging short-form videos that showcase brand personality and drive follower growth.",
    execution: "Developed a content calendar with 3 weekly posts, focusing on trending audio and authentic storytelling.",
    result: "Achieved 150% increase in engagement rate and 40% follower growth over 3 months.",
  },
  {
    title: "Artist Promotion Package",
    client: "Mateen Lander",
    tags: ["Music", "Reels", "TikTok"],
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    summary: "Multi-platform content strategy for emerging artist promotion.",
    objective: "Build buzz around new music release through strategic content placement.",
    execution: "Created teaser clips, behind-the-scenes content, and lyric snippets optimized for each platform.",
    result: "Generated 500K+ combined views across platforms within release week.",
  },
  {
    title: "Startup Launch Campaign",
    client: "David Operah",
    tags: ["Tech", "Launch", "YouTube"],
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    summary: "Complete video content package for tech startup product launch.",
    objective: "Create compelling product showcase and explainer content for launch.",
    execution: "Produced launch video, feature breakdowns, and user testimonial compilations.",
    result: "Launch video achieved 100K views and contributed to successful funding round.",
  },
  {
    title: "Educational Content Series",
    client: "BTVC",
    tags: ["Education", "Long-form", "YouTube"],
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    summary: "Ongoing educational content production and optimization.",
    objective: "Establish thought leadership through valuable educational content.",
    execution: "Developed consistent format, optimized thumbnails, and implemented SEO strategies.",
    result: "Channel grew from 2K to 15K subscribers in 6 months with improved retention rates.",
  },
  {
    title: "Brand Identity Videos",
    client: "Ezyride",
    tags: ["Branding", "Commercial", "Ads"],
    thumbnail: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    summary: "Commercial video production for ride-sharing platform.",
    objective: "Create brand awareness content highlighting unique value propositions.",
    execution: "Produced series of lifestyle-focused ads showcasing user experience and convenience.",
    result: "Content contributed to 30% increase in app downloads during campaign period.",
  },
  {
    title: "Corporate Content Suite",
    client: "Golden Creed Technologies",
    tags: ["Corporate", "B2B", "LinkedIn"],
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    summary: "Professional content package for B2B technology company.",
    objective: "Establish professional presence and attract enterprise clients.",
    execution: "Created case study videos, team introductions, and product demonstrations.",
    result: "LinkedIn engagement increased by 200% with several enterprise leads generated.",
  },
  {
    title: "Consulting Firm Rebrand",
    client: "Glide Strategy Solutions Limited",
    tags: ["Consulting", "Rebrand", "Website"],
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    summary: "Complete digital content overhaul for strategic consulting firm.",
    objective: "Modernize brand presence and communicate expertise effectively.",
    execution: "Redesigned website content, created service explainer videos, and developed content strategy.",
    result: "Website traffic increased 80% with improved conversion rates on service pages.",
  },
  {
    title: "Lifestyle Brand Content",
    client: "Continental Hustles",
    tags: ["Lifestyle", "Social", "Reels"],
    thumbnail: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    summary: "Ongoing social media content management and creation.",
    objective: "Build engaged community around lifestyle brand values.",
    execution: "Consistent posting schedule with authentic, relatable content tailored to target demographic.",
    result: "Community grew to 50K+ engaged followers with strong comment engagement.",
  },
]

export function ProjectsSection() {
  const [isVisible, setIsVisible] = React.useState(false)
  const [selectedProject, setSelectedProject] = React.useState<typeof projects[0] | null>(null)
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden bg-secondary border border-border hover:border-gold/40 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/20 hover:-translate-y-2 cursor-pointer ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.thumbnail || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center shadow-lg shadow-gold/30">
                    <Play className="w-6 h-6 text-black ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-gold/50" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-gold/50" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-gold/50" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-gold/50" />
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-gold text-sm font-medium mb-1">
                  {project.client}
                </p>
                <h3 className="font-bold text-primary-foreground group-hover:text-gold transition-colors mb-3">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
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
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-4xl my-8 bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl border border-gold/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 backdrop-blur flex items-center justify-center hover:bg-gold/20 transition-colors border border-white/20"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Video */}
            <div className="aspect-video bg-black">
              <iframe
                src={selectedProject.videoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div>
                  <p className="text-gold font-medium mb-1">
                    {selectedProject.client}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{selectedProject.title}</h3>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gold/30 hover:bg-gold/10 hover:border-gold bg-transparent text-white shrink-0"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Full Project
                </Button>
              </div>

              <p className="text-gray-300 mb-6">
                {selectedProject.summary}
              </p>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#252525] border border-white/10">
                  <h4 className="font-semibold text-gold mb-2">Objective</h4>
                  <p className="text-sm text-gray-300">
                    {selectedProject.objective}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#252525] border border-white/10">
                  <h4 className="font-semibold text-gold mb-2">Execution</h4>
                  <p className="text-sm text-gray-300">
                    {selectedProject.execution}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-gold/10 border border-gold/30 sm:col-span-2 md:col-span-1">
                  <h4 className="font-semibold text-gold mb-2">Result</h4>
                  <p className="text-sm text-white font-medium">
                    {selectedProject.result}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
