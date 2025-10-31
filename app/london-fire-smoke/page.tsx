import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FeastWalk London – Fire & Smoke Menu",
  description: "A supper club on foot through London's best kitchens. Full plates, pairings, and behind-the-scenes access.",
  keywords: "FeastWalk London, Fire & Smoke Menu, supper club, chef-curated dining, London food tour, behind-the-scenes kitchen access",
}

import LondonFireSmokeClient from "./client"

export default function LondonFireSmokePage() {
  return <LondonFireSmokeClient />
}