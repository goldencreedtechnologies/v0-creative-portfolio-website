export type PortfolioVideo = {
  title: string
  client: string
  embedUrl: string
}

export type PortfolioCategory = {
  slug: string
  title: string
  description: string
  image: string
  tags: string[]
  videos: PortfolioVideo[]
}

export const portfolioCategories: PortfolioCategory[] = [
  {
    slug: "youtube-content",
    title: "YouTube Content",
    description:
      "Long-form and short-form YouTube production — from podcasts and event promos to channel-ready shorts built for retention and growth.",
    image: "/images/youtube-contents.png",
    tags: ["Shorts", "Podcasts", "Event Promo"],
    videos: [
      {
        title: "Brand Campaign Series",
        client: "Anita Darlington",
        embedUrl: "https://www.youtube.com/embed/EqvQUXBhUqA",
      },
      {
        title: "Documentary Feature",
        client: "Continental Hustles",
        embedUrl: "https://www.youtube.com/embed/EIhrG2DSL2s",
      },
      {
        title: "Educational Series",
        client: "BTVC",
        embedUrl: "https://www.instagram.com/reel/DL4WVS8okr_/embed",
      },
      {
        title: "Corporate Feature",
        client: "Golden Creed Technologies",
        embedUrl: "https://www.instagram.com/reel/DFtYV0NN1kb/embed",
      },
      {
        title: "Tech Showcase",
        client: "Glide Strategy Solutions",
        embedUrl: "https://www.instagram.com/reel/DT0WOq0jPTP/embed",
      },
      {
        title: "Artist Spotlight",
        client: "David Operah",
        embedUrl: "https://www.instagram.com/reel/DTIrZa3DRls/embed",
      },
    ],
  },
  {
    slug: "short-form-content",
    title: "Short Form Content",
    description:
      "Scroll-stopping reels, TikToks, and music content engineered with strong hooks, clean pacing, and platform-native edits.",
    image: "/images/short-form-contents.png",
    tags: ["Reels", "TikTok", "Music Content"],
    videos: [
      {
        title: "Artist Promotion",
        client: "David Operah",
        embedUrl: "https://www.instagram.com/reel/DTIrZa3DRls/embed",
      },
      {
        title: "Social Reel",
        client: "Southwood Nigeria",
        embedUrl: "https://www.instagram.com/reel/DHA7QcHMd7U/embed",
      },
      {
        title: "Brand Identity Spot",
        client: "Ezyride",
        embedUrl: "https://www.instagram.com/reel/DP8uOAADM4X/embed",
      },
      {
        title: "Educational Short",
        client: "BTVC",
        embedUrl: "https://www.instagram.com/reel/DL4WVS8okr_/embed",
      },
      {
        title: "Corporate Reel",
        client: "Golden Creed Technologies",
        embedUrl: "https://www.instagram.com/reel/DFtYV0NN1kb/embed",
      },
      {
        title: "Content Reel",
        client: "Glide Strategy Solutions",
        embedUrl: "https://www.instagram.com/reel/DT0WOq0jPTP/embed",
      },
    ],
  },
  {
    slug: "concept-content",
    title: "Concept Content",
    description:
      "Strategy-led content built around brand growth — social campaigns, publicity pushes, and concept-driven storytelling that moves audiences.",
    image: "/images/concept-contents.png",
    tags: ["Social Media", "Content Strategy", "Publicity", "Brand Growth"],
    videos: [
      {
        title: "Social Media Management",
        client: "Southwood Nigeria",
        embedUrl: "https://www.instagram.com/reel/DHA7QcHMd7U/embed",
      },
      {
        title: "Tech & Content Strategy",
        client: "Glide Strategy Solutions",
        embedUrl: "https://www.instagram.com/reel/DT0WOq0jPTP/embed",
      },
      {
        title: "Corporate Content Suite",
        client: "Golden Creed Technologies",
        embedUrl: "https://www.instagram.com/reel/DFtYV0NN1kb/embed",
      },
      {
        title: "Brand Campaign",
        client: "Anita Darlington",
        embedUrl: "https://www.youtube.com/embed/EqvQUXBhUqA",
      },
      {
        title: "Brand Identity",
        client: "Ezyride",
        embedUrl: "https://www.instagram.com/reel/DP8uOAADM4X/embed",
      },
    ],
  },
  {
    slug: "event-highlights",
    title: "Event Highlights",
    description:
      "Cinematic event coverage — capturing key moments, live energy, and recap-ready highlights that bring the experience back to life.",
    image: "/images/event-highlights.png",
    tags: ["Moments", "Snapshots", "Live Coverage", "Recaps"],
    videos: [
      {
        title: "Documentary Coverage",
        client: "Continental Hustles",
        embedUrl: "https://www.youtube.com/embed/EIhrG2DSL2s",
      },
      {
        title: "Event Promo",
        client: "Anita Darlington",
        embedUrl: "https://www.youtube.com/embed/EqvQUXBhUqA",
      },
      {
        title: "Live Recap",
        client: "Southwood Nigeria",
        embedUrl: "https://www.instagram.com/reel/DHA7QcHMd7U/embed",
      },
      {
        title: "Highlight Reel",
        client: "Golden Creed Technologies",
        embedUrl: "https://www.instagram.com/reel/DFtYV0NN1kb/embed",
      },
      {
        title: "Moments",
        client: "Glide Strategy Solutions",
        embedUrl: "https://www.instagram.com/reel/DT0WOq0jPTP/embed",
      },
    ],
  },
]
