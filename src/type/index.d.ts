import type { LocationQueryValue } from 'vue-router'

export type TodoType = {
  id: string
  title: string
  content: string
  status: boolean
}

export type FormDataType = {
  title: string
  content: string
}

export type QueryValue = LocationQueryValue | LocationQueryValue[]
