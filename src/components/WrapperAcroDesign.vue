<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import en from "@arco-design/web-vue/es/locale/lang/en-us";
import zh from "@arco-design/web-vue/es/locale/lang/zh-cn";

const { locale } = useI18n();

const frameworkLocale = computed(() => {
  switch (locale.value) {
    case "en":
      return en;
    case "zh":
      return zh;
    default:
      return zh;
  }
});
</script>

<template>
  <a-config-provider :locale="frameworkLocale">
    <slot></slot>
  </a-config-provider>
</template>
