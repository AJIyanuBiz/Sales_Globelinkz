import { AlertBar } from "@/components/sections/alert-bar"
import { Navigation } from "@/components/sections/navigation"
import { Hero } from "@/components/sections/hero"
import { Problem } from "@/components/sections/problem"
import { Solution } from "@/components/sections/solution"
import { Layers } from "@/components/sections/layers"
import { Transformation } from "@/components/sections/transformation"
import { Who } from "@/components/sections/who"
import { Testimonials } from "@/components/sections/testimonials"
import { Offer } from "@/components/sections/offer"
import { FAQ } from "@/components/sections/faq"
import { FinalCTA } from "@/components/sections/final-cta"
import { Footer } from "@/components/sections/footer"
import { StickyCTA } from "@/components/sticky-cta"

export default function TCSSLandingPage() {
  return (
    <>
      <AlertBar />
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Layers />
        <Transformation />
        <Who />
        <Testimonials />
        <Offer />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
