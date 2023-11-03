/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        black: "#333",
        white: "#fff",
        gold: "#a7904a",
      },
      // padding: {
      //   paddingMain: "clamp(20px, 10vw, 100px)"
      // },
      // margin: {
      //   marginMain: "clamp(20px, 10vw, 100px)"
      // },
      borderRadius: {
        small: "8px",
        medium: "14px"
      },
    },
  },
  plugins: [],
}

