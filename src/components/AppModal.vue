<template>
  <div v-show="isOpen" class="bg" @click.self="closeModal">
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from '@/stores/modal'
import { storeToRefs } from 'pinia'

const store = useModalStore()
const { isOpen } = storeToRefs(store)
const { closeModal } = store
</script>

<style scoped>
.bg {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background-color: #0000004b;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  border-radius: 5px;
  background-color: var(--color-back-ground);
  box-shadow: 5px 5px 10px 0 #000000;
  padding: 20px;
}
</style>
