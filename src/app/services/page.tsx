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
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 mb-4">
            Services
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-[-0.05em] text-white mb-6">
            Shape this page around the offers you want people to understand fast.
          </h1>
          <p className="text-lg md:text-2xl text-neutral-400 max-w-3xl leading-relaxed">
            This starter gives you a clean structure for your services page. Replace the sample cards
            below with your actual offers, process, outcomes, and next steps.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto space-y-12">
          {[
            {
              name: 'Flagship offer',
              desc: 'Use this block for the main offer you want new visitors to understand first.',
            },
            {
              name: 'Secondary engagement',
              desc: 'Describe a second offer, package, or entry point for a different kind of client.',
            },
            {
              name: 'Ongoing support',
              desc: 'Explain the support layer, advisory relationship, or retained service that follows the first engagement.',
            },
          ].map((service) => (
            <div key={service.name} className="border border-neutral-800 bg-white/[0.02] p-8">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white mb-3">{service.name}</h2>
              <p className="text-neutral-400 mb-6 text-lg leading-relaxed">{service.desc}</p>
              <Link href="/contact" className="text-sm text-white underline underline-offset-4">
                Replace with your CTA
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
