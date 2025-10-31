import { X, Check } from "lucide-react"

export function WhyFeastWalk() {
  const nos = ["No tourist traps", "No tiny samples", "No boring commentary"]

  const yeses = ["Full plates & pairings", "Chef's insider picks", "Seasonal surprises", "Behind-the-scenes access"]

  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl text-center text-foreground mb-16">
          Why <span className="text-primary">FeastWalk</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* What We're Not */}
          <div className="space-y-6">
            {nos.map((item, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-secondary/20 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/30 transition-colors">
                  <X className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-xl md:text-2xl text-foreground/90">{item}</p>
              </div>
            ))}
          </div>

          {/* What We Are */}
          <div className="space-y-6">
            {yeses.map((item, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-accent/20 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <p className="text-xl md:text-2xl text-foreground/90">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
