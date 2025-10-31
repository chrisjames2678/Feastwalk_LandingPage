import { Header } from "@/components/header"
import { FooterCTA } from "@/components/footer-cta"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function SuccessPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24 md:pt-32 lg:pt-40">
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <CheckCircle className="w-24 h-24 text-accent mx-auto mb-6" />
                <h1 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl text-foreground mb-6">
                  Booking <span className="text-primary">Confirmed</span>
                </h1>
                <p className="text-xl text-foreground/80 leading-relaxed mb-8">
                  Your FeastWalk experience has been successfully reserved! Check your inbox for confirmation details and next steps.
                </p>
              </div>

              <div className="bg-card border-2 border-border rounded-sm p-8 mb-8">
                <h2 className="font-[family-name:var(--font-bebas)] text-2xl text-foreground mb-4">What's Next?</h2>
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1">1.</span>
                    <span className="text-foreground/80">Check your email for confirmation details</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1">2.</span>
                    <span className="text-foreground/80">We'll send final details 3-5 days before your experience</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1">3.</span>
                    <span className="text-foreground/80">Arrive 10 minutes early at the meeting point</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider px-8 py-4">
                    Back to Home
                  </Button>
                </Link>
                <Link href="/#routes">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold uppercase tracking-wider px-8 py-4">
                    View More Routes
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterCTA />
    </>
  )
}
