import { ArrowUpRight, Phone } from "lucide-react";
import { site } from "@/config/site";
import { useReveal } from "@/hooks/useReveal";

export function CtaBand() {
  const { ref, inView } = useReveal<HTMLDivElement>(0.2);

  return (
    <section className="section-pad">
      <div className="container-x">
        <div
          ref={ref}
          className="relative overflow-hidden rounded-[40px] transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(40px)",
          }}
        >
          {/* Background image */}
          <img
            src="/images/cta/get_a_quote_bg.jpg"
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Charcoal overlay */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(110deg, rgba(14,17,22,0.95) 0%, rgba(14,17,22,0.75) 50%, rgba(255,90,31,0.45) 100%)",
            }}
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

          <div className="relative flex flex-col items-start gap-8 px-8 py-14 sm:px-12 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:py-20">
            <div className="max-w-xl">
              <span className="eyebrow eyebrow-dot text-brand-orange mb-4">
                Ready When You Are
              </span>
              <h2 className="display-xl mt-4 text-brand-cream">
                Your comfort,{" "}
                <em className="italic text-brand-orange">one call</em> away.
              </h2>
              <p className="mt-5 max-w-lg font-sans text-[16.5px] leading-relaxed text-brand-cream/70">
                Whether it's a broken AC on a 100° day or a routine tune-up,
                we've got a licensed tech standing by.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-8 py-4 font-grotesk text-sm font-semibold text-white transition hover:bg-brand-cream hover:text-brand-charcoal"
              >
                Get Free Quote
                <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
              </a>
              <a
                href={`tel:${site.phoneRaw}`}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-brand-cream/30 bg-brand-cream/[0.05] px-8 py-4 font-grotesk text-sm font-semibold text-brand-cream backdrop-blur-sm transition hover:border-brand-cream hover:bg-brand-cream hover:text-brand-charcoal"
              >
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
