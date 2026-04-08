const pillars = [
  {
    title: 'AI-First',
    description:
      'Every product is designed with AI at the core — domain-specific models built for precision, not general-purpose approximations.',
  },
  {
    title: 'Enterprise grade',
    description:
      'Built to the exacting standards of institutions and enterprises that cannot afford to be wrong. Robust, auditable, battle-tested.',
  },
  {
    title: 'Real-time',
    description:
      'Low-latency pipelines process millions of events per second across financial markets, operations, and data streams.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#0d1224]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="divider mb-28" />

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-600 mb-3">Who we are</p>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-[-0.025em] leading-[1.1] mb-8">
              Complex problems deserve<br />
              <span className="gold-text">purpose-built intelligence</span>
            </h2>
            <p className="text-[0.95rem] text-slate-400 leading-[1.8] mb-5">
              CapitaCoreAI was built on a single conviction: the hardest problems — in finance,
              operations, and enterprise — are underserved by generic AI. Real intelligence
              requires deep domain expertise, real-time processing, and models that understand
              the specific context in which they operate.
            </p>
            <p className="text-[0.95rem] text-slate-400 leading-[1.8]">
              We build specialized AI software across verticals — starting with financial markets
              and expanding into any domain where decisions are high-stakes, data is complex,
              and speed is a competitive advantage.
            </p>
          </div>

          <div className="space-y-0 divide-y divide-white/[0.05]">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="py-7 first:pt-0 last:pb-0">
                <h3 className="text-sm font-semibold text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
