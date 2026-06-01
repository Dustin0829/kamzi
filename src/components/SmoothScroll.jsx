import { ReactLenis } from "lenis/react";
import { cancelFrame, frame } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "lenis/dist/lenis.css";

const LENIS_OPTIONS = {
  autoRaf: false,
  lerp: 0.06,
  smoothWheel: true,
  wheelMultiplier: 0.82,
  touchMultiplier: 1.35,
  anchors: {
    duration: 1.6,
  },
};

function LenisFrameSync({ lenisRef }) {
  useEffect(() => {
    function update(data) {
      lenisRef.current?.lenis?.raf(data.timestamp);
    }

    frame.update(update, true);
    return () => cancelFrame(update);
  }, [lenisRef]);

  return null;
}

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event) => setReducedMotion(event.matches);

    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  if (reducedMotion) {
    return children;
  }

  return (
    <>
      <ReactLenis root ref={lenisRef} options={LENIS_OPTIONS} />
      <LenisFrameSync lenisRef={lenisRef} />
      {children}
    </>
  );
}
