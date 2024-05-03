import { api } from '@/api/instasce'
import type { FormDataType, QueryValue } from '@/type'

export const getTodos = async () => {
  try {
    const { data } = await api.get('/todos')

    return data
  } catch (err) {
    console.error(err)
  }
}

export const getTodo = async (id: QueryValue | string) => {
  try {
    const { data } = await api.get(`/todos/${id}`)

    return data
  } catch (err) {
    console.error(err)
  }
}

export const postTodo = async (data: FormDataType) => {
  try {
    const corData = { ...data, status: false }
    await api.post('/todos', corData)
  } catch (err) {
    console.error(err)
  }
}
export const updateTodo = async (id: QueryValue | string, data: FormDataType) => {
  try {
    await api.patch(`/todos/${id}`, data)
  } catch (err) {
    console.error(err)
  }
}

export const updateTodoStatus = async (id: QueryValue | string, status: boolean) => {
  try {
    await api.patch(`/todos/${id}`, { status })
  } catch (err) {
    console.error(err)
  }
}

export const deleteTodo = async (id: QueryValue | string) => {
  try {
    await api.delete(`/todos/${id}`)
  } catch (err) {
    console.error(err)
  }
}
