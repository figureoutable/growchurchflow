const ITEMS = [
  "WEBSITES",
  "YOUTUBE SHORTS",
  "SOCIAL CONTENT",
  "THE LOCAL CHURCH",
  "DISCOVERY CALLS",
  "MINISTRY-FIRST",
  "LIGHT & ENERGY",
];

export function MarqueeStrip() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="border-y border-brand-ink/10 bg-brand-night py-3.5">
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee">
          <ul className="flex items-center gap-10 px-6 md:gap-14" aria-hidden>
            {loop.map((item, i) => (
              <li
                key={`${item}-${i}`}
                className="flex items-center gap-10 text-xs font-semibold tracking-[0.2em] text-brand-lime md:gap-14 md:text-sm"
              >
                <span>{item}</span>
                <span className="text-brand-purple/90" aria-hidden>
                  ✦
                </span>
              </li>
            ))}
          </ul>
          <ul
            className="flex items-center gap-10 px-6 md:gap-14"
            aria-hidden
          >
            {loop.map((item, i) => (
              <li
                key={`dup-${item}-${i}`}
                className="flex items-center gap-10 text-xs font-semibold tracking-[0.2em] text-brand-lime md:gap-14 md:text-sm"
              >
                <span>{item}</span>
                <span className="text-brand-purple/90" aria-hidden>
                  ✦
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
