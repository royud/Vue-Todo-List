import { api } from '@/api/instance'
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

export const postTodo = async (data: FormDataType, success?: () => void, fail?: () => void) => {
  try {
    const corData = { ...data, status: false }
    await api.post('/todos', corData)

    success && success()
  } catch (err) {
    console.error(err)
    fail && fail()
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

export const deleteTodo = async (
  id: QueryValue | string,
  success?: () => void,
  fail?: () => void
) => {
  try {
    await api.delete(`/todos/${id}`)

    success && success()
  } catch (err) {
    console.error(err)

    fail && fail()
  }
}
