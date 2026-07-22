import { useLenis } from "lenis/react";
import { useCallback, useEffect, useState } from "react";

export function usePinnedIntro(sectionRef, columnRef, introRef, { topOffset = 112, minWidth = 768 } = {}) {
  const [pinState, setPinState] = useState("before");
  const [pinnedWidth, setPinnedWidth] = useState(null);
  const [pinnedLeft, setPinnedLeft] = useState(null);
  const [introHeight, setIntroHeight] = useState(0);

  const updatePinState = useCallback(() => {
    const section = sectionRef.current;
    const column = columnRef.current;
    const intro = introRef.current;
    if (!section || !column || !intro) return;

    if (window.innerWidth < minWidth) {
      setPinState((prev) => (prev === "before" ? prev : "before"));
      return;
    }

    const sectionRect = section.getBoundingClientRect();
    const columnRect = column.getBoundingClientRect();
    const nextIntroHeight = intro.offsetHeight;
    const nextPinnedWidth = column.offsetWidth;
    const nextPinnedLeft = columnRect.left;

    let next = "fixed";

    if (sectionRect.top > topOffset) {
      next = "before";
    } else if (sectionRect.bottom <= nextIntroHeight + topOffset) {
      next = "after";
    }

    setIntroHeight(nextIntroHeight);
    setPinnedWidth(nextPinnedWidth);
    setPinnedLeft(nextPinnedLeft);
    setPinState((prev) => (prev === next ? prev : next));
  }, [sectionRef, columnRef, introRef, topOffset, minWidth]);

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

  return { pinState, pinnedWidth, pinnedLeft, introHeight };
}
