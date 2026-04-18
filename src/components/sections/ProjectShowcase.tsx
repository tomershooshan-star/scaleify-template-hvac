import { ArrowUpRight } from "lucide-react";

const projects = [
  { img: "/images/projects/project_1.jpg", title: "Air Duct Cleaning", service: "Residential · 4BR", city: "Pasadena" },
  { img: "/images/projects/project_2.jpg", title: "Central AC Install", service: "New Construction", city: "Santa Monica" },
  { img: "/images/projects/project_3.jpg", title: "Commercial HVAC", service: "Retail Space · 8,000sqft", city: "Downtown LA" },
  { img: "/images/projects/project_4.jpg", title: "Ductless Mini-Split", service: "Multi-Zone Install", city: "Hollywood" },
  { img: "/images/projects/project_5.jpg", title: "Heat Pump Upgrade", service: "High-Efficiency Swap", city: "Beverly Hills" },
  { img: "/images/projects/project_6.jpg", title: "Furnace Replacement", service: "Emergency · Same-Day", city: "Long Beach" },
  { img: "/images/projects/project_7.jpg", title: "Smart Thermostat", service: "Nest · 6 Zones", city: "Pasadena" },
  { img: "/images/projects/project_8.jpg", title: "Air Quality Retrofit", service: "UV + HEPA System", city: "Santa Monica" },
];

export function ProjectShowcase() {
  return (
    <section id="projects" className="section-pad bg-brand-creamDeep/30">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <span className="eyebrow">Our Work</span>
            <h2 className="display-xl mt-5 text-brand-charcoal">
              Recent <em className="italic text-brand-orange">projects</em>.
            </h2>
          </div>
          <p className="max-w-md font-sans text-[16px] leading-relaxed text-brand-charcoal/55 lg:justify-self-end lg:text-right">
            From quick repairs to full system installs — a snapshot of recent HVAC work we're proud of.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <article
              key={p.title + p.city}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-brand-charcoal"
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              {/* Permanent subtle gradient so text is readable even without hover */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(14,17,22,0) 40%, rgba(14,17,22,0.75) 100%)",
                }}
              />
              {/* Hover: richer overlay + arrow CTA */}
              <div
                aria-hidden
                className="absolute inset-0 bg-brand-orange/0 transition duration-500 group-hover:bg-brand-orange/40"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 text-brand-cream">
                <div className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-orange">
                  {p.city}
                </div>
                <div className="mt-1.5 font-display text-xl leading-tight">
                  {p.title}
                </div>
                <div className="mt-1 font-sans text-[12px] text-brand-cream/70">
                  {p.service}
                </div>
                <div className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-cream/10 text-brand-cream backdrop-blur-sm transition group-hover:bg-brand-cream group-hover:text-brand-orange">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
