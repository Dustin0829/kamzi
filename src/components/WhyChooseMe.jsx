import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import SectionBgDecor from "./SectionBgDecor";
import "./WhyChooseMe.css";

const cards = [
  {
    left: {
      icon: "genz",
      title: "Gen Z Perspective",
      body: "I understand what's currently working online — scroll-stopping creatives, platform-native content, and campaigns that actually connect with today's audience.",
    },
    right: {
      icon: "experience",
      title: "4+ Years of Real Experience",
      body: "With years of hands-on experience, I don't just run ads — I know what works, what converts, and how to avoid costly marketing mistakes.",
    },
  },
  {
    left: {
      icon: "conversion",
      title: "Conversion-Focused Campaigns",
      body: "Every ad, funnel, and creative is built with one goal: turning attention into action. I design for clicks, leads, and sales — not just impressions.",
    },
    right: {
      icon: "support",
      title: "Client-Centered & Stress-Free Process",
      body: "Clear communication, transparent reporting, and a smooth workflow from strategy to launch — so you always know what's happening and why.",
    },
  },
  {
    left: {
      icon: "funnel",
      title: "Full-Funnel Strategy",
      body: "From awareness to retargeting, I build cohesive campaigns across Meta, TikTok, Google, and more — so every touchpoint works together.",
    },
    right: {
      icon: "results",
      title: "Results You Can Measure",
      body: "ROAS, CPA, revenue growth — I track what matters and optimize relentlessly so your ad spend keeps working harder over time.",
    },
  },
];

const STACK_STEP = 18;

const ICONS = {
  genz: (
    <svg viewBox="0 0 24 24" className="why-choose-me__icon-svg" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M10 18h4" strokeLinecap="round" />
      <path d="M9 7h6M9 10h4" strokeLinecap="round" />
      <path d="M16 6l2-1.5M18 10l2 .5" strokeLinecap="round" />
    </svg>
  ),
  experience: (
    <svg viewBox="0 0 24 24" className="why-choose-me__icon-svg" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M8 4h8l1 4H7l1-4z" strokeLinejoin="round" />
      <path d="M6 8v10a2 2 0 002 2h8a2 2 0 002-2V8" strokeLinejoin="round" />
      <path d="M9 12h6M9 15h4" strokeLinecap="round" />
      <circle cx="17" cy="5" r="2.5" />
      <path d="M17 3.5v3M15.5 5h3" strokeLinecap="round" />
    </svg>
  ),
  conversion: (
    <svg viewBox="0 0 24 24" className="why-choose-me__icon-svg" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
      <path d="M12 4V2M12 22v-2M4 12H2M22 12h-2" strokeLinecap="round" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 24 24" className="why-choose-me__icon-svg" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M6 6.5h12a2 2 0 012 2v6a2 2 0 01-2 2h-4.5L9 19v-2.5H6a2 2 0 01-2-2v-6a2 2 0 012-2z" strokeLinejoin="round" />
      <path d="M8.5 10.5h7M8.5 13.5h4.5" strokeLinecap="round" />
    </svg>
  ),
  funnel: (
    <svg viewBox="0 0 24 24" className="why-choose-me__icon-svg" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 5h16l-6 7v6l-4 2v-8L4 5z" strokeLinejoin="round" />
      <path d="M9 14h6" strokeLinecap="round" />
    </svg>
  ),
  results: (
    <svg viewBox="0 0 24 24" className="why-choose-me__icon-svg" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 19V5" strokeLinecap="round" />
      <path d="M4 19h16" strokeLinecap="round" />
      <path d="M8 15l3-4 3 2 4-6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 7h2v2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

function ColumnIcon({ name }) {
  return (
    <span className={`why-choose-me__icon why-choose-me__icon--${name}`}>
      {ICONS[name]}
    </span>
  );
}

function CardContent({ card }) {
  return (
    <article className="why-choose-me__card relative">
      <span className="why-choose-me__tape" aria-hidden="true" />

      <div className="why-choose-me__card-grid">
        <div className="why-choose-me__card-col why-choose-me__card-col--left">
          <ColumnIcon name={card.left.icon} />
          <h3 className="why-choose-me__card-title">{card.left.title}</h3>
          <p className="why-choose-me__card-body">{card.left.body}</p>
        </div>
        <div className="why-choose-me__card-col">
          <ColumnIcon name={card.right.icon} />
          <h3 className="why-choose-me__card-title">{card.right.title}</h3>
          <p className="why-choose-me__card-body">{card.right.body}</p>
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
      <div className="absolute left-8 top-16 grid grid-cols-4 gap-2 md:left-14">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="why-choose-me__dot" />
        ))}
      </div>

      <SectionBgDecor variant="why-me" />
    </div>
  );
}

function SectionHeader({ activeStep }) {
  return (
    <div className="text-center">
      <span className="why-choose-me__badge">
        <svg
          viewBox="0 0 24 24"
          className="why-choose-me__badge-icon"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
        Why choose me
      </span>

      <div className="why-choose-me__headline">
        <h2>
          <span className="why-choose-me__title-script">why me as your</span>
          <span className="why-choose-me__title-display">marketing partner</span>
        </h2>
      </div>

      <p className="why-choose-me__subtitle">
        Why partner with me for marketing that drives real growth
      </p>

      <div className="why-choose-me__progress">
        {[0, 1, 2].map((step) => (
          <span
            key={step}
            className={`why-choose-me__progress-dot ${
              activeStep === step
                ? "why-choose-me__progress-dot--active"
                : activeStep > step
                  ? "why-choose-me__progress-dot--done"
                  : "why-choose-me__progress-dot--idle"
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
    <section id="why-me" ref={containerRef} className="why-choose-me relative h-[420vh]">
      <div className="why-choose-me__sticky sticky top-0 flex h-[100dvh] flex-col md:h-screen md:overflow-hidden">
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
