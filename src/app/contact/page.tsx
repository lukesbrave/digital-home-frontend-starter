import type { Metadata } from 'next';

const COMMUNITY_URL = 'https://www.skool.com/bravebrand/about';

export const metadata: Metadata = {
  title: 'Contact — Digital Home Starter',
  description: 'Your Contact page. Add your real contact paths.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-20 flex flex-col justify-center">
      <div className="max-w-[900px] mx-auto w-full">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-white/40 mb-6">
          Contact page
        </p>

        <h1 className="text-4xl md:text-6xl xl:text-7xl font-semibold tracking-[-0.065em] text-white leading-[0.95] mb-6">
          This page needs
          <br />
          your contact paths.
        </h1>

        <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed mb-14">
          The Contact page works best when it removes ambiguity. Add the one or two paths
          you actually want people to use, then remove anything that creates hesitation.
        </p>

        <div className="grid gap-4 sm:grid-cols-3 mb-14">
          {[
            ['Email', 'Your main inbox for direct, low-friction conversations.'],
            ['Booking', 'A Calendly, Cal.com, or scheduling link if calls are the conversion step.'],
            ['Community', 'A newsletter, group, or community where the relationship continues.'],
          ].map(([label, note]) => (
            <div
              key={label}
              className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-5 py-5"
            >
              <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.65rem] font-mono uppercase tracking-[0.12em] text-white/45 mb-4">
                {label}
              </span>
              <p className="text-sm text-neutral-400 leading-relaxed">{note}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-sm text-neutral-400 leading-relaxed">
            Need help with your contact flow?{' '}
            <a
              href={COMMUNITY_URL}
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              Get guidance in the community &rarr;
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
