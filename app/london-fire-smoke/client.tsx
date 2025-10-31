"use client"

import { Header } from "@/components/header"
import { FooterCTA } from "@/components/footer-cta"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogClose, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function LondonFireSmokeClient() {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("6:30 PM")
  const [guestCount, setGuestCount] = useState(1)
  const [showPilotModal, setShowPilotModal] = useState(false)
  const [modalSource, setModalSource] = useState<"homepage" | "pilot_link" | "debug">("homepage")

  const departures = [
    {
      date: "2026-01-09",
      label: "Fri 9 Jan",
      time: "6:30 PM",
      available: true,
      stripeLink: "https://buy.stripe.com/dRm5kEgnr7zr52g169bII00"
    },
    {
      date: "2026-01-10", 
      label: "Sat 10 Jan",
      time: "6:30 PM",
      available: true,
      stripeLink: "https://buy.stripe.com/dRm5kEgnr7zr52g169bII00"
    },
    {
      date: "2026-01-23",
      label: "Fri 23 Jan",
      time: "6:30 PM", 
      available: true,
      stripeLink: "https://buy.stripe.com/dRm5kEgnr7zr52g169bII00"
    },
    {
      date: "2026-01-24",
      label: "Sat 24 Jan",
      time: "6:30 PM",
      available: false,
      stripeLink: ""
    }
  ]

  const galleryImages = [
    "/smoky-grilled-meat-with-fire-in-dark-moody-lightin.jpg",
    "/chef-cooking-in-professional-kitchen-with-flames.jpg",
    "/appetizer-plate-with-vibrant-colors-in-intimate-re.jpg",
    "/main-course-dish-with-rich-sauce-in-dramatic-light.jpg",
    "/decadent-dessert-with-wine-glass-in-dark-moody-set.jpg"
  ]

  const handleBooking = () => {
    const selectedDeparture = departures.find(d => d.date === selectedDate)
    if (selectedDeparture && selectedDeparture.available) {
      const utmParams = `?utm_source=ga&utm_campaign=fire_smoke&utm_content=${selectedDate}`
      window.open(selectedDeparture.stripeLink + utmParams, '_blank')
    }
  }

  const scrollToBooking = () => {
    const bookingCard = document.querySelector('.sticky')
    if (bookingCard) {
      bookingCard.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const scrollToDepartures = () => {
    const departuresSection = document.getElementById('departures')
    if (departuresSection) {
      departuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const trackAnalytics = (event: string, params: Record<string, string>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event, params)
    }
  }

  // Modal trigger logic
  useEffect(() => {
    if (typeof window === 'undefined') return

    const urlParams = new URLSearchParams(window.location.search)
    const debugModal = urlParams.get('debugModal') === '1'
    const pilotIntro = urlParams.get('pilot') === 'intro'
    
    // Check if modal should be shown
    const shouldShowModal = (): { show: boolean; source: "homepage" | "pilot_link" | "debug" } => {
      // Debug mode always shows
      if (debugModal) {
        return { show: true, source: 'debug' }
      }

      // Show if pilot=intro query param
      if (pilotIntro) {
        return { show: true, source: 'pilot_link' }
      }

      // Show modal on every visit (removed session/localStorage checks)
      // Check if coming from homepage
      const referrer = document.referrer
      const isFromHomepage = referrer && (
        referrer.includes(window.location.origin) || 
        referrer.includes('/#routes') ||
        referrer === window.location.origin + '/' ||
        referrer === window.location.origin
      )
      
      if (isFromHomepage) {
        return { show: true, source: 'homepage' }
      }

      // If no referrer (direct visit), also show modal
      if (!referrer) {
        return { show: true, source: 'homepage' }
      }

      // Default: show modal
      return { show: true, source: 'homepage' }
    }

    const { show, source } = shouldShowModal()
    console.log('🔍 Modal check:', { 
      show, 
      source, 
      debugModal, 
      pilotIntro, 
      sessionSeen: sessionStorage.getItem('fw_pilot_seen'),
      referrer: document.referrer,
      url: window.location.href
    })
    
    if (show) {
      setModalSource(source)
      setShowPilotModal(true)
      trackAnalytics('pilot_modal_view', {
        route: 'london_fire_smoke',
        source: source
      })
      console.log('✅ Pilot modal triggered:', { show, source })
      // Double check after state update
      setTimeout(() => {
        console.log('📊 Modal state after trigger:', { showPilotModal: true, modalSource: source })
      }, 100)
    } else {
      console.log('❌ Pilot modal not shown:', { 
        debugModal, 
        pilotIntro, 
        sessionSeen: sessionStorage.getItem('fw_pilot_seen'),
        referrer: document.referrer 
      })
    }

    // Expose for dev
    ;(window as any).showPilotModal = () => {
      setModalSource('debug')
      setShowPilotModal(true)
    }
  }, [])

  const handleContinueToDates = () => {
    setShowPilotModal(false)
    sessionStorage.setItem('fw_pilot_seen', 'true')
    trackAnalytics('pilot_modal_cta', {
      route: 'london_fire_smoke',
      source: modalSource,
      cta: 'continue'
    })
    setTimeout(() => {
      scrollToDepartures()
    }, 100)
  }

  const handleAskQuestion = () => {
    setShowPilotModal(false)
    sessionStorage.setItem('fw_pilot_seen', 'true')
    trackAnalytics('pilot_modal_cta', {
      route: 'london_fire_smoke',
      source: modalSource,
      cta: 'chat'
    })
    // Open Tidio chat if available
    if (typeof window !== 'undefined' && (window as any).tidioChatApi) {
      (window as any).tidioChatApi.open()
    }
  }

  const handleCloseModal = () => {
    setShowPilotModal(false)
    sessionStorage.setItem('fw_pilot_seen', 'true')
    localStorage.setItem('fw_pilot_cooldown', new Date().toISOString())
    trackAnalytics('pilot_modal_close', {
      route: 'london_fire_smoke',
      source: modalSource,
      cta: 'close'
    })
  }

  // Debug: Log modal state
  useEffect(() => {
    console.log('🎭 Modal render state:', { showPilotModal, modalSource })
  }, [showPilotModal, modalSource])

  return (
    <>
      <Header />
      {/* Pilot Intro Modal */}
      <Dialog open={showPilotModal} onOpenChange={(open) => {
        if (!open) {
          handleCloseModal()
        }
      }}>
        <DialogContent 
          className="!fixed !inset-0 !max-w-none !w-full !h-full !translate-x-0 !translate-y-0 !bg-background !border-0 !p-0 !rounded-none !z-[100]" 
          showCloseButton={false}
        >
          {/* Full-screen content wrapper with gradient background */}
          <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-background via-background to-card p-4 md:p-8 lg:p-12 overflow-auto z-[101]">
            <div className="relative w-full max-w-4xl mx-auto px-4 pt-20 md:pt-24 lg:pt-28 pb-8">
              {/* Close Button */}
              <DialogClose asChild>
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 md:top-6 md:right-6 text-foreground/60 hover:text-foreground transition-colors z-10"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6 md:w-8 md:h-8" />
                </button>
              </DialogClose>

              <div className="text-center space-y-6 md:space-y-8 lg:space-y-10">
                {/* Headline */}
                <DialogTitle className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-tight px-4">
                  Departures: <span className="text-primary">Be First to Feast</span>
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Information about pilot departures for FeastWalk
                </DialogDescription>

                {/* Core Message */}
                <div className="space-y-6 text-left max-w-3xl mx-auto px-4">
                  <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed">
                    We're building FeastWalk — a supper club on foot. We're not 100% ready for the general public and we're still fine-tuning our offering. Because of this, we're only offering 'pilot' experiences to excited foodies that might be willing to come along, enjoy a great evening and give us some honest feedback.
                  </p>

                  <div className="space-y-4">
                    <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed">
                      If you'd like to join us, please:
                    </p>
                    <ul className="space-y-3 text-sm sm:text-base md:text-lg text-foreground/80">
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1 flex-shrink-0">•</span>
                        <span>Choose a departure from the list - this is just a suggested date, the exact dates will be confirmed in 2026.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1 flex-shrink-0">•</span>
                        <span>Secure your place with a £1 deposit - this is just to ensure those attending are serious about taking part.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1 flex-shrink-0">•</span>
                        <span>No extra payment — full experience included.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1 flex-shrink-0">•</span>
                        <span>We'll then be in touch to confirm details.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4 md:pt-6 px-4">
                  <Button
                    onClick={handleContinueToDates}
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold uppercase tracking-wider px-6 md:px-8 py-4 md:py-6 text-base md:text-lg w-full sm:w-auto"
                  >
                    Continue to Dates
                  </Button>
                  <Button
                    onClick={handleAskQuestion}
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold uppercase tracking-wider px-6 md:px-8 py-4 md:py-6 text-base md:text-lg w-full sm:w-auto"
                  >
                    Ask a Question
                  </Button>
                </div>

                {/* No thanks link */}
                <button
                  onClick={handleCloseModal}
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors pb-4"
                >
                  No thanks
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <main className="min-h-screen bg-background">
        {/* Header Block */}
        <section className="py-8 bg-card pt-24 md:pt-32 lg:pt-40">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <h1 className="font-[family-name:var(--font-bebas)] text-4xl md:text-6xl text-foreground mb-4">
                    FeastWalk: London — The Fire & Smoke Menu
                  </h1>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-accent/20 text-white">Likely to Sell Out</Badge>
                    <Badge variant="secondary" className="bg-primary/20 text-white">Exclusive</Badge>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-400">★★★★☆</span>
                      <span className="font-semibold">4.9</span>
                      <span className="text-muted-foreground">(12)</span>
                    </div>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-muted-foreground italic">"can't wait for this to launch for real - loved the pilot experience I went on!"</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-primary text-primary">Full Plates</Badge>
                    <Badge variant="outline" className="border-primary text-primary">Cocktails</Badge>
                    <Badge variant="outline" className="border-primary text-primary">No Tourist Traps</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Media Gallery */}
                <section>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="col-span-3">
                      <img
                        src={galleryImages[0]}
                        alt="Fire & Smoke Menu - Main image"
                        className="w-full h-80 object-cover rounded-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      {galleryImages.slice(1, 5).map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Gallery image ${index + 2}`}
                          className="w-full h-18 object-cover rounded-sm cursor-pointer hover:opacity-80"
                        />
                      ))}
                    </div>
                  </div>
                </section>

                {/* At-a-Glance */}
                <section>
                  <h2 className="font-[family-name:var(--font-bebas)] text-3xl text-foreground mb-6">At-a-Glance</h2>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="text-center p-4 bg-card rounded-sm border border-border">
                      <div className="text-2xl mb-2">⏱️</div>
                      <div className="font-semibold">3.5 hours</div>
                      <div className="text-sm text-muted-foreground">Duration</div>
                    </div>
                    <div className="text-center p-4 bg-card rounded-sm border border-border">
                      <div className="text-2xl mb-2">👥</div>
                      <div className="font-semibold">Max 8</div>
                      <div className="text-sm text-muted-foreground">Group Size</div>
                    </div>
                    <div className="text-center p-4 bg-card rounded-sm border border-border">
                      <div className="text-2xl mb-2">🍽️</div>
                      <div className="font-semibold">5 courses</div>
                      <div className="text-sm text-muted-foreground">+ pairings</div>
                    </div>
                    <div className="text-center p-4 bg-card rounded-sm border border-border">
                      <div className="text-2xl mb-2">👨‍🍳</div>
                      <div className="font-semibold">Chef-guide</div>
                      <div className="text-sm text-muted-foreground">Host</div>
                    </div>
                    <div className="text-center p-4 bg-card rounded-sm border border-border">
                      <div className="text-2xl mb-2">🔍</div>
                      <div className="font-semibold">Kitchen</div>
                      <div className="text-sm text-muted-foreground">Access</div>
                    </div>
                  </div>
                </section>

                {/* Highlights */}
                <section>
                  <h2 className="font-[family-name:var(--font-bebas)] text-3xl text-foreground mb-6">Highlights</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Chef-designed route focused on fire, smoke & spice</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Proper courses, not tiny samples</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Seasonal surprises at every stop</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Exclusive access to a working kitchen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Cocktail on arrival + curated pairings</span>
                    </li>
                  </ul>
                </section>

                {/* About */}
                <section>
                  <h2 className="font-[family-name:var(--font-bebas)] text-3xl text-foreground mb-6">About</h2>
                  <div className="text-lg text-foreground/80 leading-relaxed space-y-4">
                    <p>
                      A progressive dining experience through hidden kitchens and cult dining rooms where fire leads every plate.
                    </p>
                    <p>
                      You'll begin with a smoky aperitif and an opening bite designed to shock your palate awake — char, crunch, a little heat. From there, expect slow-fire mains, glowing ember finishes, and a kitchen-side moment with chefs working live service.
                    </p>
                    <p>
                      Plates are generous, seasonality drives the menu, and each stop reveals a different expression of flame — grilled, smoked, coal-roasted, flame-torched, ember-finished.
                    </p>
                    <p>
                      We don't publish venues — they're chosen for craft, not clout — and they change with seasons, chefs, and ingredients.
                    </p>
                  </div>
                </section>

                {/* Itinerary */}
                <section>
                  <h2 className="font-[family-name:var(--font-bebas)] text-3xl text-foreground mb-6">Itinerary</h2>
                  <Accordion type="single" collapsible className="space-y-2">
                    <AccordionItem value="item-1" className="bg-card border border-border rounded-sm">
                      <AccordionTrigger className="px-4 py-3 text-left">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🍸</span>
                          <div>
                            <div className="font-semibold">Meet Your Host — Cocktail</div>
                            <div className="text-sm text-muted-foreground">Your chef-guide welcomes you with a smoky signature serve and sets the tone for the night.</div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-3 text-foreground/80">
                        Your chef-guide welcomes you with a smoky signature serve and sets the tone for the night.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="bg-card border border-border rounded-sm">
                      <AccordionTrigger className="px-4 py-3 text-left">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🔥</span>
                          <div>
                            <div className="font-semibold">Stop 1 — Starter: Ignite Your Palate</div>
                            <div className="text-sm text-muted-foreground">A bold first plate inspired by London's street grills: crunch, char, and heat.</div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-3 text-foreground/80">
                        A bold first plate inspired by London's street grills: crunch, char, and heat.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="bg-card border border-border rounded-sm">
                      <AccordionTrigger className="px-4 py-3 text-left">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🥩</span>
                          <div>
                            <div className="font-semibold">Stop 2 — Main: The Heart of the Feast</div>
                            <div className="text-sm text-muted-foreground">Full portion, zero compromises. Seasonal, slow-cooked, or charcoal-kissed.</div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-3 text-foreground/80">
                        Full portion, zero compromises. Seasonal, slow-cooked, or charcoal-kissed.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="bg-card border border-border rounded-sm">
                      <AccordionTrigger className="px-4 py-3 text-left">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">👨‍🍳</span>
                          <div>
                            <div className="font-semibold">Exclusive Access — Behind the Pass</div>
                            <div className="text-sm text-muted-foreground">Step into a working kitchen; taste something straight from the pass.</div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-3 text-foreground/80">
                        Step into a working kitchen; taste something straight from the pass.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="bg-card border border-border rounded-sm">
                      <AccordionTrigger className="px-4 py-3 text-left">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🥃</span>
                          <div>
                            <div className="font-semibold">Dessert & Nightcap — The Ember Fade</div>
                            <div className="text-sm text-muted-foreground">A rich, smoky finish paired with something strong or a crafted NA option.</div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-3 text-foreground/80">
                        A rich, smoky finish paired with something strong or a crafted NA option.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </section>

                {/* What's Included / Not Included */}
                <section>
                  <h2 className="font-[family-name:var(--font-bebas)] text-3xl text-foreground mb-6">What's Included</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Included</h3>
                      <ul className="space-y-2 text-foreground/80">
                        <li>• Welcome cocktail</li>
                        <li>• 4 venues / 5 courses (full portions)</li>
                        <li>• Curated pairings (alcoholic or NA)</li>
                        <li>• Chef-led storytelling & kitchen access</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Not Included</h3>
                      <ul className="space-y-2 text-foreground/80">
                        <li>• Transport to meeting point</li>
                        <li>• Additional drinks beyond pairings</li>
                        <li>• Gratuities (optional)</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Meeting & Pickup */}
                <section>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="meeting" className="bg-card border border-border rounded-sm">
                      <AccordionTrigger className="px-4 py-3">
                        <span className="font-semibold">Meeting & Pickup</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-3">
                        <div className="space-y-3 text-foreground/80">
                          <div><strong>Meeting point:</strong> Central London (exact location after booking)</div>
                          <div><strong>Start time:</strong> 6:30 PM (arrive 10 mins early)</div>
                          <div><strong>End point:</strong> Within 10–15 mins' walk of start</div>
                          <div><strong>Accessibility:</strong> Walking 1–1.5 miles; stairs possible in venues</div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </section>

                {/* Dietary & Policies */}
                <section>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="policies" className="bg-card border border-border rounded-sm">
                      <AccordionTrigger className="px-4 py-3">
                        <span className="font-semibold">Dietary & Policies</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-3">
                        <div className="space-y-3 text-foreground/80">
                          <div><strong>Dietary:</strong> Substitutions available where possible (vegan/veg/allergies) — tell us after booking</div>
                          <div><strong>Age:</strong> 18+ for alcoholic pairings (NA alternatives available)</div>
                          <div><strong>Cancellation:</strong> Full refund ≤72h; within 72h deposit is transferable when available</div>
                          <div><strong>Weather:</strong> Runs rain or shine (we're mostly indoors)</div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </section>

                {/* Reviews */}
                <section>
                  <h2 className="font-[family-name:var(--font-bebas)] text-3xl text-foreground mb-6">Reviews</h2>
                  <div className="bg-card border border-border rounded-sm p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-400 text-2xl">★★★★☆</span>
                        <span className="font-semibold text-xl">4.9</span>
                      </div>
                      <div className="text-muted-foreground">Based on 12 reviews</div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">5★</span>
                        <div className="w-32 bg-muted rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{width: '80%'}}></div>
                        </div>
                        <span className="text-sm text-muted-foreground">80%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">4★</span>
                        <div className="w-32 bg-muted rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{width: '18%'}}></div>
                        </div>
                        <span className="text-sm text-muted-foreground">18%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">3★</span>
                        <div className="w-32 bg-muted rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{width: '2%'}}></div>
                        </div>
                        <span className="text-sm text-muted-foreground">2%</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <blockquote className="text-foreground/80 italic">"Dinner disguised as a tour."</blockquote>
                      <blockquote className="text-foreground/80 italic">"Kitchen access was unreal."</blockquote>
                      <blockquote className="text-foreground/80 italic">"Full plates. Worth it."</blockquote>
                    </div>
                  </div>
                </section>

                {/* FAQ */}
                <section>
                  <h2 className="font-[family-name:var(--font-bebas)] text-3xl text-foreground mb-6">FAQ</h2>
                  <Accordion type="single" collapsible className="space-y-2">
                    <AccordionItem value="faq-1" className="bg-card border border-border rounded-sm">
                      <AccordionTrigger className="px-4 py-3">What's included?</AccordionTrigger>
                      <AccordionContent className="px-4 pb-3 text-foreground/80">
                        Everything. Full portions at each stop, carefully selected pairings (alcoholic and non-alcoholic), behind-the-scenes kitchen access, and your chef-guide throughout the evening.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="faq-2" className="bg-card border border-border rounded-sm">
                      <AccordionTrigger className="px-4 py-3">Can you handle allergies?</AccordionTrigger>
                      <AccordionContent className="px-4 pb-3 text-foreground/80">
                        Yes, we can accommodate most dietary requirements including vegetarian, vegan, gluten-free, and allergies. Please specify when booking.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="faq-3" className="bg-card border border-border rounded-sm">
                      <AccordionTrigger className="px-4 py-3">Can I cancel or reschedule?</AccordionTrigger>
                      <AccordionContent className="px-4 pb-3 text-foreground/80">
                        Full refunds available up to 72 hours before your experience. Within 72 hours, we offer rescheduling or 50% refund due to restaurant commitments.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="faq-4" className="bg-card border border-border rounded-sm">
                      <AccordionTrigger className="px-4 py-3">How many people per group?</AccordionTrigger>
                      <AccordionContent className="px-4 pb-3 text-foreground/80">
                        Maximum 8 guests per experience to ensure personalized attention and intimate kitchen access.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="faq-5" className="bg-card border border-border rounded-sm">
                      <AccordionTrigger className="px-4 py-3">Is this a "tour"?</AccordionTrigger>
                      <AccordionContent className="px-4 pb-3 text-foreground/80">
                        It's a supper club on foot. Think full plates, chef-curated pairings, and behind-the-scenes access — not tiny samples and tourist commentary.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </section>
              </div>

              {/* Right Column - Sticky Booking Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <Card className="p-6 border-2 border-border">
                    <div className="space-y-4">
                      <div>
                        <div className="text-2xl font-bold text-foreground">From £1 deposit pp</div>
                        <div className="text-sm text-muted-foreground">Full price £129pp</div>
                      </div>

                      <div className="flex gap-2 text-xs text-muted-foreground">
                        <span>✓ Free cancellation ≤72h</span>
                        <span>✓ Secure checkout</span>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium mb-2">Select Date</label>
                          <select 
                            value={selectedDate} 
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="w-full p-2 border border-border rounded-sm bg-background"
                          >
                            <option value="">Choose a date</option>
                            {departures.map((departure) => (
                              <option key={departure.date} value={departure.date} disabled={!departure.available}>
                                {departure.label} {departure.time} {!departure.available ? '(Sold Out)' : ''}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Time</label>
                          <select 
                            value={selectedTime} 
                            onChange={(e) => setSelectedTime(e.target.value)}
                            className="w-full p-2 border border-border rounded-sm bg-background"
                          >
                            <option value="6:30 PM">6:30 PM</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Guests</label>
                          <select 
                            value={guestCount} 
                            onChange={(e) => setGuestCount(Number(e.target.value))}
                            className="w-full p-2 border border-border rounded-sm bg-background"
                          >
                            {[1,2,3,4].map(num => (
                              <option key={num} value={num}>{num} {num === 1 ? 'guest' : 'guests'}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <Button 
                        onClick={handleBooking}
                        disabled={!selectedDate || !departures.find(d => d.date === selectedDate)?.available}
                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold uppercase tracking-wider py-3"
                      >
                        Reserve — Pay £1 Deposit
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        Pay a deposit now. We'll confirm details 3–5 days prior.
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Sticky Bottom Bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 z-50">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold">From £1 deposit</div>
              <div className="text-sm text-muted-foreground">Select date</div>
            </div>
            <Button 
              onClick={scrollToBooking}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold uppercase tracking-wider"
            >
              Book Now
            </Button>
          </div>
        </div>
      </main>
      <FooterCTA />
    </>
  )
}