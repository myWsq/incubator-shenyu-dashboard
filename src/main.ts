import "./assets/index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import { createRouter, createWebHashHistory } from "vue-router";
import generatedRoutes from "virtual:generated-pages";
import { setupLayouts } from "virtual:generated-layouts";

import App from "./App.vue";

const app = createApp(App);

// vue-router
const routes = setupLayouts(generatedRoutes);
const router = createRouter({
  history: createWebHashHistory(import.meta.url),
  routes,
});
app.use(router);

// pinia
app.use(createPinia());

// i18n
const i18n = createI18n({
  legacy: false,
  locale: "zh",
  locales: ["zh", "en"],
});
app.use(i18n);

app.mount("#app");
