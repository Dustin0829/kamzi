import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import "./CaseStudyFooter.css";

export default function CaseStudyFooter() {
  return (
    <footer className="cs-footer">
      <Link to="/" className="cs-footer__logo">
        Kamille
      </Link>

      <p className="cs-footer__copy">
        © 2026 <span>ADS BY KAMZI</span> • ALL RIGHTS RESERVED.
      </p>

      <SocialLinks variant="dark" size="sm" iconClassName="h-3.5 w-3.5" />
    </footer>
  );
}
