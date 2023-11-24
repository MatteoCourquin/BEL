// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // PROD
  ssr: true,
  // DEV
  // ssr: false,
  devtools: { enabled: true },
  css: ['@/css/main.css'],
  vite: {
    resolve: {
      alias: {
        '~': '/public',
        '@': '/assets',
      },
    },
  },
  modules: ['nuxt-swiper'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
