"use client"

import { useState } from "react"
import { SectionLabel } from "@/components/section-label"

const faqs = [
  {
    question: "Is this about how to use Facebook Ads Manager?",
    answer:
      "Not primarily. There is a full module on applying your STACK inside the ads manager. But the TCSS is about the thinking that has to come before the platform. If you want button tutorials, this isn't it. If you want a system that determines whether your campaigns have any real chance of working — this is exactly it.",
  },
  {
    question: "I already run ads. Will this still be useful?",
    answer:
      "Especially useful. If you already run ads, you know the frustration of inconsistent results you can't fully explain. The STACK gives you a diagnostic framework — so you can identify which layer is underperforming and fix it, instead of adjusting the same surface-level settings and hoping for different results.",
  },
  {
    question: "Why is the founding price so much lower?",
    answer:
      "We want the first 50 people who should have this system to have it at a price they can act on immediately. After the 50th spot is filled, the price returns to ₦70,000 permanently. The founding price is not a discount — it is a specific offer for a specific number of people. Once it is gone, it is gone.",
  },
  {
    question: "How long does it take to complete?",
    answer:
      "Most people complete all six modules and their deliverables in a focused weekend or across a week of evening sessions. The reading isn't long — the building takes as long as it takes to do it properly. A STACK built correctly in seven days outperforms a STACK rushed in three hours every single time.",
  },
  {
    question: "Can I use this for client work?",
    answer:
      'Yes — and this is one of the most powerful applications. The STACK becomes the methodology you present to every client. Run the deliverables as a client onboarding process. The Customer Story Profile alone changes what you can charge because it changes what you can deliver. When a serious client asks "what is your process?" — you now have an answer.',
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
        className="flex w-full items-center justify-between gap-4 bg-transparent py-[22px] text-left text-[0.95rem] font-medium text-foreground transition-colors hover:text-primary"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {question}
        <span
          className={`shrink-0 font-mono text-[1.2rem] text-primary transition-transform duration-200 ${
            isOpen ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[400px] pb-5" : "max-h-0"
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
      className="bg-navy-2 py-[90px]"
      aria-labelledby="faq-heading"
    >
      <div className="container-narrow relative z-10">
        <SectionLabel>Questions</SectionLabel>
        <h2
          id="faq-heading"
          className="font-display text-[clamp(2rem,4vw,3.8rem)] leading-tight tracking-[0.04em]"
        >
          Before you decide.
        </h2>

        <div className="mt-12">
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
