<template>
  <button :class="[disabled, btnStyle]" ref="btnRef"><slot></slot></button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

defineProps<{ btnStyle?: 'primary' | 'danger' | undefined }>()

const btnRef = ref<HTMLButtonElement>()

const disabled = computed<string>(() => (btnRef.value?.disabled ? 'disabled' : ''))
</script>

<style scoped>
button {
  padding: 5px 8px;
  border: 1px solid #985ce7;
  background-color: #ffffff;
  color: #985ce7;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    filter: brightness(120%) contrast(85%);
  }
  &:active {
    filter: none;
  }
}
.primary {
  background-color: #985ce7;
  color: #ffffff;
}
.danger {
  border: 1px solid #e75c5c;
  color: #e75c5c;
}

.disabled {
  opacity: 0.5;
  filter: none;
  cursor: auto;
  &:hover {
    filter: none;
  }
  &:active {
    filter: none;
  }
}
</style>
