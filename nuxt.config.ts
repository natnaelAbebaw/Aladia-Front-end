// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  app: {
    baseURL: "/your-repo-name/", // Replace 'your-repo-name' with the name of your GitHub repository
  },

  // Nuxt generates a static version of the app
});
