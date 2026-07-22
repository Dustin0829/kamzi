import { useLenis } from "lenis/react";
import { useCallback, useEffect, useState } from "react";

export function useScrollPin(containerRef) {
  const [pinState, setPinState] = useState("before");

  const updatePinState = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const { top, bottom } = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    let next = "fixed";

    if (top > 0) {
      next = "before";
    } else if (bottom <= viewportHeight) {
      next = "after";
    }

    setPinState((prev) => (prev === next ? prev : next));
  }, [containerRef]);

  useEffect(() => {
    updatePinState();
    window.addEventListener("scroll", updatePinState, { passive: true });
    window.addEventListener("resize", updatePinState, { passive: true });
    return () => {
      window.removeEventListener("scroll", updatePinState);
      window.removeEventListener("resize", updatePinState);
    };
  }, [updatePinState]);

  useLenis(updatePinState);

  return pinState;
}
