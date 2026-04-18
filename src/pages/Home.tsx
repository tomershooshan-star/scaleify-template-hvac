import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { TextSlider } from "@/components/sections/TextSlider";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { SeasonalOffers } from "@/components/sections/SeasonalOffers";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";
import { FAQ } from "@/components/sections/FAQ";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";
import { SEO, localBusinessJsonLd } from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO path="/" jsonLd={localBusinessJsonLd()} />
      <main>
        <Hero />
        <Features />
        <About />
        <Services />
        <TextSlider />
        <ProjectShowcase />
        <SeasonalOffers />
        <WhyChoose />
        <Process />
        <Stats />
        <Testimonials />
        <CtaBand />
        <FAQ />
        <ServiceArea />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
