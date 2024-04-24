<template>
  <header>
    <div class="container headerContent">
      <h1>
        <RouterLink :to="{ name: 'home' }">Todo List</RouterLink>
      </h1>
      <AppButton type="button" btn-style="primary" @click="console.log('추가')">추가</AppButton>
    </div>
  </header>
</template>

<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
</script>

<style scoped>
header {
  position: fixed;
  width: 100%;
  background-color: #ffffff;
  height: 56px;
  box-shadow: 0 0 5px 0 #000000;
  display: flex;
  color: #985ce7;
}
.headerContent {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
