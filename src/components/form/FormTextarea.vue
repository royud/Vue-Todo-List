<template>
  <label :for="labelFor"
    ><div class="label">{{ label }}</div>
    <textarea :id="labelFor" v-model="value"></textarea>
  </label>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  labelFor: string
}>()
const value = defineModel<string>()
</script>

<style scoped>
.label {
  margin-bottom: 5px;
}
textarea {
  width: 100%;
  height: 50px;
  color: var(--color-text);
  background-color: var(--color-back-ground);
  border: 1px solid gray;
  outline-color: var(--color-main);
  border-radius: 5px;
  resize: none;
  padding: 5px;
}
</style>
