import { useRef, useState } from "react";
import { Heart } from "./Doodles";
import Reveal from "./Reveal";
import SectionBgDecor from "./SectionBgDecor";
import "./FeaturedWork.css";

const projects = [
  {
    name: "luxe manila",
    tag: "performance marketing",
    desc: "Improved ROAS and increased revenue through data-driven ad strategies.",
    href: "#work",
    accent: "#c8a98a",
    label: "LUXE",
  },
  {
    name: "bare skincare",
    tag: "creative strategy",
    desc: "Developed high-converting creatives that boosted customer acquisition.",
    href: "#work",
    accent: "#d7c4b3",
    label: "bare.",
  },
  {
    name: "ntrl apparel",
    tag: "growth campaign",
    desc: "Created full-funnel campaigns that drove brand awareness and sales.",
    href: "#work",
    accent: "#9aa0a6",
    label: "Elevate\nYour Style",
  },
];

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:rotate-12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M17 7H9M17 7v8" />
    </svg>
  );
}

const POLAROID_ROTATIONS = [-2.5, 2, -1.25];

function PolaroidPreview({ accent, label, name, tag, index }) {
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
      <div className="featured-work__polaroid-preview">
        <div className="featured-work__polaroid-preview-inner" />

        <div className="featured-work__polaroid-browser">
          <div className="featured-work__polaroid-browser-bar">
            <span className="featured-work__polaroid-browser-dot bg-[#ff5f57]" />
            <span className="featured-work__polaroid-browser-dot bg-[#febc2e]" />
            <span className="featured-work__polaroid-browser-dot bg-[#28c840]" />
          </div>
          <div className="featured-work__polaroid-browser-screen" style={{ backgroundColor: accent }}>
            <span className="featured-work__polaroid-browser-label">{label}</span>
          </div>
        </div>

        <div className="featured-work__polaroid-phone">
          <div className="h-full w-full" style={{ backgroundColor: accent }}>
            <div className="featured-work__polaroid-phone-notch" />
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
  return (
    <Reveal delay={index * 80} direction={index % 2 === 0 ? "right" : "left"}>
      <article className="group">
        <PolaroidPreview
          accent={project.accent}
          label={project.label}
          name={project.name}
          tag={project.tag}
          index={index}
        />

        <div className="mt-4 flex justify-center">
          <a href={project.href} className="featured-work__project-link group inline-flex items-center gap-2">
            <ExternalLinkIcon />
          </a>
        </div>

        <p className="featured-work__project-desc">{project.desc}</p>
      </article>
    </Reveal>
  );
}

export default function FeaturedWork() {
  return (
    <section id="work" className="featured-work relative pt-28 pb-20 md:py-28">
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

                <a href="#work" className="featured-work__cta btn-interactive">
                  view more works
                  <span className="arrow-slide" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col gap-16 pb-8 md:gap-20">
          {projects.map((p, i) => (
            <ProjectItem key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
