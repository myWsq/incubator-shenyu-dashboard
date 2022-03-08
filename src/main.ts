import "./assets/index.css";
import "@arco-design/web-vue/dist/arco.css";

import { createApp } from "vue";
import { pinia } from "./plugins/pinia";
import { router } from "./plugins/router";
import { i18n } from "./plugins/i18n";
import App from "./App.vue";

const app = createApp(App);

app.use(pinia).use(router).use(i18n);

app.mount("#app");
