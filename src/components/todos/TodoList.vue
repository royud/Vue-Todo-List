<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useTodosStore } from '@/stores/todos'
import { storeToRefs } from 'pinia'
import AppModal from '../AppModal.vue'

const router = useRouter()

const store = useTodosStore()
const { todos } = storeToRefs(store)
const { fetchTodos, toggleTodo, removeTodo } = store

await fetchTodos()
const remove = (id: string) => {
  removeTodo(id, { reload: 'todos' })
}
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
        <button class="delete" @click.stop="remove(todo.id)">삭제</button>
      </div>
    </li>
  </ul>
  <AppModal> </AppModal>
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
  background-color: var(--color-back-ground);
  border: 1px solid var(--color-main);
  border-bottom: none;
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
  background-color: var(--color-main);
  border: 1px solid var(--color-main);
  border-radius: 0 0 5px 5px;
  cursor: pointer;
  color: var(--color-text-white);
}
button.success {
  background-color: var(--color-success);
  border: 1px solid var(--color-success);
}
button.proceeding {
  background-color: var(--color-proceeding);
  border: 1px solid var(--color-proceeding);
}
button.delete {
  background-color: var(--color-danger);
  border: 1px solid var(--color-danger);
}
</style>
