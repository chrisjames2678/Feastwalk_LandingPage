"use client"

import { Header } from "@/components/header"
import { FooterCTA } from "@/components/footer-cta"

export default function TokyoUmamiClient() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24 md:pt-32 lg:pt-40">
        <section className="py-32 md:py-40 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-[family-name:var(--font-bebas)] text-8xl md:text-9xl lg:text-[12rem] text-primary mb-8 leading-none">
              COMING SOON
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
              The Umami Journey in Tokyo is launching in Late 2026
            </p>
          </div>
        </section>
      </main>
      <FooterCTA />
    </>
  )
}
