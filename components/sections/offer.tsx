import { SectionLabel } from "@/components/section-label"
import { CTAButton } from "@/components/cta-button"

const includedItems = [
  "The full Conversion Stack System — all 5 layers in order",
  "The Customer Story Profile framework",
  "The Transformation Statement methodology",
  "The Offer Build system — integrity-first offer structure",
  "The 7 Building Blocks of Converting Copy",
  "The Keep System Blueprint",
  "The Campaign Launch Checklist",
  "6 module deliverables — real documents you keep forever",
  "Lifetime access including all future updates",
]

function SpotsMeter() {
  return (
    <div className="mb-8">
      <div className="mb-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground">
        Founding Spots Claimed
      </div>
      <div className="h-2 overflow-hidden rounded bg-white-faint">
        <div
          className="h-full w-[72%] animate-meter-fill rounded bg-gradient-to-r from-primary to-secondary"
          role="progressbar"
          aria-valuenow={72}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="72% of founding spots claimed"
        />
      </div>
      <div className="mt-2 text-[0.85rem] text-foreground">
        36 of 50 taken —{" "}
        <strong className="text-[1.1rem] text-primary">14 spots left</strong>
      </div>
    </div>
  )
}

function GuaranteeStrip() {
  return (
    <div className="mt-6 flex items-center gap-4 border border-secondary/30 bg-blue-dim/40 p-5">
      <div className="flex h-[54px] w-[54px] shrink-0 flex-col items-center justify-center rounded-full border-2 border-secondary">
        <div className="font-display text-[1.4rem] leading-none text-secondary">
          14
        </div>
        <div className="font-mono text-[0.45rem] uppercase tracking-[0.1em] text-secondary">
          Day Guarantee
        </div>
      </div>
      <p className="text-[0.85rem] leading-relaxed text-muted-foreground">
        Do the work. If the STACK doesn&apos;t deliver what was promised, you
        receive a full refund within 14 days. No questions asked.
      </p>
    </div>
  )
}

export function Offer() {
  return (
    <section
      id="offer"
      className="bg-[radial-gradient(ellipse_at_50%_0%,rgba(110,199,45,0.08)_0%,transparent_60%)] bg-navy-2 py-[90px]"
      aria-labelledby="offer-heading"
    >
      <div className="container-narrow relative z-10">
        <SectionLabel>The Investment</SectionLabel>
        <h2
          id="offer-heading"
          className="font-display text-[clamp(2rem,4vw,3.8rem)] leading-tight tracking-[0.04em]"
        >
          Everything you need to build
          <br />
          <span className="text-gradient">your complete STACK.</span>
        </h2>

        <div className="relative mt-[52px] overflow-hidden border border-primary/50 bg-background p-10 md:p-14">
          {/* Top gradient bar */}
          <div
            className="absolute left-0 right-0 top-0 h-1 bg-gradient-brand"
            aria-hidden="true"
          />

          <div className="grid items-start gap-12 md:grid-cols-2">
            {/* Left: Price + CTA */}
            <div>
              <div className="mb-6 inline-block bg-gradient-brand px-4 py-2 font-mono text-[0.72rem] font-bold uppercase tracking-[0.1em] text-navy">
                🎯 You Save ₦55,000 · Founding Price Only
              </div>

              <div className="mb-7">
                <div className="mb-1 font-mono text-[0.85rem] text-muted-foreground/70 line-through">
                  Original price: <span className="text-[1.1rem]">₦70,000</span>
                </div>
                <div className="font-display text-[5rem] leading-none tracking-[0.02em] text-primary">
                  ₦15,000
                </div>
                <div className="mt-1.5 text-[0.85rem] text-muted-foreground">
                  One-time · Lifetime access · Limited to 50 people
                </div>
              </div>

              <SpotsMeter />

              <CTAButton
                href="#"
                variant="primary-lg"
                className="mb-4 block w-full text-center"
              >
                Yes — I Want the STACK for ₦15,000
              </CTAButton>
              <p className="text-center text-[0.78rem] text-muted-foreground">
                Price returns to ₦70,000 after the 50th spot. No exceptions.
              </p>

              <GuaranteeStrip />
            </div>

            {/* Right: What's included */}
            <div>
              <div className="mb-4 font-mono text-[0.62rem] uppercase tracking-[0.15em] text-muted-foreground">
                Everything Included
              </div>
              <ul
                className="mb-7 flex flex-col gap-3"
                role="list"
                aria-label="What's included"
              >
                {includedItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.9rem] leading-normal"
                  >
                    <span
                      className="mt-0.5 shrink-0 font-bold text-primary"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Savings highlight */}
              <div className="border border-primary/20 bg-green-dim/40 p-5">
                <div className="mb-2 font-mono text-[0.62rem] uppercase tracking-[0.15em] text-primary">
                  What you&apos;re getting for free
                </div>
                <div className="font-display text-[1.5rem] tracking-[0.04em] text-foreground">
                  ₦55,000 in savings
                </div>
                <p className="mt-1 text-[0.82rem] text-muted-foreground">
                  50 founding members only. After that, it goes back to ₦70,000
                  — and stays there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
