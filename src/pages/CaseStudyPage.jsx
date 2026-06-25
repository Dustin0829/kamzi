import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Heart } from "../components/Doodles";
import Navbar from "../components/Navbar";
import CaseStudyFooter from "../components/CaseStudyFooter";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import CaseStudyCreatives from "../components/CaseStudyCreatives";
import Reveal from "../components/Reveal";
import { getProjectBySlug } from "../data/projects";
import { getCreativesByProjectSlug } from "../data/creatives";
import "./CaseStudyPage.css";

const SERVICE_ICONS = [
  <svg key="target" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
  </svg>,
  <svg key="pencil" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M4 20h4l10-10-4-4L4 16v4z" strokeLinejoin="round" />
    <path d="M14 6l4 4" />
  </svg>,
  <svg key="chart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M4 19V5M4 19h16" strokeLinecap="round" />
    <path d="M8 15V11M12 15V8M16 15V5" strokeLinecap="round" />
  </svg>,
  <svg key="funnel" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M4 4h16l-6.5 8v5l-3 3v-8L4 4z" strokeLinejoin="round" />
  </svg>,
  <svg key="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M4 16l6-6 4 4 6-8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 6h5v5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

function BeforeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="case-study__card-icon" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z" />
      <path d="M9 9h6M9 13h4" strokeLinecap="round" />
      <path d="M16 8l2 2-4 4-2-2 4-4z" fill="currentColor" stroke="none" opacity="0.85" />
    </svg>
  );
}

function AfterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="case-study__card-icon" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z" />
      <path d="M9 9h6M9 13h4" strokeLinecap="round" />
      <path d="M15.5 14.5l1.5 1.5 3-3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ComparisonBlock({ title, summary, points, metrics, variant }) {
  const isBefore = variant === "before";

  return (
    <article className={`case-study__comparison case-study__comparison--${variant}`}>
      <div className="case-study__comparison-head">
        {isBefore ? <BeforeIcon /> : <AfterIcon />}
        <h2 className="case-study__comparison-label">{title}</h2>
      </div>

      <p className="case-study__comparison-summary">{summary}</p>

      <ul className="case-study__comparison-list">
        {points.map((point) => (
          <li key={point}>
            <span className={`case-study__point-icon case-study__point-icon--${variant}`} aria-hidden="true">
              {isBefore ? "✕" : "✓"}
            </span>
            {point}
          </li>
        ))}
      </ul>

      <div className="case-study__metrics">
        {metrics.map((metric) => (
          <div key={metric.label} className={`case-study__metric case-study__metric--${variant}`}>
            <span className="case-study__metric-value">{metric.value}</span>
            <span className="case-study__metric-label">{metric.label}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

function CompareArrow() {
  return (
    <svg className="case-study__compare-arrow" viewBox="0 0 120 80" fill="none" aria-hidden="true">
      <path
        d="M8 40 C35 8, 55 72, 112 40"
        stroke="#98030b"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 6"
      />
      <path d="M104 34l8 6-8 6" stroke="#98030b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const CALENDLY_URL = "https://calendly.com/adsbykamzi";

export default function CaseStudyPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const projectCreatives = slug ? getCreativesByProjectSlug(slug) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/#work" replace />;
  }

  const overviewParagraphs = Array.isArray(project.overview) ? project.overview : [project.overview];

  return (
    <div className="case-study">
      <div className="case-study__bg" aria-hidden="true">
        <span className="case-study__glow case-study__glow--hero" />
        <span className="case-study__dots case-study__dots--tr" />
        <span className="case-study__dots case-study__dots--bl" />
      </div>

      <Navbar />

      <main className="case-study__main">
        <section className="case-study__hero">
          <div className="case-study__hero-copy">
            <Reveal direction="up">
              <Link to="/#work" className="case-study__back">
                <span aria-hidden="true">←</span> Back to featured work
              </Link>
            </Reveal>

            <Reveal direction="up" delay={80}>
              <div className="case-study__hero-head">
                <p className="case-study__tag">{project.tag}</p>
                <h1 className="case-study__title">{project.name}</h1>
                <Heart className="case-study__heart animate-float-delay-1" filled />
              </div>
            </Reveal>

            <Reveal direction="up" delay={140}>
              <div className="case-study__overview">
                {overviewParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal direction="right" delay={120} className="case-study__hero-visual-wrap">
            <div className="case-study__hero-visual">
              <figure className="case-study__mockup case-study__mockup--browser">
                <div className="case-study__mockup-bar">
                  <span className="case-study__mockup-dot case-study__mockup-dot--red" />
                  <span className="case-study__mockup-dot case-study__mockup-dot--yellow" />
                  <span className="case-study__mockup-dot case-study__mockup-dot--green" />
                </div>
                <img
                  src={project.browser}
                  alt={`${project.name} Facebook page on desktop`}
                  className="case-study__mockup-shot"
                />
              </figure>

              <figure className="case-study__mockup case-study__mockup--phone">
                <img
                  src={project.phone}
                  alt={`${project.name} Facebook page on mobile`}
                  className="case-study__mockup-shot"
                />
              </figure>
            </div>
          </Reveal>
        </section>

        <section className="case-study__compare">
          <Reveal direction="left">
            <ComparisonBlock
              title="Before"
              summary={project.before.summary}
              points={project.before.points}
              metrics={project.before.metrics}
              variant="before"
            />
          </Reveal>

          <CompareArrow />

          <Reveal direction="right" delay={100}>
            <ComparisonBlock
              title="After"
              summary={project.after.summary}
              points={project.after.points}
              metrics={project.after.metrics}
              variant="after"
            />
          </Reveal>
        </section>

        {project.shopifyResults && (
          <Reveal direction="up" delay={100}>
            <section className="case-study__shopify">
              <h2 className="case-study__shopify-title">{project.shopifyResults.title}</h2>
              <p className="case-study__shopify-desc">{project.shopifyResults.description}</p>

              <BeforeAfterSlider
                beforeSrc={project.shopifyResults.before}
                afterSrc={project.shopifyResults.after}
                beforeLabel={project.shopifyResults.beforeLabel}
                afterLabel={project.shopifyResults.afterLabel}
                beforeAlt={project.shopifyResults.beforeAlt}
                afterAlt={project.shopifyResults.afterAlt}
                highlights={project.shopifyResults.highlights ?? []}
              />

              <p className="case-study__shopify-hint">
                Drag right to see the results
                <span aria-hidden="true"> →</span>
              </p>
            </section>
          </Reveal>
        )}

        <Reveal direction="up" delay={120}>
          <CaseStudyCreatives items={projectCreatives} brandName={project.name} />
        </Reveal>

        <Reveal direction="up">
          <section className="case-study__services">
            <h2 className="case-study__services-title">What we did</h2>
            <div className="case-study__services-grid">
              {project.services.map((service, index) => (
                <div key={service} className="case-study__service">
                  <span className="case-study__service-icon">{SERVICE_ICONS[index % SERVICE_ICONS.length]}</span>
                  <p>{service}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal direction="up" delay={80}>
          <div className="case-study__cta-wrap">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="case-study__cta btn-interactive"
            >
              Get the same result
              <span className="arrow-slide" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </Reveal>
      </main>

      <CaseStudyFooter />
    </div>
  );
}
