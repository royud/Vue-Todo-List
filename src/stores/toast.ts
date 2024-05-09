import type { toastType } from '@/type'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useToastStore = defineStore('toast', () => {
  const toastList = ref<toastType[]>([])

  const timeout = 3000

  const addToast = (message: string, status: string) => {
    const newToast = {
      id: Date.now(),
      message,
      status
    }

    toastList.value.push(newToast)

    setTimeout(() => {
      toastList.value.shift()
    }, timeout)
  }

  return { toastList, timeout, addToast }
})
