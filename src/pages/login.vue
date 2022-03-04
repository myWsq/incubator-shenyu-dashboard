<route lang="yaml">
meta:
  layout: empty
</route>

<i18n locale="en" lang="yaml">
title: 👋 Hello Again!
subtitle: Enter your credentials to access your account.
username-placeholder: Enter your username
password-placeholder: Enter your password
submit-button: Sign In
</i18n>

<i18n locale="zh" lang="yaml">
title: 👋 你好啊！又见面了
subtitle: 输入用户名密码登录系统
username-placeholder: 请输入你的用户名
password-placeholder: 请输入你的密码
submit-button: 登录
</i18n>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { computed, reactive } from "vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";

const model = reactive({
  username: "",
  password: "",
});

const { t, locale, availableLocales } = useI18n();

const localeTextMap: Record<string, string> = {
  en: "English",
  zh: "简体中文",
};

const selectedLocales = computed(() =>
  availableLocales.filter((item) => item !== locale.value)
);

function handleLanguageSelect(lang: string) {
  locale.value = lang;
}
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-50">
    <div class="w-[430px]">
      <div class="flex items-center justify-end _dropdown">
        <a-dropdown @select="handleLanguageSelect">
          <a-button type="text">
            {{ localeTextMap[locale] || locale }}
            <ChevronDownIcon class="w-4 _dropdown-icon"></ChevronDownIcon>
          </a-button>
          <template #content>
            <a-doption
              v-for="item in selectedLocales"
              :key="item"
              :value="item"
            >
              {{ localeTextMap[item] || item }}
            </a-doption>
          </template>
        </a-dropdown>
      </div>
      <div class="px-8 pt-12 pb-6 mt-2 bg-white rounded-lg shadow-lg">
        <div class="grid grid-cols-[2.5rem_1fr] gap-5 items-center">
          <img src="@/assets/logo-mock.svg" class="w-full" />
          <div>
            <div class="text-3xl">
              {{ t("title") }}
            </div>
            <div class="mt-2 text-gray-400">
              {{ t("subtitle") }}
            </div>
          </div>
        </div>

        <a-form :model="model" size="large" class="mt-8 _form" auto-label-width>
          <a-form-item>
            <a-input :placeholder="t('username-placeholder')"></a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              type="password"
              :placeholder="t('password-placeholder')"
            ></a-input>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" long>
              {{ t("submit-button") }}
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
._form :deep(.arco-form-item-label-col) {
  /* remove form label padding */
  @apply pr-0;
}
._dropdown :deep(.arco-dropdown-open ._dropdown-icon) {
  @apply rotate-180;
}
</style>
