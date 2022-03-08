<script setup lang="ts">
import { RouterView } from "vue-router";
import { useLanguageDetect } from "./composables/useLanguageDetect";
import WrapperAcroDesign from "./components/WrapperAcroDesign.vue";

useLanguageDetect();
</script>

<template>
  <WrapperAcroDesign>
    <RouterView />
  </WrapperAcroDesign>
</template>
