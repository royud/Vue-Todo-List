<template>
  <AppHeader />
  <main class="container">
    <slot></slot>
  </main>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
</script>

<style scoped></style>
