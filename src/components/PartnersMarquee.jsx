import { Heart } from "./Doodles";
import Reveal from "./Reveal";
import SectionBgDecor from "./SectionBgDecor";
import { partners, partnerSrc } from "../data/partners";
import "./PartnersMarquee.css";

const STICKER_TILTS = [-2, 1.5, -1.25, 2, -1.75, 1, -0.75, 1.75, -1.5, 0.85, -2.25, 1.35];
const TAPE_COLORS = [
  "rgba(237, 127, 194, 0.42)",
  "rgba(200, 154, 106, 0.38)",
  "rgba(152, 3, 11, 0.12)",
  "rgba(243, 169, 196, 0.45)",
];

function PartnerSticker({ partner, index }) {
  return (
    <div
      className="partners-marquee__sticker"
      style={{
        "--sticker-tilt": `${STICKER_TILTS[index % STICKER_TILTS.length]}deg`,
        "--tape-color": TAPE_COLORS[index % TAPE_COLORS.length],
      }}
    >
      <span className="partners-marquee__tape" aria-hidden="true" />
      <img
        src={partnerSrc(partner.file)}
        alt={partner.name}
        className="partners-marquee__logo"
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    </div>
  );
}

function PartnerGroup({ ariaHidden = false }) {
  return (
    <div className="partners-marquee__group" aria-hidden={ariaHidden || undefined}>
      {partners.map((partner, index) => (
        <PartnerSticker
          key={`${ariaHidden ? "dup-" : ""}${partner.file}`}
          partner={partner}
          index={index}
        />
      ))}
    </div>
  );
}

function PartnerCarousel() {
  return (
    <div className="partners-marquee__viewport">
      <span className="partners-marquee__fade partners-marquee__fade--left" aria-hidden="true" />
      <div className="partners-marquee__track">
        <PartnerGroup />
        <PartnerGroup ariaHidden />
      </div>
      <span className="partners-marquee__fade partners-marquee__fade--right" aria-hidden="true" />
    </div>
  );
}

export default function PartnersMarquee() {
  return (
    <section className="partners-marquee" aria-label="Brand partners">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <SectionBgDecor variant="partners" />
      </div>

      <div className="partners-marquee__inner">
        <Reveal direction="up">
          <div className="partners-marquee__intro">
            <p className="partners-marquee__eyebrow">brands I&apos;ve worked with</p>
            <div className="partners-marquee__headline">
              <h2>
                <span className="partners-marquee__title-script">trusted</span>
                <span className="partners-marquee__title-display">partners</span>
              </h2>
              <Heart className="partners-marquee__heart animate-float-delay-1" filled />
            </div>
            <p className="partners-marquee__desc">
              Real brands, real campaigns — from e-commerce to local businesses across the Philippines.
            </p>
          </div>
        </Reveal>

        <PartnerCarousel />
      </div>
    </section>
  );
}
