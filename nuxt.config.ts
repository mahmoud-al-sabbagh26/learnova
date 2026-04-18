// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import { ref } from "vue";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  app: {
    head: {
      htmlAttrs: {
        dir: "rtl",
        lang: "ar",
      },
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cairo:wght@200;400;600;800&display=swap"
        }
      ],
    },
  },
  
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    plugins: [vuetify({ autoImport: true })],
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
