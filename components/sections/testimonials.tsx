import { SectionLabel } from "@/components/section-label"

const testimonials = [
  {
    text: "I've done other marketing courses that taught me the platform. The STACK was the first thing that taught me the thinking. My second campaign outperformed my best previous result because I finally understood why things work.",
    author: "Adaeze O.",
    role: "E-commerce business owner",
  },
  {
    text: "I now use the Customer Story Profile with every single client before I touch their ad account. It changed what I can charge because it changed what I can deliver. This is the process I was missing.",
    author: "Chukwuemeka B.",
    role: "Digital marketing freelancer",
  },
  {
    text: "I was about to give up on Facebook ads entirely. After the STACK I ran the same product to the same platform with a different foundation. The results were not even comparable. The problem was never the ads.",
    author: "Funmilayo A.",
    role: "Service business owner",
  },
]

function TestimonialCard({
  text,
  author,
  role,
}: {
  text: string
  author: string
  role: string
}) {
  return (
    <article className="relative border border-border bg-navy-2 px-6 py-7">
      {/* Quote mark */}
      <div
        className="pointer-events-none absolute left-4 top-2 select-none font-serif text-[4rem] leading-none text-primary opacity-20"
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <blockquote className="mb-4 pt-[18px] text-[0.9rem] italic leading-relaxed text-muted-foreground">
        {text}
      </blockquote>
      <footer>
        <cite className="not-italic">
          <div className="text-[0.82rem] font-semibold text-foreground">
            {author}
          </div>
          <div className="mt-0.5 font-mono text-[0.75rem] text-muted-foreground">
            {role}
          </div>
        </cite>
      </footer>
    </article>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-navy-2 py-[90px]"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-narrow relative z-10">
        <SectionLabel>Real Results</SectionLabel>
        <h2
          id="testimonials-heading"
          className="font-display text-[clamp(2rem,4vw,3.8rem)] leading-tight tracking-[0.04em]"
        >
          What people are saying
          <br />
          <span className="text-primary">after building their STACK.</span>
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
