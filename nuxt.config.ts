// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "BEL Bureau d'Études Legavre",
      htmlAttrs: {
        lang: "fr",
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: "msapplication-TileColor", content: "#da532c"},
        { name: "theme-color", content: "#ffffff"},
        { name: "keywords", content: "bureau etudes legavre vrd vannes" },
        { name: 'robots', content: 'index, follow' },
        
        // dont know
        // { name: 'msapplication-TileImage', content: '/favicon/ms-icon-144x144.png' },
        // { name: 'msapplication-config', content: '/favicon/browserconfig.xml' },
        // { name: 'apple-mobile-web-app-title', content: "BEL Bureau d'Études Legavre" },
        // { name: 'application-name', content: "BEL Bureau d'Études Legavre" },
        // { name: 'msapplication-tooltip', content: "BEL Bureau d'Études Legavre" },
        // { name: 'msapplication-starturl', content: '/' },
        
        // OG TAG
        { hid: 'og:title', property: 'og:title', content: "BEL Bureau d'Études Legavre" },
        { hid: 'og:description', property: 'og:description', content: "BEL Bureau d'Études Legavre" },
        { hid: 'og:image', property: 'og:image', content: '/favicon/ogimage.png' },
        { hid: 'og:url', property: 'og:url', content: 'https://bel-self.vercel.app/' },
      ],
      link: [
        { rel: "canonical", href: 'https://bel-self.vercel.app/' },
        // FAVICON
        { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png"},
        { rel: "icon", type: "image/png", sizes: "32x32", href:"/favicon/favicon-32x32.png"},
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon/favicon-16x16.png"},
        { rel: "manifest", href: "/favicon/site.webmanifest"},
        { rel: "mask-icon", href: "/favicon/safari-pinned-tab.svg", color: "#5bbad5"},
      ],
    },
  },
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
});
