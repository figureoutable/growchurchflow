import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

export function CtaBanner() {
  return (
    <section className="border-y border-brand-ink/10 bg-brand-night py-20 md:py-28">
      <FadeIn className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
          Ready to grow your church&apos;s online presence?
        </h2>
        <p className="mt-5 text-lg text-white/75">
          Book a free 30-minute discovery call, and we&apos;ll talk through your
          mission and what a focused digital presence could look like.
        </p>
        <Link
          href="/contact"
          className="mt-9 inline-flex rounded-full bg-brand-lime px-8 py-3.5 text-base font-bold text-brand-ink transition-transform hover:scale-[1.02] hover:bg-brand-lime-glow"
        >
          Book Your Free Call
        </Link>
      </FadeIn>
    </section>
  );
}
