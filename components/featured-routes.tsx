import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export function FeaturedRoutes() {
  const routes = [
    {
      city: "London",
      name: "The Fire & Smoke Menu",
      season: "Early 2026",
      image: "/smoky-grilled-meat-with-fire-in-dark-moody-lightin.jpg",
      link: "/london-fire-smoke"
    },
    {
      city: "Barcelona",
      name: "The Mediterranean Feast",
      season: "Spring 2026",
      image: "/fresh-seafood-and-tapas-in-warm-golden-lighting.jpg",
      link: "/barcelona-mediterranean-feast"
    },
    {
      city: "Tokyo",
      name: "The Umami Journey",
      season: "Starting Late 2026",
      image: "/ramen-and-sushi-in-intimate-japanese-restaurant-se.jpg",
      link: "/tokyo-umami-journey"
    },
  ]

  return (
    <section id="routes" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl text-center text-foreground mb-16">
          Featured <span className="text-primary">Routes</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route) => (
            <Card
              key={route.city}
              className="bg-background border-2 border-border overflow-hidden group hover:border-primary transition-colors"
            >
              <Link href={route.link}>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={route.image || "/placeholder.svg"}
                    alt={`${route.city} - ${route.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 text-xs font-bold uppercase">
                    {route.season}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-primary text-sm font-bold uppercase tracking-wider mb-2">FeastWalk {route.city}</p>
                  <h3 className="font-[family-name:var(--font-bebas)] text-3xl text-foreground mb-4">{route.name}</h3>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    View Dates & Book
                  </Button>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
