import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds, offset = 120) {
  const [active, setActive] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY + offset;
      let current = sectionIds[0] ?? "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }

      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [sectionIds, offset]);

  return active;
}

export function useScrolled(threshold = 80) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > threshold);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [threshold]);

  return scrolled;
}

export function useNavbarHidden(threshold = 10, topOffset = 80) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const update = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= topOffset) {
        setHidden(false);
        lastScrollY = currentScrollY;
        return;
      }

      const delta = currentScrollY - lastScrollY;
      if (Math.abs(delta) < threshold) return;

      setHidden(delta > 0);
      lastScrollY = currentScrollY;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [threshold, topOffset]);

  return hidden;
}
