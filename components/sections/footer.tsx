"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/charles-samuel",
    icon: "/images/linkedin-icon.svg",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/goldencreed_",
    icon: "/images/instagram-icon.svg",
  },
  {
    name: "Email",
    href: "mailto:charlesgold59@gmail.com",
    icon: "/images/email-icon.svg",
  },
]

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  const [year, setYear] = React.useState(2026)

  React.useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="relative bg-primary text-primary-foreground">
      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              <span className="text-gold">C</span>harles
              <span className="text-gold">.</span>
            </Link>
            <p className="text-primary-foreground/70 max-w-xs">
              Creative Director • Video Editor • Content Systems Builder
            </p>
            <p className="text-sm text-muted-foreground">
              Helping creators and startups stay consistent online.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-gold">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:charlesgold59@gmail.com"
                className="block text-primary-foreground/70 hover:text-gold transition-colors"
              >
                charlesgold59@gmail.com
              </a>
              <div className="flex gap-4 pt-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-gold/20 transition-colors group"
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={20}
                      height={20}
                      className="opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {year} Charles Samuel. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Crafted with <Heart className="w-4 h-4 text-gold fill-gold" /> and attention to detail
          </p>
        </div>
      </div>
    </footer>
  )
}
