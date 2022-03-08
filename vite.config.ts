import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";

import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import I18n from "@intlify/vite-plugin-vue-i18n";

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
      resolvers: [
        ArcoResolver({
          importStyle: false,
        }),
      ],
    }),
    Layouts(),
    I18n({
      fullInstall: false,
      compositionOnly: true,
    }),
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
