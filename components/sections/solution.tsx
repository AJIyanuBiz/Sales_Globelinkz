import { SectionLabel } from "@/components/section-label"
import { CTAButton } from "@/components/cta-button"
import Image from "next/image"

const stackLayers = [
  {
    letter: "S",
    name: "Story — Ground Floor",
    description:
      "You're not the main character. Your customer is. This layer shows you how to step out of your own way.",
  },
  {
    letter: "T",
    name: "Transform — First Floor",
    description:
      "Where they are. Where they want to be. The gap between both is where your ad lives.",
  },
  {
    letter: "A",
    name: "Attract — Second Floor",
    description:
      "An offer that makes the first yes feel like common sense, not a risk.",
  },
  {
    letter: "C",
    name: "Convert — Third Floor",
    description:
      "Seven building blocks that turn a stranger scrolling on their phone into someone clicking your link.",
  },
  {
    letter: "K",
    name: "Keep — Top Floor",
    description:
      "What happens after the sale. Most people have nothing here. This is where loyalty is built.",
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
    <div className="mb-2.5 flex items-start gap-4 border border-border bg-foreground/[0.02] px-[18px] py-[15px] transition-all duration-200 hover:border-primary">
      <div className="w-8 shrink-0 font-display text-[2.5rem] leading-none text-gradient">
        {letter}
      </div>
      <div>
        <div className="text-[0.92rem] font-semibold text-foreground">{name}</div>
        <div className="mt-0.5 text-[0.8rem] text-muted-foreground">
          {description}
        </div>
      </div>
    </div>
  )
}

function BookFeature() {
  return (
    <div className="mt-[52px] grid items-center gap-11 border border-border bg-navy-3 p-11 md:grid-cols-[220px_1fr]">
      {/* Book placeholder */}
      <div className="mx-auto max-w-[180px] md:mx-0 md:max-w-none">
        <Image
                          src="/TCSS_BookCover.png"
                          alt="The Conversion Stack System Book Cover"
                          height={500}
                          width={400}
                        />
      </div>

      <div>
        <h3 className="mb-3 font-display text-[1.8rem] tracking-[0.04em]">
          Everything in one book.
          <br />
          <span className="text-gradient">Nothing left out.</span>
        </h3>
        <p className="mb-5 text-[0.94rem] leading-relaxed text-muted-foreground">
          The TCSS walks you through all five layers, in the right order, with a
          real document to show for it at the end of each module. Not notes
          you&apos;ll never open again. Things you&apos;ll use before every
          single campaign from this day forward.
        </p>
        <CTAButton href="#offer">Get the Full System — ₦15,000</CTAButton>
      </div>
    </div>
  )
}

export function Solution() {
  return (
    <section
      id="solution"
      className="bg-navy-2 py-20"
      aria-labelledby="solution-heading"
    >
      <div className="container-narrow relative z-10">
        <SectionLabel>The System</SectionLabel>
        <h2
          id="solution-heading"
          className="mt-3 font-display text-[clamp(2rem,4vw,3.2rem)] leading-tight tracking-[0.04em]"
        >
          Meet the
          <br />
          <span className="text-gradient">Conversion Stack System</span>
        </h2>
        <p className="mt-4 max-w-[580px] text-[0.98rem] leading-relaxed text-muted-foreground">
          Five layers. Built in a specific order. This is the work that happens
          before you write a single word of ad copy, before you set a budget,
          before you touch Ads Manager. Skip this and your campaigns will always
          feel like gambling. Build this and they start feeling like a business
          decision.
        </p>

        <div className="mt-11 grid items-start gap-[52px] md:grid-cols-2">
          {/* Stack Items */}
          <div>
            {stackLayers.map((layer) => (
              <StackItem key={layer.letter} {...layer} />
            ))}
          </div>

          {/* Description */}
          <div>
            <p className="mb-5 text-[0.95rem] leading-relaxed text-muted-foreground">
              Picture your ad campaign like a building. The targeting, the
              budget, the creative — those are the windows and doors. Nice to
              have. Important even. But if the foundation isn&apos;t solid, the
              whole thing falls apart no matter how good the windows look.
            </p>
            <p className="mb-6 text-[0.95rem] leading-relaxed text-muted-foreground">
              Most people who struggle with Facebook ads aren&apos;t bad at
              marketing. They just started building at the wrong floor. They put
              windows on a building that has no foundation and wondered why it
              keeps collapsing.
            </p>

            {/* Principle box */}
            <div className="border-l-[3px] border-primary bg-primary/5 px-6 py-5">
              <p className="mb-1.5 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-primary">
                What this system stands on
              </p>
              <p className="text-[1.05rem] font-semibold italic text-foreground">
                &ldquo;Clarity converts.
                <br />
                Confusion costs.&rdquo;
              </p>
            </div>

            <p className="mt-5 text-[0.85rem] leading-relaxed text-muted-foreground">
              Every decision you&apos;ll ever make about your ads — run it
              through that. Is this clearer than what I had before? If yes, keep
              it. If not, simplify it.
            </p>
          </div>
        </div>

        <BookFeature />
      </div>
    </section>
  )
}
