import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 nav-blur transition-all duration-200 ${
        scrolled ? 'bg-[#0d1224]/85 border-b border-white/[0.05]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <img
            src="/capitacoreai_logo_500x500_small.png"
            alt="CapitaCoreAI"
            className="w-7 h-7 rounded-md"
          />
          <span className="font-semibold text-[15px] tracking-tight text-white/90 group-hover:text-white transition-colors">
            CapitaCoreAI
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-slate-400 hover:text-white transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="btn-gold text-[#0d1224] text-sm font-semibold px-4 py-2 rounded-lg"
          >
            Get Early Access
          </a>
        </div>

        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0d1224]/98 border-t border-white/[0.05] px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-sm text-slate-400 hover:text-white py-2.5 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#contact"
              className="block btn-gold text-[#0d1224] text-sm font-semibold px-4 py-2.5 rounded-lg text-center"
              onClick={() => setMenuOpen(false)}
            >
              Get Early Access
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
