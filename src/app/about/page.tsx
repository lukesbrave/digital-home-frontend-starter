import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Digital Home Starter',
  description: 'Use this page to introduce the story, perspective, and values behind your brand.',
};

export default function AboutPage() {
  return (
    <main>
      <section className="pt-32 pb-18 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 mb-4">
            About
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-[-0.05em] text-white mb-6">
            Tell people what shaped your work and why it matters.
          </h1>
          <p className="text-lg md:text-2xl text-neutral-400 max-w-4xl leading-relaxed">
            This starter keeps the structure simple on purpose. Replace this page with your origin story,
            point of view, and the beliefs that guide how you help clients or customers.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-[-0.04em] text-white mb-10">
            Use this section for the ideas you want to be known for.
          </h2>
          <div className="space-y-6 max-w-4xl">
            {[
              'You should own your digital infrastructure, not rent it.',
              'AI should amplify your voice, not replace it.',
              'Great systems beat great hustle every time.',
            ].map((belief) => (
              <div key={belief} className="border-l-2 border-neutral-700 pl-6 py-1">
                <p className="text-neutral-300 text-lg leading-relaxed">{belief}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-[-0.04em] text-white mb-10">
            Add the people, proof, or perspective behind the brand.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Founder Name', role: 'Founder / creative lead' },
              { name: 'Team Member', role: 'Partner / operator / strategist' },
            ].map((member) => (
              <div key={member.name} className="border border-neutral-800 p-6 bg-white/[0.02]">
                <div className="w-16 h-16 bg-neutral-900 border border-neutral-800 rounded-full mb-4" />
                <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-neutral-400 mb-4">{member.role}</p>
                <p className="text-neutral-400 leading-relaxed">
                  Replace this with a short bio, notable credibility signal, or the kind of work this
                  person leads inside the business.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
