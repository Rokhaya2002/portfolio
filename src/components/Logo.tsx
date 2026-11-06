export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="rg-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--foreground)" />
          <stop offset="1" stopColor="var(--primary-glow)" />
        </linearGradient>
      </defs>
      <text x="4" y="46" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="44" fontWeight="600" fill="url(#rg-grad)">R</text>
      <text x="27" y="52" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="40" fontWeight="600" fill="url(#rg-grad)">G</text>
      <path d="M52 6 l1.5 4 4 1.5 -4 1.5 -1.5 4 -1.5 -4 -4 -1.5 4 -1.5z" fill="var(--primary-glow)" />
    </svg>
  );
}
