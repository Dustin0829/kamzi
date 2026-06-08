import { motion } from "framer-motion";
import { useState } from "react";
import Reveal from "./Reveal";
import SectionBgDecor from "./SectionBgDecor";

const icons = [
  { id: "meta", label: "Meta Ads", top: "19%", left: "28%", z: 30, delay: 0, src: "/meta-12368_1024.png", size: "h-14 sm:h-16" },
  { id: "snapchat", label: "Snapchat", top: "12%", left: "50%", z: 30, delay: 80, labelBelow: true, src: "/snapchat-logo-2437_1024.png", size: "h-14 sm:h-16" },
  { id: "tiktok", label: "TikTok", top: "14%", left: "80%", z: 30, delay: 160, labelBelow: true, src: "/tiktok-logo-4505_1024.png", size: "h-14 sm:h-16" },
  { id: "instagram", label: "Instagram", top: "42%", left: "28%", z: 30, delay: 240, src: "/instagram-logo-8869_1024.png", size: "h-14 sm:h-16" },
  { id: "canva", label: "Canva", top: "40%", left: "86%", z: 30, delay: 320, src: "/canva-blue-circle-round-22811_1024.png", size: "h-14 sm:h-16" },
  { id: "facebook", label: "Facebook", top: "70%", left: "22%", z: 30, delay: 400, src: "/facebook-5221_1024.png", size: "h-14 sm:h-16" },
  { id: "apple-notes", label: "Apple Notes", top: "48%", left: "70%", z: 30, delay: 480, src: "/apple-notes-22354_1024.png", size: "h-14 sm:h-16" },
  { id: "google-ads", label: "Google Ads", top: "67%", left: "85%", z: 30, delay: 560, src: "/google-ads-logo-24212_1024.png", size: "h-14 sm:h-16" },
];

function BagIcon({ icon, open, active, onSelect }) {
  return (
    <motion.button
      type="button"
      className="group/icon absolute cursor-pointer rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2"
      style={{
        top: icon.top,
        left: icon.left,
        zIndex: active === icon.id ? 50 : icon.z,
        pointerEvents: open ? "auto" : "none",
      }}
      initial={false}
      animate={{
        opacity: open ? 1 : 0,
        x: "-50%",
        y: open ? "-50%" : "calc(-50% + 20px)",
        scale: open ? 1 : 0.4,
      }}
      transition={{
        duration: 0.5,
        delay: open ? icon.delay / 1000 : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={open ? { scale: 1.2 } : undefined}
      whileTap={open ? { scale: 0.92 } : undefined}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(icon.id);
      }}
      aria-label={icon.label}
    >
      <span
        className={`pointer-events-none absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-semibold shadow-md transition-all duration-200 ${
          icon.labelBelow ? "top-full mt-2" : "-top-8"
        } ${
          active === icon.id
            ? "bg-rose text-white opacity-100"
            : "bg-ink text-cream opacity-0 group-hover/icon:opacity-100"
        }`}
      >
        {icon.label}
      </span>
      <span
        className={`block rounded-full p-1 transition-shadow duration-300 ${
          active === icon.id
            ? "shadow-[0_0_0_3px_rgba(236,91,114,0.5)]"
            : "group-hover/icon:shadow-[0_8px_24px_rgba(236,91,114,0.35)]"
        }`}
      >
        <img
          src={icon.src}
          alt={icon.label}
          className={`${icon.size} w-auto object-contain drop-shadow-lg`}
          draggable={false}
        />
      </span>
    </motion.button>
  );
}

export default function WhatsInMyBag() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const toggle = () => {
    setOpen((v) => {
      if (v) setActive(null);
      return !v;
    });
  };

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#efe7f3] to-[#e3d7ee] py-12 md:py-16">
      <SectionBgDecor variant="bag" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center md:px-8">
        <Reveal direction="up">
          <h2 className="font-serif text-4xl font-medium md:text-[2.75rem]">what's in my bag</h2>
          <span className="mx-auto mt-2 block h-[3px] w-36 rounded-full bg-rose/80" />
          <p
            className={`mx-auto mt-3 text-sm text-ink/55 transition-opacity duration-300 ${
              !open ? "animate-pulse-soft" : ""
            }`}
          >
            {open ? "tap the bag to close" : "tap the bag to peek inside"}
          </p>
        </Reveal>

        <Reveal className="relative mx-auto mt-6 h-[340px] w-full max-w-lg overflow-visible sm:h-[380px] md:h-[460px]" delay={120} direction="scale">
          <div
            className={`pointer-events-none absolute inset-x-0 bottom-[18%] mx-auto h-16 w-48 rounded-full blur-2xl transition-opacity duration-500 ${
              open ? "opacity-0" : "bg-rose/25 opacity-100"
            }`}
            aria-hidden="true"
          />

          {icons.map((icon) => (
            <BagIcon
              key={icon.id}
              icon={icon}
              open={open}
              active={active}
              onSelect={setActive}
            />
          ))}

          <motion.button
            type="button"
            onClick={toggle}
            aria-label={open ? "Close bag" : "Open bag"}
            aria-expanded={open}
            className="absolute inset-x-0 top-0 z-20 mx-auto flex h-full w-full max-w-2xl cursor-pointer items-start justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 focus-visible:ring-offset-[#e3d7ee]"
            whileHover={{ y: open ? 0 : -8, scale: open ? 1 : 1.03 }}
            whileTap={{ y: 4, scale: 0.96 }}
            animate={{ y: open ? -12 : 0, opacity: open ? 0.92 : 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <img
              src="/bag.png"
              alt="Kamille's bag — click to reveal tools"
              className="h-[130%] w-full object-contain object-[center_38%] drop-shadow-xl transition-[filter] duration-300 hover:drop-shadow-2xl"
              draggable={false}
            />
          </motion.button>
        </Reveal>
      </div>
    </section>
  );
}
