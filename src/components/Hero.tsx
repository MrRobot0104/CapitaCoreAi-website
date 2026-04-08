import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d1224]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(201,168,76,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="fade-up" style={{ animationDelay: '0ms' }}>
          <img
            src="/capitacoreai_logo_500x500.png"
            alt="CapitaCoreAI"
            className="w-36 h-36 mx-auto mb-10 opacity-95"
          />
        </div>

        <div className="fade-up" style={{ animationDelay: '80ms' }}>
          <h1 className="text-[clamp(2.6rem,6vw,4.5rem)] font-bold tracking-[-0.03em] leading-[1.08] mb-6 text-white">
            Intelligence software for{' '}
            <span className="gold-text">high-stakes decisions</span>
          </h1>
        </div>

        <div className="fade-up" style={{ animationDelay: '160ms' }}>
          <p className="text-[1.05rem] text-slate-400 max-w-xl mx-auto mb-10 leading-[1.75]">
            CapitaCoreAI builds specialized AI software — from market signal engines
            to enterprise intelligence platforms — engineered for performance where it matters most.
          </p>
        </div>

        <div className="fade-up flex flex-col sm:flex-row gap-3 justify-center" style={{ animationDelay: '240ms' }}>
          <a
            href="#products"
            className="btn-gold text-[#0d1224] font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 text-sm"
          >
            View Products
            <ArrowRight size={15} />
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-slate-400 hover:text-white border border-white/[0.08] hover:border-white/20 px-6 py-3 rounded-lg transition-all duration-150 flex items-center justify-center"
          >
            Learn more
          </a>
        </div>

        <div className="fade-up mt-20 flex items-center justify-center gap-10" style={{ animationDelay: '320ms' }}>
          {[
            { value: '6+', label: 'products built' },
            { value: '99.9%', label: 'uptime' },
            { value: '< 50ms', label: 'signal latency' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-bold gold-text leading-none mb-1">{s.value}</div>
              <div className="text-xs text-slate-600 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-20">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold-500" />
      </div>
    </section>
  );
}
