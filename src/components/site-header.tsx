"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-brand-ink/8 bg-brand-canvas/95 backdrop-blur-md transition-shadow duration-300",
        scrolled ? "shadow-sm shadow-brand-ink/5" : ""
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between gap-6 px-5 md:h-[4.25rem] md:px-8">
        <Link
          href="/"
          className="font-heading text-lg font-bold tracking-tight text-brand-orange md:text-xl"
        >
          Church Flow
        </Link>

        <Link
          href="/contact"
          className="inline-flex shrink-0 rounded-full bg-brand-orange px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark md:px-5"
        >
          Book a Call
        </Link>
      </div>
    </header>
  );
}
