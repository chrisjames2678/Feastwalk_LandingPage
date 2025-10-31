import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SocialProof } from "@/components/social-proof"
import { Concept } from "@/components/concept"
import { FeaturedRoutes } from "@/components/featured-routes"
import { Experience } from "@/components/experience"
import { WhyFeastWalk } from "@/components/why-feastwalk"
import { Community } from "@/components/community"
import { FooterCTA } from "@/components/footer-cta"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <Hero />
        <SocialProof />
        <Concept />
        <FeaturedRoutes />
        <Experience />
        <WhyFeastWalk />
        <Community />
        <FooterCTA />
      </main>
    </>
  )
}
