import type { Metadata } from 'next';

const COMMUNITY_URL = 'https://www.skool.com/bravebrand/about';

export const metadata: Metadata = {
  title: 'About — Digital Home Starter',
  description: 'Your About page. Add your origin story, beliefs, team, and proof.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-20 flex flex-col justify-center">
      <div className="max-w-[900px] mx-auto w-full">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-white/40 mb-6">
          About page
        </p>

        <h1 className="text-4xl md:text-6xl xl:text-7xl font-semibold tracking-[-0.065em] text-white leading-[0.95] mb-6">
          This page needs
          <br />
          your story.
        </h1>

        <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed mb-14">
          The About page is one of the strongest trust-builders on the site. Replace this
          with the origin, perspective, and proof that only your brand can tell.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 mb-14">
          {[
            ['Origin', 'The story behind the work and what pulled you into it.'],
            ['Beliefs', 'The ideas you want people to associate with your brand.'],
            ['Team', 'The people behind the work and why they matter.'],
            ['Proof', 'Results, credentials, or testimonials that make the story credible.'],
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
            Need help shaping your brand story?{' '}
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
