<template>
  <TransitionGroup name="list" tag="ul">
    <li
      v-for="toast in toastList"
      :key="toast.id"
      :style="{ backgroundColor: statusColor(toast.status) }"
    >
      {{ toast.message }}
      <div class="timer" :style="{ animationDuration: `${timeout / 1000}s` }"></div>
    </li>
  </TransitionGroup>
</template>

<script setup lang="ts">
import { useToastStore } from '@/stores/toast'
import { storeToRefs } from 'pinia'

const store = useToastStore()

const { timeout } = store
const { toastList } = storeToRefs(store)

const statusColor = (status: string) => {
  switch (status) {
    case 'fail':
      return 'var(--color-danger)'
    case 'success':
      return 'var(--color-success)'
  }
}
</script>

<style scoped>
ul {
  position: fixed;
  right: 10px;
  top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
li {
  width: 250px;
  min-height: 70px;
  border-radius: 5px;
  color: var(--color-text-white);
  background-color: var(--color-main);
  box-shadow: 1px 1px 5px 0 #000000;
  padding: 5px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.list-enter-active,
.list-leave-active {
  transition: opacity 0.5s;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}
.list-enter-to,
.list-leave-from {
  opacity: 1;
}

.timer {
  position: absolute;
  left: 0px;
  bottom: 0px;
  height: 5px;
  background-color: #ffffffa1;
  animation-name: timer;
}

@keyframes timer {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
}
</style>
