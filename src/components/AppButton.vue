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
  border: 1px solid #985ce7;
  background-color: #ffffff;
  color: #985ce7;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    filter: brightness(110%);
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
.success {
  border: 1px solid #7ee075;
  background-color: #7ee075;
  color: #ffffff;
}
.proceeding {
  border: 1px solid #d7e075;
  background-color: #d7e075;
  color: #ffffff;
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
