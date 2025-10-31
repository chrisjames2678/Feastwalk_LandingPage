export function Experience() {
  const steps = [
    {
      title: "Meet Your Host",
      description: "Your chef-guide welcomes you with a signature cocktail",
      image: "/chef-pouring-cocktail-in-moody-bar-lighting.jpg",
    },
    {
      title: "First Stop — Starter",
      description: "Bold flavours to wake up your palate",
      image: "/appetizer-plate-with-vibrant-colors-in-intimate-re.jpg",
    },
    {
      title: "Second Stop — Main",
      description: "The heart of the feast. Full portions, zero compromises",
      image: "/main-course-dish-with-rich-sauce-in-dramatic-light.jpg",
    },
    {
      title: "Exclusive Access",
      description: "Behind-the-scenes at a hidden kitchen",
      image: "/chef-cooking-in-professional-kitchen-with-flames.jpg",
    },
    {
      title: "Dessert + Nightcap",
      description: "Sweet finish with a final surprise",
      image: "/decadent-dessert-with-wine-glass-in-dark-moody-set.jpg",
    },
  ]

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl text-center text-foreground mb-4">
          The <span className="text-primary">Experience</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Like a gig setlist, but for your taste buds
        </p>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="flex-1">
                <div className="relative h-80 overflow-hidden rounded-sm">
                  <img src={step.image || "/placeholder.svg"} alt={step.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-sm flex items-center justify-center">
                    <span className="font-[family-name:var(--font-bebas)] text-3xl text-primary-foreground">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-bebas)] text-4xl md:text-5xl text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xl text-foreground/80 leading-relaxed pl-16">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
