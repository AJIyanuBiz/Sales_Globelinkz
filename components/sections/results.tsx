import { SectionLabel } from "@/components/section-label"

interface Metric {
  value: string
  label: string
  variant?: "green" | "blue" | "white"
  span?: boolean
}

interface AdCardProps {
  platform: string
  location: string
  duration: string
  status: "active" | "completed"
  tags: { label: string; variant: "green" | "blue" }[]
  name: string
  objective: string
  metrics: Metric[]
  testimonial: string
  variant?: "green" | "blue"
}

const campaignResults: AdCardProps[] = [
  {
    platform: "Women's Fashion Store",
    location: "Lagos",
    duration: "Sales Campaign · 30 Days",
    status: "completed",
    tags: [
      { label: "Fashion · Nigeria", variant: "green" },
      { label: "E-commerce", variant: "green" },
    ],
    name: "Women's Ready-To-Wear Collection Drop",
    objective: "Objective: Purchases · Ad Spend: ₦320,000",
    metrics: [
      { value: "₦2,560,000", label: "Total Cash Generated", variant: "green", span: true },
      { value: "128", label: "Orders Placed", variant: "green" },
      { value: "8x", label: "Return On Ad Spend", variant: "green" },
      { value: "₦20,000", label: "Avg Order Value", variant: "white" },
      { value: "₦2,500", label: "Cost Per Purchase", variant: "white" },
    ],
    testimonial:
      "I was getting maybe 8 sales a month and I thought my product just wasn't good enough. Then I rebuilt everything from the customer story. 128 orders in one month. Same products. Same platform. I just finally understood who I was talking to.",
    variant: "green",
  },
  {
    platform: "Digital Marketing Agency",
    location: "Texas",
    duration: "Lead Generation · 45 Days",
    status: "active",
    tags: [
      { label: "Agency · United States", variant: "blue" },
      { label: "High Ticket B2B", variant: "blue" },
    ],
    name: "Done-For-You Facebook Ads Management",
    objective: "Objective: Leads → Sales Calls · Ad Spend: $7,400",
    metrics: [
      { value: "$46,800", label: "Revenue Closed — Month 1", variant: "blue", span: true },
      { value: "12", label: "Clients Signed", variant: "blue" },
      { value: "6.3x", label: "Return On Ad Spend", variant: "blue" },
      { value: "$3,900", label: "Avg Client Value", variant: "white" },
      { value: "$617", label: "Cost Per Client", variant: "white" },
    ],
    testimonial:
      "We'd tried Facebook ads before and kept getting people who couldn't afford us. The Transform layer changed our copy completely — we stopped describing what we do and started describing the exact frustration our clients feel. 12 signed clients in 45 days.",
    variant: "blue",
  },
  {
    platform: "Skincare Brand",
    location: "California",
    duration: "Conversion Campaign · 30 Days",
    status: "completed",
    tags: [
      { label: "Skincare · United States", variant: "blue" },
      { label: "E-commerce", variant: "blue" },
    ],
    name: "Anti-Ageing Bundle — 3-Month Supply",
    objective: "Objective: Purchases · Ad Spend: $5,800",
    metrics: [
      { value: "$51,709", label: "Total Cash Generated", variant: "blue", span: true },
      { value: "623", label: "Orders Placed", variant: "blue" },
      { value: "8.9x", label: "Return On Ad Spend", variant: "blue" },
      { value: "$83", label: "Avg Order Value", variant: "white" },
      { value: "$9.31", label: "Cost Per Purchase", variant: "white" },
    ],
    testimonial:
      "We stopped discounting and restructured the offer as a bundle instead. The Attract layer showed me that our pricing wasn't the problem — what we were selling was. $51K in one month from $5,800 in spend. I was shaking when I saw those numbers.",
    variant: "blue",
  },
  {
    platform: "Event Planning Business",
    location: "Abuja",
    duration: "WhatsApp Campaign · 21 Days",
    status: "active",
    tags: [
      { label: "Events · Nigeria", variant: "green" },
      { label: "Service Business", variant: "green" },
    ],
    name: "Corporate Events & Private Celebrations",
    objective: "Objective: WhatsApp Inquiries · Ad Spend: ₦145,000",
    metrics: [
      { value: "₦3,150,000", label: "Revenue Generated · 9 Bookings", variant: "green", span: true },
      { value: "112", label: "WhatsApp Inquiries", variant: "green" },
      { value: "21.7x", label: "Return On Ad Spend", variant: "green" },
      { value: "₦350,000", label: "Avg Booking Value", variant: "white" },
      { value: "₦1,295", label: "Cost Per Message", variant: "white" },
    ],
    testimonial:
      "I never believed ads would work for my kind of business. But when I changed my copy from talking about my décor to talking about how I make people feel on the most important days of their lives — everything shifted. 9 bookings in 3 weeks. ₦3.1 million.",
    variant: "green",
  },
]

