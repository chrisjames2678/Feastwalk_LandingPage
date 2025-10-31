export function SocialProof() {
  const press = [
    { name: "Eater", quote: "The supper club on foot" },
    { name: "TimeOut", quote: "Redefining food tours" },
    { name: "Food & Wine", quote: "Bold, unapologetic, delicious" },
  ]

  return (
    <section className="py-16 border-y border-border bg-card">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground uppercase tracking-widest text-sm mb-8">As Seen In</p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {press.map((item) => (
            <div key={item.name} className="text-center">
              <p className="font-[family-name:var(--font-bebas)] text-3xl md:text-4xl text-foreground mb-2">
                {item.name}
              </p>
              <p className="text-sm text-muted-foreground italic">"{item.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
