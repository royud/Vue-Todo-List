import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useDarkStore = defineStore('dark', () => {
  const theme = ref<string>('light')

  const localTheme = localStorage.getItem('theme')

  if (localTheme) {
    theme.value = localTheme
  }

  watch(
    theme,
    (newValue: string) => {
      localStorage.setItem('theme', newValue)

      if (newValue === 'device') {
        const isDark: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches

        const settingDark = isDark ? 'dark' : 'light'

        document.documentElement.setAttribute('data-theme', settingDark)
      } else {
        document.documentElement.setAttribute('data-theme', newValue)
      }
    },
    { immediate: true }
  )

  const toggleTheme = () => {
    theme.value === 'light' ? (theme.value = 'dark') : (theme.value = 'light')
  }

  return { theme, localTheme, toggleTheme }
})
