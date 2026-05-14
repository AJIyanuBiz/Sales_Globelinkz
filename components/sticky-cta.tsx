"use client"

import { useState, useEffect } from "react"
import { CTAButton } from "@/components/cta-button"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero")
      const finalCta = document.getElementById("final-cta")

      if (!hero || !finalCta) return

      const heroBottom = hero.getBoundingClientRect().bottom
      const finalCtaTop = finalCta.getBoundingClientRect().top

      setIsVisible(heroBottom < 0 && finalCtaTop > window.innerHeight)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-5 right-5 transition-all duration-300 ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-5 opacity-0"
      }`}
      aria-hidden={!isVisible}
    >
      <CTAButton href="https://selar.com/3371q730k8" className="shadow-cta-hover">
        14 Spots Left — ₦15,000
      </CTAButton>
    </div>
  )
}
