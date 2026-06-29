import MagicBento from "./MagicBento";
import GoogleAdsDashboardPreview from "./GoogleAdsDashboardPreview";
import MetaAdsDashboardPreview from "./MetaAdsDashboardPreview";
import Reveal from "./Reveal";
import SectionBgDecor from "./SectionBgDecor";

const services = [
  {
    id: "snapchat",
    num: "01",
    title: "Snapchat Ads",
    body: "Creative, native ads that connect with younger audiences and boost brand awareness.",
    iconBg: "bg-[#fff9c4]",
    iconColor: "text-[#f9a825]",
    numColor: "text-[#fff9c4]",
    iconSrc: "/snapchat-logo-2437_1024.png",
    iconAlt: "Snapchat",
    revealDirection: "left",
    revealDelay: 0,
  },
  {
    id: "tiktok",
    num: "02",
    title: "Tiktok Ads",
    body: "Engaging ad strategies that capture attention and turn scrolls into customers.",
    iconBg: "bg-[#ede7f6]",
    iconColor: "text-[#7e57c2]",
    numColor: "text-[#ede7f6]",
    iconSrc: "/tiktok-logo-4505_1024.png",
    iconAlt: "TikTok",
    revealDirection: "left",
    revealDelay: 120,
  },
  {
    id: "meta",
    num: "03",
    title: "Meta Ads",
    body: "High-converting campaigns that drive leads, sales, and scale your brand profitably.",
    iconBg: "bg-[#fce4ec]",
    iconColor: "text-[#ec5b72]",
    numColor: "text-[#fce4ec]",
    iconSrc: "/meta-12368_1024.png",
    iconAlt: "Meta",
    dashboard: <MetaAdsDashboardPreview />,
    revealDirection: "right",
    revealDelay: 0,
  },
  {
    id: "google",
    num: "04",
    title: "Google Ads",
    body: "Data-driven search and display campaigns that deliver qualified traffic and real results.",
    iconBg: "bg-[#e3f2fd]",
    iconColor: "text-[#42a5f5]",
    numColor: "text-[#e3f2fd]",
    iconSrc: "/google-ads-logo-24212_1024.png",
    iconAlt: "Google Ads",
    dashboard: <GoogleAdsDashboardPreview />,
    revealDirection: "left",
    revealDelay: 240,
  },
  {
    id: "pinterest",
    num: "05",
    title: "Pinterest Ads",
    body: "Visual-first campaigns that inspire action and drive high-intent traffic.",
    iconBg: "bg-[#fce4ec]",
    iconColor: "text-[#ef5350]",
    numColor: "text-[#fce4ec]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 00-3.6 19.3c-.1-.8-.2-2 0-2.9.2-.8 1.1-4.8 1.1-4.8s-.3-.6-.3-1.4c0-1.3.8-2.3 1.7-2.3.8 0 1.2.6 1.2 1.4 0 .8-.5 2-.8 3.2-.2 1 .5 1.7 1.4 1.7 1.7 0 3-1.8 3-4.4 0-2.3-1.6-3.9-4-3.9-2.7 0-4.3 2-4.3 4.1 0 .8.3 1.7.7 2.2.1.1.1.2.1.3l-.3 1.1c0 .2-.2.2-.4.1-1.3-.6-2.1-2.5-2.1-4 0-3.3 2.4-6.3 6.9-6.3 3.6 0 6.4 2.6 6.4 6 0 3.6-2.3 6.5-5.4 6.5-1.1 0-2.1-.6-2.4-1.2l-.7 2.5c-.2.9-.9 2.1-1.4 2.8A10 10 0 1012 2z" />
      </svg>
    ),
    revealDirection: "right",
    revealDelay: 120,
  },
  {
    id: "social",
    num: "06",
    title: "Social Media",
    body: "Full-funnel social strategies that build communities and grow your brand.",
    iconBg: "bg-[#e0f2f1]",
    iconColor: "text-[#26a69a]",
    numColor: "text-[#e0f2f1]",
    iconSrc: "/instagram-logo-8869_1024.png",
    iconAlt: "Instagram",
    revealDirection: "right",
    revealDelay: 240,
  },
];

function ServiceBentoCard({ service }) {
  return (
    <>
      <span className={`magic-bento-card__num ${service.numColor}`}>{service.num}</span>
      <div className="magic-bento-card__header">
        <div className={`magic-bento-card__icon ${service.iconBg} ${service.iconColor}`}>
          {service.iconSrc ? (
            <img src={service.iconSrc} alt={service.iconAlt ?? ""} loading="lazy" decoding="async" />
          ) : (
            service.icon
          )}
        </div>
      </div>
      {service.dashboard ? (
        <div className="magic-bento-card__dashboard">{service.dashboard}</div>
      ) : null}
      <div className="magic-bento-card__content">
        <h2 className="magic-bento-card__title">{service.title}</h2>
        <p className="magic-bento-card__description">{service.body}</p>
      </div>
    </>
  );
}

export default function WhatIDo() {
  const bentoCards = services.map((service) => ({
    id: service.id,
    color: "#ffffff",
    title: service.title,
    description: service.body,
    label: service.num,
    ...service,
  }));

  return (
    <section id="services" className="section-band section-band--warm relative overflow-hidden py-24 md:py-32">
      <SectionBgDecor variant="services" />

      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, #d4c4bc 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div
        className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(236,91,114,0.25), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <Reveal className="text-center" direction="up">
          <span className="inline-block rounded-full bg-rose/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.15em] text-rose">
            ✦ WHAT I DO
          </span>

          <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl lg:text-[3.25rem]">
            Marketing that{" "}
            <span className="relative inline-block">
              <span className="font-script text-5xl font-bold text-rose md:text-6xl">drives</span>
              <svg viewBox="0 0 120 12" className="absolute -bottom-1 left-0 w-full text-rose/60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <path className="draw-underline-path" d="M4 8C20 2 40 10 60 6s40-4 56 2" />
              </svg>
            </span>
            <br className="hidden sm:block" />
            {" "}real growth.
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-ink/55">
            I help brands grow and scale with strategic advertising and creative
            marketing solutions.
          </p>
        </Reveal>

        <div className="mt-14">
          <MagicBento
            cards={bentoCards}
            renderCard={(service) => <ServiceBentoCard service={service} />}
            theme="light"
            className="card-grid--wide card-grid--no-hover-glow mx-auto"
            textAutoHide
            enableStars={false}
            enableSpotlight={false}
            enableBorderGlow={false}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect={false}
          />
        </div>
      </div>
    </section>
  );
}
