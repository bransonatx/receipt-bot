const features = [
  "DMs people on Slack who made a purchase on a staff card and asks for the receipt",
  "Accepts photos, screenshots, PDFs, and invoices",
  "Shows a “Looks good / Something's wrong” confirmation before filing anything",
  "Uploads the receipt and memo to the matching Ramp transaction",
  "Tracks recurring charges (weekly, monthly, yearly) and reminds each cycle until canceled",
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-16 px-6 py-16 sm:gap-20 sm:px-8 sm:py-24">
        <header className="flex flex-col gap-8">
          <img
            src="/icon.png"
            alt="Receipt Bot"
            width={256}
            height={256}
            className="h-20 w-20 rounded-3xl shadow-lg shadow-black/40 sm:h-24 sm:w-24"
          />
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                Receipt Bot
              </h1>
              <p className="rounded-full bg-[#10b981]/15 px-3 py-1 text-sm font-medium text-[#10b981]">
                In development
              </p>
            </div>
            <p className="max-w-xl text-xl leading-relaxed text-slate-200 sm:text-2xl">
              Keeps company cards unlocked by collecting receipts automatically.
            </p>
          </div>
        </header>

        <section className="flex flex-col gap-5" aria-labelledby="what-it-does">
          <h2
            id="what-it-does"
            className="text-sm font-semibold tracking-widest text-[#10b981] uppercase"
          >
            What it does
          </h2>
          <ol className="flex flex-col gap-4">
            {features.map((feature, index) => (
              <li
                key={feature}
                className="flex gap-4 rounded-2xl bg-[#1f2937] p-5 sm:p-6"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#10b981] text-sm font-semibold text-[#0f172a]">
                  {index + 1}
                </span>
                <p className="text-base leading-relaxed text-slate-100 sm:text-lg">
                  {feature}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="rounded-2xl border border-[#10b981]/30 bg-[#1f2937] p-6 sm:p-8"
          aria-labelledby="privacy"
        >
          <h2 id="privacy" className="text-lg font-semibold text-white">
            Privacy
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-200 sm:text-lg">
            Only works for approved staff, never posts in channels, and only
            DMs people a staff member names.
          </p>
        </section>

        <section className="flex flex-col gap-3" aria-labelledby="contact">
          <h2
            id="contact"
            className="text-sm font-semibold tracking-widest text-[#10b981] uppercase"
          >
            Contact
          </h2>
          <p className="text-lg text-white">Branson Pfiester</p>
          <a
            className="w-fit text-lg text-[#10b981] underline decoration-[#10b981]/40 underline-offset-4 hover:decoration-[#10b981]"
            href="mailto:branson.pfiester@alpha.school"
          >
            branson.pfiester@alpha.school
          </a>
        </section>

        <footer className="border-t border-white/10 pt-8 text-sm text-slate-400">
          © 2026 Receipt Bot
        </footer>
      </main>
    </div>
  );
}
