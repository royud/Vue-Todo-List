<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppToast from '@/components/AppToast.vue'
import AppModal from '@/components/AppModal.vue'
import { useDarkStore } from './stores/dark'

useDarkStore()
</script>

<template>
  <component :is="$route.meta.layout || 'div'">
    <RouterView />
  </component>
  <AppToast />
  <AppModal />
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
ul,
ol,
li {
  list-style: none;
}
article,
form {
  margin: 25px 0;
}
.container {
  width: min(100%, 1400px);
  margin: 0 auto;
}
@media (max-width: 1440px) {
  .container {
    padding: 0 20px;
  }
}
</style>
