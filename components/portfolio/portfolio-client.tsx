"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowLeft, Home, X, Play, LayoutGrid } from "lucide-react"
import { Button } from "@/components/ui/button"
import { portfolioCategories, type PortfolioCategory } from "@/lib/portfolio-data"

export function PortfolioClient() {
  const [activeCategory, setActiveCategory] =
    React.useState<PortfolioCategory | null>(null)

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (activeCategory) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [activeCategory])

  return (
    <main className="min-h-screen bg-background">
      {/* Top navigation bar */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-gold/10">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight hover:text-gold transition-colors"
          >
            <span className="text-gold">C</span>harles
            <span className="text-gold">.</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-gold/30 hover:bg-gold/10 hover:border-gold rounded-full bg-transparent"
            >
              <Link href="/">
                <Home className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Home</span>
              </Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-gold hover:bg-gold-dark text-black font-medium rounded-full"
            >
              <Link
                href="https://wa.me/2349018896320?text=Hi%20Charles,%20I%20saw%20your%20portfolio%20and%20I%20want%20to%20discuss%20a%20project"
                target="_blank"
              >
                Let&apos;s Talk
              </Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Intro section */}
      <section className="relative overflow-hidden border-b border-gold/10">
        <div className="absolute inset-0 bg-linear-to-br from-gold/5 via-transparent to-gold/5" />
        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <span className="text-gold font-medium tracking-wider uppercase text-sm">
              The Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 text-balance">
              Content That <span className="text-gold">Connects</span> &amp;
              Converts
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed text-pretty">
              A curated collection of work across YouTube, short-form, concept
              campaigns, and live events. Explore each category to watch the
              videos directly — every piece is crafted to help creators and
              brands stay consistent, grow their audience, and stand out.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {portfolioCategories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-sm font-medium text-gold hover:bg-gold/20 transition-colors"
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category cards */}
      <section className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {portfolioCategories.map((category) => (
            <button
              key={category.slug}
              onClick={() => setActiveCategory(category)}
              className="group relative text-left rounded-2xl overflow-hidden bg-secondary border border-border hover:border-gold/40 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/20 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              {/* Image */}
              <div className="relative aspect-16/10 overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/80 transition-colors" />

                {/* Play badge */}
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold text-black text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-3 h-3" fill="currentColor" />
                  {category.videos.length} Videos
                </div>

                {/* Title + tags overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#F5F5F0] group-hover:text-gold transition-colors">
                    {category.title}
                  </h2>
                  <p className="text-sm text-[#E8E8E3] mt-2 line-clamp-2 max-w-md">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {category.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-white/10 backdrop-blur text-[#F5F5F0] border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Category gallery modal */}
      {activeCategory && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-y-auto"
          onClick={() => setActiveCategory(null)}
        >
          <div
            className="min-h-screen container mx-auto px-4 sm:px-6 py-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal nav */}
            <div className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-3 py-4 mb-6 bg-black/80 backdrop-blur-sm rounded-xl px-4 -mx-1">
              <div className="flex items-center gap-2 flex-wrap">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveCategory(null)}
                  className="border-gold/30 hover:bg-gold/10 hover:border-gold rounded-full bg-transparent text-[#F5F5F0]"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Go Back
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-gold/30 hover:bg-gold/10 hover:border-gold rounded-full bg-transparent text-[#F5F5F0]"
                >
                  <Link href="/portfolio" onClick={() => setActiveCategory(null)}>
                    <LayoutGrid className="w-4 h-4 mr-2" />
                    Portfolio
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-gold/30 hover:bg-gold/10 hover:border-gold rounded-full bg-transparent text-[#F5F5F0]"
                >
                  <Link href="/">
                    <Home className="w-4 h-4 mr-2" />
                    Home
                  </Link>
                </Button>
              </div>
              <button
                onClick={() => setActiveCategory(null)}
                className="w-10 h-10 rounded-full bg-black/80 flex items-center justify-center hover:bg-gold/20 transition-colors border border-white/20"
                aria-label="Close gallery"
              >
                <X className="w-5 h-5 text-[#F5F5F0]" />
              </button>
            </div>

            {/* Category header */}
            <div className="max-w-3xl mb-8">
              <span className="text-gold font-medium tracking-wider uppercase text-sm">
                Category Gallery
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 text-[#F5F5F0]">
                {activeCategory.title}
              </h2>
              <p className="text-[#E8E8E3] mt-3 leading-relaxed">
                {activeCategory.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {activeCategory.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-full bg-gold/10 text-gold border border-gold/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Video grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
              {activeCategory.videos.map((video, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden bg-[#1a1a1a] border border-gold/20"
                >
                  <div className="aspect-video bg-black">
                    <iframe
                      src={video.embedUrl}
                      title={`${video.client} - ${video.title}`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-gold text-sm font-medium">
                      {video.client}
                    </p>
                    <h3 className="font-semibold text-[#F5F5F0]">
                      {video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
