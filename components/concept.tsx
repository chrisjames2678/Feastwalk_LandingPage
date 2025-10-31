export function Concept() {
  const points = [
    "Chef-designed routes",
    "Behind-the-curtain access",
    "Seasonal menus & pairings",
    "Proper portions, not samples",
  ]

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl lg:text-8xl leading-tight text-foreground text-balance">
              This isn't a food tour.
              <br />
              <span className="text-primary">It's a walking tasting menu.</span>
            </h2>
          </div>
          <div className="space-y-6">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
