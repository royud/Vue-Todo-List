<template>
  <label :for="labelFor"
    ><div class="label">{{ label }}</div>
    <input :id="labelFor" :type v-model="value" />
  </label>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  labelFor: string
  type: string
}>()
const value = defineModel<string | number>()
</script>

<style scoped>
.label {
  margin-bottom: 5px;
}
input {
  width: 100%;
  height: 30px;
  color: var(--color-text);
  background-color: var(--color-back-ground);
  border: 1px solid gray;
  outline-color: var(--color-main);
  border-radius: 5px;
  padding: 5px;
}
</style>
