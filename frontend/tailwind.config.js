module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-sarif"]
      },
      colors: {
        primary: {
          "50": "#ffedef",
          "100": "#ff94a0",
          "200": "#ff8290",
          "300": "#ff7080",
          "400": "#ff5e70",
          "500": "#ff4c60",
          "600": "#e64456",
          "700": "#cc3d4d",
          "800": "#b33543",
          "900": "#992e3a"
        },
      },
    },
  },
  plugins: [],
}