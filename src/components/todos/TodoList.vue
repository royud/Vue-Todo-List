<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useTodosStore } from '@/stores/todos'
import { storeToRefs } from 'pinia'

const router = useRouter()

const store = useTodosStore()
const { todos } = storeToRefs(store)
const { fetchTodos, toggleTodo, removeTodo } = store

await fetchTodos()
</script>

<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <div class="contents" @click="router.push({ name: 'read', query: { t: todo.id } })">
        <h3 class="content">{{ todo.title }}</h3>
        <div class="content">{{ todo.content }}</div>
      </div>
      <div class="btn-wrap">
        <button
          :class="todo.status ? 'success' : 'proceeding'"
          @click.stop="toggleTodo(todo.id, todo.status, { reload: 'todos' })"
        >
          {{ todo.status ? '완료' : '진행 중' }}
        </button>
        <button @click.stop="router.push({ name: 'update', query: { t: todo.id } })">수정</button>
        <button class="delete" @click.stop="removeTodo(todo.id, { reload: 'todos' })">삭제</button>
      </div>
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  justify-items: stretch;
}
li {
  filter: drop-shadow(5px 5px 5px #1919193e);
  transition: transform 0.3s;
}
li:hover {
  transform: scale(110%);
}
.contents {
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #985ce7;
  padding: 5px;
  height: 70px;
}
.content {
  overflow: hidden;
  text-overflow: ellipsis;
}
.btn-wrap {
  display: flex;
  gap: 5px;
}
button {
  flex: 1 1;
  height: 25px;
  background-color: #985ce7;
  border: 1px solid #985ce7;
  border-radius: 0 0 5px 5px;
  cursor: pointer;
  color: #ffffff;
}
button.success {
  background-color: #7ee075;
  border: 1px solid #7ee075;
}
button.proceeding {
  background-color: #d7e075;
  border: 1px solid #d7e075;
}
button.delete {
  background-color: #e07575;
  border: 1px solid #e07575;
}
</style>
@/stores/todos
