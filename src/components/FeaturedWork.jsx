import { useRef, useState } from "react";
import { Heart, Star4 } from "./Doodles";
import Reveal from "./Reveal";

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
      className="h-5 w-5 shrink-0 text-rose/80 transition-transform duration-300 group-hover:rotate-12 group-hover:text-rose"
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

function ProjectPreview({ accent, label }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState("perspective(800px) rotateX(0deg) rotateY(0deg)");

  const handleMove = (e) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(
      `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.02, 1.02, 1.02)`,
    );
  };

  const handleLeave = () => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg)");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform, transition: "transform 0.15s ease-out" }}
      className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#1a1a1a] shadow-[0_24px_64px_-24px_rgba(0,0,0,0.65)] ring-1 ring-white/5"
    >
      <div className="absolute inset-0 bg-linear-to-br from-white/[0.03] to-transparent" />

      <div className="absolute left-[6%] top-[10%] h-[72%] w-[68%] overflow-hidden rounded-lg bg-white shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]">
        <div className="flex items-center gap-1.5 bg-[#ececec] px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex h-full items-center justify-center" style={{ backgroundColor: accent }}>
          <span className="-mt-6 whitespace-pre-line text-center font-serif text-2xl font-bold tracking-wide text-white/90 md:text-3xl">
            {label}
          </span>
        </div>
      </div>

      <div className="absolute bottom-[8%] right-[6%] h-[62%] w-[22%] overflow-hidden rounded-xl border-2 border-[#444] bg-white shadow-2xl transition-transform duration-500 group-hover:scale-105">
        <div className="h-full w-full" style={{ backgroundColor: accent }}>
          <div className="mx-auto mt-3 h-1 w-8 rounded-full bg-black/20" />
        </div>
      </div>
    </div>
  );
}

function ProjectItem({ project, index }) {
  return (
    <Reveal delay={index * 80} direction={index % 2 === 0 ? "right" : "left"}>
      <article className="group">
        <ProjectPreview accent={project.accent} label={project.label} />

        <div className="mt-6 flex items-center gap-3">
          <a
            href={project.href}
            className="inline-flex items-center gap-3 transition-colors hover:text-rose"
          >
            <h3 className="font-serif text-2xl font-semibold capitalize text-cream md:text-[1.75rem]">
              {project.name}
            </h3>
            <ExternalLinkIcon />
          </a>
        </div>

        <p className="mt-2 max-w-xl text-sm leading-relaxed text-cream/55">{project.desc}</p>
        <p className="mt-2 translate-y-1 text-xs font-medium tracking-wide text-rose/80 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {project.tag}
        </p>
      </article>
    </Reveal>
  );
}

export default function FeaturedWork() {
  return (
    <section id="work" className="relative bg-[#121212] pt-28 pb-20 text-cream md:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute right-0 top-0 h-96 w-96 translate-x-1/4 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(236,91,114,0.35), transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 h-80 w-80 -translate-x-1/4 translate-y-1/4 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(236,91,114,0.2), transparent 70%)" }}
        />

        <div className="absolute left-8 top-16 hidden grid-cols-4 gap-2 md:grid md:left-14">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-full bg-rose/70" />
          ))}
        </div>

        <Star4 className="animate-twinkle absolute right-16 top-20 h-5 w-5 text-rose/70" />
        <Star4 className="animate-float absolute bottom-32 left-10 h-4 w-4 text-rose/50" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-start gap-12 px-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-16 md:px-10 lg:gap-20">
        <div className="md:sticky md:top-28 md:self-start">
          <Reveal direction="left">
            <div className="flex items-stretch gap-6 md:gap-8">
              <div className="hidden flex-col items-center md:flex">
                <span className="h-16 w-px bg-linear-to-b from-transparent to-rose/40" />
                <span className="mt-4 h-16 w-px bg-linear-to-b from-rose/40 to-transparent" />
              </div>

              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] text-rose">MY WORKS</p>

                <div className="relative mt-4">
                  <h2 className="font-serif text-4xl font-semibold leading-[1.1] md:text-5xl lg:text-[3.5rem]">
                    <span className="text-cream">featured</span>
                    <br />
                    <span className="text-rose">work</span>
                  </h2>
                  <Heart className="animate-float-delay-1 absolute -right-6 top-0 h-5 w-5 text-rose md:-right-8" />
                </div>

                <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/55">
                  Real results for real brands. Explore how our strategies drive growth,
                  engagement, and measurable impact.
                </p>

                <a
                  href="#work"
                  className="btn-interactive mt-8 inline-flex items-center gap-2 rounded-full border border-rose/60 px-5 py-2.5 text-[11px] font-semibold tracking-[0.18em] text-cream hover:border-rose hover:bg-rose/10"
                >
                  view more works
                  <span className="arrow-slide" aria-hidden="true">→</span>
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
