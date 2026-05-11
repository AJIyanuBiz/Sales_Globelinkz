import { SectionLabel } from "@/components/section-label"
import { CTAButton } from "@/components/cta-button"

export function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="bg-[radial-gradient(ellipse_at_50%_50%,rgba(110,199,45,0.1)_0%,rgba(27,127,232,0.06)_40%,transparent_70%)] py-[90px]"
      aria-labelledby="final-cta-heading"
    >
      <div className="container-narrow relative z-10 text-center">
        <SectionLabel className="justify-center">The Decision</SectionLabel>
        <h2
          id="final-cta-heading"
          className="mb-4 font-display text-[clamp(3rem,7vw,6.5rem)] leading-none tracking-[0.03em]"
        >
          Build your <span className="text-gradient">STACK.</span>
          <br />
          <span className="text-primary" style={{ fontSize: "0.6em" }}>
            Before the 50 spots are gone.
          </span>
        </h2>
        <p className="mx-auto mb-10 max-w-[520px] text-[1.05rem] leading-relaxed text-muted-foreground">
          ₦70,000 is the real price. You&apos;re paying ₦15,000 because
          you&apos;re one of 50 founding members. There are{" "}
          <strong className="text-foreground">14 spots left.</strong>
        </p>

        <div className="mb-6">
          <CTAButton href="#offer" variant="primary-lg">
            Claim My Founding Spot — ₦15,000
          </CTAButton>
        </div>
        <p className="text-[0.8rem] text-muted-foreground">
          14-day money-back guarantee · Lifetime access · Complete in a weekend
        </p>

        {/* Divider */}
        <div
          className="mx-auto my-[60px] h-px max-w-[300px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"
          aria-hidden="true"
        />

        <p className="font-display text-[1.8rem] tracking-[0.08em] text-muted-foreground">
          CLARITY CONVERTS. CONFUSION COSTS.
        </p>
      </div>
    </section>
  )
}
