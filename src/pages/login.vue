<route lang="yaml">
meta:
  layout: empty
</route>

<script setup lang="ts">
import { reactive } from "vue";

const model = reactive({
  username: "",
  password: "",
});
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-50">
    <div class="bg-white rounded-lg shadow-lg w-[360px] pt-12 px-8 pb-6">
      <div class="grid grid-cols-[2.5rem_1fr] gap-5 items-center">
        <img src="@/assets/logo-mock.svg" class="w-full" />
        <div>
          <div class="text-3xl">Hello Again!</div>
          <div class="mt-2 text-gray-400">
            Enter your credentials to access your account.
          </div>
        </div>
      </div>

      <a-form :model="model" size="large" class="mt-8 _form" auto-label-width>
        <a-form-item>
          <a-input placeholder="Enter your username"></a-input>
        </a-form-item>
        <a-form-item>
          <a-input type="password" placeholder="Enter your password"></a-input>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" long>Submit</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
._form :deep(.arco-form-item-label-col) {
  /* remove form label padding */
  padding-right: 0;
}
</style>
