import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-ink/10">
      <div className="bg-brand-night px-5 py-12 text-white md:px-8">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-10 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <span className="font-heading text-lg font-bold text-brand-lime">
              Church Flow
            </span>
            <p className="mt-2 max-w-sm text-sm text-white/65">
              Websites and short-form video for churches, so you can focus on
              the mission.
            </p>
          </div>
          <nav
            className="flex flex-wrap justify-center gap-x-10 gap-y-3 md:justify-end"
            aria-label="Footer"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/85 transition-colors hover:text-brand-lime"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mx-auto mt-12 max-w-[1320px] border-t border-white/10 pt-8 text-center text-xs text-white/45 md:text-left">
          © {new Date().getFullYear()} Church Flow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
