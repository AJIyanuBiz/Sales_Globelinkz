import { SectionLabel } from "@/components/section-label"

const personas = [
  {
    icon: "🚀",
    title: "The Beginner",
    description:
      "You're ready to start running ads but haven't spent real money yet. The STACK saves you from the most expensive phase of learning — discovering what doesn't work before you understand why. Start with a foundation and your first campaign performs differently from day one.",
  },
  {
    icon: "💼",
    title: "The Freelancer / Agency",
    description:
      "You've been inside enough accounts to know the campaigns that work have something underneath them that the disappointing ones don't. The STACK gives you a methodology — a repeatable, client-facing process that answers the question every serious client asks: what is your process?",
  },
  {
    icon: "🏢",
    title: "The Business Owner",
    description:
      "You've spent real money on advertising. Some produced results. Most produced less than expected and more questions than answers. This shows you what was missing — and gives you a framework that makes every future campaign feel less like gambling and more like building something.",
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
    <article className="group relative overflow-hidden border border-border bg-background p-8 transition-colors duration-300 hover:border-secondary">
      {/* Bottom gradient line on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px] origin-left scale-x-0 bg-gradient-brand transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden="true"
      />

      <div className="mb-4 text-[2rem]" role="img" aria-label={title}>
        {icon}
      </div>
      <h3 className="mb-2.5 font-display text-[1.4rem] tracking-[0.04em]">
        {title}
      </h3>
      <p className="text-[0.88rem] leading-relaxed text-muted-foreground">
        {description}
      </p>
    </article>
  )
}

export function Who() {
  return (
    <section
      id="who"
      className="bg-navy-2 py-[90px]"
      aria-labelledby="who-heading"
    >
      <div className="container-narrow relative z-10">
        <SectionLabel>Who This Is For</SectionLabel>
        <h2
          id="who-heading"
          className="font-display text-[clamp(2rem,4vw,3.8rem)] leading-tight tracking-[0.04em]"
        >
          Three people need this.
          <br />
          <span className="text-gradient">You are probably one of them.</span>
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {personas.map((persona) => (
            <WhoCard key={persona.title} {...persona} />
          ))}
        </div>
      </div>
    </section>
  )
}
