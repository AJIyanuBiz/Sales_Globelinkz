import { SectionLabel } from "@/components/section-label"
import { CTAButton } from "@/components/cta-button"
import Image from "next/image"

export function BookStrip() {
  return (
    <div className="border-y border-border bg-navy-2 py-[52px]">
      <div className="container-wide">
        <div className="grid items-center gap-[52px] md:grid-cols-[1fr_240px]">
          <div>
            <SectionLabel>One System Forever</SectionLabel>
            <h2 className="mt-3.5 mb-3.5 font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-tight tracking-[0.04em]">
              You don&apos;t keep paying.
              <br />
              <span className="text-gradient">You just keep using it.</span>
            </h2>
            <p className="mb-4 text-[0.95rem] leading-relaxed text-muted-foreground">
              You pay once for the TCSS. What you get back is a system you run
              before every campaign — for the rest of your business. The
              Customer Story Profile, the Transformation Statement, the Offer
              Build, the Copy Library, the Keep System, the Campaign Launch
              Checklist. Six real documents you build once and reach for every
              time.
            </p>
            <p className="mb-6 text-[0.85rem] text-muted-foreground">
              36 of the 50 founding spots are gone.{" "}
              <strong className="text-foreground">
                14 remain at ₦15,000
              </strong>
              . After that it goes to ₦70,000 and stays there.
            </p>
            <CTAButton href="#offer">Claim My Founding Spot</CTAButton>
          </div>

          {/* Book placeholder */}
          <div className="mx-auto max-w-[180px] md:mx-0 md:max-w-none">
            <Image
                              src="/TCSS_BookCover.png"
                              alt="The Conversion Stack System Book Cover"
                              height={500}
                              width={400}
                            />
          </div>
        </div>
      </div>
    </div>
  )
}
