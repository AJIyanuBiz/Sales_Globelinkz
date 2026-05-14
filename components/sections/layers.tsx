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
    body: "Here's the hard truth — your customer doesn't care about you. They care about themselves. They wake up every morning thinking about their own problems, their own goals, their own life. And when they see an ad talking about your journey, your brand, your product features — they scroll. Fast. This module teaches you to get completely inside your customer's head. What do they want? What keeps them up at night? What have they already tried? When you know that — really know it — every word you write hits differently. You'll build a Customer Story Profile that becomes the foundation for literally everything else in the STACK.",
    deliverableLabel: "Your Deliverable",
    deliverableText:
      "The Customer Story Profile — the most important document in your entire marketing system.",
  },
  {
    number: "02",
    tag: "First Floor · Module 02",
    letter: "T",
    title: "Transform",
    body: "Nobody buys a product. They buy what the product does to their life. They buy the feeling of being on the other side of their problem. When you can describe where your customer is right now — and where they desperately want to be — with enough detail and honesty that they stop scrolling and think \"wait, how does this person know exactly how I feel?\" — that's when your ad stops being an ad and starts being a conversation. This module shows you how to find that transformation and name it in a way that creates real urgency. Not fake countdown-timer urgency. Real \"I need this\" urgency.",
    deliverableLabel: "Your Deliverable",
    deliverableText:
      "The Transformation Statement — before and after, written in your customer's own words.",
  },
  {
    number: "03",
    tag: "Second Floor · Module 03",
    letter: "A",
    title: "Attract",
    body: "You can write the best ad in the world and still fail if your offer isn't right. An offer isn't just a price. It's the whole package of what you're asking someone to say yes to — and how easy or scary that feels. Most businesses make the first yes too big, too risky, too much like a commitment before trust is built. This module shows you how to build an offer where the first step feels obvious. And here's one thing this will save you from: cutting your price to make things sell. That's almost never the solution. The structure of your offer is. You'll leave this module with something your competitors almost certainly don't have.",
    deliverableLabel: "Your Deliverable",
    deliverableText:
      "Your Offer Build — a structure that makes saying yes feel like the natural thing to do.",
  },
  {
    number: "04",
    tag: "Third Floor · Module 04",
    letter: "C",
    title: "Convert",
    body: "Now we write. But not in the way most people think of writing ads. This isn't about being clever. It isn't about using big words or pushy language. It's about being so clear, so specific, and so obviously relevant to one person that they feel like you've been watching their life. There are seven building blocks to this — from the first line that earns one more second of attention, to the call-to-action that is specific enough that your reader actually knows what to do next. You'll walk away with a whole library of copy: headlines, opening lines, body copy, CTAs. Ready to test. Ready to run.",
    deliverableLabel: "Your Deliverable",
    deliverableText:
      "Your Copy Library — real ad copy built from all seven building blocks. Ready to go live.",
  },
  {
    number: "05",
    tag: "Top Floor · Module 05",
    letter: "K",
    title: "Keep",
    body: "Most businesses celebrate the sale and forget the customer. The order comes in, the product ships, and that relationship — that person who trusted you enough to give you their money — quietly disappears. And because there's no system waiting for them after the purchase, you have to go back to Facebook and pay to find another stranger all over again. That's expensive. This module builds the Keep system — the emails, the follow-ups, the reasons to come back — that turn a one-time buyer into a loyal customer who tells other people. The businesses making real money from ads aren't just good at getting customers. They're good at keeping them.",
    deliverableLabel: "Your Deliverable",
    deliverableText:
      "Your Keep System — the post-purchase system that turns buyers into people who come back.",
  },
  {
    number: "06",
    tag: "Application · Module 06",
    letter: "",
    title: "Applied — Into the Ads Manager",
    body: "Once your STACK is built, this is where you take it live. Objectives, audiences, creatives, budgets, reading the numbers — all of it becomes much clearer when you have a proper foundation underneath your campaign. You'll also get something most people don't have: a way to diagnose what's wrong when a campaign underperforms. Instead of just changing things randomly and hoping, you'll know exactly which layer to look at first and what to fix. That alone is worth the price of the whole system.",
    deliverableLabel: "Your Deliverable",
    deliverableText:
      "The Campaign Launch Checklist — your STACK verified, your campaign ready to press go.",
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
      className={`relative mb-5 overflow-hidden border bg-navy-2 p-8 transition-colors duration-200 md:px-9 ${
        isBlue
          ? "border-secondary/40 hover:border-secondary/60"
          : "border-border hover:border-primary/30"
      }`}
    >
      {/* Background number */}
      <div
        className="pointer-events-none absolute -top-6 right-4 select-none font-display text-[8rem] leading-none text-primary/[0.04]"
        aria-hidden="true"
      >
        {number}
      </div>

      <div
        className={`mb-2 font-mono text-[0.6rem] uppercase tracking-[0.18em] ${
          isBlue ? "text-secondary" : "text-primary"
        }`}
      >
        {tag}
      </div>

      <h3 className="mb-2.5 font-display text-[1.9rem] tracking-[0.04em]">
        {letter && <span className="text-gradient">{letter}</span>}
        {letter ? ` — ${title}` : title}
      </h3>

      <p className="mb-5 max-w-[660px] text-[0.95rem] leading-relaxed text-muted-foreground">
        {body}
      </p>

      <div
        className={`flex items-start gap-2.5 border p-4 ${
          isBlue
            ? "border-secondary/25 bg-secondary/7"
            : "border-primary/22 bg-primary/7"
        }`}
      >
        <div>
          <div
            className={`mb-0.5 font-mono text-[0.58rem] uppercase tracking-[0.13em] ${
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
      className="bg-navy-2 py-20"
      aria-labelledby="layers-heading"
    >
      <div className="container-narrow relative">
        <SectionLabel>What You&apos;ll Build</SectionLabel>
        <h2
          id="layers-heading"
          className="mt-3 mb-10 font-display text-[clamp(2rem,4vw,3rem)] leading-tight tracking-[0.04em]"
        >
          Six modules.
          <br />
          <span className="text-primary">Six things you keep and use forever.</span>
        </h2>

        <div>
          {layers.map((layer) => (
            <LayerCard key={layer.number} {...layer} />
          ))}
        </div>
      </div>
    </section>
  )
}
