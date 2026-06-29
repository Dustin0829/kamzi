import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "./Doodles";
import Reveal from "./Reveal";
import SectionBgDecor from "./SectionBgDecor";
import { projects } from "../data/projects";
import "./FeaturedWork.css";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="featured-work__cta-arrow arrow-slide h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

const POLAROID_ROTATIONS = [-2.5, 2, -1.25];

function getCardHighlights(project) {
  const beforeMetrics = project.before?.metrics ?? [];
  const afterMetrics = project.after?.metrics ?? [];

  return afterMetrics
    .map((after) => {
      const before = beforeMetrics.find((metric) => metric.label === after.label);
      if (!before) return null;
      return { label: after.label, before: before.value, after: after.value };
    })
    .filter(Boolean);
}

function PolaroidPreview({ browser, phone, name, tag, index }) {
  const ref = useRef(null);
  const baseRotate = POLAROID_ROTATIONS[index] ?? 0;
  const idleTransform = `perspective(800px) rotate(${baseRotate}deg) rotateX(0deg) rotateY(0deg)`;
  const [transform, setTransform] = useState(idleTransform);

  const handleMove = (e) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(
      `perspective(800px) rotate(${baseRotate}deg) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.02, 1.02, 1.02)`,
    );
  };

  const handleLeave = () => {
    setTransform(idleTransform);
  };

  return (
    <figure
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform, transition: "transform 0.15s ease-out" }}
      className="featured-work__polaroid"
    >
      <span className="featured-work__polaroid-badge">Case study</span>

      <div className="featured-work__polaroid-preview">
        <div className="featured-work__polaroid-preview-inner" />
        <span className="featured-work__polaroid-hover-hint">View case study</span>

        <div className="featured-work__polaroid-browser">
          <div className="featured-work__polaroid-browser-bar">
            <span className="featured-work__polaroid-browser-dot bg-[#ff5f57]" />
            <span className="featured-work__polaroid-browser-dot bg-[#febc2e]" />
            <span className="featured-work__polaroid-browser-dot bg-[#28c840]" />
          </div>
          <div className="featured-work__polaroid-browser-screen">
            <img
              src={browser}
              alt={`${name} Facebook page on desktop`}
              className="featured-work__polaroid-shot featured-work__polaroid-shot--browser"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="featured-work__polaroid-phone">
          <div className="featured-work__polaroid-phone-inner">
            <img
              src={phone}
              alt={`${name} Facebook page on mobile`}
              className="featured-work__polaroid-shot featured-work__polaroid-shot--phone"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>

      <figcaption className="featured-work__polaroid-caption">
        <span className="featured-work__polaroid-name">{name}</span>
        <span className="featured-work__polaroid-tag">{tag}</span>
      </figcaption>
    </figure>
  );
}

function ProjectItem({ project, index }) {
  const highlights = getCardHighlights(project);
  const preview = project.preview ?? project.desc;

  return (
    <Reveal delay={index * 80} direction={index % 2 === 0 ? "right" : "left"}>
      <Link
        to={`/work/${project.slug}`}
        className="featured-work__card group block cursor-pointer rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
        aria-label={`View ${project.name} case study`}
      >
        <div className="featured-work__polaroid-wrap">
          <PolaroidPreview
            browser={project.browser}
            phone={project.phone}
            name={project.name}
            tag={project.tag}
            index={index}
          />
        </div>

        <div className="featured-work__card-body">
          <p className="featured-work__project-desc">{preview}</p>

          {highlights.length > 0 && (
            <ul className="featured-work__highlights">
              {highlights.map((item) => (
                <li key={item.label} className="featured-work__highlight">
                  <span className="featured-work__highlight-label">{item.label}</span>
                  <span className="featured-work__highlight-values">
                    <span className="featured-work__highlight-before">{item.before}</span>
                    <span className="featured-work__highlight-arrow" aria-hidden="true">
                      →
                    </span>
                    <span className="featured-work__highlight-after">{item.after}</span>
                  </span>
                </li>
              ))}
            </ul>
          )}

          <span className="featured-work__cta btn-interactive">
            View case study
            <ArrowIcon />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function FeaturedWork() {
  return (
    <section id="work" className="featured-work section-band section-band--paper relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-8 top-16 hidden grid-cols-4 gap-2 md:grid md:left-14">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="featured-work__dot" />
          ))}
        </div>

        <SectionBgDecor variant="work" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-start gap-12 px-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-16 md:px-10 lg:gap-20">
        <div className="md:sticky md:top-28 md:self-start">
          <Reveal direction="left">
            <div className="flex items-stretch gap-6 md:gap-8">
              <div className="hidden flex-col items-center md:flex">
                <span className="featured-work__rule h-20" />
                <span className="featured-work__rule mt-5 h-20" />
              </div>

              <div className="featured-work__intro">
                <p className="featured-work__eyebrow">MY WORKS</p>

                <div className="featured-work__headline">
                  <h2>
                    <span className="featured-work__title-script">featured</span>
                    <span className="featured-work__title-display">work</span>
                  </h2>
                  <Heart className="featured-work__heart animate-float-delay-1" filled />
                </div>

                <p className="featured-work__desc">
                  Real results for real brands. Explore how our strategies drive growth,
                  engagement, and measurable impact.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col gap-16 pb-8 md:gap-20">
          {projects.map((p, i) => (
            <ProjectItem key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
