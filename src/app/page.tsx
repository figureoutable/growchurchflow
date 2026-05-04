import Image from "next/image";
import Link from "next/link";
import { LayoutTemplate, Palette, Video } from "lucide-react";
import { CtaBanner } from "@/components/cta-banner";
import { FadeIn } from "@/components/fade-in";
import { HeroGeometry } from "@/components/hero-geometry";
import { MarqueeStrip } from "@/components/marquee-strip";
import { MinistryFlowchart } from "@/components/ministry-flowchart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const testimonials = [
  {
    name: "Pastor James, Emmanuel Baptist Church",
    quote:
      "Church Flow captured our heart for the community and translated it into a site that actually helps newcomers take their next step.",
  },
  {
    name: "Sarah T., Communications Lead, Hillside Church",
    quote:
      "Our new website finally matches who we are on a Sunday morning: warm, clear, and easy to navigate.",
  },
  {
    name: "Rev. David O., City Church London",
    quote:
      "The Shorts and social content they produce has extended our reach far beyond what we could manage in-house.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Banza-style hero + Clay editorial type */}
      <section>
        <div className="relative flex flex-col items-center justify-center overflow-hidden bg-brand-orange px-6 py-[2.8rem] text-white md:px-10 md:py-[3.5rem] lg:min-h-[min(72vh,780px)] lg:px-14 lg:py-[3.85rem]">
          <HeroGeometry />
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
                Creative agency for the local church
              </p>
              <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl lg:text-[3.35rem]">
                Helping churches reach more people online.
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/90 md:text-lg">
                We turn your Sunday sermons into 30 short-form videos every
                month, posted on your socials. If we miss a video you don&apos;t
                pay.
              </p>
              <div className="mt-10 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-bold text-brand-orange transition-colors hover:bg-brand-yellow"
                >
                  Book a Free Discovery Call
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <MarqueeStrip />

      {/* Clay-style single-line social proof */}
      <section className="border-b border-brand-ink/10 bg-white px-5 py-10 md:px-8">
        <p className="mx-auto max-w-[1320px] text-center text-sm font-medium text-brand-muted md:text-base">
          Trusted by churches who want clarity online, from Sunday welcome to
          mid-week Shorts.
        </p>
      </section>

      {/* Services: three equal cards */}
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1320px]">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-brand-ink md:text-4xl lg:text-5xl">
              Services
            </h2>
            <p className="mt-2 max-w-2xl text-base leading-snug text-brand-muted md:text-lg md:leading-snug">
              Short clips, websites, and design for the local church: clear,
              on-brand, and ready to serve your mission.
            </p>
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
            <FadeIn>
              <Card className="flex h-full min-h-[220px] flex-col gap-1 rounded-3xl border-0 bg-brand-lime p-0 shadow-lg ring-1 ring-brand-ink/10">
                <CardHeader className="flex flex-1 flex-col p-7 pb-0 md:p-8 md:pb-0">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-brand-ink/10 text-brand-ink md:size-12">
                    <Video className="size-5 md:size-6" strokeWidth={1.75} />
                  </div>
                  <CardTitle className="font-heading pt-1.5 text-xl font-bold leading-snug md:pt-2 md:text-2xl">
                    Social Media Short Clip Creation
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col px-7 pb-7 pt-0 md:px-8 md:pb-8 md:pt-0">
                  <CardDescription className="text-sm leading-snug text-brand-ink/80 md:text-base">
                    Vertical Shorts and cut-downs from your Sunday message, with
                    hooks, captions, and pacing built for feeds, not generic
                    reposts.
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn delay={0.06}>
              <Card className="flex h-full min-h-[220px] flex-col gap-1 rounded-3xl border-0 bg-brand-lavender shadow-md ring-1 ring-brand-ink/8">
                <CardHeader className="flex flex-1 flex-col p-7 pb-0 md:p-8 md:pb-0">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
                    <LayoutTemplate className="size-5" strokeWidth={1.75} />
                  </div>
                  <CardTitle className="font-heading pt-1.5 text-xl font-bold leading-snug md:pt-2 md:text-2xl">
                    Website creation
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col px-7 pb-7 pt-0 md:px-8 md:pb-8 md:pt-0">
                  <CardDescription className="text-sm leading-snug text-brand-muted md:text-base">
                    Fast, mobile-first pages with clear next steps, so guests
                    know who you are and what to do after they land.
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Card className="flex h-full min-h-[220px] flex-col gap-1 rounded-3xl border-0 bg-brand-forest text-white shadow-md ring-1 ring-brand-ink/10">
                <CardHeader className="flex flex-1 flex-col p-7 pb-0 md:p-8 md:pb-0">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-brand-lime">
                    <Palette className="size-5" strokeWidth={1.75} />
                  </div>
                  <CardTitle className="font-heading pt-1.5 text-xl font-bold leading-snug text-white md:pt-2 md:text-2xl">
                    Graphic design
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col px-7 pb-7 pt-0 md:px-8 md:pb-8 md:pt-0">
                  <CardDescription className="text-sm leading-snug !text-white/85 md:text-base">
                    Sermon series art, slides, social templates, and print, plus
                    visuals that match your voice and keep every touchpoint
                    consistent.
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why us: full-bleed pillars */}
      <section className="grid border-t border-brand-ink/10 md:grid-cols-2">
        <div className="border-b border-brand-ink/10 bg-brand-orange px-6 py-10 text-white md:border-b-0 md:border-r md:px-8 md:py-12 lg:px-10">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
              Why us
            </p>
            <h2 className="mt-2 font-heading text-2xl font-bold md:text-3xl">
              We speak church
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/90 md:text-base">
              Ministry isn&apos;t a side project for us. We understand how Sundays,
              staff, and volunteers really work, so your message lands with heart,
              not corporate jargon.
            </p>
            <Link
              href="/about"
              className="mt-5 inline-flex text-sm font-bold text-brand-yellow underline-offset-4 hover:underline md:mt-6"
            >
              Our story →
            </Link>
          </FadeIn>
        </div>
        <div className="bg-brand-forest px-6 py-10 text-white md:px-8 md:py-12 lg:px-10">
          <FadeIn delay={0.05}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
              Why us
            </p>
            <h2 className="mt-2 font-heading text-2xl font-bold md:text-3xl">
              Clarity over noise
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85 md:text-base">
              From your site to social, we design for warmth and focus, so guests
              feel welcomed and always know their next step with you. After launch,
              we stay close as your rhythms and seasons change.
            </p>
            <Link
              href="/services"
              className="mt-5 inline-flex text-sm font-bold text-brand-lime underline-offset-4 hover:underline md:mt-6"
            >
              What we do →
            </Link>
          </FadeIn>
        </div>
      </section>

      <MinistryFlowchart />

      {/* Testimonials: horizontal rhythm, lavender pad */}
      <section className="border-t border-brand-ink/10 bg-brand-lavender/50 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1320px]">
          <FadeIn>
            <header className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-3xl font-bold text-brand-ink md:text-4xl">
                What churches are saying
              </h2>
              <p className="mt-3 text-brand-muted">
                Placeholder stories from leaders we&apos;re honoured to serve.
              </p>
            </header>
          </FadeIn>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {testimonials.map((t, i) => (
              <FadeIn
                key={t.name}
                delay={i * 0.05}
                className="w-full max-w-[360px] justify-self-center sm:max-w-none sm:justify-self-stretch"
              >
                <Card className="h-full gap-1 rounded-3xl border-0 bg-white shadow-lg ring-1 ring-brand-ink/8">
                  <CardHeader className="p-8 pb-2">
                    <CardTitle className="font-heading text-left text-lg leading-snug">
                      {t.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8 pt-0">
                    <p className="text-left text-sm leading-relaxed text-brand-muted md:text-base">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Bridge: email flows + funnel diagram, before final CTA */}
      <section className="border-t border-brand-ink/10 bg-white px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1320px]">
          <FadeIn>
            <h2 className="text-center font-heading text-2xl font-bold tracking-tight text-brand-ink md:text-3xl">
              Email flows that carry your church voice
            </h2>
            <div className="mx-auto mt-3 max-w-2xl space-y-1 text-center text-base leading-relaxed text-brand-muted md:text-lg">
              <p>
                When SEO, content, or ads bring someone to your site, the next
                emails should feel like a natural continuation, not a generic
                drip from a template library.
              </p>
              <p>
                We map and write journeys for welcome, next steps, groups,
                events, giving, and devotionals so every send sounds like you.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.03}>
            <div className="mt-10 flex justify-center">
              <Image
                src="/website-funnel-v5.jpg"
                alt="Diagram: SEO, Content, and Paid Ads lead to Website, then branch into email flow columns including Welcome, New to Faith, groups, baptism, events, donation, devotionals, building fund, and Bible college sequences."
                width={1024}
                height={512}
                className="h-auto w-full max-w-[min(100%,1024px)] ring-0 outline-none"
                sizes="(min-width: 1280px) 1024px, (min-width: 768px) 90vw, 100vw"
              />
            </div>
          </FadeIn>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
            <FadeIn delay={0.05}>
              <div className="text-center md:text-left">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand-orange/15 font-heading text-lg font-bold text-brand-orange">
                  1
                </span>
                <h3 className="font-heading mt-2 text-lg font-bold text-brand-ink">
                  Plan each email flow
                </h3>
                <p className="mt-1.5 text-sm leading-snug text-brand-muted md:text-base md:leading-relaxed">
                  We map who enters which automation (welcome, new to faith,
                  groups, baptism, events, giving, devotionals) and what each
                  subscriber should feel and do before the next message sends.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="text-center md:text-left">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand-purple/15 font-heading text-lg font-bold text-brand-purple">
                  2
                </span>
                <h3 className="font-heading mt-2 text-lg font-bold text-brand-ink">
                  Build the automations
                </h3>
                <p className="mt-1.5 text-sm leading-snug text-brand-muted md:text-base md:leading-relaxed">
                  We write every email in your church&apos;s voice, set delays and
                  branches, and wire your ESP or CRM so each flow runs on time
                  and drips, nudges, and one-off sends all stay on-brand.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="text-center md:text-left">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand-lime/30 font-heading text-lg font-bold text-brand-purple">
                  3
                </span>
                <h3 className="font-heading mt-2 text-lg font-bold text-brand-ink">
                  Improve what sends
                </h3>
                <p className="mt-1.5 text-sm leading-snug text-brand-muted md:text-base md:leading-relaxed">
                  We read opens, clicks, and replies, then adjust subject lines,
                  cadence, and CTAs so your email flows keep working as series,
                  seasons, and campaigns change.
                </p>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/services"
                className="text-sm font-bold text-brand-purple underline-offset-4 hover:underline"
              >
                See services &amp; email support →
              </Link>
              <Link
                href="/contact"
                className="text-sm font-bold text-brand-orange underline-offset-4 hover:underline"
              >
                Book a discovery call →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
