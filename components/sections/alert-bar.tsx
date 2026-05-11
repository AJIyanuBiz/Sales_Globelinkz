export function AlertBar() {
  return (
    <div
      className="relative z-10 bg-gradient-brand px-6 py-3 text-center font-mono text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-navy"
      role="alert"
      aria-live="polite"
    >
      <span className="mr-2 inline-block animate-blink" aria-hidden="true">
        ⚡
      </span>
      FOUNDING PRICE CLOSING SOON — ONLY 50 SPOTS AT ₦15,000 · PRICE RETURNS TO
      ₦70,000
    </div>
  )
}
