import { Button } from "@/components/ui/button"

export function Community() {
  const benefits = [
    "Early access to new routes",
    "Exclusive themed experiences",
    "Private chef collaborations",
    "Members-only events",
  ]

  return (
    <section id="club" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 35px, currentColor 35px, currentColor 36px)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl text-foreground mb-6">
            Join <span className="text-primary">FeastWalk Club</span>
          </h2>
          <p className="text-xl text-foreground/80 mb-12 leading-relaxed">For those who eat like they mean it</p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card border-2 border-border p-6 rounded-sm hover:border-primary transition-colors"
              >
                <p className="text-lg text-foreground">{benefit}</p>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 font-bold uppercase tracking-wider"
          >
            Become a Member
          </Button>
        </div>
      </div>
    </section>
  )
}
