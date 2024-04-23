<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <component :is="$route.meta.layout || 'div'">
    <RouterView />
  </component>
</template>

<style>
.container {
  width: 1400px;
  margin: 0 auto;
}
</style>
