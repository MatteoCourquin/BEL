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
        black: "#333333",
        white: "#ffffff",
        gold: "#a7904a",
        gray: '#DBE1EA'
      },
      padding: {
        "x-default": "clamp(20px, 10vw, 100px)",
        "y-default": "clamp(20px, 10vh, 100px)"
      },
      margin: {
        "x-default": "clamp(20px, 10vw, 100px)",
        "y-default": "clamp(20px, 10vh, 100px)"
      },
      borderRadius: {
        small: "8px",
        medium: "14px"
      },
      maxWidth: {
        default: "1280px",
      },
    },
  },
  plugins: [],
}

