const socialLinks = [
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/adsbykamzi/" },
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/kamziojalespaus999" },
  { id: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@adsbykamzi" },
  { id: "calendly", label: "Book a call on Calendly", href: "https://calendly.com/adsbykamzi" },
];

function SocialIcon({ id, className = "h-4 w-4" }) {
  if (id === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (id === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M13.5 8H16V5h-2.5C11.6 5 10 6.6 10 8.5V11H7v3h3v7h3v-7h2.6l.4-3H13V9.5c0-.8.7-1.5 1.5-1.5z" />
      </svg>
    );
  }
  if (id === "tiktok") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M16.5 3c.3 1.9 1.4 3.4 3.5 3.8v2.6c-1.3.1-2.5-.2-3.6-.8v5.6a5.2 5.2 0 11-5.2-5.2c.3 0 .5 0 .8.1v2.7a2.6 2.6 0 102 2.5V3h2.5z" />
      </svg>
    );
  }
  if (id === "calendly") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M3 10h18" />
      </svg>
    );
  }
  return null;
}

export default function SocialLinks({
  className = "",
  iconClassName = "h-4 w-4",
  size = "md",
  variant = "dark",
}) {
  const buttonSize = size === "sm" ? "h-8 w-8" : "h-10 w-10";
  const buttonClass =
    variant === "scrapbook"
      ? `group relative flex ${buttonSize} items-center justify-center rounded-full bg-white text-[#98030b] shadow-[0_4px_14px_rgba(0,0,0,0.08)] ring-1 ring-[rgba(152,3,11,0.12)] transition-all duration-300 hover:scale-110 hover:bg-[#98030b] hover:text-white active:scale-95`
      : `group relative flex ${buttonSize} items-center justify-center rounded-full bg-white/10 text-cream/80 transition-all duration-300 hover:scale-110 hover:bg-rose/20 hover:text-rose active:scale-95`;
  const tooltipClass =
    variant === "scrapbook"
      ? "pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#98030b] px-2.5 py-1 text-[10px] font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:-translate-y-0.5 group-hover:opacity-100"
      : "pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-2.5 py-1 text-[10px] font-medium text-cream opacity-0 shadow-lg transition-all duration-200 group-hover:-translate-y-0.5 group-hover:opacity-100";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.href}
          aria-label={link.label}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
        >
          <SocialIcon id={link.id} className={iconClassName} />
          <span className={tooltipClass}>
            {link.label}
          </span>
        </a>
      ))}
    </div>
  );
}

export { socialLinks };
