import { SectionLabel } from "@/components/section-label"

interface LayerCardProps {
  number: string
  tag: string
  letter: string
  title: string
  body: string
  deliverableLabel: string
  deliverableText: string
  isBlue?: boolean
}

const layers: LayerCardProps[] = [
  {
    number: "01",
    tag: "Ground Floor · Module 01",
    letter: "S",
    title: "Story",
    body: "Most businesses show up on Facebook talking about themselves. Their journey. Their values. Their origin. And the customer scrolls past it all — because nothing in the message answered the one question every brain asks first: what does any of this have to do with me? In your customer's story, you are the guide. Not the hero. This module teaches you to build a Customer Story Profile so specific that every word you write from this point feels like it was made for one person — because it was.",
    deliverableLabel: "Your Deliverable",
    deliverableText:
      "The Customer Story Profile — the document that anchors your entire STACK.",
  },
  {
    number: "02",
    tag: "First Floor · Module 02",
    letter: "T",
    title: "Transform",
    body: "People don't buy products. They buy better versions of themselves. The transformation your product makes possible — described with enough precision and honesty that your customer can actually see themselves inside it — is the single most powerful thing you can put in front of them. Vague transformations lose people. Specific ones stop them mid-scroll.",
    deliverableLabel: "Your Deliverable",
    deliverableText:
      "The Transformation Statement — the before-and-after your customer can see themselves inside.",
  },
  {
    number: "03",
    tag: "Second Floor · Module 03",
    letter: "A",
    title: "Attract",
    body: "The best ad in the world cannot compensate for an offer that isn't quite right. This module teaches you to build an offer structure — the specific door your customer walks through first — that makes saying yes feel obvious, safe, and worth taking. You also learn the one principle that separates businesses that discount from businesses that grow: never reduce the price of the same thing. Change the offer or change the payment. Never compromise your pricing.",
    deliverableLabel: "Your Deliverable",
    deliverableText:
      "Your Offer Build — a front-door offer structure your customer can say yes to easily.",
  },
  {
    number: "04",
    tag: "Third Floor · Module 04",
    letter: "C",
    title: "Convert",
    body: "This is the words. The specific, carefully chosen language that takes someone from aware to interested to acting. Copy that converts is not clever. It is not aggressive. It is clear — written for one person, answering the question their brain is already asking: what does this have to do with me? This module walks you through all 7 building blocks — from the hook that earns attention to the CTA that is specific enough to be followed.",
    deliverableLabel: "Your Deliverable",
    deliverableText:
      "Your Copy Library — headlines, opening lines, and body copy from all 7 building blocks.",
  },
  {
    number: "05",
    tag: "Top Floor · Module 05",
    letter: "K",
    title: "Keep",
    body: "Most businesses spend all their energy getting the customer. Almost none build the system that holds the customer after they arrive. The transaction completes, the excitement fades, and the relationship quietly ends — because nothing was waiting on the other side of it. Getting customers is expensive. Losing them is more expensive. This module builds the Keep system — your post-purchase structure that turns first transactions into lasting relationships.",
    deliverableLabel: "Your Deliverable",
    deliverableText:
      "Your Keep System — the post-purchase structure that holds every customer you earn.",
  },
  {
    number: "06",
    tag: "Application · Module 06",
    letter: "",
    title: "Applied — Into the Ads Manager",
    body: "Once your STACK is built, this final module takes everything you have constructed into Facebook Ads Manager. Not a collection of hopes. A complete, layered system with a real foundation underneath it. Set the right objective, find the right audience, run the right creative, read the right metrics, scale what works, and diagnose what doesn't — using the STACK as your permanent tool.",
    deliverableLabel: "Your Deliverable",
    deliverableText:
      "The Campaign Launch Checklist — your STACK verified, your campaign ready to go live.",
    isBlue: true,
  },
]

function LayerCard({
  number,
  tag,
  letter,
  title,
  body,
  deliverableLabel,
  deliverableText,
  isBlue = false,
}: LayerCardProps) {
  return (
    <article
      className={`relative mb-6 overflow-hidden border bg-background p-9 transition-colors duration-200 md:px-10 ${
        isBlue
          ? "border-secondary/40 hover:border-secondary/60"
          : "border-border hover:border-primary/30"
      }`}
    >
      {/* Background number */}
      <div
        className="pointer-events-none absolute -top-5 right-5 select-none font-display text-[8rem] leading-none text-primary/[0.04]"
        aria-hidden="true"
      >
        {number}
      </div>

      <div
        className={`mb-2.5 font-mono text-[0.6rem] uppercase tracking-[0.18em] ${
          isBlue ? "text-secondary" : "text-primary"
        }`}
      >
        {tag}
      </div>

      <h3 className="mb-3 font-display text-[2rem] tracking-[0.04em]">
        {letter && <span className="text-gradient">{letter}</span>}
        {letter ? ` — ${title}` : title}
      </h3>

      <p className="mb-5 max-w-[680px] text-[0.95rem] leading-relaxed text-muted-foreground">
        {body}
      </p>

      <div
        className={`flex items-start gap-3 border p-5 ${
          isBlue
            ? "border-secondary/30 bg-blue-dim/50"
            : "border-primary/25 bg-green-dim/50"
        }`}
      >
        <div>
          <div
            className={`mb-1 font-mono text-[0.6rem] uppercase tracking-[0.15em] ${
              isBlue ? "text-secondary" : "text-primary"
            }`}
          >
            {deliverableLabel}
          </div>
          <div className="text-[0.9rem] font-medium text-foreground">
            {deliverableText}
          </div>
        </div>
      </div>
    </article>
  )
}

export function Layers() {
  return (
    <section
      id="layers"
      className="bg-navy-2 py-[90px]"
      aria-labelledby="layers-heading"
    >
      <div className="container-narrow relative z-10">
        <SectionLabel>What You Will Build</SectionLabel>
        <h2
          id="layers-heading"
          className="font-display text-[clamp(2rem,4vw,3.8rem)] leading-tight tracking-[0.04em]"
        >
          Six modules.
          <br />
          <span className="text-primary">Six deliverables.</span>
        </h2>
        <p className="mt-3 max-w-[560px] text-base text-muted-foreground">
          Every module ends with a real document in your hands — not notes, not
          highlights. Something you complete and use for every campaign from this
          point forward.
        </p>

        <div className="mt-12">
          {layers.map((layer) => (
            <LayerCard key={layer.number} {...layer} />
          ))}
        </div>
      </div>
    </section>
  )
}
