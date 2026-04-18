import { useEffect, useState } from "react";
import { Phone, Star, ShieldCheck, Clock, ArrowUpRight, Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden pt-[104px] pb-12 lg:pt-[120px] lg:pb-20">
      <div className="container-x">
        {/* Signature rounded poster — Arkdin-style with floating tech PNG on right */}
        <div className="relative overflow-hidden rounded-[40px] bg-brand-charcoal text-brand-cream min-h-[86vh]">
          {/* Full-bleed hero background */}
          <div className="absolute inset-0">
            <img
              src="/images/hero/hero_bg_1.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
              loading="eager"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=2400&q=85";
              }}
            />
            {/* Strong left-gradient so headline reads + right side shows the photo + PNG */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(100deg, rgba(14,17,22,0.95) 0%, rgba(14,17,22,0.82) 28%, rgba(14,17,22,0.35) 60%, rgba(14,17,22,0.15) 100%)",
              }}
            />
            {/* Warm orange heat-pulse glow */}
            <div
              aria-hidden
              className="absolute -bottom-48 -right-40 h-[44rem] w-[44rem] rounded-full opacity-40 blur-3xl animate-heat-pulse"
              style={{ background: "radial-gradient(circle, #FF5A1F 0%, transparent 65%)" }}
            />
            {/* Grain */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
              }}
            />
          </div>

          {/* Floating tech PNG right — Arkdin signature */}
          <img
            src="/images/hero/hero_img_1.png"
            alt=""
            aria-hidden
            className="pointer-events-none absolute bottom-0 right-0 hidden h-[92%] w-auto object-contain object-bottom-right drop-shadow-2xl lg:block"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateX(0)" : "translateX(60px)",
              transition: "all 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.2s",
            }}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
          />

          <div className="relative flex min-h-[86vh] flex-col justify-center px-7 py-16 sm:px-12 lg:px-16">
            <div
              className="max-w-2xl transition-all duration-700"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(30px)",
              }}
            >
              <span className="eyebrow eyebrow-dot text-brand-orange mb-5">
                {site.hero.eyebrow}
              </span>

              <h1 className="display-hero mt-4 text-brand-cream">
                {site.hero.headline.split(" ").slice(0, -2).join(" ")}{" "}
                <em className="italic text-brand-orange">
                  {site.hero.headline.split(" ").slice(-2).join(" ")}
                </em>
              </h1>

              <p className="mt-7 max-w-xl font-sans text-[17px] leading-relaxed text-brand-cream/70 sm:text-[18px]">
                {site.hero.subhead}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" variant="orange">
                  <a href={site.hero.primaryCta.href}>
                    {site.hero.primaryCta.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outlineLight">
                  <a href={site.hero.secondaryCta.href}>
                    <Phone className="h-4 w-4" />
                    {site.hero.secondaryCta.label}
                  </a>
                </Button>
                {/* Watch-our-story play button — Arkdin signature */}
                <a
                  href="#projects"
                  className="group ml-2 hidden items-center gap-3 font-grotesk text-sm font-semibold text-brand-cream/80 transition hover:text-brand-cream sm:inline-flex"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-cream/25 transition group-hover:border-brand-orange group-hover:bg-brand-orange/15">
                    <Play className="ml-0.5 h-4 w-4 fill-brand-cream" strokeWidth={0} />
                  </span>
                  Watch Our Work
                </a>
              </div>

              <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/15 px-4 py-2 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-brand-orange" />
                <span className="font-grotesk text-xs font-semibold uppercase tracking-[0.15em] text-brand-cream">
                  $49 AC Tune-Up <span className="text-brand-cream/55">· this month only</span>
                </span>
              </div>
            </div>

            {/* Floating review card */}
            <div
              className="absolute bottom-6 left-6 hidden rounded-2xl border border-brand-cream/10 bg-brand-charcoal/70 p-4 backdrop-blur-md md:block"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.9s ease-out 0.3s",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange">
                  <Star className="h-4 w-4 fill-white text-white" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-2xl text-brand-cream">{site.review.stars}</span>
                    <span className="font-grotesk text-xs text-brand-cream/60">/ 5.0</span>
                  </div>
                  <div className="font-grotesk text-[10px] uppercase tracking-wider text-brand-cream/55">
                    {site.review.count.toLocaleString()} reviews
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Below-hero trust row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-brand-charcoal/60">
          {[
            { icon: ShieldCheck, label: "Licensed & Insured" },
            { icon: Clock, label: "24/7 Emergency Response" },
            { icon: Sparkles, label: "Lifetime Workmanship Warranty" },
            { icon: Star, label: `${site.review.stars}★ · ${site.review.count.toLocaleString()} reviews` },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 font-grotesk text-sm">
              <Icon className="h-4 w-4 text-brand-orange" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
