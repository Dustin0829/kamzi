import "./SectionDivider.css";

const WAVE_PATH =
  "M0,12 C120,28 240,0 360,12 C480,24 600,4 720,12 C840,20 960,2 1080,12 C1140,17 1170,14 1200,12 L1200,24 L0,24 Z";

export default function SectionDivider({ variant = "tape", flip = false, className = "" }) {
  if (variant === "wave") {
    return (
      <div
        className={`section-divider section-divider--wave ${flip ? "section-divider--flip" : ""} ${className}`.trim()}
        aria-hidden="true"
      >
        <svg viewBox="0 0 1200 24" preserveAspectRatio="none" className="section-divider__wave">
          <path d={WAVE_PATH} />
        </svg>
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className={`section-divider section-divider--dots ${className}`.trim()} aria-hidden="true">
        <span className="section-divider__dots" />
      </div>
    );
  }

  return (
    <div className={`section-divider section-divider--tape ${className}`.trim()} aria-hidden="true">
      <span className="section-divider__tape" />
    </div>
  );
}
