import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { Heart } from "./Doodles";
import Reveal from "./Reveal";
import SectionBgDecor from "./SectionBgDecor";
import { getHomeCreatives } from "../data/creatives";
import { getProjectsWithShopifyResults } from "../data/projects";
import "./BrandResults.css";

const brandResults = getProjectsWithShopifyResults();
const homeCreatives = getHomeCreatives();

const PINNED_SLOTS = [
  { id: "wokbang-static-01", top: "0%", side: "left", rotate: -10, z: 3 },
  { id: "kco-static-01", top: "8%", side: "right", rotate: 9, z: 3 },
  { id: "wokbang-static-02", top: "38%", side: "left", rotate: 6, z: 4 },
  { id: "kco-static-05", top: "42%", side: "right", rotate: -8, z: 4 },
  { id: "ninuno-static-01", top: "76%", side: "left", rotate: -5, z: 3 },
];

const pinnedCreatives = PINNED_SLOTS.map((slot) => ({
  ...slot,
  item: homeCreatives.find((creative) => creative.id === slot.id),
})).filter((entry) => entry.item);

function Pushpin() {
  return (
    <span className="brand-results__pushpin" aria-hidden="true">
      <span className="brand-results__pushpin-head" />
    </span>
  );
}

function PinnedCreative({ item, slot, onOpen }) {
  const style = {
    top: slot.top,
    zIndex: slot.z,
    "--pin-rotate": `${slot.rotate}deg`,
  };

  return (
    <button
      type="button"
      className={`brand-results__pin-card brand-results__pin-card--${slot.side}`}
      style={style}
      onClick={() => onOpen(item)}
      aria-label={`View ${item.client} ${item.tag}`}
    >
      <Pushpin />
      <span className="brand-results__pin-photo">
        <img src={item.src} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
      </span>
    </button>
  );
}

function CreativeLightbox({ item, onClose }) {
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

  return (
    <div
      className="brand-results-lightbox"
      role="dialog"
      aria-modal="true"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="brand-results-lightbox__panel">
        <button type="button" className="brand-results-lightbox__close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <img src={item.src} alt={`${item.client} — ${item.tag}`} referrerPolicy="no-referrer" />
        <p>
          {item.client} · {item.tag}
        </p>
      </div>
    </div>
  );
}

export default function BrandResults() {
  const [activeBrand, setActiveBrand] = useState(0);
  const [lightboxItem, setLightboxItem] = useState(null);
  const project = brandResults[activeBrand];

  return (
    <section id="results" className="brand-results">
      <SectionBgDecor variant="work" />

      <div className="brand-results__inner">
        <Reveal direction="up">
          <header className="brand-results__header">
            <p className="brand-results__eyebrow">real numbers</p>
            <div className="brand-results__headline">
              <span className="brand-results__title-script">results from</span>
              <span className="brand-results__title-display">some brands</span>
              <Heart className="brand-results__heart animate-float-delay-2" filled />
            </div>
            <p className="brand-results__desc">Drag to compare store analytics — creatives pinned all over.</p>
          </header>
        </Reveal>

        <div className="brand-results__scatter">
          {pinnedCreatives.map((entry) => (
            <PinnedCreative
              key={entry.item.id}
              item={entry.item}
              slot={entry}
              onOpen={setLightboxItem}
            />
          ))}

          <Reveal direction="up" delay={80} className="brand-results__stage-wrap">
            <div className="brand-results__stage">
              <div className="brand-results__tabs" role="tablist" aria-label="Brand results">
                {brandResults.map((brand, index) => (
                  <button
                    key={brand.slug}
                    type="button"
                    role="tab"
                    aria-selected={activeBrand === index}
                    className={`brand-results__tab ${activeBrand === index ? "is-active" : ""}`}
                    onClick={() => setActiveBrand(index)}
                  >
                    {brand.name}
                  </button>
                ))}
              </div>

              {project && (
                <article className="brand-results__slider-wrap">
                  <BeforeAfterSlider
                    key={project.slug}
                    beforeSrc={project.shopifyResults.before}
                    afterSrc={project.shopifyResults.after}
                    beforeLabel={project.shopifyResults.beforeLabel}
                    afterLabel={project.shopifyResults.afterLabel}
                    beforeAlt={project.shopifyResults.beforeAlt}
                    afterAlt={project.shopifyResults.afterAlt}
                    highlights={project.shopifyResults.highlights ?? []}
                  />

                  <div className="brand-results__meta">
                    <p className="brand-results__hint">
                      Drag right to see results
                      <span aria-hidden="true"> →</span>
                    </p>
                    <Link to={`/work/${project.slug}`} className="brand-results__case-link">
                      Full case study
                    </Link>
                  </div>
                </article>
              )}
            </div>
          </Reveal>

          <div className="brand-results__mobile-pins">
            {pinnedCreatives.map((entry, index) => (
              <button
                key={`mobile-${entry.item.id}`}
                type="button"
                className="brand-results__mobile-pin"
                style={{ "--pin-rotate": `${entry.rotate ?? index * 5 - 10}deg` }}
                onClick={() => setLightboxItem(entry.item)}
                aria-label={`View ${entry.item.client} ${entry.item.tag}`}
              >
                <Pushpin />
                <img src={entry.item.src} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {lightboxItem && <CreativeLightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />}
    </section>
  );
}
