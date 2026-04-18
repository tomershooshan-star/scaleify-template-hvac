import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X, Flame } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Offers", href: "#offers" },
  { label: "Why Us", href: "#why" },
  { label: "Reviews", href: "#reviews" },
];

export function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "top-0 bg-brand-cream/95 backdrop-blur-md shadow-sm"
          : "top-[38px] bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2.5 font-display text-xl font-normal text-brand-charcoal"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-orange">
            <Flame className="h-4.5 w-4.5 text-white" strokeWidth={2.5} />
          </span>
          {site.brand}
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-grotesk text-sm font-medium text-brand-charcoal/70 transition hover:text-brand-charcoal"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm" variant="orange">
            <a href={`tel:${site.phoneRaw}`}>
              <Phone className="h-3.5 w-3.5" />
              {site.phone}
            </a>
          </Button>
        </div>

        <button
          className="p-2 text-brand-charcoal md:hidden"
          onClick={() => setOpen((x) => !x)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-charcoal/10 bg-brand-cream md:hidden">
          <div className="container-x flex flex-col gap-4 py-5">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-grotesk text-base font-semibold text-brand-charcoal"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="orange" size="md">
              <a href={`tel:${site.phoneRaw}`}>
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
