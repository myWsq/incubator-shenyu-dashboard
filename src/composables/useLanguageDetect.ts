import { watch } from "vue";
import { useI18n } from "vue-i18n";

export const LANGUAGE_STORAGE_KEY = "__i18n_locale";

// detect preferred language
const preferredLanguages = new Set<string>();
for (const iterator of navigator.languages) {
  preferredLanguages.add(iterator);
  preferredLanguages.add(iterator.split("-")[0]);
}

export function useLanguageDetect() {
  const { availableLocales, locale } = useI18n();

  // is oldLocale available
  const oldLocale = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (oldLocale && availableLocales.includes(oldLocale)) {
    locale.value = oldLocale;
  }
  // use preferred language if available
  else {
    let preferredLocale = locale.value;
    for (const iterator of preferredLanguages) {
      if (availableLocales.includes(iterator)) {
        preferredLocale = iterator;
        break;
      }
    }
    locale.value = preferredLocale;
    localStorage.setItem(LANGUAGE_STORAGE_KEY, preferredLocale);
  }
  // subscribe locale change
  watch(locale, (val) => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, val);
  });
}
