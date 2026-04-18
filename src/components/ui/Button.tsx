import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-grotesk font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        orange:
          "bg-brand-orange text-white hover:bg-brand-orangeDark focus-visible:ring-brand-orange focus-visible:ring-offset-brand-cream shadow-[0_8px_24px_-8px_rgba(255,90,31,0.55)]",
        dark:
          "bg-brand-charcoal text-brand-cream hover:bg-brand-charcoalDeep focus-visible:ring-brand-charcoal focus-visible:ring-offset-brand-cream",
        outline:
          "border border-brand-charcoal/20 bg-transparent text-brand-charcoal hover:border-brand-charcoal/50 hover:bg-brand-charcoal/5",
        outlineLight:
          "border border-brand-cream/25 bg-transparent text-brand-cream hover:border-brand-cream/60 hover:bg-brand-cream/10",
        ghost:
          "bg-transparent text-brand-charcoal hover:bg-brand-charcoal/5",
        // Legacy aliases for copied universal components
        red:
          "bg-brand-orange text-white hover:bg-brand-orangeDark focus-visible:ring-brand-orange focus-visible:ring-offset-brand-cream shadow-[0_8px_24px_-8px_rgba(255,90,31,0.55)]",
        yellow:
          "bg-brand-orange text-white hover:bg-brand-orangeDark focus-visible:ring-brand-orange",
      },
      size: {
        sm: "h-9 px-5 text-[13px]",
        md: "h-11 px-6 text-sm",
        lg: "h-14 px-8 text-[15px]",
      },
    },
    defaultVariants: { variant: "orange", size: "md" },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
