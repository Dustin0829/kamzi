import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Heart } from "./Doodles";
import Reveal from "./Reveal";
import SectionBgDecor from "./SectionBgDecor";
import "./WhatsInMyBag.css";

const AD_CHANNELS = [
  {
    id: "meta",
    label: "Meta Ads",
    src: "/meta-12368_1024.png",
    top: "11%",
    left: "32%",
    rotate: -9,
    delay: 0,
  },
  {
    id: "instagram",
    label: "Instagram Ads",
    src: "/instagram-logo-8869_1024.png",
    top: "44%",
    left: "11%",
    rotate: -7,
    delay: 70,
  },
  {
    id: "pinterest",
    label: "Pinterest Ads",
    src: "/pinterest.png",
    top: "72%",
    left: "9%",
    rotate: -5,
    delay: 140,
  },
  {
    id: "snapchat",
    label: "Snapchat Ads",
    src: "/snapchat-logo-2437_1024.png",
    top: "11%",
    left: "68%",
    rotate: 9,
    delay: 210,
  },
  {
    id: "tiktok",
    label: "TikTok Ads",
    src: "/tiktok-logo-4505_1024.png",
    top: "44%",
    left: "89%",
    rotate: 7,
    delay: 280,
  },
  {
    id: "google",
    label: "Google Ads",
    src: "/google-ads-logo-24212_1024.png",
    top: "72%",
    left: "91%",
    rotate: 5,
    delay: 350,
  },
];

function ChannelIcon({ channel, open, reducedMotion }) {
  return (
    <motion.div
      className="whats-in-my-bag__channel"
      style={{
        top: channel.top,
        left: channel.left,
        "--channel-rotate": `${channel.rotate}deg`,
      }}
      initial={false}
      animate={{
        opacity: open ? 1 : 0,
        x: "-50%",
        y: open ? "-50%" : "calc(-50% + 24px)",
        scale: open ? 1 : 0.35,
        rotate: open ? channel.rotate : channel.rotate - 8,
      }}
      transition={{
        duration: reducedMotion ? 0.01 : 0.55,
        delay: open && !reducedMotion ? channel.delay / 1000 : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
      aria-hidden={!open}
    >
      <img
        src={channel.src}
        alt=""
        className="whats-in-my-bag__channel-icon"
        loading="lazy"
        decoding="async"
        draggable={false}
      />
      <p className="whats-in-my-bag__channel-label">{channel.label}</p>
    </motion.div>
  );
}

export default function WhatsInMyBag() {
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <section id="channels" className="whats-in-my-bag section-band section-band--cool">
      <SectionBgDecor variant="bag" />

      <div className="whats-in-my-bag__inner">
        <Reveal direction="up">
          <header className="whats-in-my-bag__header">
            <p className="whats-in-my-bag__eyebrow">platforms I run</p>
            <div className="whats-in-my-bag__headline">
              <h2>
                <span className="whats-in-my-bag__title-script">ad channels</span>
                <span className="whats-in-my-bag__title-display">in my bag</span>
              </h2>
              <Heart className="whats-in-my-bag__heart animate-float-delay-1" filled />
            </div>
            <p className={`whats-in-my-bag__hint ${!open ? "whats-in-my-bag__hint--pulse" : ""}`}>
              {open ? "Tap the bag to close" : "Tap the bag to peek inside"}
            </p>
          </header>
        </Reveal>

        <Reveal className="whats-in-my-bag__stage" delay={100} direction="scale">
          <div
            className={`whats-in-my-bag__glow ${open ? "whats-in-my-bag__glow--hidden" : ""}`}
            aria-hidden="true"
          />

          <div
            className={`whats-in-my-bag__shadow ${open ? "whats-in-my-bag__shadow--lifted" : ""}`}
            aria-hidden="true"
          />

          {AD_CHANNELS.map((channel) => (
            <ChannelIcon key={channel.id} channel={channel} open={open} reducedMotion={reducedMotion} />
          ))}

          <motion.button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close bag" : "Open bag"}
            aria-expanded={open}
            className="whats-in-my-bag__bag-btn"
            whileHover={reducedMotion ? undefined : { y: open ? 0 : -6, scale: open ? 1 : 1.02 }}
            whileTap={reducedMotion ? undefined : { y: 4, scale: 0.97 }}
            animate={{ y: open ? -10 : 0, opacity: open ? 0.9 : 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <img
              src="/chanel.png"
              alt=""
              className="whats-in-my-bag__bag-img"
              draggable={false}
              decoding="async"
            />
          </motion.button>
        </Reveal>
      </div>
    </section>
  );
}
