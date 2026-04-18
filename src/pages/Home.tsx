import { DealsMarquee } from "@/components/sections/DealsMarquee";
import { UtilityBar } from "@/components/UtilityBar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { SeasonalOffers } from "@/components/sections/SeasonalOffers";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";
import { SEO, localBusinessJsonLd } from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO path="/" jsonLd={localBusinessJsonLd()} />
      <UtilityBar />
      <DealsMarquee />
      <main>
        <Hero />
        <Services />
        <SeasonalOffers />
        <WhyChoose />
        <Process />
        <Stats />
        <Testimonials />
        <FAQ />
        <ServiceArea />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
