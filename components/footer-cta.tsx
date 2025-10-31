"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function FooterCTA() {
  const scrollToRoutes = () => {
    const routesSection = document.getElementById('routes')
    if (routesSection) {
      routesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <section className="py-32 md:py-40 bg-gradient-to-b from-background to-card relative overflow-hidden">
        {/* Accent Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-bebas)] text-6xl md:text-8xl lg:text-9xl text-foreground mb-8 leading-none text-balance">
              Come Hungry.
              <br />
              <span className="text-primary">Leave Obsessed.</span>
            </h2>
            <Button
              onClick={scrollToRoutes}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-xl px-12 py-8 font-bold uppercase tracking-wider shadow-lg shadow-accent/20"
            >
              Book Your FeastWalk
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Image
              src="/FEASTWALK_LIGHT.svg"
              alt="FeastWalk"
              width={600}
              height={120}
              className="h-20 md:h-24 lg:h-28 w-auto"
            />
            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="mailto:contact@feastwalk.com" className="hover:text-primary transition-colors">
                Contact
              </a>
              <a href="/faq" className="hover:text-primary transition-colors">
                FAQ
              </a>
            </div>
          </div>
          <p className="text-center text-muted-foreground text-sm mt-8">
            © 2025 FEASTWALK. A Different Kind of Food Tour.
          </p>
        </div>
      </footer>
    </>
  )
}
