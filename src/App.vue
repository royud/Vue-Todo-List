<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <component :is="$route.meta.layout || 'div'">
    <RouterView />
  </component>
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
article {
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
