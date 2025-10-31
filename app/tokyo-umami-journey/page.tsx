import { Header } from "@/components/header"
import { FooterCTA } from "@/components/footer-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FeastWalk Tokyo – The Umami Journey",
  description: "A supper club on foot through Tokyo's best kitchens. Full plates, pairings, and behind-the-scenes access.",
  keywords: "FeastWalk Tokyo, Umami Journey, supper club, chef-curated dining, Tokyo food tour",
}

import TokyoUmamiClient from "./client"

export default function TokyoUmamiPage() {
  return <TokyoUmamiClient />
}
