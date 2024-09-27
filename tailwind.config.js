/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
      colors: {
        current: "currentColor",
        light: "#F5F7FA",
        gray: {
          100: "#F0F4F8",
          200: "#D9E2EC",
          300: "#BCCCDC",
          400: "#9FB3C8",
          500: "#829AB1",
          600: "#627D98",
          700: "#486581",
          800: "#334E68",
          900: "#243B53",
          1000: "#102A43",
        },
        purple: {
          100: "#EAE2F8",
          200: "#CFBCF2",
          300: "#A081D9",
          400: "#8662C7",
          500: "#724BB7",
          600: "#653CAD",
          700: "#51279B",
          800: "#421987",
          900: "#34126F",
          1000: "#240754",
        },
        red: {
          100: "#FFE3E3",
          200: "#FFBDBD",
          300: "#FF9B9B",
          400: "#F86A6A",
          500: "#EF4E4E",
          600: "#E12D39",
          700: "#CF1124",
          800: "#AB091E",
          900: "#8A041A",
          1000: "#610316",
        },
      },
      minHeight: {
        realsm: "calc(100vh - theme('margin.20'))",
        real: "calc(100vh - theme('margin.24'))",
      },
      gridTemplateRows: {
        layout: "46px minmax(auto, 1fr) auto",
      },
      gridTemplateColumns: {
        coursesm: "minmax(0, 1fr) auto",
        courselg: "minmax(max-content, 200px) minmax(0, 1fr) auto",
        course: "70px minmax(max-content, 240px) minmax(0, 1fr) auto",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
