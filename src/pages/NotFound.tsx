import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { SEO } from "@/components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found" path="/404" />
      <div className="flex min-h-screen flex-col items-center justify-center bg-brand-navy px-4 text-center text-brand-cream">
        <div className="font-display text-[120px] leading-none text-brand-red sm:text-[180px]">
          404
        </div>
        <p className="mt-6 max-w-md font-grotesk text-brand-cream/65">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <Button asChild size="lg" variant="red" className="mt-8">
          <Link to="/">Go Home</Link>
        </Button>
      </div>
    </>
  );
}
