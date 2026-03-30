import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services — Digital Home Starter',
  description: 'Use this page to explain your offers, how they work, and who they are for.',
};

export default function ServicesPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between gap-6 pb-6 mb-8 border-b border-white/10 text-[0.72rem] font-medium text-white/45">
            <span>Offer structure</span>
            <span>Built to customize</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_420px] items-start">
            <div className="max-w-4xl">
              <p className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[0.78rem] font-medium text-white/60 mb-6">
                Services
              </p>
              <h1 className="text-5xl md:text-7xl xl:text-[6.2rem] font-semibold tracking-[-0.075em] text-white leading-[0.95] mb-6">
                Make your offers
                <br />
                easy to understand.
              </h1>
              <p className="text-lg md:text-2xl text-neutral-300 max-w-3xl leading-relaxed">
                This page is designed to help visitors grasp what you do, who it is for, and where to go
                next. Replace the starter copy with your actual offers, outcomes, and call to action.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-3">
              <div className="grid gap-3">
                {[
                  ['Offer one', 'Lead with the main service or flagship transformation you want to sell first.'],
                  ['Offer two', 'Use this space for a second package, advisory layer, or lighter entry point.'],
                  ['Next step', 'Point every offer toward one simple CTA: book, apply, or get in touch.'],
                ].map(([label, note], index) => (
                  <div
                    key={label}
                    className={`rounded-[1.5rem] border border-white/8 px-6 py-5 ${
                      index === 0
                        ? 'bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]'
                        : index === 1
                          ? 'bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]'
                          : 'bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))]'
                    }`}
                  >
                    <span className="inline-flex rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[0.68rem] font-medium text-white/45">
                      {label}
                    </span>
                    <p className="mt-6 max-w-[24ch] text-sm leading-relaxed text-neutral-300">{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-5xl">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-white/45 mb-4">
              Starter offer blocks
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.05em] text-white mb-10">
              Replace these with your real services, outcomes, and process.
            </h2>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            {[
              {
                name: 'Flagship offer',
                desc: 'Use this block for the main offer you want new visitors to understand first.',
                detail: 'Best for the service, program, or engagement that carries the strongest transformation.',
              },
              {
                name: 'Secondary engagement',
                desc: 'Describe a second offer, package, or entry point for a different kind of client.',
                detail: 'This can be a lighter entry point, a diagnostic, or a more focused implementation offer.',
              },
              {
                name: 'Ongoing support',
                desc: 'Explain the support layer, advisory relationship, or retained service that follows the first engagement.',
                detail: 'Use it to show what happens after the first win and how clients continue working with you.',
              },
            ].map((service, index) => (
              <div key={service.name} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
                <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.72rem] font-medium text-white/55">
                  0{index + 1}
                </span>
                <h2 className="mt-5 text-2xl md:text-3xl font-semibold tracking-[-0.04em] text-white">
                  {service.name}
                </h2>
                <p className="mt-4 text-neutral-300 text-lg leading-relaxed">{service.desc}</p>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400">{service.detail}</p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center justify-center rounded-full text-sm font-medium bg-white text-black px-5 py-2.5 hover:bg-transparent hover:text-white border border-white transition-all"
                >
                  Replace with your CTA
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-5xl">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-white/45 mb-4">
              How to use this page
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.05em] text-white mb-10">
              Keep the structure simple and the path forward obvious.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              'Lead with your strongest offer and who it helps.',
              'Use outcomes and benefits more than features or process jargon.',
              'Point everything toward one clear next step.',
            ].map((item, index) => (
              <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-6 py-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-medium text-white/55">
                  0{index + 1}
                </span>
                <p className="mt-6 text-lg leading-relaxed text-neutral-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-white/45 mb-6">
            Next step
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.05em] text-white mb-6">
            Once the offers are clear, the rest of the site gets easier.
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Strong service positioning makes every headline, page, and CTA sharper. Use this page as the
            bridge between your brand story and the next action you want people to take.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full text-base font-medium bg-white text-black px-8 py-3.5 hover:bg-transparent hover:text-white border border-white transition-all"
            >
              View the contact page
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-full text-base font-medium bg-transparent text-white px-8 py-3.5 hover:bg-white hover:text-black border border-white/20 transition-all"
            >
              See the journal
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
