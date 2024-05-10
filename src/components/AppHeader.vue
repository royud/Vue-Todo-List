<template>
  <header>
    <div class="container headerContent">
      <h1>
        <RouterLink :to="{ name: 'home' }">Todo List</RouterLink>
      </h1>
      <div class="btn-wrap">
        <AppButton type="button" @click="openModal('dark')">다크모드 설정</AppButton>
        <AppButton
          :disabled="$route.name === 'create'"
          type="button"
          btn-style="primary"
          @click="router.push({ name: 'create' })"
          >추가</AppButton
        >
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import { useModalStore } from '@/stores/modal'
import { useRouter } from 'vue-router'

const router = useRouter()

const store = useModalStore()
const { openModal } = store
</script>

<style scoped>
header {
  position: fixed;
  width: 100%;
  background-color: var(--color-back-ground);
  height: 56px;
  box-shadow: 0 0 5px 0 #000000;
  display: flex;
}
h1 {
  color: var(--color-main);
}
.headerContent {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btn-wrap {
  display: flex;
  gap: 20px;
}
</style>
