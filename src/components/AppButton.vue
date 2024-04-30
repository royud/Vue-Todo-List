<template>
  <button :class="[disabled, btnStyle]"><slot></slot></button>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'

defineProps<{ btnStyle?: 'primary' | 'danger' | undefined }>()
const attrs = useAttrs()

const disabled = computed<string>(() => (attrs.disabled ? 'disabled' : ''))
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
