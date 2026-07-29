import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { monthlyReports } from "../data/monthlyReports";
import "./MonthlyReports.css";

function Paperclip({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 28 56" fill="none" aria-hidden="true">
      <path
        d="M10 18V36.5c0 4.2 3.1 7.5 7 7.5s7-3.3 7-7.5V14.5C24 8.7 19.5 4 14 4S4 8.7 4 14.5v24c0 7.5 5.8 13.5 13 13.5s13-6 13-13.5V18"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ReceiptCard({ report, onOpen }) {
  return (
    <button
      type="button"
      className="receipt-card"
      style={{ "--receipt-rotate": `${report.rotate}deg` }}
      onClick={() => onOpen(report)}
      aria-label={`Open ${report.label} receipt`}
    >
      <span className="receipt-card__backing" aria-hidden="true" />
      <Paperclip className="receipt-card__clip" />

      <span className="receipt-card__sheet">
        <span className="receipt-card__thumb">
          <img src={report.thumbSrc} alt="" loading="lazy" decoding="async" />
        </span>

        <span className="receipt-card__meta">Receipt #{report.receiptNo}</span>
        <span className="receipt-card__title">{report.title}</span>
        <span className="receipt-card__desc">{report.description}</span>

        <span className="receipt-card__tags">
          {report.tags.map((tag) => (
            <span key={tag} className="receipt-card__tag">
              {tag}
            </span>
          ))}
        </span>

        <span className="receipt-card__cta">
          Open Receipt
          <span aria-hidden="true"> →</span>
        </span>
      </span>
    </button>
  );
}

function PdfModal({ report, onClose }) {
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
      className="report-modal"
      role="dialog"
      aria-modal="true"
      aria-label={`${report.label} report`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="report-modal__panel">
        <header className="report-modal__header">
          <div>
            <p className="report-modal__eyebrow">Receipt #{report.receiptNo}</p>
            <h3 className="report-modal__title">{report.label}</h3>
          </div>
          <div className="report-modal__actions">
            <a href={report.pdfSrc} target="_blank" rel="noopener noreferrer" className="report-modal__open">
              Open PDF
            </a>
            <button type="button" className="report-modal__close" onClick={onClose} aria-label="Close">
              ×
            </button>
          </div>
        </header>

        <div className="report-modal__frame">
          <iframe title={`${report.label} report PDF`} src={`${report.pdfSrc}#view=FitH`} />
        </div>
      </div>
    </div>
  );
}

export default function MonthlyReports() {
  const [activeReport, setActiveReport] = useState(null);

  return (
    <section id="reports" className="monthly-reports section-band section-band--warm">
      <div className="monthly-reports__inner">
        <Reveal direction="up">
          <header className="monthly-reports__header">
            <p className="monthly-reports__eyebrow">the proof</p>
            <h2 className="monthly-reports__title">
              Open the
              <br />
              Receipts.
            </h2>
            <p className="monthly-reports__desc">
              Monthly performance reports — clipped, ready to open. Tap a receipt to read the full PDF.
            </p>
          </header>
        </Reveal>

        <Reveal direction="up" delay={80}>
          <div className="monthly-reports__grid">
            {monthlyReports.map((report) => (
              <ReceiptCard key={report.id} report={report} onOpen={setActiveReport} />
            ))}
          </div>
        </Reveal>
      </div>

      {activeReport && <PdfModal report={activeReport} onClose={() => setActiveReport(null)} />}
    </section>
  );
}
