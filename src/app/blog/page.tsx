import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { createAdminClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'Digital Home';
const BLOG_LABEL = process.env.NEXT_PUBLIC_BLOG_LABEL || 'Writing';
const BLOG_TITLE = process.env.NEXT_PUBLIC_BLOG_TITLE || `Writing from ${SITE_NAME}`;
const BLOG_DESCRIPTION =
  process.env.NEXT_PUBLIC_BLOG_DESCRIPTION ||
  `Essays, guides, and practical notes from ${SITE_NAME}.`;

export const metadata: Metadata = {
  title: `${BLOG_LABEL} — ${SITE_NAME}`,
  description: BLOG_DESCRIPTION,
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

function estimateReadingTime(body: string | null): number {
  if (!body) return 5;
  const words = body.replace(/<[^>]*>/g, '').split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function EditorialFallback({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden ${
        compact ? 'h-52' : 'h-full min-h-[320px]'
      } bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.09),rgba(255,255,255,0.02))]`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)]" />
      <div className="absolute -left-16 top-10 h-48 w-48 rounded-full border border-white/10" />
      <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full border border-white/10" />
    </div>
  );
}

export default async function BlogPage() {
  let allArticles: Array<{
    slug: string;
    title: string;
    excerpt: string;
    semantic_tags: string[];
    content_type: string;
    published_at: string;
    reading_time: number;
    image: string;
  }> = [];

  try {
    const supabase = createAdminClient();
    const { data: articles, error } = await supabase
      .from('content_objects')
      .select('id, slug, title, content_type, excerpt, semantic_tags, published_at, featured_image_url, body')
      .eq('status', 'published')
      .in('content_type', ['article', 'guide'])
      .order('published_at', { ascending: false, nullsFirst: false });

    if (error) {
      console.error('Supabase query error:', error.message);
    }

    allArticles = (articles || []).map((a) => ({
      slug: a.slug,
      title: a.title,
      excerpt: a.excerpt || '',
      semantic_tags: a.semantic_tags || [],
      content_type: a.content_type,
      published_at: a.published_at || a.slug,
      reading_time: estimateReadingTime(a.body),
      image: a.featured_image_url || '',
    }));
  } catch (err) {
    console.error('Blog page error:', err);
  }

  // Empty state
  if (allArticles.length === 0) {
    return (
      <main>
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-2xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 text-center">
            <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[0.78rem] font-medium text-white/60 mb-6">
              {BLOG_LABEL}
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.06em] text-white mb-4">
              {BLOG_TITLE}
            </h1>
            <p className="text-lg text-neutral-400 leading-relaxed">
              {BLOG_DESCRIPTION}
            </p>
          </div>
        </section>
      </main>
    );
  }

  const featured = allArticles[0];
  const rest = allArticles.slice(1);

  return (
    <main>
      <section className="pt-32 pb-14 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between gap-6 pb-6 mb-8 border-b border-white/10 text-[0.72rem] font-medium text-white/45">
            <span>{BLOG_LABEL}</span>
            <span>{allArticles.length} live article{allArticles.length === 1 ? '' : 's'}</span>
          </div>

          <div className="max-w-4xl">
            <p className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[0.78rem] font-medium text-white/60 mb-6">
              {BLOG_LABEL}
            </p>
            <h1 className="text-5xl md:text-7xl xl:text-[6.6rem] font-semibold tracking-[-0.075em] text-white leading-[0.95] mb-6">
              {BLOG_TITLE}
            </h1>
            <p className="text-lg md:text-2xl text-neutral-300 max-w-3xl leading-relaxed">
              {BLOG_DESCRIPTION}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <Link
            href={`/blog/${featured.slug}`}
            className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]"
          >
            <div className="border-b border-white/10 lg:border-b-0 lg:border-r lg:border-white/10">
              {featured.image ? (
                <Image
                  src={featured.image}
                  alt={featured.title}
                  width={1792}
                  height={1024}
                  className="h-full min-h-[320px] w-full object-cover"
                  priority
                />
              ) : (
                <EditorialFallback />
              )}
            </div>

            <div className="flex flex-col justify-center p-8 md:p-10">
              <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.72rem] font-medium text-white/55">
                Featured article
              </span>
              <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-[-0.05em] text-white">
                {featured.title}
              </h2>
              {featured.excerpt && (
                <p className="mt-4 text-lg text-neutral-400 leading-relaxed">
                  {featured.excerpt}
                </p>
              )}
              <div className="mt-6 flex flex-wrap gap-3 text-[0.75rem] font-medium text-white/45">
                <span className="rounded-full border border-white/10 px-3 py-1.5">
                  {formatDate(featured.published_at)}
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1.5">
                  {featured.reading_time} min read
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1.5 capitalize">
                  {featured.content_type}
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {rest.length > 0 && (
        <section className="px-6 pb-24">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-end justify-between gap-6 mb-8">
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-white/45 mb-4">
                  More {BLOG_LABEL.toLowerCase()}
                </p>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.05em] text-white">
                  Latest from {SITE_NAME}.
                </h2>
              </div>
              <span className="hidden md:inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-white/45">
                {allArticles.length} published entries
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {rest.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group block overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
                >
                  {article.image ? (
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={896}
                      height={512}
                      className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <EditorialFallback compact />
                  )}

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 text-[0.72rem] font-medium text-white/45">
                      <span className="rounded-full border border-white/10 px-3 py-1">
                        {formatDate(article.published_at)}
                      </span>
                      <span className="rounded-full border border-white/10 px-3 py-1">
                        {article.reading_time} min read
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                      {article.title}
                    </h3>
                    {article.excerpt && (
                      <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                        {article.excerpt}
                      </p>
                    )}

                    <div className="mt-5 flex flex-wrap gap-2">
                      {article.semantic_tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[0.72rem] text-white/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
