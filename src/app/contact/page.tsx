import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Digital Home Starter',
  description: 'Use this page to tell people how to reach you, book you, or join your world.',
};

export default function ContactPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 mb-4">
            Contact
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-[-0.05em] text-white mb-6">
            Make it obvious how people should take the next step.
          </h1>
          <p className="text-lg md:text-2xl text-neutral-400 mb-12 leading-relaxed">
            This page works best when it feels simple, direct, and reassuring. Add the contact paths you
            actually want people to use, then remove anything that creates friction.
          </p>

          <div className="space-y-8">
            <div className="border border-neutral-800 bg-white/[0.02] p-6">
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-neutral-400">hello@yourdomain.com</p>
            </div>

            <div className="border border-neutral-800 bg-white/[0.02] p-6">
              <h3 className="text-white font-semibold mb-2">Book a Call</h3>
              <p className="text-neutral-400">
                Add your Calendly, Cal.com, or preferred booking flow here.
              </p>
            </div>

            <div className="border border-neutral-800 bg-white/[0.02] p-6">
              <h3 className="text-white font-semibold mb-2">Community</h3>
              <p className="text-neutral-400">
                Link to your newsletter, community, or the platform where you want ongoing attention.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
