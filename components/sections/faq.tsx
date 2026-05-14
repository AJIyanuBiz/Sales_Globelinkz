"use client"

import { useState } from "react"
import { SectionLabel } from "@/components/section-label"

const faqs = [
  {
    question: "I've never run a Facebook ad in my life. Is this too advanced for me?",
    answer:
      "Honestly? This is the best time to learn it. The STACK is about the thinking that comes before you run ads — so if you build it before your first campaign, you start with an advantage most advertisers never get. You don't need experience to do this. You just need to be willing to follow five layers in order. Beginners who start with the STACK skip years of expensive trial and error.",
  },
  {
    question: "I'm not a writer. Can I still write good copy with this?",
    answer:
      "Writing good ads has almost nothing to do with being a \"writer.\" It has everything to do with understanding your customer well enough to describe their situation back to them. The Copy module gives you seven building blocks — a structure you follow, not a talent you're born with. If you can have a conversation, you can write copy using this system.",
  },
  {
    question: "What if I don't have a big ad budget to work with?",
    answer:
      "A small budget built on a solid STACK will consistently outperform a large budget with no foundation. That's not wishful thinking — it's just math. The STACK makes every naira you spend more effective because you know exactly who you're targeting, what you're saying, and why. You don't need to outspend anyone. You need to out-think them.",
  },
  {
    question: "I sell a service, not a product. Does this still apply to me?",
    answer:
      "Completely. The STACK isn't built around products or e-commerce — it's built around people. The customer story, the transformation, the offer, the copy, the keep system — every single layer works whether you're selling clothing, coaching, event planning, real estate, consulting, or anything else. Services actually tend to benefit the most from the Story and Transform layers because that's where service businesses usually struggle most.",
  },
  {
    question: "I've bought marketing courses before and nothing worked. Why is this different?",
    answer:
      "Most courses teach you how to use the platform — the buttons, the targeting options, the metrics. The STACK teaches you what to build before you touch any of that. That's the gap. You weren't learning the wrong things necessarily. You were just learning them in the wrong order. This is the part that comes first. Everything you've already learned becomes more powerful once the foundation is under it.",
  },
  {
    question: "Do I need a website or an online store to use the STACK?",
    answer:
      "No. The STACK works whether you're sending traffic to a website, a WhatsApp number, a landing page, a DM, or a physical location. The foundation — your customer story, your transformation, your offer, your copy — is the same regardless of where the click goes. You'll learn how to apply it to your specific situation in the Applied module.",
  },
  {
    question: "Is this only about Facebook, or does it work on Instagram and other platforms too?",
    answer:
      "The five layers of the STACK — Story, Transform, Attract, Convert, Keep — work on any platform where you're trying to communicate with a potential customer. The Applied module focuses on Facebook and Instagram specifically. But the thinking behind it applies to email marketing, TikTok ads, Google ads, or any other channel you run. Good marketing thinking doesn't belong to any one platform.",
  },
  {
    question: "I already run ads. Will this still help me?",
    answer:
      "Especially yes. If you already run ads, the STACK gives you something you almost certainly don't have right now: a way to diagnose what's broken. When a campaign underperforms, instead of guessing which thing to change, you'll know exactly which layer to look at first. That alone — having a real diagnostic framework — changes everything about how you run campaigns going forward.",
  },
  {
    question: "Why is the founding price so much lower than normal?",
    answer:
      "Simple. We want the first 50 people who need this to get it at a price they can act on today without overthinking it. Once the 50th spot is filled, it goes to ₦70,000 permanently — and that's where it stays. The founding price isn't a sale or a promotion. It's a one-time thing for a specific number of people. There are 14 spots left. When they're gone, that's it.",
  },
  {
    question: "What if I start it and don't finish?",
    answer:
      "You get lifetime access — so you can go at your own pace. But here's the honest truth: the people who get results are the ones who actually build the deliverables. Reading the modules is not the same as building the STACK. If you read and don't build, you'll have good ideas and the same results. If you build — layer by layer, deliverable by deliverable — something real changes. Most people finish in a weekend when they treat it seriously.",
  },
]

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-border">
      <button
        className="flex w-full items-center justify-between gap-3.5 bg-transparent py-5 text-left text-[0.93rem] font-medium text-foreground transition-colors hover:text-primary"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {question}
        <span
          className={`shrink-0 font-mono text-[1.1rem] text-primary transition-transform duration-200 ${
            isOpen ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ${
          isOpen ? "max-h-[500px] pb-5" : "max-h-0"
        }`}
      >
        <p className="text-[0.9rem] leading-relaxed text-muted-foreground">
          {answer}
        </p>
      </div>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      id="faq"
      className="bg-navy-2 py-20"
      aria-labelledby="faq-heading"
    >
      <div className="container-narrow relative">
        <SectionLabel>Got Questions?</SectionLabel>
        <h2
          id="faq-heading"
          className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-tight tracking-[0.04em]"
        >
          Let me answer them.
        </h2>

        <div className="mt-10">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
