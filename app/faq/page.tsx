import { Header } from "@/components/header"
import { FooterCTA } from "@/components/footer-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ - FeastWalk | Frequently Asked Questions",
  description: "Get answers to common questions about FeastWalk food tours. Learn about our chef-curated experiences, booking process, dietary requirements, and more.",
  keywords: "FeastWalk FAQ, food tour questions, chef-curated dining, food experience booking, dietary requirements, tour details",
}

export default function FAQPage() {
  const faqs = [
    {
      question: "What makes FeastWalk different from regular food tours?",
      answer: "FeastWalk offers chef-curated experiences with full portions, not tiny samples. We provide behind-the-scenes access to hidden kitchens, seasonal menus, and proper pairings. It's a walking tasting menu, not a tourist trap."
    },
    {
      question: "How long do FeastWalk experiences last?",
      answer: "Our experiences typically last 3-4 hours, allowing time to fully enjoy each course and the stories behind them. We believe in quality over quantity, ensuring you leave satisfied, not rushed."
    },
    {
      question: "What dietary requirements can you accommodate?",
      answer: "We can accommodate most dietary requirements including vegetarian, vegan, gluten-free, and allergies. Please specify your needs when booking, and our chefs will craft alternative dishes that maintain the experience's integrity."
    },
    {
      question: "How many people are in each group?",
      answer: "We keep groups intimate with a maximum of 8-10 people per experience. This ensures personalized attention from your chef-guide and allows for meaningful interactions with restaurant staff."
    },
    {
      question: "What should I wear to a FeastWalk experience?",
      answer: "Wear comfortable walking shoes as you'll be on your feet for 3-4 hours. Dress smart-casual - you'll be dining in quality establishments. Avoid high heels and bring layers as we move between venues."
    },
    {
      question: "Are drinks included in the experience?",
      answer: "Yes, each course includes carefully selected pairings - cocktails, wine, or craft beverages that complement the food. Non-alcoholic options are always available and equally thoughtfully chosen."
    },
    {
      question: "What happens if it rains?",
      answer: "FeastWalk experiences run rain or shine. We have indoor venues planned and provide umbrellas if needed. The food and experience remain exceptional regardless of weather."
    },
    {
      question: "Can I book a private FeastWalk experience?",
      answer: "Yes, we offer private experiences for groups of 6-12 people. These can be customized for special occasions, corporate events, or simply a more intimate dining adventure."
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking 2-3 weeks in advance, especially for weekend experiences. Popular routes and seasonal menus book up quickly. Last-minute bookings may be available but with limited options."
    },
    {
      question: "What's your cancellation policy?",
      answer: "Full refunds available up to 48 hours before your experience. Within 48 hours, we offer rescheduling or 50% refund due to restaurant commitments. No-shows are non-refundable."
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24 md:pt-32 lg:pt-40">
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl text-center text-foreground mb-8">
                Frequently Asked <span className="text-primary">Questions</span>
              </h1>
              <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
                Everything you need to know about FeastWalk experiences
              </p>

              <div className="space-y-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-card border-2 border-border p-8 rounded-sm hover:border-primary transition-colors">
                    <h2 className="font-[family-name:var(--font-bebas)] text-2xl md:text-3xl text-foreground mb-4">
                      {faq.question}
                    </h2>
                    <p className="text-foreground/90 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <p className="text-muted-foreground mb-6">
                  Still have questions? We're here to help.
                </p>
                <a 
                  href="mailto:contact@feastwalk.com"
                  className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 font-bold uppercase tracking-wider transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterCTA />
    </>
  )
}
