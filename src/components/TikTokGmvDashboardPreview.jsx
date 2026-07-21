export const GMV_SHOTS = {
  before: {
    src: "/portfolio/ang-ninuno/46d0337b-4d7f-47d8-9961-9e4c2e853ac0.jpeg",
    alt: "Likha Merchandise TikTok GMV Max — Sep to Dec 2025: 22M gross revenue, 43,677 orders, 7.36 ROI",
    caption: "GMV Max · Q4 2025",
  },
  after: {
    src: "/portfolio/ang-ninuno/e05252c8-792e-48fd-9e00-38f812bf15b3.jpeg",
    alt: "Likha Merchandise TikTok GMV Max — Jan to Mar 2026: 18.4M gross revenue, 44,082 orders, 5.22 ROI",
    caption: "GMV Max · Q1 2026",
  },
};

export default function TikTokGmvDashboardPreview({ variant = "before" }) {
  const shot = GMV_SHOTS[variant] ?? GMV_SHOTS.before;

  return (
    <img
      src={shot.src}
      alt={shot.alt}
      className="hero-polaroid-dashboard__shot"
      width={968}
      height={717}
      loading={variant === "before" ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
