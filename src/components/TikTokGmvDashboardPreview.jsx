const BEFORE_STATS = [
  { label: "Cost", value: "₱205K" },
  { label: "Orders", value: "4,757" },
  { label: "Cost/order", value: "₱43.09" },
  { label: "ROI", value: "17.06" },
];

const AFTER_STATS = [
  { label: "Cost", value: "₱130K", trend: "↓ 37%", trendDown: true },
  { label: "Orders", value: "3,606" },
  { label: "Cost/order", value: "₱36.05", trend: "↓ 16%", trendDown: true },
  { label: "ROI", value: "18.86", trend: "↑ 11%" },
];

export default function TikTokGmvDashboardPreview({ variant = "before" }) {
  const isAfter = variant === "after";
  const stats = isAfter ? AFTER_STATS : BEFORE_STATS;
  const title = isAfter ? "GMV Max · Jun 2026" : "GMV Max · May 2026";
  const modifier = isAfter ? "tiktok-after" : "tiktok-before";

  return (
    <div className={`hero-polaroid-dashboard hero-polaroid-dashboard--${modifier}`}>
      <p className="hero-polaroid-dashboard__title">{title}</p>
      <div className="hero-polaroid-dashboard__stats">
        {stats.map((stat) => (
          <div key={stat.label} className="hero-polaroid-dashboard__stat">
            <p className="hero-polaroid-dashboard__label">{stat.label}</p>
            <p className="hero-polaroid-dashboard__value">{stat.value}</p>
            {stat.trend ? (
              <p
                className={`hero-polaroid-dashboard__trend ${
                  stat.trendDown ? "hero-polaroid-dashboard__trend--down" : "hero-polaroid-dashboard__trend--up"
                }`}
              >
                {stat.trend}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
