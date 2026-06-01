import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Heart, Sparkle, Star4, CurveArrow } from "./Doodles";
import SocialLinks from "./SocialLinks";
import Reveal from "./Reveal";

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section id="home" ref={sectionRef} className="relative flex min-h-[80dvh] flex-col overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-linear-to-b from-rose-deep/40 via-ink to-ink" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 70% 40%, rgba(236,91,114,0.55), transparent 55%)",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-8 px-6 py-28 md:grid-cols-2 md:px-10 md:py-32">
        <motion.div className="relative max-w-xl" style={{ y: textY }}>
          <CurveArrow className="animate-float absolute -left-4 -top-10 hidden h-12 w-12 text-rose md:block" />

          <Reveal delay={0}>
            <span className="inline-block rounded-full border border-cream/20 px-4 py-1.5 text-[11px] font-medium tracking-[0.15em] text-cream/70">
              performance marketing strategist
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-6 font-serif text-6xl font-semibold leading-[0.95] tracking-tight text-cream md:text-7xl">
              hello, i'm
              <br />
              <span className="text-rose">kamille.</span>
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-cream/70">
              I help businesses scale through strategic advertising, creative
              campaigns, and data-driven marketing.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="card-lift relative mt-8 inline-flex max-w-md items-start gap-3 rounded-2xl bg-ink-soft px-6 py-5 text-cream ring-1 ring-white/10">
              <span className="font-serif text-3xl leading-none text-rose">“</span>
              <p className="text-sm leading-relaxed">
                I help brands attract more customers, increase sales, and{" "}
                <span className="text-rose">grow profitably.</span>
              </p>
              <Heart className="animate-float-delay-1 absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 text-rose" />
            </div>
          </Reveal>

          <Reveal delay={420}>
            <SocialLinks className="mt-8" />
          </Reveal>
        </motion.div>

        <Reveal className="relative flex justify-center md:justify-end" delay={180} direction="right">
          <Sparkle className="animate-twinkle absolute right-10 top-2 z-20 h-7 w-7 text-rose/70" />
          <Star4 className="animate-float-delay-2 absolute -right-1 top-24 z-20 h-5 w-5 text-rose/60" />
          <Heart className="animate-float absolute right-2 bottom-16 z-20 h-7 w-7 text-rose/70" filled={false} />
          <Heart className="animate-float-delay-1 absolute -left-2 top-20 z-20 h-5 w-5 text-rose/50" />

          <motion.div
            className="relative w-full max-w-md overflow-hidden rounded-[2rem]"
            style={{ y: imageY }}
          >
            <div className="absolute inset-0 bg-linear-to-b from-rose-deep/40 via-ink to-ink" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 50% 35%, rgba(236,91,114,0.55), transparent 60%)",
              }}
            />
            <img
              src="/KAMZ_NEW-removebg-preview.png"
              alt="Kamille, performance marketing strategist"
              className="relative z-10 mx-auto w-full object-cover"
            />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
