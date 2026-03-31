import Link from 'next/link';

const COMMUNITY_URL = 'https://www.skool.com/bravebrand/about';
const PROMPT_BUILDER_URL = 'https://prompt-builder-pink.vercel.app';

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-20 flex flex-col justify-center">
      <div className="max-w-[1100px] mx-auto w-full">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-white/40 mb-6">
          Your Digital Home
        </p>

        <h1 className="text-5xl md:text-7xl xl:text-[6.5rem] font-semibold tracking-[-0.075em] text-white leading-[0.94] mb-6">
          Your foundation
          <br />
          is ready.
        </h1>

        <p className="text-lg md:text-2xl text-neutral-400 max-w-2xl leading-relaxed mb-16">
          The database, API routes, publishing pipeline, and SEO infrastructure are
          already wired. Your brand, copy, and design are what make it yours.
        </p>

        <div className="grid gap-4 sm:grid-cols-3 mb-16">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-6 py-6">
            <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.65rem] font-mono uppercase tracking-[0.12em] text-white/45 mb-5">
              Already running
            </span>
            <h3 className="text-white text-lg font-medium tracking-[-0.02em] mb-2">
              Database &amp; API
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Supabase schema, API routes, auth, middleware, and visitor tracking.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-6 py-6">
            <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.65rem] font-mono uppercase tracking-[0.12em] text-white/45 mb-5">
              Already running
            </span>
            <h3 className="text-white text-lg font-medium tracking-[-0.02em] mb-2">
              Publishing pipeline
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Content calendar, AI writing skills, GitHub Actions for daily publishing.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-6 py-6">
            <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.65rem] font-mono uppercase tracking-[0.12em] text-white/45 mb-5">
              Already running
            </span>
            <h3 className="text-white text-lg font-medium tracking-[-0.02em] mb-2">
              SEO &amp; schema
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              JSON-LD, llms.txt, robots.txt, structured data from your entities table.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-white/40 mb-6">
            Your next steps
          </p>

          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <h3 className="text-white font-medium text-lg mb-2">1. Set up your content corpus</h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-3">
                Copy the examples into <code className="text-white/60 text-xs bg-white/[0.06] px-1.5 py-0.5 rounded">content-corpus/</code> and
                fill them with your voice, positioning, and proof.
              </p>
              <a
                href={COMMUNITY_URL}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Get guidance in the community &rarr;
              </a>
            </div>

            <div>
              <h3 className="text-white font-medium text-lg mb-2">2. Design your pages</h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-3">
                Use the Prompt Builder to generate a design direction, then apply it with Claude Code.
              </p>
              <a
                href={PROMPT_BUILDER_URL}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Open Prompt Builder &rarr;
              </a>
            </div>

            <div>
              <h3 className="text-white font-medium text-lg mb-2">3. Deploy to Cloudflare</h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-3">
                Build and deploy to your own infrastructure. See CLAUDE.md for the full walkthrough.
              </p>
              <Link
                href="/blog"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Check the blog is connected &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
