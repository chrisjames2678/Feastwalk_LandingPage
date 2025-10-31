import { Header } from "@/components/header"
import { FooterCTA } from "@/components/footer-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FeastWalk Barcelona – The Mediterranean Feast",
  description: "A supper club on foot through Barcelona's best kitchens. Full plates, pairings, and behind-the-scenes access.",
  keywords: "FeastWalk Barcelona, Mediterranean Feast, supper club, chef-curated dining, Barcelona food tour",
}

import BarcelonaMediterraneanClient from "./client"

export default function BarcelonaMediterraneanPage() {
  return <BarcelonaMediterraneanClient />
}
