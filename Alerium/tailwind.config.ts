/** @type {import("tailwindcss").Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{ts,tsx}",
    "./components/**/**/*.{ts,tsx}",
    "./components/**/**/**/*.{ts,tsx}",
    "./components/custom/**/**/*.tsx",
    "./app/**/*.{ts,tsx}",
    "./app/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    screens: {
      "sm": "950px",
      "md": "1024px",
      "lg": "1130px",
      "xl": "1280px",
      "2xl": "1380px",
      "0-mobile": { min: "0", max: "950px" },
      "mobile-tablet": { min: "950px", max: "1024px" },
      "tablet-laptopSm": { min: "1024px", max: "1130px" },
      "laptopSm-laptopMd": { min: "1130px", max: "1280px" },
      "laptopMd-laptopLg": { min: "1280px", max: "1380px" },
      "laptopLg-desktopSm": { min: "1380px", max: "1490px" },
      "desktopSm-desktopMd": { min: "1490px", max: "1760px" },
      "desktopMd-desktopLg": { min: "1760px", max: "1920px" },
    },
    extend: {
      boxShadow: {
        "amber-200":
          "0.5rem 0.5rem theme(colors.amber.200), -0.5rem -0.5rem theme(colors.amber.200)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        table: "hsl(var(--table) / 0.2)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        "3xl": "1490px",
        "4xl": "1760px",
        "5xl": "1920px",
        "xs": "550px",
      },
      height: {
        "accordion-summary": "26px",
        "odd": "32px",
        "standard": "40px",
      },
      width: {
        "icon": "30px",
        "side-menu": "240px",
        "odd": "40px",
        "standard": "30px",
      },
      minWidth: {
        standard: "30px",
      },
      gridTemplateColumns: {
        "24": "repeat(24, minmax(0, 1fr))",
        "sport-page": "240px repeat(24, minmax(0,1fr))",
      },
      fontSize: {
        "2xs": "0.6rem",
      },
      gridColumn: {
        "span-13": "span 13 / span 13",
        "span-14": "span 14 / span 14",
        "span-15": "span 15 / span 15",
        "span-16": "span 16 / span 16",
        "span-17": "span 17 / span 17",
        "span-18": "span 18 / span 18",
      },
      display: ["last"],
    },
    scrollbar: {
      gutter: "stable",
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({
      matchVariant,
    }: {
      [key: string | number | symbol]: any;
    }) {
      matchVariant(
        "nth",
        (value: string) => {
          return `&:nth-child(${value})`;
        },
        {
          values: {
            1: "1",
            2: "2",
            3: "3",
          },
        }
      );
    }),
  ],
};
