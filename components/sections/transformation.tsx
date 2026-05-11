import { SectionLabel } from "@/components/section-label"

const beforeItems = [
  "Running campaigns on instinct and hope",
  "Results you can't explain or repeat",
  "Ads that describe your business, not your customer",
  "Offers you hope are compelling enough",
  "Losing customers because nothing waits after the sale",
  "Starting every campaign from scratch",
]

const afterItems = [
  "Running campaigns with a complete foundation",
  "Understanding exactly why results happen",
  "Ads that speak directly to one specific person",
  "Offers built correctly — and proven compelling",
  "A Keep system holding every customer you earn",
  "One permanent checklist for every future campaign",
]

export function Transformation() {
  return (
    <section
      id="transformation"
      className="bg-navy-2 py-[90px]"
      aria-labelledby="transformation-heading"
    >
      <div className="container-narrow relative z-10">
        <SectionLabel>The Transformation</SectionLabel>
        <h2
          id="transformation-heading"
          className="font-display text-[clamp(2rem,4vw,3.8rem)] leading-tight tracking-[0.04em]"
        >
          Where you are now.
          <br />
          <span className="text-primary">Where you will be.</span>
        </h2>

        <div className="mt-[52px] grid items-center gap-5 md:grid-cols-[1fr_auto_1fr]">
          {/* Before Column */}
          <div className="border border-border bg-navy-2 p-7">
            <div className="mb-4 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground/80">
              Before the STACK
            </div>
            <ul className="flex list-none flex-col gap-3" role="list">
              {beforeItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[0.9rem] leading-normal text-muted-foreground"
                >
                  <span
                    className="shrink-0 text-muted-foreground/80"
                    aria-hidden="true"
                  >
                    ✗
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow */}
          <div
            className="hidden text-center text-[2rem] text-primary md:block"
            aria-hidden="true"
          >
            →
          </div>

          {/* After Column */}
          <div className="border border-primary/40 bg-green-dim/30 p-7">
            <div className="mb-4 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-primary">
              After the STACK
            </div>
            <ul className="flex list-none flex-col gap-3" role="list">
              {afterItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[0.9rem] leading-normal text-foreground"
                >
                  <span
                    className="shrink-0 font-bold text-primary"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
