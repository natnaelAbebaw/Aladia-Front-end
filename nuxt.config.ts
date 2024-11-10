// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  target: "static", // Nuxt generates a static version of the app
  router: {
    base: "Aladia-Front-end", // Replace 'your-repo-name' with your GitHub repository name
  },
  generate: {
    fallback: true, // Generates a 404.html for pages not found
  },
});
