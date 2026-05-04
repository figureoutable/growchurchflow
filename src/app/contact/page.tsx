import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/fade-in";
import { MarqueeStrip } from "@/components/marquee-strip";

export const metadata = {
  title: "Contact",
  description:
    "Book a free 30-minute discovery call with Church Flow: websites and social content for churches.",
};

export default function ContactPage() {
  return (
    <>
      <section className="grid lg:grid-cols-5">
        <div className="border-b border-brand-ink/10 bg-brand-orange px-6 py-16 text-white lg:border-b-0 lg:border-r lg:py-24 lg:pl-12 lg:pr-10 xl:pl-16">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              Contact
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight md:text-5xl">
              Let&apos;s talk
            </h1>
            <p className="mt-6 max-w-md text-lg text-white/90 leading-relaxed">
              Book a free 30-minute discovery call. We&apos;ll explore how we can
              serve your church with websites, Shorts, or both.
            </p>
            <div className="mt-10 space-y-3 text-sm text-white/85">
              <p>
                <a
                  href="mailto:hello@churchflow.co.uk"
                  className="font-semibold text-brand-lime underline-offset-2 hover:underline"
                >
                  hello@churchflow.co.uk
                </a>
              </p>
              <p>We typically respond within one working day.</p>
            </div>
          </FadeIn>
        </div>
        <div className="bg-brand-canvas px-6 py-16 lg:col-span-4 lg:py-24 lg:pl-12 lg:pr-12 xl:pr-16">
          <FadeIn className="mx-auto max-w-lg">
            <ContactForm />
          </FadeIn>
        </div>
      </section>

      <MarqueeStrip />
    </>
  );
}
