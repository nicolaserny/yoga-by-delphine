module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      colors: {
        gray: {
          "100": "#F0F4F8",
          "200": "#D9E2EC",
          "300": "#BCCCDC",
          "400": "#9FB3C8",
          "500": "#829AB1",
          "600": "#627D98",
          "700": "#486581",
          "800": "#334E68",
          "900": "#243B53",
          "1000": "#102A43",
        },
        purple: {
          "100": "#EAE2F8",
          "200": "#CFBCF2",
          "300": "#A081D9",
          "400": "#8662C7",
          "500": "#724BB7",
          "600": "#653CAD",
          "700": "#51279B",
          "800": "#421987",
          "900": "#34126F",
          "1000": "#240754",
        },
        red: {
          "100": "#FFE3E3",
          "200": "#FFBDBD",
          "300": "#FF9B9B",
          "400": "#F86A6A",
          "500": "#EF4E4E",
          "600": "#E12D39",
          "700": "#CF1124",
          "800": "#AB091E",
          "900": "#8A041A",
          "1000": "#610316",
        },
      },
      fontFamily: {
        sans: "Montserrat, sans-serif",
        serif: "Merriweather, serif",
      },
      height: {
        real: "calc(100vh - 6rem)",
      },
      gridTemplateRows: {
        layout: "46px minmax(0, 1fr) 26px",
      },
    },
  },
  variants: {},
  plugins: [],
};
