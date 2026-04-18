/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1600px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        brand: {
          // LSI Cool DNA — electric blue primary + bright orange accent
          blue: "#2371ff",            // electric primary blue
          blueDark: "#1557d8",
          blueLight: "#4a8cff",
          blueDeep: "#0E2E6E",        // deep blue for panels
          blueTint: "#E8F0FF",        // ice-blue section bg
          orange: "#ff5e14",          // bright CTA orange
          orangeDark: "#e04d08",
          orangeLight: "#ff7d3f",
          charcoal: "#0B1A2E",        // cool ink
          charcoalDeep: "#05101F",
          charcoalSoft: "#1A2942",
          cream: "#F4F6FA",           // cool paper
          creamDeep: "#E3E9F2",
          ink: "#010101",
          paper: "#FFFFFF",
          gray: "#878c8f",            // straight from LSI Cool
          grayLight: "#F5F5F5",
          grayMid: "#79817c",
          ice: "#E8F0FF",
          steel: "#2371ff",
          steelLight: "#4a8cff",
          navy: "#0B1A2E",
          navyDeep: "#05101F",
          navySoft: "#1A2942",
          red: "#ff5e14",             // aliases for back-compat
          redDark: "#e04d08",
          yellow: "#ff5e14",
          yellowDark: "#e04d08",
          black: "#010101",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ['"Manrope"', '"Inter"', "system-ui", "sans-serif"],
        grotesk: ['"Space Grotesk"', "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: { tightest: "-0.035em" },
      boxShadow: {
        soft: "0 24px 70px -22px rgba(14,17,22,0.30)",
        card: "0 1px 2px rgba(14,17,22,0.05), 0 8px 28px -10px rgba(14,17,22,0.12)",
        orange: "0 24px 60px -20px rgba(255,90,31,0.55)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        marquee: { "0%": { transform: "translateX(0%)" }, "100%": { transform: "translateX(-50%)" } },
        "heat-pulse": { "0%, 100%": { opacity: "0.4" }, "50%": { opacity: "0.7" } },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "letter-bounce": {
          "0%, 75%, 100%": { transform: "translate3d(0, 0, 0)", opacity: "1" },
          "25%": { transform: "translate3d(0, 50px, 0)", opacity: "0.3" },
          "50%": { transform: "translate3d(0, -20px, 0)", opacity: "0.8" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 35s linear infinite",
        "heat-pulse": "heat-pulse 3s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
