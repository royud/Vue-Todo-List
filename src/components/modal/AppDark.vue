<template>
  <ul class="theme-list">
    <li v-for="themeType in themeTypes" :key="themeType.type">
      <label>
        <div>
          <div
            class="checked"
            :style="{
              backgroundColor: checkedColor(themeType.type)
            }"
          ></div>
          <input type="radio" v-model="theme" name="theme" :value="themeType.type" />
        </div>
        <span>{{ themeType.label }}</span>
      </label>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useDarkStore } from '@/stores/dark'
import { storeToRefs } from 'pinia'

const store = useDarkStore()

const { theme } = storeToRefs(store)

const themeTypes = [
  {
    type: 'light',
    label: '밝은 테마'
  },
  {
    type: 'dark',
    label: '어두운 테마'
  },
  {
    type: 'device',
    label: '기기 테마'
  }
]
const checkedColor = (type: string) => {
  return theme.value === type ? 'var(--color-main)' : 'transparent'
}
</script>

<style scoped>
input[type='radio'] {
  visibility: hidden;
  position: absolute;
}
.theme-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.theme-list label {
  display: flex;
  gap: 10px;
  align-items: center;
}
.checked {
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 0px 1px var(--color-text);
  border: 3px solid var(--color-back-ground);
  border-radius: 50%;
}
</style>
