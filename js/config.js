/**
 * Tailwind CSS Configuration
 * FIT & PLUS Design System
 */
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-container-lowest": "#0e0e0e",
        "primary-container": "#ff5448",
        "inverse-on-surface": "#313030",
        "tertiary-fixed-dim": "#ffb4aa",
        "on-error": "#690005",
        "surface-container": "#201f1f",
        "on-surface": "#e5e2e1",
        "primary": "#ffb4ab",
        "inverse-primary": "#c00010",
        "on-error-container": "#ffdad6",
        "on-primary": "#690004",
        "secondary-fixed": "#dfe2ea",
        "on-primary-fixed": "#410002",
        "secondary-fixed-dim": "#c3c6ce",
        "surface-dim": "#131313",
        "primary-fixed-dim": "#ffb4ab",
        "on-tertiary-fixed-variant": "#930007",
        "on-primary-container": "#5c0003",
        "on-surface-variant": "#eabcb6",
        "surface-container-highest": "#353534",
        "primary-fixed": "#ffdad5",
        "on-tertiary": "#690003",
        "background": "#131313",
        "on-primary-fixed-variant": "#930009",
        "surface-container-high": "#2a2a2a",
        "tertiary-fixed": "#ffdad5",
        "inverse-surface": "#e5e2e1",
        "on-secondary-container": "#b8bcc3",
        "tertiary": "#ffb4aa",
        "surface-bright": "#3a3939",
        "outline": "#b08782",
        "surface": "#131313",
        "on-tertiary-fixed": "#410001",
        "on-secondary": "#2d3137",
        "surface-tint": "#ffb4ab",
        "on-secondary-fixed": "#181c21",
        "surface-container-low": "#1c1b1b",
        "secondary-container": "#484c52",
        "surface-variant": "#353534",
        "error": "#ffb4ab",
        "secondary": "#c3c6ce",
        "tertiary-container": "#ff5447",
        "on-tertiary-container": "#5c0002",
        "error-container": "#93000a",
        "on-secondary-fixed-variant": "#43474d",
        "outline-variant": "#5f3e3b",
        "on-background": "#e5e2e1",
        "neon-lime": "#CCFF00",
        "apex-red": "#E50914",
        "apex-red-hover": "#FF1820",
        "dark-card": "#111418",
        "dark-card-hover": "#15191E",
        "dark-subtle": "#1A1E22"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        "space-lg": "1.5rem",
        "space-2xl": "4rem",
        "gutter": "1.5rem",
        "margin": "1.25rem",
        "space-xl": "2.5rem",
        "space-md": "1rem",
        "gutter-desktop": "2.5rem",
        "margin-desktop": "4rem",
        "space-xs": "0.25rem",
        "space-3xl": "6rem",
        "space-sm": "0.5rem",
        "margin-tablet": "2.5rem"
      },
      fontFamily: {
        "stat-counter-mobile": ["Anton", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "headline-xl-mobile": ["Anton", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "stat-counter": ["Anton", "sans-serif"],
        "technical-mono": ["Barlow Condensed", "sans-serif"],
        "headline-md": ["Anton", "sans-serif"],
        "label-caps": ["Barlow Condensed", "sans-serif"],
        "headline-lg": ["Anton", "sans-serif"],
        "headline-lg-mobile": ["Anton", "sans-serif"],
        "headline-xl": ["Anton", "sans-serif"],
        "title-sm": ["Barlow Condensed", "sans-serif"],
        "display-hero": ["Anton", "sans-serif"],
        "display-hero-mobile": ["Anton", "sans-serif"],
        "body-sm": ["Inter", "sans-serif"]
      },
      fontSize: {
        "stat-counter-mobile": ["54px", { lineHeight: "52px", letterSpacing: "0.01em", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "28px", letterSpacing: "-0.01em", fontWeight: "400" }],
        "headline-xl-mobile": ["40px", { lineHeight: "44px", letterSpacing: "0.02em", fontWeight: "400" }],
        "body-md": ["15px", { lineHeight: "24px", letterSpacing: "0em", fontWeight: "400" }],
        "stat-counter": ["80px", { lineHeight: "76px", letterSpacing: "0.01em", fontWeight: "400" }],
        "technical-mono": ["11px", { lineHeight: "14px", letterSpacing: "0.2em", fontWeight: "600" }],
        "headline-md": ["28px", { lineHeight: "32px", letterSpacing: "0.03em", fontWeight: "400" }],
        "label-caps": ["13px", { lineHeight: "16px", letterSpacing: "0.14em", fontWeight: "700" }],
        "headline-lg": ["44px", { lineHeight: "48px", letterSpacing: "0.03em", fontWeight: "400" }],
        "headline-lg-mobile": ["32px", { lineHeight: "36px", letterSpacing: "0.03em", fontWeight: "400" }],
        "headline-xl": ["64px", { lineHeight: "68px", letterSpacing: "0.02em", fontWeight: "400" }],
        "title-sm": ["20px", { lineHeight: "24px", letterSpacing: "0.05em", fontWeight: "700" }],
        "display-hero": ["96px", { lineHeight: "96px", letterSpacing: "0.02em", fontWeight: "400" }],
        "display-hero-mobile": ["52px", { lineHeight: "52px", letterSpacing: "0.02em", fontWeight: "400" }],
        "body-sm": ["13px", { lineHeight: "18px", letterSpacing: "0.01em", fontWeight: "400" }]
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-red": "glowRed 2.5s ease-in-out infinite alternate",
        "glow-lime": "glowLime 2.5s ease-in-out infinite alternate"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        },
        glowRed: {
          "0%": { filter: "drop-shadow(0 0 15px rgba(229,9,20,0.4))" },
          "100%": { filter: "drop-shadow(0 0 35px rgba(255,24,32,0.8))" }
        },
        glowLime: {
          "0%": { filter: "drop-shadow(0 0 10px rgba(204,255,0,0.3))" },
          "100%": { filter: "drop-shadow(0 0 25px rgba(204,255,0,0.7))" }
        }
      }
    }
  }
};
