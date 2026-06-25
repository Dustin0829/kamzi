import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CREATIVE_FILTERS } from "../data/creatives";
import { creativeAspectClass, creativeAspectRatio } from "../utils/creativeAspect";
import "./Creatives.css";

const CARD_TILTS = [-1.5, 1.25, -0.75, 1.5, -1, 0.85, -1.35, 1.1, -0.5];

function aspectClass(aspect) {
  return creativeAspectClass(aspect);
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M8 5.5v13l11-6.5-11-6.5z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon({ direction }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      {direction === "left" ? (
        <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

function CreativeMedia({ item, classPrefix, autoPlay = false }) {
  const aspect = aspectClass(item.aspect);
  const isVideo = item.type === "video";

  if (!item.src) {
    return (
      <div className={`${classPrefix}-media ${classPrefix}-media--${aspect}`}>
        <div className={`${classPrefix}-placeholder`} style={{ backgroundColor: item.accent }}>
          <span className={`${classPrefix}-placeholder-label`}>{item.label}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`${classPrefix}-media ${classPrefix}-media--${aspect} ${item.src && !isVideo ? `${classPrefix}-media--natural` : ""}`}>
      {isVideo ? (
        <video
          src={item.src}
          poster={item.poster ?? undefined}
          muted={!autoPlay}
          loop
          playsInline
          autoPlay={autoPlay}
          controls={autoPlay}
          preload="metadata"
        />
      ) : (
        <img src={item.src} alt={`${item.client} — ${item.tag}`} loading="lazy" decoding="async" />
      )}
    </div>
  );
}

function CreativeCard({ item, index, onOpen }) {
  const videoRef = useRef(null);
  const isVideo = item.type === "video";

  const handleEnter = () => {
    if (!item.src || !isVideo) return;
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  };

  const handleLeave = () => {
    if (!item.src || !isVideo) return;
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <button
      type="button"
      className="creatives__card"
      style={{ "--card-tilt": `${CARD_TILTS[index % CARD_TILTS.length]}deg` }}
      onClick={() => onOpen(item)}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
      aria-label={`View ${item.client} ${item.tag}`}
    >
      <div
        className={`creatives__card-media ${item.src && !isVideo ? "creatives__card-media--natural" : ""}`}
        style={
          !item.src || isVideo ? { aspectRatio: creativeAspectRatio(item.aspect) } : undefined
        }
      >
        <span className="creatives__card-type">{isVideo ? "Motion" : "Static"}</span>

        {!item.src ? (
          <div className="creatives__card-placeholder" style={{ backgroundColor: item.accent }}>
            <span className="creatives__card-placeholder-label">{item.label}</span>
          </div>
        ) : isVideo ? (
          <video
            ref={videoRef}
            src={item.src}
            poster={item.poster ?? undefined}
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <img src={item.src} alt="" loading="lazy" decoding="async" />
        )}

        {isVideo && (
          <span className="creatives__card-play" aria-hidden="true">
            <span className="creatives__card-play-icon">
              <PlayIcon />
            </span>
          </span>
        )}
      </div>

      <div className="creatives__card-caption">
        <span className="creatives__card-client">{item.client}</span>
        <span className="creatives__card-tag">{item.tag}</span>
      </div>
    </button>
  );
}

function CreativeCarousel({ items, onOpen }) {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const { scrollLeft, scrollWidth, clientWidth } = track;
    setCanPrev(scrollLeft > 4);
    setCanNext(scrollLeft + clientWidth < scrollWidth - 4);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateScrollState();
    track.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      track.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [items, updateScrollState]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: 0, behavior: "auto" });
    updateScrollState();
  }, [items, updateScrollState]);

  const scrollBy = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    const firstItem = track.querySelector(".creatives__carousel-item");
    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 16;
    const amount = firstItem ? firstItem.offsetWidth + gap : track.clientWidth * 0.85;

    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  if (items.length === 0) {
    return <p className="creatives__empty">No creatives in this category yet.</p>;
  }

  return (
    <div className="creatives__carousel">
      <div className="creatives__track" ref={trackRef}>
        {items.map((item, index) => (
          <div key={item.id} className="creatives__carousel-item">
            <CreativeCard item={item} index={index} onOpen={onOpen} />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="creatives__carousel-btn creatives__carousel-btn--prev"
        onClick={() => scrollBy(-1)}
        disabled={!canPrev}
        aria-label="Previous creatives"
      >
        <ChevronIcon direction="left" />
      </button>

      <button
        type="button"
        className="creatives__carousel-btn creatives__carousel-btn--next"
        onClick={() => scrollBy(1)}
        disabled={!canNext}
        aria-label="Next creatives"
      >
        <ChevronIcon direction="right" />
      </button>
    </div>
  );
}

function CreativeLightbox({ item, onClose }) {
  const panelRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const isWide = item.aspect === "16:9";

  return (
    <div
      className="creatives-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.client} creative`}
      onClick={handleBackdropClick}
    >
      <div
        ref={panelRef}
        className={`creatives-lightbox__panel ${isWide ? "creatives-lightbox__panel--wide" : ""}`}
      >
        <button type="button" className="creatives-lightbox__close" onClick={onClose} aria-label="Close">
          <CloseIcon />
        </button>

        <CreativeMedia item={item} classPrefix="creatives-lightbox" autoPlay />

        <div className="creatives-lightbox__meta">
          <p className="creatives-lightbox__client">{item.client}</p>
          <p className="creatives-lightbox__tag">{item.tag}</p>
        </div>
      </div>
    </div>
  );
}

export default function CreativeGallery({ items, showFilters = true, className = "" }) {
  const [filter, setFilter] = useState("all");
  const [activeItem, setActiveItem] = useState(null);

  const filtered = useMemo(() => {
    if (filter === "all") return items;
    return items.filter((item) => item.type === filter);
  }, [filter, items]);

  const closeLightbox = useCallback(() => setActiveItem(null), []);

  return (
    <div className={className}>
      {showFilters && (
        <div className="creatives__filters" role="tablist" aria-label="Filter creatives">
          {CREATIVE_FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filter === f.id}
              className={`creatives__filter ${filter === f.id ? "is-active" : ""}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      <CreativeCarousel key={filter} items={filtered} onOpen={setActiveItem} />

      {activeItem && <CreativeLightbox item={activeItem} onClose={closeLightbox} />}
    </div>
  );
}
