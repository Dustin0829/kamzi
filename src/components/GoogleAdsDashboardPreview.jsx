function MiniBars({ heights, className = "" }) {
  return (
    <svg viewBox="0 0 120 36" className={`h-full w-full ${className}`} preserveAspectRatio="none" aria-hidden="true">
      {heights.map((h, i) => (
        <rect key={i} x={i * 18 + 2} y={36 - h} width="12" height={h} rx="2" fill="#4285f4" opacity="0.85" />
      ))}
    </svg>
  );
}

function MiniLine({ points, className = "" }) {
  return (
    <svg viewBox="0 0 120 36" className={`h-full w-full ${className}`} preserveAspectRatio="none" aria-hidden="true">
      <polyline points={points.map((p) => p.join(",")).join(" ")} fill="none" stroke="#34a853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const stats = [
  { label: "Avg CPC", value: "₱4.90", trend: "↓ 9%" },
  { label: "Conversions", value: "5.1K", trend: "+28%" },
  { label: "Clicks", value: "248K", trend: "+22%" },
  { label: "Spend", value: "₱1.3M", trend: "+31%" },
];

export default function GoogleAdsDashboardPreview({ variant = "default" }) {
  if (variant === "polaroid") {
    return (
      <div className="hero-polaroid-dashboard hero-polaroid-dashboard--google">
        <p className="hero-polaroid-dashboard__title">Google Ads · Overview</p>
        <div className="hero-polaroid-dashboard__stats">
          {stats.map((stat) => (
            <div key={stat.label} className="hero-polaroid-dashboard__stat">
              <p className="hero-polaroid-dashboard__label">{stat.label}</p>
              <p className="hero-polaroid-dashboard__value">{stat.value}</p>
              <p className={`hero-polaroid-dashboard__trend ${stat.trend.startsWith("↓") ? "hero-polaroid-dashboard__trend--down" : "hero-polaroid-dashboard__trend--up"}`}>
                {stat.trend}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-[120px] flex-col overflow-hidden rounded-xl bg-[#f8f9fb] p-2.5 text-[#3c4043]">
      <div className="mb-1 flex items-center justify-between gap-2">
        <p className="truncate text-[9px] font-semibold text-[#1a73e8]">Google Ads · Overview</p>
        <span className="shrink-0 rounded bg-white px-1.5 py-0.5 text-[7px] font-medium text-[#5f6368] ring-1 ring-[#dadce0]">
          Last 30 days
        </span>
      </div>

      <div className="grid grid-cols-4 gap-1.5">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-md bg-white px-1.5 py-1.5 ring-1 ring-[#e8eaed]">
            <p className="truncate text-[6px] font-medium uppercase tracking-wide text-[#5f6368]">{stat.label}</p>
            <p className="mt-0.5 text-[10px] font-semibold leading-none text-[#202124]">{stat.value}</p>
            <p className="mt-0.5 text-[6px] font-medium text-[#188038]">{stat.trend}</p>
          </div>
        ))}
      </div>

      <div className="mt-2 grid flex-1 grid-cols-2 gap-1.5 min-h-[44px]">
        <div className="relative overflow-hidden rounded-md bg-white p-1.5 ring-1 ring-[#e8eaed]">
          <p className="mb-1 text-[6px] font-medium text-[#5f6368]">Impressions & Clicks</p>
          <div className="relative h-7">
            <MiniBars heights={[18, 24, 20, 28, 22, 30, 26]} className="absolute inset-0 opacity-70" />
            <MiniLine points={[[0, 28], [20, 22], [40, 24], [60, 16], [80, 18], [100, 12], [120, 14]]} className="absolute inset-0" />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-md bg-white p-1.5 ring-1 ring-[#e8eaed]">
          <p className="mb-1 text-[6px] font-medium text-[#5f6368]">Cost & Avg CPC</p>
          <div className="relative h-7">
            <MiniBars heights={[14, 20, 18, 24, 16, 22, 20]} className="absolute inset-0 opacity-70" />
            <MiniLine points={[[0, 24], [20, 20], [40, 22], [60, 14], [80, 16], [100, 10], [120, 12]]} className="absolute inset-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
