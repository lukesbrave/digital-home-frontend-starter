import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact — Digital Home Starter',
  description: 'Use this page to tell people how to reach you, book you, or join your world.',
};

export default function ContactPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between gap-6 pb-6 mb-8 border-b border-white/10 text-[0.72rem] font-medium text-white/45">
            <span>Contact structure</span>
            <span>Simple on purpose</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] items-start">
            <div className="max-w-4xl">
              <p className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[0.78rem] font-medium text-white/60 mb-6">
                Contact
              </p>
              <h1 className="text-5xl md:text-7xl xl:text-[6rem] font-semibold tracking-[-0.075em] text-white leading-[0.95] mb-6">
                Make the next
                <br />
                step feel easy.
              </h1>
              <p className="text-lg md:text-2xl text-neutral-300 max-w-3xl leading-relaxed">
                This page works best when it feels direct, clear, and reassuring. Add the contact paths you
                actually want people to use, then remove anything that creates hesitation.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-3">
              <div className="grid gap-3">
                {[
                  ['Email', 'Use this for direct outreach if you want low-friction conversations.'],
                  ['Calls', 'Link to your booking flow if calls are the main conversion step.'],
                  ['Community', 'Point people toward the place where your world keeps unfolding.'],
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
              Reach out
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.05em] text-white mb-10">
              Keep the path forward simple and obvious.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-white text-2xl font-semibold tracking-[-0.04em] mb-3">Email</h3>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Use your main inbox if you want people to reach you directly without extra friction.
              </p>
              <p className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300">
                hello@yourdomain.com
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-white text-2xl font-semibold tracking-[-0.04em] mb-3">Book a call</h3>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Add your Calendly, Cal.com, or preferred booking flow if a call is the best next step.
              </p>
              <span className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300">
                Add scheduling link
              </span>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-white text-2xl font-semibold tracking-[-0.04em] mb-3">Community</h3>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Link to your newsletter, group, or community if that is where you want ongoing attention.
              </p>
              <span className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300">
                Add community link
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-white/45 mb-6">
            Final polish
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.05em] text-white mb-6">
            When in doubt, make the next action clearer.
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Contact pages perform best when they remove ambiguity. Choose the one or two paths you want,
            write them clearly, and let the rest of the site support that decision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full text-base font-medium bg-white text-black px-8 py-3.5 hover:bg-transparent hover:text-white border border-white transition-all"
            >
              View the about page
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full text-base font-medium bg-transparent text-white px-8 py-3.5 hover:bg-white hover:text-black border border-white/20 transition-all"
            >
              Review services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
