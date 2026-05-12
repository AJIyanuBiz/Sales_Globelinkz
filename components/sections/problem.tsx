import { SectionLabel } from "@/components/section-label"

const painPoints = [
  "Every tutorial you've watched taught you how to use the platform. Nobody taught you what to build before you touch it.",
  "Your ads are talking about your product. Your customer only cares about themselves — and they'll scroll right past anything that isn't obviously about their life.",
  "Your offer might be good. But \"good\" isn't enough if it's not structured in a way that makes saying yes feel easy and safe.",
  "When a campaign fails, you have no idea which part broke. So you change three things at once and still don't learn anything.",
  "You get a customer — and then they disappear. Because there's nothing on the other side of the sale pulling them back.",
]

export function Problem() {
  return (
    <section
      id="problem"
      className="bg-navy-2 py-20"
      aria-labelledby="problem-heading"
    >
      <div className="container-narrow relative z-10">
        <SectionLabel>Let&apos;s Be Honest</SectionLabel>
        <h2
          id="problem-heading"
          className="mb-9 mt-3 font-display text-[clamp(1.8rem,3.5vw,3rem)] leading-tight tracking-[0.03em]"
        >
          You&apos;ve tried.
          <br />
          You&apos;ve spent.
          <br />
          <span className="text-gradient">
            And you&apos;re still not getting
            <br />
            the results you deserve.
          </span>
        </h2>

        <p className="mb-7 text-[1.02rem] leading-relaxed text-muted-foreground">
          Here&apos;s the part nobody tells you. The people getting amazing
          results from Facebook ads — the ones posting screenshots, the ones
          whose campaigns seem to just work — they&apos;re not doing something
          magical. They&apos;re not spending more than you. Most of them
          aren&apos;t even more experienced. They just know something you
          don&apos;t know yet. And after today, you will too.
        </p>

        <div className="my-7 border-l-[3px] border-secondary bg-secondary/6 px-6 py-5">
          <p className="text-base italic leading-relaxed text-muted-foreground">
            You open Ads Manager. You set the budget, pick an audience, write
            something that sounds decent, and press publish. You wait. Some
            clicks come in. Maybe one or two sales. Then it goes quiet. So you
            tweak the audience. Change the image. Try a new headline. Nothing.
            Another campaign. Another spend. Same result. And somewhere in the
            back of your mind you start wondering — am I just not cut out for
            this?
          </p>
        </div>

        <p className="mb-5 text-base font-semibold text-foreground">
          You are cut out for it. The problem isn&apos;t you. Here&apos;s
          what&apos;s actually going wrong:
        </p>

        <ul
          className="my-7 flex list-none flex-col gap-3"
          role="list"
          aria-label="Common pain points"
        >
          {painPoints.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3.5 border border-border bg-white/[0.025] px-5 py-4 text-[0.94rem] leading-normal text-muted-foreground"
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

        <div className="mt-10 border border-primary/15 bg-primary/4 px-7 py-8">
          <p className="text-[1.05rem] leading-relaxed text-foreground">
            Think about how much you&apos;ve spent on ads that didn&apos;t work.
            Not just the money — the time. The late nights setting up campaigns.
            The excitement of pressing publish. The disappointment when results
            come back flat. The conversations you&apos;ve had with yourself
            wondering if you&apos;re doing something wrong.
          </p>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-muted-foreground">
            All of that had nothing to do with your product, your audience size,
            or your budget. It had everything to do with what you did — or
            didn&apos;t do — before you launched.{" "}
            <strong className="text-foreground">
              That&apos;s what we&apos;re going to fix.
            </strong>
          </p>
        </div>
      </div>
    </section>
  )
}
