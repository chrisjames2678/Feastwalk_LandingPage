"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToRoutes = () => {
    const routesSection = document.getElementById('routes')
    if (routesSection) {
      routesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32 lg:pt-40">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/moody-close-up-food-photography-with-rich-colors--.jpg"
          alt="Indulgent food close-up"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-[family-name:var(--font-bebas)] text-7xl md:text-9xl lg:text-[12rem] leading-none tracking-tight text-foreground mb-6 text-balance">
          Not a snack crawl.
          <br />
          <span className="text-primary">A Feast.</span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto mb-12 leading-relaxed">
          Chef-curated food experiences on foot. Bold flavours, hidden kitchens, no tourist traps.
        </p>
        <Button
          onClick={scrollToRoutes}
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 font-bold uppercase tracking-wider"
        >
          Book Your FeastWalk
        </Button>
      </div>

    </section>
  )
}
