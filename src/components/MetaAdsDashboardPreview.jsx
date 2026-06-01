function MiniBars({ heights, color = "#1877f2", className = "" }) {
  return (
    <svg viewBox="0 0 120 36" className={`h-full w-full ${className}`} preserveAspectRatio="none" aria-hidden="true">
      {heights.map((h, i) => (
        <rect key={i} x={i * 18 + 2} y={36 - h} width="12" height={h} rx="2" fill={color} opacity="0.85" />
      ))}
    </svg>
  );
}

function MiniLine({ points, className = "" }) {
  return (
    <svg viewBox="0 0 120 36" className={`h-full w-full ${className}`} preserveAspectRatio="none" aria-hidden="true">
      <polyline points={points.map((p) => p.join(",")).join(" ")} fill="none" stroke="#31a24c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const stats = [
  { label: "Spend", value: "₱2.1M", trend: "+34%" },
  { label: "Reach", value: "1.8M", trend: "+28%" },
  { label: "Clicks", value: "312K", trend: "+24%" },
  { label: "CTR", value: "2.4%", trend: "+18%" },
];

export default function MetaAdsDashboardPreview() {
  return (
    <div className="flex h-full min-h-[120px] flex-col overflow-hidden rounded-xl bg-[#f0f2f5] p-2.5 text-[#1c1e21]">
      <div className="mb-1 flex items-center justify-between gap-2">
        <p className="truncate text-[9px] font-semibold text-[#1877f2]">Meta Ads · Performance</p>
        <span className="shrink-0 rounded bg-white px-1.5 py-0.5 text-[7px] font-medium text-[#65676b] ring-1 ring-[#dddfe2]">
          Last 30 days
        </span>
      </div>

      <div className="grid grid-cols-4 gap-1.5">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-md bg-white px-1.5 py-1.5 ring-1 ring-[#dddfe2]">
            <p className="truncate text-[6px] font-medium uppercase tracking-wide text-[#65676b]">{stat.label}</p>
            <p className="mt-0.5 text-[10px] font-semibold leading-none text-[#050505]">{stat.value}</p>
            <p className="mt-0.5 text-[6px] font-medium text-[#31a24c]">{stat.trend}</p>
          </div>
        ))}
      </div>

      <div className="mt-2 grid min-h-[44px] flex-1 grid-cols-2 gap-1.5">
        <div className="relative overflow-hidden rounded-md bg-white p-1.5 ring-1 ring-[#dddfe2]">
          <p className="mb-1 text-[6px] font-medium text-[#65676b]">Reach & Impressions</p>
          <div className="relative h-7">
            <MiniBars heights={[20, 26, 22, 30, 24, 32, 28]} className="absolute inset-0 opacity-70" />
            <MiniLine points={[[0, 26], [20, 20], [40, 22], [60, 14], [80, 16], [100, 10], [120, 12]]} className="absolute inset-0" />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-md bg-white p-1.5 ring-1 ring-[#dddfe2]">
          <p className="mb-1 text-[6px] font-medium text-[#65676b]">Spend & Results</p>
          <div className="relative h-7">
            <MiniBars heights={[16, 22, 18, 26, 20, 28, 24]} color="#42b883" className="absolute inset-0 opacity-70" />
            <MiniLine points={[[0, 24], [20, 18], [40, 20], [60, 12], [80, 14], [100, 8], [120, 10]]} className="absolute inset-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
