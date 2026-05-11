import { SectionLabel } from "@/components/section-label"

const painPoints = [
  "Tutorials teach you to use the platform — but never the thinking that must come before it.",
  "You run campaigns on instinct, can't replicate wins, can't diagnose losses.",
  "You write copy that describes your business instead of speaking to your customer's situation.",
  "You build offers and hope they're compelling — rather than knowing exactly why they are.",
  "Customers arrive and leave because there's no system waiting on the other side.",
]

export function Problem() {
  return (
    <section
      id="problem"
      className="bg-navy-2 py-[90px]"
      aria-labelledby="problem-heading"
    >
      <div className="container-narrow relative z-10">
        <SectionLabel>The Real Problem</SectionLabel>
        <h2
          id="problem-heading"
          className="mb-10 font-display text-[clamp(1.8rem,3.5vw,3rem)] leading-tight tracking-[0.03em]"
        >
          You know how to <span className="text-gradient">use the platform.</span>
          <br />
          You just don&apos;t know why your
          <br />
          campaigns keep underperforming.
        </h2>

        <div className="my-9 border-l-[3px] border-secondary bg-blue-dim/40 px-7 py-6">
          <p className="text-[1.02rem] italic leading-loose text-muted-foreground">
            You launch a campaign. You set the budget. You write a headline that
            sounds good to you. You wait. A few clicks. Maybe a purchase. You
            tell yourself it&apos;s working. Then it slows down. You adjust the
            audience. Try a new creative. Another campaign. The results stay
            inconsistent. You can&apos;t explain the good days or fix the bad
            ones. Somewhere underneath all of it is one uncomfortable truth — you
            are spending money you cannot fully account for.
          </p>
        </div>

        <ul
          className="my-8 flex list-none flex-col gap-3.5"
          role="list"
          aria-label="Common pain points"
        >
          {painPoints.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3.5 border border-border bg-white/[0.03] px-[22px] py-[18px] text-[0.95rem] text-muted-foreground"
            >
              <span
                className="mt-0.5 shrink-0 font-mono text-destructive"
                aria-hidden="true"
              >
                ✕
              </span>
              {point}
            </li>
          ))}
        </ul>

        <p className="mt-7 text-[1.1rem] font-semibold text-foreground">
          The information was never the problem.{" "}
          <span className="text-primary">The foundation was.</span>
        </p>
      </div>
    </section>
  )
}
