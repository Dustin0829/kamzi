import { Heart } from "./Doodles";
import SectionBgDecor from "./SectionBgDecor";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer relative py-6 md:py-8">
      <SectionBgDecor variant="footer" />

      <p className="footer__text relative z-10">
        © 2026{" "}
        <span className="footer__brand">ADS BY KAMZI</span>
        <Heart className="footer__heart h-3 w-3" filled />
        ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}
