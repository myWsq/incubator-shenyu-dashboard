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
import DropdownSelectLanguage from "@/components/DropdownSelectLanguage.vue";
import { UserIcon, KeyIcon } from "@heroicons/vue/solid";
import { useForm, FieldError, AlertError } from "@/composables/useForm";

const form = useForm(
  {
    username: "",
    password: "",
  },
  // mock
  async (val) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (val.username !== "admin") {
          reject(
            new FieldError([
              {
                field: "username",
                message: "user not found",
              },
            ])
          );
        } else if (val.password !== "admin") {
          reject(new AlertError("Invalid password"));
        } else {
          resolve();
        }
      }, 1000);
    });
  }
);

const { t } = useI18n();
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-50">
    <div class="w-[430px]">
      <div class="flex items-center justify-end">
        <DropdownSelectLanguage></DropdownSelectLanguage>
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

        <a-form v-bind="form" size="large" class="mt-8 _form" auto-label-width>
          <a-form-item field="username">
            <a-input
              v-model="form.model.username"
              :placeholder="t('username-placeholder')"
            >
              <template #prefix>
                <UserIcon class="w-[1em]"></UserIcon>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item field="password">
            <a-input-password
              v-model="form.model.password"
              :placeholder="t('password-placeholder')"
            >
              <template #prefix>
                <KeyIcon class="w-[1em]"></KeyIcon>
              </template>
            </a-input-password>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit" long>
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
</style>
