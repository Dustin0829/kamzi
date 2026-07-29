import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "./Doodles";
import Reveal from "./Reveal";
import { projects } from "../data/projects";
import "./FeaturedWork.css";

const STAT_ICONS = [
  <svg key="reach" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 19c.8-3.2 2.8-5 5.5-5s4.7 1.8 5.5 5" strokeLinecap="round" />
    <circle cx="17" cy="9" r="2.4" />
    <path d="M14.8 19c.5-2.2 1.8-3.5 3.7-3.5.7 0 1.4.2 2 .5" strokeLinecap="round" />
  </svg>,
  <svg key="cart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M4 5h1.6l1.7 10.2a1.5 1.5 0 001.5 1.3h8.4a1.5 1.5 0 001.5-1.2L20 8H8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="19.5" r="1.3" />
    <circle cx="17" cy="19.5" r="1.3" />
  </svg>,
  <svg key="growth" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M4 19V5M4 19h16" strokeLinecap="round" />
    <path d="M8 15l4-5 3 3 5-7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

function CaseStudyCard({ project }) {
  return (
    <article className="featured-work__case-card">
      <div className="featured-work__mockups">
        <figure className="featured-work__browser">
          <div className="featured-work__browser-bar" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <img
            src={project.browser}
            alt={`${project.name} desktop preview`}
            loading="lazy"
            decoding="async"
          />
        </figure>

        <figure className="featured-work__phone">
          <img
            src={project.phone}
            alt={`${project.name} mobile preview`}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>

      <div className="featured-work__case-copy">
        <h3 className="featured-work__case-title">{project.name}</h3>
        <p className="featured-work__case-tag">{project.tag}</p>
        <p className="featured-work__case-desc">{project.preview ?? project.desc}</p>
      </div>
    </article>
  );
}

export default function FeaturedWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = projects[activeIndex];
  const stats = project?.after?.metrics?.slice(0, 3) ?? [];

  const goPrev = () => setActiveIndex((i) => (i - 1 + projects.length) % projects.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % projects.length);

  if (!project) return null;

  return (
    <section id="work" className="featured-work section-band section-band--paper-kraft">
      <div className="featured-work__inner">
        <div className="featured-work__layout">
          <Reveal direction="left" className="featured-work__copy">
            <p className="featured-work__eyebrow">My work</p>

            <div className="featured-work__headline">
              <h2 className="featured-work__title">
                Featured
                <br />
                Case Study
              </h2>
              <Heart className="featured-work__heart animate-float-delay-1" filled={false} />
            </div>

            <p className="featured-work__desc">
              Real results for real brands. Explore how our strategies drive growth, engagement, and
              measurable impact.
            </p>

            <div className="featured-work__stats" key={project.slug}>
              {stats.map((stat, index) => (
                <div key={stat.label} className="featured-work__stat">
                  <span className="featured-work__stat-icon">{STAT_ICONS[index % STAT_ICONS.length]}</span>
                  <span className="featured-work__stat-value">{stat.value}</span>
                  <span className="featured-work__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <Link to={`/work/${project.slug}`} className="featured-work__cta">
              View full case study
              <span aria-hidden="true"> →</span>
            </Link>

            <div className="featured-work__nav" role="tablist" aria-label="Featured projects">
              <button
                type="button"
                className="featured-work__nav-btn"
                onClick={goPrev}
                aria-label="Previous project"
              >
                ←
              </button>

              <div className="featured-work__dots">
                {projects.map((item, index) => (
                  <button
                    key={item.slug}
                    type="button"
                    role="tab"
                    aria-selected={activeIndex === index}
                    aria-label={`Show ${item.name}`}
                    className={`featured-work__dot ${activeIndex === index ? "is-active" : ""}`}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>

              <button
                type="button"
                className="featured-work__nav-btn"
                onClick={goNext}
                aria-label="Next project"
              >
                →
              </button>
            </div>
          </Reveal>

          <Reveal direction="right" delay={80} className="featured-work__visual">
            <CaseStudyCard key={project.slug} project={project} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
