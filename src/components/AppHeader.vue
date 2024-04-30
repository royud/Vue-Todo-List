<template>
  <header>
    <div class="container headerContent">
      <h1>
        <RouterLink :to="{ name: 'home' }">Todo List</RouterLink>
      </h1>
      <AppButton
        :disabled="$route.name === 'create'"
        type="button"
        btn-style="primary"
        @click="router.push({ name: 'create' })"
        >추가</AppButton
      >
    </div>
  </header>
</template>

<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
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
