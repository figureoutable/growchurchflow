/** Banza-style subtle pattern on solid colour panels */
export function HeroGeometry() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.12]"
      aria-hidden
    >
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="cf-zig"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(-12)"
          >
            <path
              d="M0 12 L12 0 L24 12 L12 24 Z"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
          </pattern>
          <pattern
            id="cf-dots"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="3" cy="3" r="1.5" fill="white" />
            <circle cx="13" cy="13" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cf-zig)" />
        <rect
          width="55%"
          height="100%"
          x="45%"
          fill="url(#cf-dots)"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
