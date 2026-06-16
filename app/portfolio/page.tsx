import type { Metadata } from "next"
import { PortfolioClient } from "@/components/portfolio/portfolio-client"
import { Footer } from "@/components/sections/footer"

export const metadata: Metadata = {
  title: "Portfolio | Charles Samuel — Creative Director & Video Editor",
  description:
    "Explore Charles Samuel's portfolio across YouTube content, short-form reels, concept campaigns, and event highlights. Watch the work directly.",
  openGraph: {
    title: "Portfolio | Charles Samuel",
    description:
      "Explore work across YouTube content, short-form reels, concept campaigns, and event highlights.",
    type: "website",
  },
}

export default function PortfolioPage() {
  return (
    <>
      <PortfolioClient />
      <Footer />
    </>
  )
}
