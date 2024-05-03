import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { QueryValue, TodoType } from '@/type'
import { deleteTodo, getTodo, getTodos, updateTodoStatus } from '@/api/todos'
import { useRouter } from 'vue-router'

export const useTodosStore = defineStore('todos', () => {
  const router = useRouter()

  const todos = ref<TodoType[]>([])

  const fetchTodos = async () => {
    try {
      const data = await getTodos()

      todos.value = data
    } catch (err) {
      console.error(err)
    }
  }
  // -----------------------------------------------------------
  const todo = ref<TodoType>({
    id: '',
    title: '',
    content: '',
    status: false
  })
  const fetchTodo = async (id: QueryValue) => {
    try {
      const data = await getTodo(id)

      todo.value = data
    } catch (err) {
      console.error(err)
    }
  }
  const toggleTodo = async (
    id: QueryValue | string,
    status: boolean,
    option: {
      reload?: string
    }
  ) => {
    try {
      await updateTodoStatus(id, !status)

      option.reload === 'todos' && fetchTodos()
      option.reload === 'todo' && fetchTodo(id)
    } catch (err) {
      console.error(err)
    }
  }
  const removeTodo = async (
    id: QueryValue | string,
    option: {
      reload?: string
      redirect?: boolean
    }
  ) => {
    try {
      await deleteTodo(id)

      option.reload === 'todos' && fetchTodos()
      option.reload === 'todo' && fetchTodo(id)

      option.redirect && router.go(-1)
    } catch (err) {
      console.error(err)
    }
  }

  return { todos, todo, fetchTodos, fetchTodo, toggleTodo, removeTodo }
})
