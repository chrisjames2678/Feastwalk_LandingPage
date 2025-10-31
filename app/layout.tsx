import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
})

export const metadata: Metadata = {
  title: "FeastWalk - Not a snack crawl. A Feast.",
  description: "Chef-curated food experiences on foot. Bold flavours, hidden kitchens, no tourist traps.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${bebasNeue.variable}`}>
        {children}
        <Analytics />
        <Script
          src="//code.tidio.co/xmibet2czey83fs5ijpb8mqqsptjxmtu.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
