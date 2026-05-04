import { CtaBanner } from "@/components/cta-banner";
import { FadeIn } from "@/components/fade-in";
import { MarqueeStrip } from "@/components/marquee-strip";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, Cross, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "About",
  description:
    "Church Flow is a small team with a big heart for the local church.",
};

const team = [
  {
    name: "Chris Lawson",
    role: "Founder & Lead Designer",
    bio: "Shapes web experiences that feel like home for guests and members alike.",
  },
  {
    name: "Mia Okafor",
    role: "Content Strategist",
    bio: "Turns sermons into scroll-stopping Shorts and social moments.",
  },
  {
    name: "Tom Blake",
    role: "Web Developer",
    bio: "Builds fast, accessible sites your volunteers can keep fresh.",
  },
];

const values = [
  {
    title: "Faith first",
    description:
      "We pray, listen, and create as fellow believers, and excellence flows from that foundation.",
    icon: Cross,
  },
  {
    title: "Excellence in craft",
    description:
      "The Church deserves sharp design and execution, not agency leftovers.",
    icon: Award,
  },
  {
    title: "Serving the mission",
    description:
      "Your wins are our wins. We care that your message gets out and lives change.",
    icon: HeartHandshake,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-brand-ink/10 bg-brand-purple-soft px-5 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto max-w-[1320px]">
          <FadeIn>
            <h1 className="max-w-3xl font-heading text-4xl font-bold tracking-tight text-brand-ink md:text-5xl lg:text-6xl">
              We&apos;re Church Flow
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-brand-muted md:text-xl">
              A small team with a big heart for the local church.
            </p>
          </FadeIn>
        </div>
      </section>

      <MarqueeStrip />

      <section className="border-b border-brand-ink/10 bg-white px-5 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <blockquote className="font-heading text-2xl font-semibold italic leading-snug text-brand-ink md:text-3xl">
              &ldquo;We believe every church, regardless of size, deserves a
              powerful online presence. The Great Commission doesn&apos;t stop at
              the church door.&rdquo;
            </blockquote>
            <p className="mt-10 text-left text-brand-muted leading-relaxed md:text-center md:text-lg">
              Church Flow began around kitchen tables with pastors tired of DIY
              sites and patchy social feeds. We wanted a partner who speaks
              church, honours theology, and sweats the details, and that&apos;s
              still who we are today.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-brand-ink/10 bg-brand-canvas px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-[1320px]">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold text-brand-ink md:text-4xl">
              The team
            </h2>
            <p className="mt-3 text-brand-muted">
              Meet the faces behind your discovery call.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.05}>
                <Card className="h-full rounded-3xl border-0 bg-white shadow-md ring-1 ring-brand-ink/8">
                  <CardHeader className="p-8 pb-4">
                    <div
                      className="mb-4 aspect-square max-h-40 w-full max-w-[160px] rounded-2xl bg-gradient-to-br from-brand-purple-soft via-brand-lime/50 to-brand-orange/30"
                      aria-hidden
                    />
                    <CardTitle className="font-heading text-xl">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="font-semibold text-brand-orange">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <p className="text-sm leading-relaxed text-brand-muted">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-forest px-5 py-20 text-white md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-[1320px]">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              What we value
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.06}>
                <div className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-brand-lime/20 text-brand-lime">
                    <v.icon className="size-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    {v.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
