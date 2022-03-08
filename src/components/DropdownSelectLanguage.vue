<script lang="ts" setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { ChevronDownIcon } from "@heroicons/vue/solid";

const { locale } = useI18n({ useScope: "global" });

const localeTextMap: Record<string, string> = {
  en: "English",
  zh: "简体中文",
};

const selectedLocales = computed(() =>
  Object.keys(localeTextMap).filter((val) => val !== locale.value)
);

function handleLanguageSelect(lang: string) {
  locale.value = lang;
}
</script>

<template>
  <div class="_dropdown">
    <a-dropdown @select="handleLanguageSelect">
      <a-button type="text">
        {{ localeTextMap[locale] || locale }}
        <ChevronDownIcon class="w-[1em] _dropdown-icon"></ChevronDownIcon>
      </a-button>
      <template #content>
        <a-doption v-for="item in selectedLocales" :key="item" :value="item">
          {{ localeTextMap[item] || item }}
        </a-doption>
      </template>
    </a-dropdown>
  </div>
</template>

<style lang="postcss" scoped>
._dropdown :deep(.arco-dropdown-open ._dropdown-icon) {
  @apply rotate-180;
}
</style>