function AdCard({
  platform,
  location,
  duration,
  status,
  tags,
  name,
  objective,
  metrics,
  testimonial,
  variant = "green",
}: AdCardProps) {
  const isBlue = variant === "blue"

  return (
    <article
      className={`overflow-hidden border bg-navy-2 transition-colors duration-200 ${
        isBlue
          ? "border-secondary/25 hover:border-secondary/50"
          : "border-border hover:border-primary/40"
      }`}
    >
      {/* Header */}
      <div
        className={`flex flex-wrap items-center justify-between gap-2 border-b border-border px-5 py-4 ${
          isBlue ? "bg-secondary/5" : "bg-foreground/[0.03]"
        }`}
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-facebook text-xs font-bold text-foreground">
            f
          </div>
          <div>
            <div className="text-[0.8rem] font-semibold text-foreground">
              {platform} · {location}
            </div>
            <div className="font-mono text-[0.72rem] text-muted-foreground">
              {duration}
            </div>
          </div>
        </div>
        <span
          className={`rounded-full border px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.12em] ${
            status === "active"
              ? "border-primary/35 bg-primary/15 text-primary"
              : "border-secondary/35 bg-secondary/10 text-secondary"
          }`}
        >
          {status === "active" ? "Active" : "Completed"}
        </span>
      </div>

      {/* Body */}
      <div className="p-5">
        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className={`rounded-sm border px-2 py-0.5 font-mono text-[0.56rem] uppercase tracking-[0.1em] ${
                tag.variant === "blue"
                  ? "border-secondary/40 text-secondary"
                  : "border-primary/40 text-primary"
              }`}
            >
              {tag.label}
            </span>
          ))}
        </div>

        <h3 className="mb-1 text-[0.92rem] font-bold text-foreground">{name}</h3>
        <p className="mb-4 font-mono text-[0.72rem] text-muted-foreground">
          {objective}
        </p>

        {/* Metrics Grid */}
        <div className="mb-4 grid grid-cols-2 gap-2.5">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className={`border bg-foreground/[0.03] p-3 ${metric.span ? "col-span-2" : ""} ${
                metric.span
                  ? isBlue
                    ? "border-secondary/35 bg-secondary/5"
                    : "border-primary/35 bg-primary/5"
                  : "border-border"
              }`}
            >
              <div
                className={`font-display leading-none ${
                  metric.span ? "text-[2rem]" : "text-[1.5rem]"
                } ${
                  metric.variant === "green"
                    ? "text-primary"
                    : metric.variant === "blue"
                      ? "text-secondary"
                      : "text-foreground"
                }`}
              >
                {metric.value}
              </div>
              <div className="mt-0.5 font-mono text-[0.62rem] uppercase tracking-[0.08em] text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <p className="border-t border-border pt-4 text-[0.82rem] italic leading-relaxed text-muted-foreground">
          &ldquo;{testimonial}&rdquo;
        </p>
      </div>
    </article>
  )
}

export function Results() {
  return (
    <section
      id="results"
      className="bg-navy-2 py-[90px]"
      aria-labelledby="results-heading"
    >
      <div className="container-narrow relative">
        <SectionLabel>It Works. Here&apos;s Proof.</SectionLabel>
        <h2
          id="results-heading"
          className="mb-4 font-display text-[clamp(2rem,4vw,3.2rem)] leading-tight tracking-[0.04em]"
        >
          Real campaigns. Real money.
          <br />
          <span className="text-gradient">Built on the STACK.</span>
        </h2>
        <p className="mb-10 max-w-[640px] text-[0.98rem] leading-relaxed text-muted-foreground">
          These aren&apos;t the biggest numbers anyone&apos;s ever posted.
          They&apos;re honest, everyday results from regular people — in Nigeria
          and internationally — who built their foundation before they spent.
          Some are in naira. Some crossed $40,000 in USD. All of them used the
          same system you&apos;re about to get.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {campaignResults.map((result) => (
            <AdCard key={result.name} {...result} />
          ))}
        </div>

        {/* Callout */}
        <div className="mt-7 grid items-center gap-6 border border-primary/35 bg-primary/5 p-7 md:grid-cols-[auto_1fr]">
          <div className="text-[2.5rem] leading-none" aria-hidden="true">
            💡
          </div>
          <div>
            <h3 className="mb-2 font-display text-[1.5rem] tracking-[0.04em]">
              So what did they all do differently?
            </h3>
            <p className="text-[0.92rem] leading-relaxed text-muted-foreground">
              None of them found a secret audience. None of them had a bigger
              budget. They stopped guessing and started building — a customer
              story, a transformation, a proper offer, words that actually
              connect, and a system that keeps customers after the sale.
              That&apos;s five layers. That&apos;s the STACK. And every one of
              those results happened because someone took the time to build it
              first.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
