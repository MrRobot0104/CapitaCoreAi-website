const stats = [
  { value: '3', label: 'Tools live today' },
  { value: '55', label: 'AI sales prompts' },
];

export default function Stats() {
  return (
    <section className="bg-[#0d1224]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="divider" />
        <div className="flex items-center justify-center gap-16 py-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold gold-text mb-1.5">{stat.value}</div>
              <div className="text-xs text-slate-600 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="divider" />
      </div>
    </section>
  );
}
