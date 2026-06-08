import { Heart, Sparkle, Squiggle, Star4 } from "./Doodles";
import "./SectionBgDecor.css";

function BgDashCurve({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 50"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 38C28 10 52 8 78 28s34 8 36-14" strokeDasharray="3 7" />
    </svg>
  );
}

export default function SectionBgDecor({ variant = "default", className = "" }) {
  return (
    <div
      className={`section-bg-decor section-bg-decor--${variant} ${className}`.trim()}
      aria-hidden="true"
    >
      <Squiggle className="section-bg-decor__line section-bg-decor__line--a" />
      <BgDashCurve className="section-bg-decor__line section-bg-decor__line--b" />

      <Heart className="section-bg-decor__heart section-bg-decor__heart--a animate-float" filled={false} />
      <Heart className="section-bg-decor__heart section-bg-decor__heart--b" filled />

      <Star4 className="section-bg-decor__star section-bg-decor__star--a animate-twinkle" />
      <Star4 className="section-bg-decor__star section-bg-decor__star--b animate-float-delay-1" />
      <Sparkle className="section-bg-decor__star section-bg-decor__star--c animate-twinkle" />
    </div>
  );
}
