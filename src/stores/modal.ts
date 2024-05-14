import AppDark from '@/components/modal/AppDark.vue'
import { defineStore } from 'pinia'
import { markRaw, ref, type Component } from 'vue'

export const useModalStore = defineStore('modal', () => {
  const isOpen = ref<boolean>(false)

  const contents = ref<Component>()

  const openModal = (content: string) => {
    isOpen.value = true

    switch (content) {
      case 'dark':
        contents.value = markRaw(AppDark)
        break
    }
  }
  const closeModal = () => {
    isOpen.value = false
  }

  return { isOpen, contents, openModal, closeModal }
})
