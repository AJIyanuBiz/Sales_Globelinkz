import { SectionLabel } from "@/components/section-label"

const stackLayers = [
  {
    letter: "S",
    name: "Story — Ground Floor",
    description: "Whose story you're in. What your customer genuinely wants.",
  },
  {
    letter: "T",
    name: "Transform — First Floor",
    description: "Where they are now. The specific before and after.",
  },
  {
    letter: "A",
    name: "Attract — Second Floor",
    description: "The offer that makes the first step feel obvious and safe.",
  },
  {
    letter: "C",
    name: "Convert — Third Floor",
    description: "The 7 building blocks that stop scrolling and drive action.",
  },
  {
    letter: "K",
    name: "Keep — Top Floor",
    description: "The post-purchase system that holds every customer you earn.",
  },
]

function StackItem({
  letter,
  name,
  description,
}: {
  letter: string
  name: string
  description: string
}) {
  return (
    <div className="mb-2.5 flex items-start gap-[18px] border border-border bg-white/[0.02] px-[22px] py-[18px] transition-all duration-200 hover:border-primary hover:bg-green-dim/30">
      <div className="w-9 shrink-0 font-display text-[2.8rem] leading-none text-gradient">
        {letter}
      </div>
      <div>
        <div className="text-[0.95rem] font-semibold text-foreground">{name}</div>
        <div className="mt-0.5 text-[0.82rem] text-muted-foreground">
          {description}
        </div>
      </div>
    </div>
  )
}

export function Solution() {
  return (
    <section
      id="solution"
      className="relative overflow-hidden py-[90px]"
      aria-labelledby="solution-heading"
    >
      {/* Background watermark */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[22vw] text-primary/[0.03]"
        aria-hidden="true"
      >
        STACK
      </div>

      <div className="container-narrow relative z-10">
        <SectionLabel>The Solution</SectionLabel>
        <h2
          id="solution-heading"
          className="font-display text-[clamp(2rem,4vw,3.8rem)] leading-tight tracking-[0.04em]"
        >
          Introducing the
          <br />
          <span className="text-gradient">Conversion Stack System</span>
        </h2>
        <p className="mt-4 max-w-[580px] text-[1.05rem] leading-relaxed text-muted-foreground">
          A complete 5-layer framework for building the foundation your
          campaigns need before you ever open the ads manager. Not a course about
          the platform — a system for what comes <em>before</em> it.
        </p>

        <div className="mt-[52px] grid items-start gap-14 md:grid-cols-2">
          {/* Stack Items */}
          <div>
            {stackLayers.map((layer) => (
              <StackItem key={layer.letter} {...layer} />
            ))}
          </div>

          {/* Description */}
          <div className="text-base leading-loose text-muted-foreground">
            <p className="mb-5">
              The STACK is not a list where you pick what you like and skip the
              rest. It is a layered architecture where each level sits on top of
              the previous one. Remove any single layer and the whole structure
              loses integrity.
            </p>
            <p className="mb-5">
              Most campaigns that underperform are missing one of these layers.
              Usually the first one — Story. Which means every layer above it was
              built on a foundation that wasn&apos;t solid.
            </p>
            <p>
              Five layers. Built in order. One system you use for every campaign
              you will ever run.
            </p>

            {/* Principle box */}
            <div className="mt-8 border-l-[3px] border-primary bg-green-dim/40 px-6 py-5">
              <p className="mb-1.5 font-mono text-[0.75rem] uppercase tracking-[0.1em] text-primary">
                THE TCSS PRINCIPLE
              </p>
              <p className="text-[1.1rem] font-semibold italic text-foreground">
                &ldquo;Clarity converts. Confusion costs.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
