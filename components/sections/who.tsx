import { SectionLabel } from "@/components/section-label"

const personas = [
  {
    icon: "🚀",
    title: "The Beginner",
    description:
      "You haven't run your first ad yet — or you've only just started and haven't found your feet. Good. You're about to skip the most expensive part of learning Facebook ads: the part where you spend money to figure out what doesn't work. Build the STACK first and your first real campaign starts from a position it takes most people years of pain and money to reach.",
  },
  {
    icon: "💼",
    title: "The Freelancer or Agency Owner",
    description:
      "You manage ads for clients but something always feels like it's missing — a process, a methodology, something you can actually explain. When a serious client asks \"what's your process?\" right now, what do you say? The STACK gives you a real answer to that question. One that changes the kind of clients you attract and what you can charge them.",
  },
  {
    icon: "🏢",
    title: "The Business Owner",
    description:
      "You've put real money into ads. Some worked, most didn't, and you're not entirely sure why either happened. You're tired of feeling like you're just guessing. The STACK shows you exactly what was missing — and gives you a way of thinking about your campaigns that makes the next one feel completely different from every one that came before it.",
  },
]

function WhoCard({
  icon,
  title,
  description,
}: {
  icon: string
  title: string
  description: string
}) {
  return (
    <article className="group relative overflow-hidden border border-border bg-background p-7 transition-colors duration-300 hover:border-secondary">
      {/* Bottom gradient line on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px] origin-left scale-x-0 bg-gradient-brand transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden="true"
      />

      <div className="mb-3.5 text-[1.8rem]" role="img" aria-label={title}>
        {icon}
      </div>
      <h3 className="mb-2 font-display text-[1.3rem] tracking-[0.04em]">
        {title}
      </h3>
      <p className="text-[0.87rem] leading-relaxed text-muted-foreground">
        {description}
      </p>
    </article>
  )
}

export function Who() {
  return (
    <section
      id="who"
      className="bg-navy-2 py-20"
      aria-labelledby="who-heading"
    >
      <div className="container-narrow relative ">
        <SectionLabel>Is This You?</SectionLabel>
        <h2
          id="who-heading"
          className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-tight tracking-[0.04em]"
        >
          Three types of people
          <br />
          <span className="text-gradient">who need this right now.</span>
        </h2>

        <div className="mt-11 grid gap-5 md:grid-cols-3">
          {personas.map((persona) => (
            <WhoCard key={persona.title} {...persona} />
          ))}
        </div>
      </div>
    </section>
  )
}
