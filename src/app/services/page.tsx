import { CtaBanner } from "@/components/cta-banner";
import { FadeIn } from "@/components/fade-in";
import { MarqueeStrip } from "@/components/marquee-strip";
import {
  SocialIllustration,
  WebIllustration,
} from "@/components/service-illustrations";
import { Check } from "lucide-react";

export const metadata = {
  title: "Services",
  description:
    "Church website design and YouTube Shorts & social media retainers for churches.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-brand-ink/10 bg-brand-canvas px-5 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto max-w-[1320px]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Services
            </p>
            <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold tracking-tight text-brand-ink md:text-5xl lg:text-6xl">
              What we do
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-brand-muted md:text-xl">
              Two core services. One clear mission: helping your church reach
              more people with clarity and heart.
            </p>
          </FadeIn>
        </div>
      </section>

      <MarqueeStrip />

      <section className="border-b border-brand-ink/10 bg-white">
        <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-16 md:px-10 md:py-20 lg:px-14">
          <FadeIn className="order-2 md:order-1">
            <h2 className="font-heading text-3xl font-bold text-brand-ink md:text-4xl">
              Church website design
            </h2>
            <p className="mt-5 text-brand-muted leading-relaxed md:text-lg">
              We design and build sites that reflect your church&apos;s identity:
              welcoming, clear, and built to convert. From new plants to full
              refreshes, we take you from design to launch.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Custom design",
                "Mobile-first build",
                "Fast performance",
                "Easy to update",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 font-medium text-brand-ink">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-brand-orange">
                    <Check className="size-4" strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn
            delay={0.06}
            className="order-1 flex justify-center md:order-2 md:justify-end"
          >
            <WebIllustration className="w-full max-w-md" />
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-brand-ink/10 bg-brand-lavender/40">
        <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-16 md:px-10 md:py-20 lg:px-14">
          <FadeIn className="flex justify-center md:justify-start">
            <SocialIllustration className="w-full max-w-md" />
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="font-heading text-3xl font-bold text-brand-ink md:text-4xl">
              YouTube Shorts &amp; social
            </h2>
            <p className="mt-5 text-brand-muted leading-relaxed md:text-lg">
              Your Sunday message deserves to travel beyond the building. We
              craft punchy, faith-filled Shorts and social rhythm so your story
              meets new people every week.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Weekly scripts & captions",
                "Branded templates",
                "Platform optimisation",
                "Posting strategy",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 font-medium text-brand-ink">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-purple text-brand-lime">
                    <Check className="size-4" strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
