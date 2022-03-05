<script setup lang="ts">
import { RouterView } from "vue-router";
import { useLanguageDetect } from "./composables/useLanguageDetect";
useLanguageDetect();
</script>

<template>
  <RouterView />
</template>
