import { useEffect, useState } from "react";
import { Phone, Star, ShieldCheck, Clock, ArrowUpRight, Sparkles } from "lucide-react";
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
        {/* Signature rounded poster — editorial + warm */}
        <div className="relative overflow-hidden rounded-[40px] bg-brand-charcoal text-brand-cream min-h-[82vh] lg:min-h-[76vh]">
          {/* Full-bleed hero image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=2400&q=85"
              alt=""
              className="h-full w-full object-cover object-center"
              loading="eager"
            />
            {/* Warm left-to-right gradient — HVAC-specific (warm overlay vs plumber's cold blue) */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(100deg, rgba(14,17,22,0.94) 0%, rgba(14,17,22,0.82) 30%, rgba(14,17,22,0.35) 65%, rgba(14,17,22,0) 90%)",
              }}
            />
            {/* Warm orange glow bottom-right */}
            <div
              aria-hidden
              className="absolute -bottom-48 -right-40 h-[44rem] w-[44rem] rounded-full opacity-40 blur-3xl animate-heat-pulse"
              style={{ background: "radial-gradient(circle, #FF5A1F 0%, transparent 65%)" }}
            />
            {/* Film grain */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
              }}
            />
          </div>

          <div className="relative flex h-full min-h-[82vh] flex-col justify-center px-7 py-16 sm:px-12 lg:min-h-[76vh] lg:px-16">
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
              </div>

              {/* Deal chip overlay — signature Heatfix */}
              <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/15 px-4 py-2 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-brand-orange" />
                <span className="font-grotesk text-xs font-semibold uppercase tracking-[0.15em] text-brand-cream">
                  $49 AC Tune-Up <span className="text-brand-cream/55">· this month only</span>
                </span>
              </div>
            </div>

            {/* Floating review card — HVAC signature */}
            <div
              className="absolute bottom-6 right-6 hidden rounded-2xl border border-brand-cream/10 bg-brand-charcoal/70 p-4 backdrop-blur-md md:block"
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
