import { TrendingUp, PieChart, MessageSquare, ArrowUpRight } from 'lucide-react';
import { products } from '../data/products';
import { Product } from '../types';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  TrendingUp,
  PieChart,
  MessageSquare,
};

const statusConfig = {
  live: { label: 'Live', dot: 'bg-emerald-400' },
  beta: { label: 'Beta', dot: 'bg-sky-400' },
  'coming-soon': { label: 'Soon', dot: 'bg-gold-500' },
};

function ProductCard({ product }: { product: Product }) {
  const Icon = iconMap[product.icon];
  const status = statusConfig[product.status];
  const isActive = product.status !== 'coming-soon';

  const handleClick = () => {
    if (isActive && product.link) {
      window.open(product.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`product-card rounded-2xl p-6 flex flex-col group ${isActive ? 'cursor-pointer' : 'opacity-60'}`}
    >
      <div className="flex items-start justify-between mb-6">
        <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center">
          <Icon size={18} className="text-gold-500" />
        </div>
        <div className="flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
          <span className="text-xs text-slate-500">{status.label}</span>
        </div>
      </div>

      <div className="flex-1">
        <p className="text-[11px] uppercase tracking-widest text-slate-600 mb-2">{product.category}</p>
        <h3 className="text-base font-semibold text-white mb-2 tracking-tight">{product.name}</h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-4">{product.tagline}</p>
        <ul className="space-y-1">
          {product.features.map((f) => (
            <li key={f} className="text-xs text-slate-600 flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-gold-500/50 flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      {isActive && (
        <div className="mt-6 pt-5 border-t border-white/[0.05] flex items-center justify-between">
          <span className="text-xs text-slate-600">Open tool</span>
          <ArrowUpRight
            size={14}
            className="text-slate-600 group-hover:text-gold-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150"
          />
        </div>
      )}
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-28 bg-[#0d1224]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest text-slate-600 mb-3">Product Suite</p>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white tracking-[-0.025em] leading-[1.1]">
            Built for performance
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
