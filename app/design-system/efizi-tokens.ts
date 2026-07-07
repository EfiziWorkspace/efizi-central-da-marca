/**
 * EFIZI · Design Tokens — Camada 0 (fonte da verdade)
 * Import direto em apps/dashboards React/Next:
 *   import { efizi } from "@/design-system/efizi-tokens";
 *   <div style={{ color: efizi.color.brand.orange }} />
 * Para shadcn/Tailwind, prefira o efizi-tokens.css (CSS vars).
 * Hex canônico do brandbook 2026 — substitui o colors_and_type.css antigo.
 */
export const efizi = {
  color: {
    brand: {
      orange: "#FF4000",
      peach:  "#FE734F",
      pulse:  "#FFD500",
      cream:  "#F5F3EF",
      ink:    "#0A0A0A",
      white:  "#FFFFFF",
      teal:   "#228474", // SÓ UI: link, foco, PIX
    },
    orange: {
      50: "#FFF1EC", 100: "#FFE0D4", 200: "#FFC1A8", 300: "#FF9E78", 400: "#FF6E3C",
      500: "#FF4000", 600: "#E43800", 700: "#B82D00", 800: "#8C2200", 900: "#5C1600",
    },
    gray: {
      50: "#F7F6F4", 100: "#EEEAE3", 200: "#E4E0DA", 300: "#D2CDC5", 400: "#BEB9B1",
      500: "#A9A39B", 600: "#6B6660", 700: "#4A4640", 800: "#2A2723", 900: "#161412",
    },
    status: {
      success: "#1E874B", successBg: "#E6F4EC",
      warning: "#B7791F", warningBg: "#FBF1DA",
      error:   "#C4361B", errorBg:   "#FDECE8",
      info:    "#1C6B5E", infoBg:    "#E9F3F1",
    },
  },
  font: {
    sans: "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    weight: { regular: 400, medium: 500, semibold: 600, bold: 700, extrabold: 800 },
    size: { xs: 12, sm: 14, base: 16, md: 18, lg: 20, xl: 24, "2xl": 32, "3xl": 40, "4xl": 48, "5xl": 64, "6xl": 88 },
    lineHeight: { tight: 1.05, snug: 1.2, base: 1.5 },
    tracking: { tighter: "-0.025em", tight: "-0.015em", normal: "0", wide: "0.10em" },
  },
  space: { 1: 4, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24, 8: 32, 10: 40, 12: 48, 16: 64, 20: 80, 24: 96 },
  radius: { xs: 4, sm: 6, md: 8, lg: 12, xl: 16, pill: 9999 },
  shadow: {
    xs: "0 1px 2px rgba(10,10,10,.05)",
    sm: "0 1px 3px rgba(10,10,10,.08)",
    md: "0 4px 10px rgba(10,10,10,.10)",
    lg: "0 10px 24px rgba(10,10,10,.12)",
    xl: "0 20px 40px rgba(10,10,10,.16)",
  },
  motion: { fast: "120ms", base: "180ms", slow: "300ms", ease: "cubic-bezier(.2,.6,.2,1)" },
  chart: {
    categorical: ["#FF4000", "#228474", "#334155", "#2F6DB4", "#FE734F", "#C99A00", "#7A5AA6", "#6B6660"],
    sequential:  ["#FFE0D4", "#FFB08C", "#FF7A45", "#FF4000", "#B82D00"],
    diverging:   { neg: "#C4361B", mid: "#F5F3EF", pos: "#228474" },
  },
} as const;

export type EfiziTokens = typeof efizi;
export default efizi;
