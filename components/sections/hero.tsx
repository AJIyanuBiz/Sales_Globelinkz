import { CTAButton, SecondaryLink } from "@/components/cta-button"

function HeroBadge() {
  return (
    <div className="mb-6 inline-flex items-center gap-2.5 border border-primary px-3.5 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-primary">
      <span
        className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot"
        aria-hidden="true"
      />
      The Conversion Stack System
    </div>
  )
}

function UrgencyBox() {
  return (
    <div className="mb-9 flex flex-wrap items-center gap-5 border border-primary/40 bg-gradient-to-br from-green-dim to-blue-dim p-6">
      <div className="text-center">
        <div className="font-display text-[2.8rem] leading-none text-primary">
          50
        </div>
        <div className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-muted-foreground">
          Total Spots
        </div>
      </div>
      <div
        className="h-14 w-px shrink-0 bg-border"
        role="separator"
        aria-hidden="true"
      />
      <div className="text-center">
        <div className="font-display text-[2.8rem] leading-none text-secondary">
          36
        </div>
        <div className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-muted-foreground">
          Already Taken
        </div>
      </div>
      <div
        className="h-14 w-px shrink-0 bg-border"
        role="separator"
        aria-hidden="true"
      />
      <div className="min-w-[200px] flex-1">
        <strong className="mb-1 block text-base text-foreground">
          Only 14 spots remain at ₦15,000
        </strong>
        <span className="text-[0.9rem] text-muted-foreground">
          Price returns to ₦70,000 when the 50th spot is filled. No exceptions.
        </span>
      </div>
    </div>
  )
}

function ProofBar() {
  const proofItems = [
    { number: "5", description: "Layers. Built in order." },
    { number: "6", description: "Modules + deliverables" },
    { number: "₦55K", description: "You save at founding price" },
    { number: "14", description: "Day money-back guarantee" },
    { number: "50", description: "Founding spots only" },
  ]

  return (
    <div className="mt-[72px] border-y border-border bg-navy-2 py-7">
      <div className="container-wide">
        <div className="flex flex-wrap items-center justify-center gap-10">
          {proofItems.map((item) => (
            <div key={item.description} className="text-center">
              <div className="font-display text-[2.4rem] leading-none text-primary">
                {item.number}
              </div>
              <div className="mt-0.5 font-mono text-[0.78rem] tracking-[0.08em] text-muted-foreground">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[radial-gradient(ellipse_at_70%_50%,rgba(27,127,232,0.12)_0%,transparent_60%),radial-gradient(ellipse_at_20%_80%,rgba(110,199,45,0.08)_0%,transparent_50%)] px-0 py-20 md:pb-[60px] md:pt-20"
      aria-labelledby="hero-heading"
    >
      <div className="container-wide relative z-10">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_420px] md:gap-[60px]">
          {/* Content */}
          <div>
            <HeroBadge />
            <h1
              id="hero-heading"
              className="mb-5 font-display text-[clamp(3rem,7vw,6.5rem)] leading-none tracking-[0.03em]"
            >
              Stop <span className="text-gradient">Guessing.</span>
              <br />
              Start <span className="text-primary">Converting.</span>
            </h1>
            <p className="mb-9 max-w-[540px] text-[clamp(1rem,1.6vw,1.18rem)] leading-relaxed text-muted-foreground">
              You don&apos;t have an ads problem. You have a{" "}
              <strong className="text-foreground">foundation problem.</strong>{" "}
              The TCSS is the 5-layer framework that builds what your campaigns
              need <em>before</em> you spend a single kobo on Facebook ads.
            </p>

            <UrgencyBox />

            <div className="flex flex-wrap items-center gap-4">
              <CTAButton href="#offer">Claim Your Spot — ₦15,000</CTAButton>
              <SecondaryLink href="#problem">Is this for me? ↓</SecondaryLink>
            </div>
          </div>

          {/* Book Image */}
          <div className="order-first text-center md:order-last">
            <div className="relative mx-auto max-w-[420px]">
              <div className="aspect-[4/5] w-full animate-float rounded bg-gradient-to-br from-primary/20 to-secondary/20 shadow-[0_30px_60px_rgba(27,127,232,0.35),0_10px_30px_rgba(110,199,45,0.2)]">
                <div className="flex h-full items-center justify-center p-8">
                  <div className="text-center">
                    <div className="font-display text-6xl tracking-wider text-gradient">
                      TCSS
                    </div>
                    <div className="mt-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      The Conversion Stack System
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProofBar />
    </section>
  )
}
