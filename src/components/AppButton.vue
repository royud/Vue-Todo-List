<template>
  <button :class="[disabled, btnStyle]"><slot></slot></button>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'

defineProps<{ btnStyle?: 'primary' | 'success' | 'proceeding' | 'danger' | undefined }>()
const attrs = useAttrs()

const disabled = computed<string>(() => (attrs.disabled ? 'disabled' : ''))
</script>

<style scoped>
button {
  padding: 5px 8px;
  border: 1px solid var(--color-main);
  background-color: var(--color-background);
  color: var(--color-main);
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    filter: brightness(120%);
  }
  &:active {
    filter: none;
  }
}
.primary {
  background-color: var(--color-main);
  color: var(--color-text-white);
}
.danger {
  border: 1px solid var(--color-danger);
  color: var(--color-danger);
}
.success {
  border: 1px solid var(--color-success);
  background-color: var(--color-success);
  color: var(--color-text-white);
}
.proceeding {
  border: 1px solid var(--color-proceeding);
  background-color: var(--color-proceeding);
  color: var(--color-text-white);
}

.disabled {
  filter: opacity(0.5);
  cursor: auto;
  &:hover {
    filter: opacity(0.5);
  }
  &:active {
    filter: opacity(0.5);
  }
}
</style>
