import { useCallback, useEffect, useRef, useState } from "react";
import "./BeforeAfterSlider.css";

const DEFAULT_POSITION = 28;
const REVEAL_TARGET = 62;

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After",
  beforeAlt = "Before results",
  afterAlt = "After results",
  highlights = [],
  defaultPosition = DEFAULT_POSITION,
}) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(defaultPosition);
  const [hasRevealed, setHasRevealed] = useState(false);
  const draggingRef = useRef(false);
  const animatingRef = useRef(false);

  const clamp = (value) => Math.min(100, Math.max(0, value));

  const updateFromClientX = useCallback((clientX) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(clamp(next));
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || hasRevealed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animatingRef.current || hasRevealed) return;

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reducedMotion) {
          setPosition(REVEAL_TARGET);
          setHasRevealed(true);
          return;
        }

        animatingRef.current = true;
        const start = defaultPosition;
        const end = REVEAL_TARGET;
        const duration = 1400;
        const startTime = performance.now();

        const animate = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - (1 - progress) ** 3;
          setPosition(start + (end - start) * eased);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setHasRevealed(true);
            animatingRef.current = false;
          }
        };

        requestAnimationFrame(animate);
      },
      { threshold: 0.35 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [defaultPosition, hasRevealed]);

  useEffect(() => {
    const handleMove = (event) => {
      if (!draggingRef.current) return;
      updateFromClientX(event.clientX);
    };

    const handleTouchMove = (event) => {
      if (!draggingRef.current) return;
      updateFromClientX(event.touches[0].clientX);
    };

    const stopDragging = () => {
      draggingRef.current = false;
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", stopDragging);
    window.addEventListener("pointercancel", stopDragging);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", stopDragging);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", stopDragging);
      window.removeEventListener("pointercancel", stopDragging);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", stopDragging);
    };
  }, [updateFromClientX]);

  const startDragging = (event) => {
    if (animatingRef.current) return;
    draggingRef.current = true;
    setHasRevealed(true);
    containerRef.current?.setPointerCapture?.(event.pointerId);
    updateFromClientX(event.clientX);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPosition((current) => clamp(current - 2));
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setPosition((current) => clamp(current + 2));
    }
  };

  const renderStats = (variant) =>
    highlights.map((item, index) => (
      <div
        key={`${variant}-${item.label}`}
        className="ba-slider__stat"
        style={{ "--stat-tilt": `${index % 2 === 0 ? -1.25 : 1.25}deg` }}
      >
        <span className="ba-slider__stat-label">{item.label}</span>
        <span className="ba-slider__stat-after">{item.after}</span>
        <span className="ba-slider__stat-before-line">
          from <span>{item.before}</span>
        </span>
      </div>
    ));

  return (
    <div className={`ba-slider-wrap ${highlights.length > 0 ? "ba-slider-wrap--has-highlights" : ""}`}>
      <div
        ref={containerRef}
        className="ba-slider"
        onPointerDown={startDragging}
        style={{ "--ba-position": `${position}%` }}
      >
        <img
          src={afterSrc}
          alt={afterAlt}
          className="ba-slider__image ba-slider__image--after"
          draggable={false}
          loading="lazy"
          decoding="async"
        />

        <div className="ba-slider__before-wrap">
          <img
            src={beforeSrc}
            alt={beforeAlt}
            className="ba-slider__image ba-slider__image--before"
            draggable={false}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className={`ba-slider__handle ${!hasRevealed ? "ba-slider__handle--pulse" : ""}`} aria-hidden="true">
          <span className="ba-slider__handle-line" />
          <span className="ba-slider__handle-knob">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M8 8l-4 4 4 4M16 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        <span className="ba-slider__badge ba-slider__badge--before">{beforeLabel}</span>
        <span className="ba-slider__badge ba-slider__badge--after">{afterLabel}</span>

        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => {
            setHasRevealed(true);
            setPosition(Number(event.target.value));
          }}
          onKeyDown={handleKeyDown}
          className="ba-slider__input"
          aria-label="Compare before and after Shopify analytics"
        />
      </div>

      {highlights.length > 0 && (
        <div className="ba-slider__stats ba-slider__stats--external">
          {renderStats("external")}
        </div>
      )}
    </div>
  );
}
