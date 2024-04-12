// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxt/ui", 'nuxt-gtag', '@nuxt/image'],
  css: [
    '@/assets/css/main.css',
  ],
  app: {
    head: {
      title: 'JustGoogleFont - Better preview of google font',
      description: 'Our intuitive interface allows you to browse, preview, and select fonts effortlessly, ensuring that your website captures attention',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  runtimeConfig: {
    public: {
      googleApi: ''
    }
  },
  gtag: {
    id: 'G-8CW8KG9FFM'
  },
  image: {
    provider: 'ipx',
    ipx: {}
  }
})