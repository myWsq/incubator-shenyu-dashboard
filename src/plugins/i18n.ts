import { createI18n } from "vue-i18n";

export const LOCALES = ["zh", "en"];

export const i18n = createI18n({
  legacy: false,
  locale: "zh",
  locales: LOCALES,
});
