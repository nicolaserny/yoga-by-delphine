module.exports = {
  purge: {
    content: ["./src/**/*.js", "./src/**/*.jsx"],
    options: {
      whitelist: [
        "fill-gray-200",
        "fill-gray-500",
        "fill-gray-800",
        "fill-gray-900",
        "fill-gray-1000",
        "fill-purple-100",
        "fill-purple-600",
        "fill-red-200",
      ],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      colors: {
        light: "#F5F7FA",
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
      minHeight: {
        realsm: "calc(100vh - theme('margin.20'))",
        real: "calc(100vh - theme('margin.24'))",
      },
      gridTemplateRows: {
        layout: "46px minmax(auto, 1fr) 26px",
      },
      gridTemplateColumns: {
        coursesm: "minmax(0, 1fr) auto",
        course: "80px minmax(max-content, 225px) minmax(0, 1fr) auto",
      },
      fill: (theme) => ({
        gray: {
          "200": theme("colors.gray.200"),
          "500": theme("colors.gray.500"),
          "800": theme("colors.gray.800"),
          "900": theme("colors.gray.900"),
          "1000": theme("colors.gray.1000"),
        },
        purple: {
          "100": theme("colors.purple.100"),
          "600": theme("colors.purple.600"),
        },
        red: {
          "200": theme("colors.red.200"),
        },
      }),
    },
  },
  variants: { margin: ["responsive", "last"] },
  plugins: [],
};
