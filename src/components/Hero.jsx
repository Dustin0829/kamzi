import { Heart, Star4 } from "./Doodles";
import TikTokGmvDashboardPreview from "./TikTokGmvDashboardPreview";
import Reveal from "./Reveal";
import SectionBgDecor from "./SectionBgDecor";
import "./Hero.css";

const CALENDLY_URL = "https://calendly.com/adsbykamzi";

const POLAROID_SINGLE =
  "/—Pngtree—white single polaroid photo frames_6945280.png";

function Paperclip({ className = "" }) {
  return (
    <svg viewBox="0 0 24 48" className={className} fill="none" aria-hidden="true">
      <path
        d="M8 6c0-2.2 1.8-4 4-4s4 1.8 4 4v28c0 3.3-2.7 6-6 6s-6-2.7-6-6V14"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M8 14c0-2.2 1.8-4 4-4s4 1.8 4 4v20c0 1.1-.9 2-2 2s-2-.9-2-2V18"
        stroke="#9aa0a6"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Pushpin({ className = "" }) {
  return (
    <span className={`hero-scrapbook__pin ${className}`} aria-hidden="true">
      <span className="hero-scrapbook__pin-head" />
    </span>
  );
}

function EmphasisMarks({ className = "" }) {
  return (
    <svg
      viewBox="0 0 60 60"
      className={`hero-scrapbook__marks ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M8 14l9 6M6 30h11M10 46l9-6" />
    </svg>
  );
}

function DashedArrow({ className = "" }) {
  return (
    <svg
      viewBox="0 0 90 70"
      className={`hero-scrapbook__dashed ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 8c30 4 52 22 60 48" strokeDasharray="3 7" />
      <path d="M66 56l2-13M66 56l-13 3" />
    </svg>
  );
}

function HandArrow({ className = "" }) {
  return (
    <svg
      viewBox="0 0 80 70"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 52C24 56 44 50 62 18" />
      <path d="M62 18l-13 4M62 18l3 13" />
    </svg>
  );
}

function TikTokBadge() {
  return (
    <span className="hero-scrapbook__platform hero-scrapbook__platform--tiktok" aria-hidden="true">
      <svg viewBox="0 0 24 24" className="h-full w-full" fill="currentColor">
        <path d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0115.54 3h-3.09v12.4a2.59 2.59 0 01-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66a5.25 5.25 0 00-5.25 5.2 5.25 5.25 0 0010.5 0V8.57a7.28 7.28 0 004.3 1.38V6.85a4.18 4.18 0 01-1.18-.03z" />
      </svg>
    </span>
  );
}

function PolaroidCard({ caption, badge, dashboard, className = "" }) {
  return (
    <figure className={`hero-scrapbook__polaroid-item ${className}`.trim()}>
      <div className="hero-scrapbook__polaroid-wrap">
        <img
          src={POLAROID_SINGLE}
          alt=""
          className="hero-scrapbook__polaroid-frame"
          aria-hidden="true"
          decoding="async"
        />
        <div className="hero-scrapbook__polaroid-window">
          <div className="hero-scrapbook__dashboard-scale">{dashboard}</div>
        </div>
        <p className="hero-scrapbook__polaroid-caption">{caption}</p>
        <Pushpin />
        {badge}
      </div>
    </figure>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero-scrapbook">
      <SectionBgDecor variant="hero" />

      <div className="hero-scrapbook__inner">
        <div className="hero-scrapbook__text-col">
          <Reveal delay={0}>
            <h1 className="hero-scrapbook__headline">
              <EmphasisMarks className="hero-scrapbook__marks--headline" />
              <span className="hero-scrapbook__script hero-scrapbook__script--plain">Make your</span>
              <span className="hero-scrapbook__box hero-scrapbook__box--white">
                <span className="hero-scrapbook__display">CONTENT</span>
              </span>
              <span className="hero-scrapbook__box hero-scrapbook__box--pink hero-scrapbook__box--bottom">
                <span className="hero-scrapbook__script">make money</span>
                <EmphasisMarks className="hero-scrapbook__marks--money" />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <div className="hero-scrapbook__note-block">
              <HandArrow className="hero-scrapbook__note-arrow" />
              <div className="hero-scrapbook__notebook">
                <Paperclip className="hero-scrapbook__paperclip" />
                <div className="hero-scrapbook__notebook-paper">
                  <p className="hero-scrapbook__handwritten">
                    Fixing your content so it actually{" "}
                    <span className="hero-scrapbook__circled">converts.</span>
                    <Star4 className="hero-scrapbook__inline-star" />
                  </p>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-scrapbook__cta"
                  >
                    Work with me
                    <span className="hero-scrapbook__cta-arrow" aria-hidden="true">
                      ↗
                    </span>
                    <EmphasisMarks className="hero-scrapbook__marks--cta" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="hero-scrapbook__visual">
        <div className="hero-scrapbook__cards-col">
          <Reveal className="hero-scrapbook__cards-stack" delay={180} direction="right">
            <DashedArrow className="hero-scrapbook__cards-path" />

            <PolaroidCard
              className="hero-scrapbook__polaroid-item--top"
              caption="Campaign Overview"
              badge={<TikTokBadge />}
              dashboard={<TikTokGmvDashboardPreview variant="before" />}
            />

            <Heart className="hero-scrapbook__brown-heart" filled />

            <PolaroidCard
              className="hero-scrapbook__polaroid-item--bottom"
              caption="Optimized Results"
              badge={<TikTokBadge />}
              dashboard={<TikTokGmvDashboardPreview variant="after" />}
            />
          </Reveal>
        </div>

        <div className="hero-scrapbook__portrait-wrap">
          <div className="hero-scrapbook__portrait-collage">
            <img
              src="/asd.png"
              alt="Kamille, performance marketing strategist"
              className="hero-scrapbook__portrait"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
