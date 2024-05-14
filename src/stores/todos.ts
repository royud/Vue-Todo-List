import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { QueryValue, TodoType } from '@/type'
import { deleteTodo, getTodo, getTodos, updateTodoStatus } from '@/api/todos'
import { useRouter } from 'vue-router'
import { useToastStore } from './toast'

export const useTodosStore = defineStore('todos', () => {
  const router = useRouter()

  const todos = ref<TodoType[]>([])

  const { addToast } = useToastStore()

  // -----------------------------------------------------------
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
    await updateTodoStatus(id, !status)

    option.reload === 'todos' && fetchTodos()
    option.reload === 'todo' && fetchTodo(id)
  }
  const removeTodo = (
    id: QueryValue | string,
    option: {
      reload?: string
      redirect?: boolean
    }
  ) => {
    const success = () => {
      addToast('삭제가 완료되었습니다.', 'success')

      option.reload === 'todos' && fetchTodos()
      option.reload === 'todo' && fetchTodo(id)

      option.redirect && router.go(-1)
    }

    deleteTodo(id, success, () => addToast('삭제 중 문제가 발생하였습니다.', 'fail'))
  }

  return { todos, todo, fetchTodos, fetchTodo, toggleTodo, removeTodo }
})
