import Image from "next/image";

/** Flow diagram + how we pair website and social with Sunday content. */
export function MinistryFlowchart() {
  return (
    <section className="bg-white px-5 py-12 md:px-8 md:py-16">
      <div className="mx-auto grid max-w-[1320px] gap-10 md:grid-cols-2 md:items-center md:gap-12 lg:gap-16">
        <div className="max-w-xl md:pr-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-muted">
            How it works
          </p>
          <h2 className="font-heading mt-2 text-2xl font-bold tracking-tight text-brand-ink md:text-3xl">
            Your Sunday message, built for the web and social
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-muted md:text-[1.05rem]">
            <p>
              It starts with what you already do:{" "}
              <strong className="font-semibold text-brand-ink">
                one recording of your service
              </strong>
              . That becomes the raw material we shape into posts and clips
              people actually stop for, not generic church marketing, but your
              voice and theology in a format each platform prefers.
            </p>
            <p>
              <strong className="font-semibold text-brand-ink">
                Social
              </strong>{" "}
              is where strangers meet you first. We adapt the same core moment
              for TikTok, YouTube, Instagram, and Facebook so each feed feels
              native, with hooks, length, and captions tuned for how people scroll.
              Your{" "}
              <strong className="font-semibold text-brand-ink">website</strong>{" "}
              is where curiosity turns into a plan: clear next steps, welcome
              paths, and language that matches what they saw in the wild.
            </p>
            <p>
              Underneath the creativity, the thread is simple: content that
              points to hope, purpose, and belonging, so online reach isn&apos;t
              vanity; it supports real church growth and kingdom impact.
            </p>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src="/ministry-flowchart-v3.jpg"
            alt="Flowchart on white with black connectors: Recording of Service leads to TikTok, YouTube, Instagram, and Facebook, then Hope, Purpose, and Belonging, then Church Growth and Kingdom Impact."
            width={1024}
            height={1024}
            className="h-auto w-full max-w-[min(100%,420px)] shrink-0 ring-0 outline-none sm:max-w-[min(100%,480px)] md:max-w-[580px] lg:max-w-[640px]"
            sizes="(min-width: 1024px) 640px, (min-width: 768px) 52vw, 420px"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
