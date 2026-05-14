import { SectionLabel } from "@/components/section-label"
import { CTAButton } from "@/components/cta-button"

const includedItems = [
  "All 5 layers of the Conversion Stack System",
  "The Customer Story Profile framework",
  "The Transformation Statement methodology",
  "The Offer Build system",
  "The 7 Building Blocks of Copy that Converts",
  "The Keep System Blueprint",
  "The Campaign Launch Checklist",
  "6 real deliverables — documents you complete and own",
  "Lifetime access including all updates",
]

function SpotsMeter() {
  return (
    <div className="mb-7">
      <div className="mb-1.5 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted-foreground">
        Founding Spots Taken
      </div>
      <div className="h-2 overflow-hidden rounded bg-white-faint">
        <div
          className="h-full w-[72%] animate-meter-fill rounded bg-gradient-brand"
          role="progressbar"
          aria-valuenow={72}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="72% of founding spots claimed"
        />
      </div>
      <div className="mt-2 text-[0.84rem] text-foreground">
        36 of 50 spots gone —{" "}
        <strong className="text-primary">14 left</strong>
      </div>
    </div>
  )
}

function GuaranteeStrip() {
  return (
    <div className="mt-5 flex items-center gap-3.5 border border-secondary/30 bg-secondary/5 p-4">
      <div className="flex h-[52px] w-[52px] shrink-0 flex-col items-center justify-center rounded-full border-2 border-secondary">
        <div className="font-display text-[1.3rem] leading-none text-secondary">
          14
        </div>
        <div className="font-mono text-[0.42rem] uppercase tracking-[0.08em] text-secondary">
          Day Guarantee
        </div>
      </div>
      <p className="text-[0.82rem] leading-normal text-muted-foreground">
        Go through the modules. Build the deliverables. If after doing the
        actual work it hasn&apos;t delivered what was promised — every naira
        back. No awkward back-and-forth.
      </p>
    </div>
  )
}

function SavingsBox() {
  return (
    <div className="mt-5 border border-primary/20 bg-primary/5 p-5">
      <div className="mb-1.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-primary">
        Money staying in your pocket
      </div>
      <div className="font-display text-[1.8rem] tracking-[0.03em] text-gradient">
        ₦55,000 in savings
      </div>
      <p className="mt-1 text-[0.8rem] text-muted-foreground">
        50 founding members only. After that, ₦70,000 permanently.
      </p>
    </div>
  )
}

export function Offer() {
  return (
    <section
      id="offer"
      className="bg-section-gradient bg-navy-2 py-20"
      aria-labelledby="offer-heading"
    >
      <div className="container-narrow relative">
        <SectionLabel>The Investment</SectionLabel>
        <h2
          id="offer-heading"
          className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-tight tracking-[0.04em]"
        >
          Get the full STACK.
          <br />
          <span className="text-gradient">Before the price goes up.</span>
        </h2>

        <div className="relative mt-11 overflow-hidden border border-primary/45 bg-background p-[52px] md:p-11">
          {/* Top gradient bar */}
          <div
            className="absolute left-0 right-0 top-0 h-1 bg-gradient-brand"
            aria-hidden="true"
          />

          <div className="grid items-start gap-11 md:grid-cols-2">
            {/* Left: Price + CTA */}
            <div>
              <div className="mb-5 inline-block bg-gradient-brand px-3.5 py-2 font-mono text-[0.68rem] font-bold uppercase tracking-[0.1em] text-navy">
                You Save ₦55,000 · Founding Members Only
              </div>

              <div className="mb-6">
                <div className="mb-0.5 font-mono text-[0.85rem] text-muted-foreground/70 line-through">
                  Regular price: ₦70,000
                </div>
                <div className="font-display text-[5rem] leading-none tracking-[0.02em] text-primary">
                  ₦15,000
                </div>
                <div className="mt-1 text-[0.82rem] text-muted-foreground">
                  One payment. Lifetime access. Complete it in a weekend.
                </div>
              </div>

              <SpotsMeter />

              <CTAButton
                href="https://selar.com/3371q730k8"
                variant="primary-lg"
                className="mb-3.5 block w-full text-center"
              >
                Yes — Give Me the STACK for ₦15,000
              </CTAButton>
              <p className="text-center text-[0.75rem] text-muted-foreground">
                When spot 50 goes, the price goes to ₦70,000. No exceptions, no
                extensions.
              </p>

              <GuaranteeStrip />
            </div>

            {/* Right: What's included */}
            <div>
              <div className="mb-3.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted-foreground">
                What you&apos;re getting
              </div>
              <ul
                className="mb-6 flex flex-col gap-3"
                role="list"
                aria-label="What's included"
              >
                {includedItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.88rem] leading-normal"
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

              <SavingsBox />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
