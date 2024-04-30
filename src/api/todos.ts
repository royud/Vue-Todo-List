import axios from 'axios'

export type Todo = {
  id: string | number
  title: string
  content: string
  status: boolean
}

export const getTodos = async () => {
  try {
    const { data } = await axios.get('http://localhost:3000/todos')

    return data
  } catch (err) {
    console.error(err)
  }
}

export const postTodo = async (data: { title: string; content: string }) => {
  try {
    const corData = { ...data, status: false }
    axios.post('http://localhost:3000/todos', corData)
  } catch (err) {
    console.error(err)
  }
}
