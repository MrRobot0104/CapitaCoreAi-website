import { Github, Twitter, Linkedin } from 'lucide-react';

const links = {
  Products: ['Capita Signal', 'Capita Lens', 'Capita Flow', 'Capita Macro', 'Capita Port'],
  Company: ['About', 'Blog', 'Careers'],
  Legal: ['Privacy', 'Terms'],
};

export default function Footer() {
  return (
    <footer className="bg-[#0d1224]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="divider" />

        <div className="py-14 grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img
                src="/capitacoreai_logo_500x500_small.png"
                alt="CapitaCoreAI"
                className="w-6 h-6 rounded-md"
              />
              <span className="font-semibold text-sm text-white/80">CapitaCoreAI</span>
            </a>
            <p className="text-slate-600 text-xs leading-relaxed max-w-[200px] mb-5">
              AI-powered financial intelligence for the modern investor.
            </p>
            <div className="flex items-center gap-2">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-7 h-7 flex items-center justify-center text-slate-700 hover:text-slate-400 transition-colors"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="text-[11px] uppercase tracking-widest text-slate-700 mb-3">{category}</p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-slate-600 text-xs hover:text-slate-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider" />
        <div className="py-5 flex items-center justify-between">
          <p className="text-slate-700 text-xs">
            &copy; {new Date().getFullYear()} CapitaCoreAI
          </p>
          <p className="text-slate-800 text-xs">Built with precision.</p>
        </div>
      </div>
    </footer>
  );
}
