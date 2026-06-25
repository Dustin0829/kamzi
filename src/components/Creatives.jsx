import { Heart } from "./Doodles";
import Reveal from "./Reveal";
import SectionBgDecor from "./SectionBgDecor";
import CreativeGallery from "./CreativeGallery";
import { creatives } from "../data/creatives";
import "./Creatives.css";

export default function Creatives() {
  return (
    <section id="creatives" className="creatives relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <SectionBgDecor variant="creatives" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
        <Reveal direction="up">
          <p className="creatives__eyebrow">PORTFOLIO</p>

          <div className="creatives__headline">
            <h2>
              <span className="creatives__title-script">winning</span>
              <span className="creatives__title-display">creatives</span>
            </h2>
            <Heart className="creatives__heart animate-float-delay-1" filled />
          </div>

          <p className="creatives__desc">
            Scroll-stopping static ads and motion pieces — the visuals behind the campaigns.
            Filter by format or tap any piece to view full size.
          </p>
        </Reveal>

        <CreativeGallery items={creatives} />
      </div>
    </section>
  );
}
