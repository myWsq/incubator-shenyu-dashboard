import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";

import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    VueJsx(),
    Pages({
      importMode: "sync",
      exclude: ["**/components/*.vue"],
    }),
    Components({
      dirs: [],
      dts: false,
      resolvers: [ArcoResolver()],
    }),
    Layouts(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
