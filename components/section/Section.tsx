type Props = { title: string; subtitle?: string; caption?: string };

export default function Section({ title, subtitle, caption }: Props) {
  return (
    <div className="flex items-end justify-between mb-7">
      <div>
        <h1 className="tracking-widest font-medium text-3xl text-white/80">{title}</h1>
        {subtitle && <p className="text-white/70 text-xs mt-1 max-w-2xl">{subtitle}</p>}
      </div>
      {caption && <span className="text-xs text-white/60">{caption}</span>}
    </div>
  );
}
