import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--on-primary))",
          container: "hsl(var(--primary-container))",
          "on-container": "hsl(var(--on-primary-container))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--on-secondary))",
          container: "hsl(var(--secondary-container))",
          "on-container": "hsl(var(--on-secondary-container))",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          foreground: "hsl(var(--on-tertiary))",
          container: "hsl(var(--tertiary-container))",
          "on-container": "hsl(var(--on-tertiary-container))",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          foreground: "hsl(var(--on-error))",
          container: "hsl(var(--error-container))",
          "on-container": "hsl(var(--on-error-container))",
        },
        background: {
          DEFAULT: "hsl(var(--background))",
          foreground: "hsl(var(--on-background))",
        },
        surface: {
          DEFAULT: "hsl(var(--surface))",
          foreground: "hsl(var(--on-surface))",
          variant: "hsl(var(--surface-variant))",
          "on-variant": "hsl(var(--on-surface-variant))",
          dim: "hsl(var(--surface-dim))",
          bright: "hsl(var(--surface-bright))",
          container: {
            lowest: "hsl(var(--surface-container-lowest))",
            low: "hsl(var(--surface-container-low))",
            DEFAULT: "hsl(var(--surface-container))",
            high: "hsl(var(--surface-container-high))",
            highest: "hsl(var(--surface-container-highest))",
          },
        },
        outline: {
          DEFAULT: "hsl(var(--outline))",
          variant: "hsl(var(--outline-variant))",
        },
        shadow: "hsl(var(--shadow))",
        scrim: "hsl(var(--scrim))",
        "inverse-surface": {
          DEFAULT: "hsl(var(--inverse-surface))",
          foreground: "hsl(var(--inverse-on-surface))",
        },
        "inverse-primary": "hsl(var(--inverse-primary))",
        "primary-fixed": {
          DEFAULT: "hsl(var(--primary-fixed))",
          foreground: "hsl(var(--on-primary-fixed))",
          dim: "hsl(var(--primary-fixed-dim))",
          "on-variant": "hsl(var(--on-primary-fixed-variant))",
        },
        "secondary-fixed": {
          DEFAULT: "hsl(var(--secondary-fixed))",
          foreground: "hsl(var(--on-secondary-fixed))",
          dim: "hsl(var(--secondary-fixed-dim))",
          "on-variant": "hsl(var(--on-secondary-fixed-variant))",
        },
        "tertiary-fixed": {
          DEFAULT: "hsl(var(--tertiary-fixed))",
          foreground: "hsl(var(--on-tertiary-fixed))",
          dim: "hsl(var(--tertiary-fixed-dim))",
          "on-variant": "hsl(var(--on-tertiary-fixed-variant))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
