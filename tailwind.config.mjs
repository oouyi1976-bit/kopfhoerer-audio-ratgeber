/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#09111f",
        graphite: "#111827",
        electric: "#2dd4ff",
        pulse: "#8b5cf6",
        aurora: "#19f4c7",
      },
      boxShadow: {
        glow: "0 20px 80px rgba(45, 212, 255, 0.18)",
        card: "0 18px 45px rgba(9, 17, 31, 0.14)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
