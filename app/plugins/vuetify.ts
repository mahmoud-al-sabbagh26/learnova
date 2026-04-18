import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    locale: {
      locale: "ar",
      rtl: {
        ar: true,
      },
    },
    theme: {
      defaultTheme: "light",
      themes: {
        light: {
          colors: {
            primary: "#083699",
            secondary: "#1c91fd",
            golden: "#FFD700",
            gray: "#808080",
          }
        }
      }
    },
  });

  app.vueApp.use(vuetify); //

  return {
    provide: {
      vuetify,
    },
  };
});
