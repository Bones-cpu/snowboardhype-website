const faqs = [
  {
    q: "Do I need my own snowboard equipment?",
    a: "Not at all. Most beginners hire equipment, and I'll guide you on exactly what you need. If you're keen to buy, I'm happy to advise on the right gear for your level.",
  },
  {
    q: "What should I wear?",
    a: "Warm, waterproof layers, gloves, and a helmet (which can usually be hired). Avoid jeans or cotton. I'll send simple clothing tips ahead of your lesson so you're comfortable all day.",
  },
  {
    q: "Are lessons suitable for complete beginners?",
    a: "Absolutely — beginners are my speciality. Lessons start from the very basics in a calm, supportive way, so no experience is needed whatsoever.",
  },
  {
    q: "Can families or groups book together?",
    a: "Yes. Group, family and kids' sessions are all available and are a fun, great-value way to learn together at a shared pace.",
  },
  {
    q: "Which resorts do you teach at?",
    a: "I teach at a range of resorts and indoor/dry slopes. Let me know your preferred location in the enquiry form and I'll confirm availability.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="bg-muted/50">
      <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Good to know
          </span>
          <h2 className="font-heading text-3xl font-black leading-tight tracking-tight text-balance sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-heading text-base font-bold marker:content-none">
                {faq.q}
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-muted text-foreground/70 transition-transform group-open:rotate-45">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="size-4"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
