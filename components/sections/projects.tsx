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
    thumbnail: "https://img.youtube.com/vi/EqvQUXBhUqA/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/EqvQUXBhUqA",
    summary: "A comprehensive brand campaign designed to increase social presence and engagement.",
    objective: "Create a series of engaging short-form videos that showcase brand personality and drive follower growth.",
    execution: "Developed a content calendar with 3 weekly posts, focusing on trending audio and authentic storytelling.",
    result: "Achieved 150% increase in engagement rate and 40% follower growth over 3 months.",
  },
  {
    title: "Artist Promotion Package",
    client: "David Operah",
    tags: ["Music", "Reels", "TikTok"],
    thumbnail: "https://lh3.googleusercontent.com/d/ErtLK2pa2Jl9ehxfk",
    videoUrl: "https://www.instagram.com/reel/DTIrZa3DRls/embed",
    summary: "Multi-platform content strategy for emerging artist promotion.",
    objective: "Build buzz around new music release through strategic content placement.",
    execution: "Created teaser clips, behind-the-scenes content, and lyric snippets optimized for each platform.",
    result: "Generated 500K+ combined views across platforms within release week.",
  },
  {
    title: "Social Media Management",
    client: "Southwood Nigeria",
    tags: ["Social Media", "Content Strategy", "Brand Growth"],
    thumbnail: "https://lh3.googleusercontent.com/d/V4f8XSA9wVkSZt0NZ",
    videoUrl: "https://www.instagram.com/reel/DHA7QcHMd7U/embed",
    summary: "End-to-end social media management driving consistent brand presence and audience engagement.",
    objective: "Build and maintain a strong social media presence with consistent content delivery.",
    execution: "Managed content calendar, created engaging posts, monitored analytics, and optimized posting schedule for maximum reach.",
    result: "Achieved 200% increase in engagement and established consistent brand voice across all platforms.",
  },
  {
    title: "Educational Content Series",
    client: "BTVC",
    tags: ["Education", "Long-form", "YouTube"],
    thumbnail: "https://lh3.googleusercontent.com/d/GasFEAjDjpow5NKxj",
    videoUrl: "https://www.instagram.com/reel/DL4WVS8okr_/embed",
    summary: "Ongoing educational content production and optimization.",
    objective: "Establish thought leadership through valuable educational content.",
    execution: "Developed consistent format, optimized thumbnails, and implemented SEO strategies.",
    result: "Channel grew from 2K to 15K subscribers in 6 months with improved retention rates.",
  },
  {
    title: "Brand Identity Videos",
    client: "Ezyride",
    tags: ["Branding", "Commercial", "Ads"],
    thumbnail: "https://www.instagram.com/p/DHkyr2iNAIV/media/?size=l",
    videoUrl: "https://www.instagram.com/reel/DP8uOAADM4X/embed",
    summary: "Commercial video production for ride-sharing platform.",
    objective: "Create brand awareness content highlighting unique value propositions.",
    execution: "Produced series of lifestyle-focused ads showcasing user experience and convenience.",
    result: "Content contributed to 30% increase in app downloads during campaign period.",
  },
  {
    title: "Corporate Content Suite",
    client: "Golden Creed Technologies",
    tags: ["Corporate", "B2B", "LinkedIn"],
    thumbnail: "https://www.instagram.com/p/CnUCh7MNmA2/media/?size=l",
    videoUrl: "https://www.instagram.com/reel/DFtYV0NN1kb/embed",
    summary: "Professional content package for B2B technology company.",
    objective: "Establish professional presence and attract enterprise clients.",
    execution: "Created case study videos, team introductions, and product demonstrations.",
    result: "LinkedIn engagement increased by 200% with several enterprise leads generated.",
  },
  {
    title: "Tech & Content Services",
    client: "Glide Strategy Solutions Limited",
    tags: ["Tech", "Content Creation", "Digital Strategy"],
    thumbnail: "https://www.instagram.com/p/Cf8akq8sOhe/media/?size=l",
    videoUrl: "https://www.instagram.com/reel/DT0WOq0jPTP/embed",
    summary: "Comprehensive tech and content services package for strategic solutions firm.",
    objective: "Deliver high-quality digital content that showcases technical expertise and drives client acquisition.",
    execution: "Developed branded content series, technical explainers, and social media assets optimized for B2B audience.",
    result: "Website traffic increased 80% with improved conversion rates and stronger brand positioning.",
  },
  {
    title: "Lifestyle Brand & Documentary",
    client: "Continental Hustles",
    tags: ["Lifestyle", "Documentary", "Storytelling"],
    thumbnail: "https://lh3.googleusercontent.com/d/lXiZPYXqegL0j2xoK",
    videoUrl: "https://www.youtube.com/embed/EIhrG2DSL2s",
    summary: "Ongoing social media content management, creation, and documentary production capturing authentic brand stories.",
    objective: "Build engaged community around lifestyle brand values through compelling visual storytelling and documentary content.",
    execution: "Produced documentary-style content, maintained consistent posting schedule with authentic, relatable content, and created long-form pieces capturing brand journey.",
    result: "Community grew to 50K+ engaged followers with strong comment engagement and documentary content driving deeper brand connection.",
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
              <div className="p-5 bg-[#1a1a1a]">
                <p className="text-gold text-sm font-medium mb-1">
                  {project.client}
                </p>
                <h3 className="font-bold text-[#F5F5F0] group-hover:text-gold transition-colors mb-3">
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
              <X className="w-5 h-5 text-[#F5F5F0]" />
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
                  <h3 className="text-xl md:text-2xl font-bold text-[#F5F5F0]">{selectedProject.title}</h3>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gold/30 hover:bg-gold/10 hover:border-gold bg-transparent text-[#F5F5F0] shrink-0"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Full Project
                </Button>
              </div>

              <p className="text-[#E8E8E3] mb-6">
                {selectedProject.summary}
              </p>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#252525] border border-white/10">
                  <h4 className="font-semibold text-gold mb-2">Objective</h4>
                  <p className="text-sm text-[#E8E8E3]">
                    {selectedProject.objective}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#252525] border border-white/10">
                  <h4 className="font-semibold text-gold mb-2">Execution</h4>
                  <p className="text-sm text-[#E8E8E3]">
                    {selectedProject.execution}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-gold/10 border border-gold/30 sm:col-span-2 md:col-span-1">
                  <h4 className="font-semibold text-gold mb-2">Result</h4>
                  <p className="text-sm text-[#F5F5F0] font-medium">
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
