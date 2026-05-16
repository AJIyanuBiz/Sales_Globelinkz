import { CTAButton, SecondaryLink } from "@/components/cta-button";
import Image from "next/image";

function HeroBadge() {
  return (
    <div className="mb-5 inline-flex items-center gap-2.5 border border-primary px-3.5 py-1.5 font-mono text-[0.67rem] uppercase tracking-[0.15em] text-primary">
      <span
        className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot"
        aria-hidden="true"
      />
      The Conversion Stack System
    </div>
  );
}

function UrgencyBox() {
  return (
    <div className="mb-7 flex flex-wrap items-center gap-5 border border-primary/40 bg-primary/5 p-5">
      <div className="min-w-[60px] text-center">
        <div className="font-display text-[2.6rem] leading-none text-primary">
          50
        </div>
        <div className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-muted-foreground">
          Total Spots
        </div>
      </div>
      <div
        className="h-[50px] w-px shrink-0 bg-border"
        role="separator"
        aria-hidden="true"
      />
      <div className="min-w-[60px] text-center">
        <div className="font-display text-[2.6rem] leading-none text-secondary">
          36
        </div>
        <div className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-muted-foreground">
          Already Gone
        </div>
      </div>
      <div
        className="h-[50px] w-px shrink-0 bg-border"
        role="separator"
        aria-hidden="true"
      />
      <div className="min-w-[180px] flex-1">
        <strong className="mb-0.5 block text-[0.96rem] text-foreground">
          Only 14 spots left at ₦15,000
        </strong>
        <span className="text-[0.84rem] text-muted-foreground">
          After that it&apos;s ₦70,000. That&apos;s not a threat — that&apos;s
          just the plan.
        </span>
      </div>
    </div>
  );
}

function ProofBar() {
  const proofItems = [
    {
      number: "5",
      description: "Layers that fix everything",
      variant: "green" as const,
    },
    {
      number: "6",
      description: "Modules + real deliverables",
      variant: "green" as const,
    },
    {
      number: "₦55K",
      description: "Saved at founding price",
      variant: "blue" as const,
    },
    {
      number: "50",
      description: "Founding spots only",
      variant: "green" as const,
    },
    {
      number: "14",
      description: "Day money-back guarantee",
      variant: "blue" as const,
    },
  ];

  return (
    <div className="mt-16 border-y border-border bg-navy-2 py-7">
      <div className="container-wide">
        <div className="flex flex-wrap items-center justify-center gap-9">
          {proofItems.map((item) => (
            <div key={item.description} className="text-center">
              <div
                className={`font-display text-[2.3rem] leading-none ${
                  item.variant === "blue" ? "text-secondary" : "text-primary"
                }`}
              >
                {item.number}
              </div>
              <div className="mt-0.5 font-mono text-[0.72rem] tracking-[0.08em] text-muted-foreground">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-hero-gradient px-0 pb-0 pt-[72px]"
      aria-labelledby="hero-heading"
    >
      <div className="container-wide relative">
        <div className="grid items-center gap-9 md:grid-cols-[1fr_400px] md:gap-[52px]">
          {/* Content */}
          <div>
            <HeroBadge />
            <h1
              id="hero-heading"
              className="mb-5 font-display text-[clamp(3rem,6.5vw,6rem)] leading-none tracking-[0.03em]"
            >
              The Reason Your
              <br />
              Ads Aren&apos;t Working
              <br />
              <span className="text-gradient">
                Has Nothing To Do
                <br />
                With Your Ads.
              </span>
            </h1>
            <p className="mb-8 max-w-[520px] text-[1.05rem] leading-relaxed text-muted-foreground">
              Right now, someone with the same product as you, the same
              audience, maybe even a smaller budget — is getting results you
              can&apos;t explain. They&apos;re not smarter. They&apos;re not
              luckier. They just built something you haven&apos;t built yet.
            </p>

            <UrgencyBox />

            <div className="flex flex-wrap items-center gap-4">
              <CTAButton location="hero">I Want It — ₦15,000</CTAButton>
              <SecondaryLink href="#problem">Show me more ↓</SecondaryLink>
            </div>
          </div>

          {/* Book Image */}
          <div className="order-first text-center md:order-last">
            <div className="relative mx-auto max-w-[400px]">
              <div className="aspect-[4/5] w-full animate-float rounded bg-transparent">
                <div className="flex h-full items-center justify-center p-8 relative">
                  {/* <div className="font-display text-6xl tracking-wider text-gradient">
                      TCSS
                    </div> */}
                  <Image
                    src="/TCSS_BookCover.png"
                    alt="The Conversion Stack System Book Cover"
                    // width={240}
                    // height={300}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProofBar />
    </section>
  );
}
