import { useEffect, useRef, useState } from "react";

function parseStat(raw) {
  const match = raw.match(/^([^\d]*)([\d.]+)(.*)$/);
  if (!match) return { prefix: "", num: 0, suffix: raw, decimals: 0 };
  const num = parseFloat(match[2]);
  const decimals = match[2].includes(".") ? match[2].split(".")[1].length : 0;
  return { prefix: match[1], num, suffix: match[3], decimals };
}

export default function CountUp({ value, className = "" }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);
  const { prefix, num, suffix, decimals } = parseStat(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let started = false;
    let raf = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;

        const start = performance.now();
        const duration = 1400;

        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - (1 - t) ** 3;
          const current = num * eased;
          setDisplay(
            `${prefix}${decimals ? current.toFixed(decimals) : Math.round(current)}${suffix}`,
          );
          if (t < 1) raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [num, prefix, suffix, decimals]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
