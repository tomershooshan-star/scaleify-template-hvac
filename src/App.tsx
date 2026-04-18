import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/NotFound";
import { UtilityBar } from "@/components/UtilityBar";
import { DealsMarquee } from "@/components/sections/DealsMarquee";
import { StickyNav } from "@/components/sections/StickyNav";
import { CookieConsent } from "@/components/CookieConsent";
import { Chatbot } from "@/components/Chatbot";
import { FloatingQuote } from "@/components/FloatingQuote";
import { ScrollManager } from "@/components/ScrollManager";

export default function App() {
  return (
    <>
      <ScrollManager />
      <UtilityBar />
      <DealsMarquee />
      <StickyNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FloatingQuote />
      <CookieConsent />
      <Chatbot />
    </>
  );
}
