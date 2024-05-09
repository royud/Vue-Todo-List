<template>
  <header>
    <div class="container headerContent">
      <h1>
        <RouterLink :to="{ name: 'home' }">Todo List</RouterLink>
      </h1>
      <div class="btn-wrap">
        <AppButton type="button" @click="openModal">다크모드 설정</AppButton>
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
  <AppModal>
    <ul class="theme-list">
      <li>
        <label>
          <input type="radio" v-model="theme" name="theme" value="light" />
          <span>밝은 테마</span>
        </label>
      </li>
      <li>
        <label>
          <input type="radio" v-model="theme" name="theme" value="dark" />
          <span>어두운 테마</span>
        </label>
      </li>
      <li>
        <label>
          <input type="radio" v-model="theme" name="theme" value="device" />
          <span>기기 테마</span>
        </label>
      </li>
    </ul>
  </AppModal>
</template>

<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import AppModal from '@/components/AppModal.vue'
import { useModalStore } from '@/stores/modal'

import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const theme = ref<string>('light')

const localTheme = localStorage.getItem('theme')

if (localTheme) {
  theme.value = localTheme
}

watch(
  theme,
  (newValue: string) => {
    localStorage.setItem('theme', newValue)

    if (newValue === 'device') {
      const isDark: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches

      const settingDark = isDark ? 'dark' : 'light'

      document.documentElement.setAttribute('data-theme', settingDark)
    } else {
      document.documentElement.setAttribute('data-theme', newValue)
    }
  },
  { immediate: true }
)

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
.theme-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.theme-list label {
  display: flex;
  gap: 10px;
}
</style>
