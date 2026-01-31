import React from "react"
import type { Metadata, Viewport } from "next"
import { Sora, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Charles Samuel | Creative Director & Video Editor",
  description:
    "Helping creators and startups stay consistent online through monthly short-form content editing and social media support.",
  keywords: [
    "video editor",
    "creative director",
    "content creator",
    "social media manager",
    "short-form content",
  ],
  authors: [{ name: "Charles Samuel" }],
  openGraph: {
    title: "Charles Samuel | Creative Director & Video Editor",
    description:
      "Helping creators and startups stay consistent online through monthly short-form content editing and social media support.",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0F0F0F",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${sora.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
