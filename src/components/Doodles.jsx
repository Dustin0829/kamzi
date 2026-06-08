export function Heart({ className = "", filled = true }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.6">
      <path d="M12 20.5C6.5 16.5 3 13.2 3 9.3 3 6.6 5.1 4.7 7.6 4.7c1.6 0 3.2.9 4.4 2.6C13.2 5.6 14.8 4.7 16.4 4.7 18.9 4.7 21 6.6 21 9.3c0 3.9-3.5 7.2-9 11.2z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export function Sparkle({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2c.4 4.6 2.4 6.6 7 7-4.6.4-6.6 2.4-7 7-.4-4.6-2.4-6.6-7-7 4.6-.4 6.6-2.4 7-7z" />
    </svg>
  );
}

export function Squiggle({ className = "" }) {
  return (
    <svg viewBox="0 0 60 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
      <path d="M3 14C8 4 14 4 19 14s11 10 16 0 11-10 16 0" />
    </svg>
  );
}

export function CurveArrow({ className = "" }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 12c14 2 30 12 36 34" />
      <path d="M44 46l1-12M44 46l-12 2" />
    </svg>
  );
}

export function Star4({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0l2.2 9.8L24 12l-9.8 2.2L12 24l-2.2-9.8L0 12l9.8-2.2z" />
    </svg>
  );
}
