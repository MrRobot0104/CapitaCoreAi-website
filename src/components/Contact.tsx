import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section id="contact" className="py-28 bg-[#0d1224]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="divider mb-28" />

        <div className="max-w-lg">
          <p className="text-xs uppercase tracking-widest text-slate-600 mb-3">Early access</p>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-[-0.025em] leading-[1.1] mb-5">
            Be first to know
          </h2>
          <p className="text-[0.95rem] text-slate-400 leading-[1.8] mb-8">
            Get early access to new CapitaCoreAI products and receive updates directly to your inbox.
          </p>

          {submitted ? (
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <div className="w-5 h-5 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              </div>
              You're on the list. We'll be in touch soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2.5 max-w-sm">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 bg-white/[0.04] border border-white/[0.08] text-white placeholder-slate-600 px-4 py-2.5 rounded-lg focus:outline-none focus:border-gold-500/40 transition-colors text-sm"
              />
              <button
                type="submit"
                className="btn-gold text-[#0d1224] font-semibold px-4 py-2.5 rounded-lg flex items-center gap-1.5 text-sm whitespace-nowrap"
              >
                Join
                <ArrowRight size={14} />
              </button>
            </form>
          )}
          <p className="text-slate-700 text-xs mt-3">No spam. Unsubscribe any time.</p>
        </div>
      </div>
    </section>
  );
}
