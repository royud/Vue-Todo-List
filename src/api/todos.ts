import axios from 'axios'

export type Todo = {
  id: string | number
  title: string
  content: string
  status: boolean
}

export const getTodos = async () => {
  const { data } = await axios.get('http://localhost:3000/todos')

  return data
}
