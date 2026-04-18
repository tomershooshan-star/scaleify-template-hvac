import { seasonalOffers } from "@/config/site";
import { ArrowUpRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function SeasonalOffers() {
  return (
    <section id="offers" className="section-pad-sm">
      <div className="container-x">
        {/* Dark rounded panel — the signature moment */}
        <div className="relative overflow-hidden rounded-3xl bg-brand-charcoal p-8 sm:p-12 lg:p-16">
          {/* Orange glow spot */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-40 top-0 h-[36rem] w-[36rem] rounded-full opacity-35 blur-3xl"
            style={{ background: "radial-gradient(circle, #FF5A1F 0%, transparent 65%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, #FF7A47 0%, transparent 65%)" }}
          />
          {/* Subtle grid pattern */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-orange/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange font-grotesk">
              <Tag className="h-3 w-3" />
              Current Offers
            </span>
            <h2 className="display-xl mt-5 text-brand-cream">
              This season's <em className="italic text-brand-orange">deals</em>.
            </h2>
            <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-brand-cream/60">
              Active promotions — redeem before they end. All quotes in writing, no hidden fees.
            </p>
          </div>

          <div className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {seasonalOffers.map((o) => (
              <div
                key={o.title}
                className="flex flex-col rounded-2xl bg-brand-charcoalSoft/70 p-6 backdrop-blur-sm border border-brand-cream/10 transition hover:-translate-y-1 hover:border-brand-orange/40"
              >
                <span className="w-fit rounded-full bg-brand-orange/15 px-3 py-1 font-grotesk text-[10px] font-bold uppercase tracking-[0.18em] text-brand-orange">
                  {o.badge}
                </span>
                <h3 className="mt-5 font-display text-2xl leading-tight text-brand-cream">
                  {o.title}
                </h3>
                <div className="mt-4 font-display text-4xl font-normal text-brand-orange">
                  {o.price}
                </div>
                <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-brand-cream/60">
                  {o.desc}
                </p>
                <Button asChild size="sm" variant="orange" className="mt-6 w-full">
                  <a href="#contact">
                    {o.cta}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
