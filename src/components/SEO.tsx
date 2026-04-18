import { Helmet } from "react-helmet-async";
import { site } from "@/config/site";

interface Props {
  title?: string;
  description?: string;
  path?: string;
  jsonLd?: object;
}

export function SEO({ title, description, path, jsonLd }: Props) {
  const t = title ? `${title} · ${site.brand}` : `${site.brand} — ${site.tagline}`;
  const d =
    description ??
    `${site.brand} — ${site.tagline}. Emergency service, upfront pricing, licensed & insured. Serving ${site.serviceCities.slice(0, 3).join(", ")} and more.`;
  const url = path ? `https://example.com${path}` : "https://example.com/";

  return (
    <Helmet>
      <title>{t}</title>
      <meta name="description" content={d} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={t} />
      <meta property="og:description" content={d} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: site.brand,
    description: site.tagline,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
    },
    areaServed: site.serviceCities.map((c) => ({ "@type": "City", name: c })),
    openingHours: ["Mo-Sa 08:00-20:00"],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.review.stars,
      reviewCount: site.review.count,
    },
  };
}
