import { createRouter, createWebHashHistory } from "vue-router";
import generatedRoutes from "virtual:generated-pages";
import { setupLayouts } from "virtual:generated-layouts";

const routes = setupLayouts(generatedRoutes);

export const router = createRouter({
  history: createWebHashHistory(import.meta.url),
  routes,
});
