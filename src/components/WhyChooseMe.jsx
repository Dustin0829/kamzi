import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { Star4 } from "./Doodles";

const cards = [
  {
    left: {
      title: "Gen Z Perspective",
      body: "I understand what's currently working online — scroll-stopping creatives, platform-native content, and campaigns that actually connect with today's audience.",
    },
    right: {
      title: "4+ Years of Real Experience",
      body: "With years of hands-on experience, I don't just run ads — I know what works, what converts, and how to avoid costly marketing mistakes.",
    },
  },
  {
    left: {
      title: "Conversion-Focused Campaigns",
      body: "Every ad, funnel, and creative is built with one goal: turning attention into action. I design for clicks, leads, and sales — not just impressions.",
    },
    right: {
      title: "Client-Centered & Stress-Free Process",
      body: "Clear communication, transparent reporting, and a smooth workflow from strategy to launch — so you always know what's happening and why.",
    },
  },
  {
    left: {
      title: "Full-Funnel Strategy",
      body: "From awareness to retargeting, I build cohesive campaigns across Meta, TikTok, Google, and more — so every touchpoint works together.",
    },
    right: {
      title: "Results You Can Measure",
      body: "ROAS, CPA, revenue growth — I track what matters and optimize relentlessly so your ad spend keeps working harder over time.",
    },
  },
];

const STACK_STEP = 18;

function ColumnIcon({ variant }) {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
      {variant === "check" ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-cream/80" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-cream/80" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
        </svg>
      )}
    </span>
  );
}

function CardContent({ card }) {
  return (
    <article className="overflow-hidden rounded-[1.25rem] bg-[#141414] shadow-[0_-8px_40px_rgba(0,0,0,0.45)] ring-1 ring-white/6 sm:rounded-[1.75rem]">
      <div className="grid md:grid-cols-2">
        <div className="border-b border-white/6 p-5 sm:p-6 md:border-b-0 md:border-r md:p-10">
          <ColumnIcon variant="check" />
          <h3 className="mt-3 font-serif text-lg font-semibold text-cream sm:mt-5 sm:text-xl md:text-2xl">
            {card.left.title}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-cream/50 sm:mt-3 sm:text-sm">{card.left.body}</p>
        </div>
        <div className="p-5 sm:p-6 md:p-10">
          <ColumnIcon variant="plus" />
          <h3 className="mt-3 font-serif text-lg font-semibold text-cream sm:mt-5 sm:text-xl md:text-2xl">
            {card.right.title}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-cream/50 sm:mt-3 sm:text-sm">{card.right.body}</p>
        </div>
      </div>
    </article>
  );
}

function StackCard({ card, index, x, scale, activeStep }) {
  const isStacked = index <= activeStep;
  const isSlidingIn = index === activeStep + 1;

  return (
    <motion.div
      className="absolute inset-x-4 w-auto will-change-transform sm:inset-x-6 md:inset-x-8"
      style={{
        x,
        scale,
        top: index * STACK_STEP,
        zIndex: isSlidingIn ? 10 : isStacked ? index + 1 : 0,
        transformOrigin: "top center",
        visibility: isStacked || isSlidingIn ? "visible" : "hidden",
      }}
    >
      <CardContent card={card} />
    </motion.div>
  );
}

function SectionBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute right-0 top-0 h-96 w-96 translate-x-1/4 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(236,91,114,0.35), transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 h-80 w-80 -translate-x-1/4 translate-y-1/4 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(236,91,114,0.2), transparent 70%)" }}
      />

      <div className="absolute left-8 top-16 grid grid-cols-4 gap-2 md:left-14">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-rose/70" />
        ))}
      </div>

      <Star4 className="animate-twinkle absolute left-28 top-24 h-4 w-4 text-rose/60" />
      <Star4 className="animate-float absolute right-16 top-20 h-5 w-5 text-rose/70" />
      <Star4 className="animate-float-delay-1 absolute right-6 top-1/2 h-4 w-4 text-rose/50" />
      <Star4 className="animate-twinkle absolute bottom-32 left-10 h-4 w-4 text-rose/50" />
    </div>
  );
}

function SectionHeader({ activeStep }) {
  return (
    <div className="text-center">
      <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-[11px] font-medium tracking-wide text-cream/70 ring-1 ring-white/10">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-rose" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
        Why choose me
      </span>

      <h2 className="mt-4 font-serif text-[1.65rem] font-semibold leading-tight sm:mt-6 sm:text-4xl md:text-5xl">
        <span className="bg-linear-to-b from-cream to-cream/50 bg-clip-text text-transparent">
          why me as your
        </span>
        <br />
        <span className="text-cream">marketing partner</span>
      </h2>

      <p className="mx-auto mt-3 max-w-md text-xs text-cream/45 sm:mt-4 sm:text-sm">
        Why partner with me for marketing that drives real growth
      </p>

      <div className="mt-4 flex items-center justify-center gap-2 sm:mt-5">
        {[0, 1, 2].map((step) => (
          <span
            key={step}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeStep === step
                ? "w-6 bg-rose"
                : activeStep > step
                  ? "w-3 bg-rose/50"
                  : "w-3 bg-white/15"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function WhyChooseMe() {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.1) setActiveStep(0);
    else if (v < 0.54) setActiveStep(1);
    else setActiveStep(2);
  });

  const card1X = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const card2X = useTransform(scrollYProgress, [0.06, 0.48], ["-105%", "0%"]);
  const card3X = useTransform(scrollYProgress, [0.54, 0.9], ["105%", "0%"]);

  const card1Scale = useTransform(scrollYProgress, [0.48, 0.6, 0.9, 0.97], [1, 0.91, 0.91, 0.86]);
  const card2Scale = useTransform(scrollYProgress, [0.9, 0.97], [1, 0.91]);

  const xValues = [card1X, card2X, card3X];
  const scaleValues = [card1Scale, card2Scale, 1];

  return (
    <section id="why-me" ref={containerRef} className="relative h-[420vh] text-cream">
      <div className="sticky top-0 flex h-[100dvh] flex-col bg-[#121212] md:h-screen md:overflow-hidden">
        <SectionBackground />

        <div className="relative mx-auto flex h-full w-full max-w-5xl flex-col px-4 pb-14 pt-16 sm:px-6 sm:pb-10 sm:pt-20 md:px-10 md:pb-16 md:pt-24">
          <div className="shrink-0">
            <SectionHeader activeStep={activeStep} />
          </div>

          <div className="relative mt-4 flex min-h-0 flex-1 flex-col overflow-x-clip overflow-y-visible sm:mt-6 md:mt-10">
            <div className="relative w-full min-h-[460px] shrink-0 pt-3 pb-10 sm:min-h-[500px] sm:pt-4 sm:pb-4 md:min-h-[280px] md:pt-0 md:pb-0">
              {cards.map((card, i) => (
                <StackCard
                  key={card.left.title}
                  card={card}
                  index={i}
                  x={xValues[i]}
                  scale={scaleValues[i]}
                  activeStep={activeStep}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
