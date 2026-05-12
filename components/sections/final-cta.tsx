import { SectionLabel } from "@/components/section-label"
import { CTAButton } from "@/components/cta-button"

export function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden bg-cta-gradient py-20 text-center"
      aria-labelledby="final-cta-heading"
    >
      {/* Background watermark */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[20vw] leading-none text-primary/[0.025]"
        aria-hidden="true"
      >
        TCSS
      </div>

      <div className="container-narrow relative z-10">
        <SectionLabel className="justify-center">Make a Decision</SectionLabel>

        {/* Book placeholder */}
        <div className="mx-auto mb-7 max-w-[190px]">
          <div className="aspect-[4/5] w-full rounded bg-gradient-book shadow-book">
            <div className="flex h-full items-center justify-center p-4">
              <div className="text-center">
                <div className="font-display text-3xl tracking-wider text-gradient">
                  TCSS
                </div>
                <div className="mt-2 font-mono text-[0.5rem] uppercase tracking-widest text-muted-foreground">
                  Complete System
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2
          id="final-cta-heading"
          className="mb-5 font-display text-[clamp(2.2rem,5.5vw,4.5rem)] leading-tight tracking-[0.04em]"
        >
          Right now, someone else
          <br />
          is building their STACK.
          <br />
          <span className="text-gradient">Will it be you?</span>
        </h2>

        <p className="mx-auto mb-4 max-w-[520px] text-base leading-relaxed text-muted-foreground">
          While you&apos;re thinking about it, 36 people have already made their
          decision. They&apos;re going through the modules. They&apos;re
          building their Customer Story Profiles. They&apos;re writing copy that
          will actually work.
        </p>
        <p className="mx-auto mb-9 max-w-[520px] text-base leading-relaxed text-foreground">
          You&apos;re paying ₦15,000 for something worth ₦70,000.{" "}
          <strong>14 spots left.</strong> When they&apos;re gone — that&apos;s
          genuinely it.
        </p>

        <div className="mb-3.5">
          <CTAButton href="#offer" variant="primary-lg">
            I&apos;m In — Give Me the STACK
          </CTAButton>
        </div>
        <p className="text-[0.78rem] text-muted-foreground">
          14-day money-back guarantee · Lifetime access · Complete it this
          weekend
        </p>

        {/* Bottom message */}
        <div className="mt-[60px]">
          <p className="mx-auto max-w-[440px] text-[0.82rem] leading-relaxed text-muted-foreground">
            The campaigns that work aren&apos;t lucky. The businesses that grow
            aren&apos;t guessing. They built a foundation. Now it&apos;s your
            turn.
          </p>
          <p className="mt-7 font-display text-[1.5rem] tracking-[0.1em] text-foreground/20">
            CLARITY CONVERTS. CONFUSION COSTS.
          </p>
        </div>
      </div>
    </section>
  )
}
