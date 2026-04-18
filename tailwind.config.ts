// tailwind.config.ts
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const { fontFamily } = defaultTheme;

const config = {
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // ShadCN/UI required colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        "surface-container-high": "#e5e9eb",
        /* "primary": "#041627", */
        "surface-tint": "#4f6073",
        "surface-variant": "#e0e3e5",
        "error": "#ba1a1a",
        "tertiary": "#735c00",
        "on-surface-variant": "#44474c",
        "error-container": "#ffdad6",
        "surface-bright": "#f7fafc",
        "on-secondary-fixed": "#002020",
        "on-tertiary-fixed-variant": "#574500",
        "surface-container-lowest": "#ffffff",
        "tertiary-fixed": "#ffe088",
        "secondary-container": "#90efef",
        "on-error-container": "#93000a",
        "on-primary": "#ffffff",
        "on-tertiary": "#ffffff",
        "inverse-surface": "#2d3133",
        "on-surface": "#181c1e",
        "on-secondary": "#ffffff",
        "secondary-fixed-dim": "#76d6d5",
        "tertiary-fixed-dim": "#e9c349",
        "surface-container-low": "#f1f4f6",
        "outline-variant": "#c4c6cd",
        "outline": "#74777d",
        "on-primary-fixed-variant": "#38485a",
        "surface-container": "#ebeef0",
        "primary-fixed-dim": "#b7c8de",
        "on-background": "#181c1e",
        "primary-container": "#1a2b3c",
        "surface-dim": "#d7dadc",
        "tertiary-container": "#cca830",
        /* "background": "#f7fafc", */
        "inverse-on-surface": "#eef1f3",
        "on-primary-fixed": "#0b1d2d",
        "on-secondary-fixed-variant": "#004f4f",
        "surface-container-highest": "#e0e3e5",
        "on-error": "#ffffff",
        "secondary-fixed": "#93f2f2",
        "on-secondary-container": "#006e6e",
        "surface": "#f7fafc",
        "on-tertiary-fixed": "#241a00",
        "secondary": "#006a6a",
        "on-tertiary-container": "#4f3e00",
      },
      fontFamily: {
        sans: ["var(--font-body)", ...fontFamily.sans],
        heading: ["var(--font-headline)", ...fontFamily.serif],
        headline: ["var(--font-headline)", ...fontFamily.serif],
        body: ["var(--font-body)", ...fontFamily.sans],
        label: ["var(--font-label)", ...fontFamily.sans],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
    },
  },
  // plugins: [require("tailwindcss-animate")], // Usually required by ShadCN
} satisfies Config;

export default config;