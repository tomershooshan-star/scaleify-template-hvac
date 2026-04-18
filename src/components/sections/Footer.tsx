import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, AtSign, Share2, Flame } from "lucide-react";
import { site } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-cream">
      <div className="container-x grid gap-12 pt-20 pb-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-2.5 font-display text-xl">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-orange">
              <Flame className="h-4.5 w-4.5 text-white" strokeWidth={2.5} />
            </span>
            {site.brand}
          </Link>
          <p className="mt-5 max-w-xs font-sans text-sm leading-relaxed text-brand-cream/55">
            Licensed & insured HVAC technicians. 24/7 emergency service. Flat-rate pricing. Lifetime workmanship warranty.
          </p>
          <div className="mt-6 flex items-center gap-2">
            <a href={site.socials.instagram} aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-cream/15 text-brand-cream/70 transition hover:border-brand-cream/40 hover:text-brand-cream">
              <AtSign className="h-4 w-4" />
            </a>
            <a href={site.socials.facebook} aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-cream/15 text-brand-cream/70 transition hover:border-brand-cream/40 hover:text-brand-cream">
              <Share2 className="h-4 w-4" />
            </a>
          </div>
        </div>

        <Col title="Explore" links={[
          { label: "Services", href: "#services" },
          { label: "Offers", href: "#offers" },
          { label: "Why Us", href: "#why" },
          { label: "Reviews", href: "#reviews" },
          { label: "FAQ", href: "#faq" },
        ]} />
        <Col title="Company" links={[
          { label: "Contact", href: "#contact" },
          { label: "Privacy Policy", to: "/privacy" },
          { label: "Terms of Service", to: "/terms" },
        ]} />
        <div>
          <h4 className="font-grotesk text-xs font-semibold uppercase tracking-[0.22em] text-brand-cream/45">Get in touch</h4>
          <ul className="mt-5 space-y-3 font-sans text-[15px]">
            <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-brand-orange" /><a href={`tel:${site.phoneRaw}`} className="text-brand-cream/80 hover:text-brand-cream">{site.phone}</a></li>
            <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-brand-orange" /><a href={`mailto:${site.email}`} className="text-brand-cream/80 hover:text-brand-cream">{site.email}</a></li>
            <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-brand-orange" /><span className="text-brand-cream/60">{site.address}</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-cream/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 font-grotesk text-xs text-brand-cream/40 sm:flex-row">
          <div>© {new Date().getFullYear()} {site.brand}. All rights reserved.</div>
          <div>Website by <a href="https://scaleify.co" className="text-brand-cream/60 hover:text-brand-cream">Scaleify</a></div>
        </div>
      </div>
    </footer>
  );
}

function Col({ title, links }: { title: string; links: Array<{ label: string; href?: string; to?: string }> }) {
  return (
    <div>
      <h4 className="font-grotesk text-xs font-semibold uppercase tracking-[0.22em] text-brand-cream/45">{title}</h4>
      <ul className="mt-5 space-y-3 font-sans text-[15px]">
        {links.map((l) => (
          <li key={l.label}>
            {l.to ? (
              <Link to={l.to} className="text-brand-cream/80 hover:text-brand-cream">{l.label}</Link>
            ) : (
              <a href={l.href!} className="text-brand-cream/80 hover:text-brand-cream">{l.label}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
