<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import { useTodosStore } from '@/stores/todos'
import type { QueryValue } from '@/type'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const id: QueryValue = route.query.t

const store = useTodosStore()
const { todo } = storeToRefs(store)
const { fetchTodo, toggleTodo, removeTodo } = store

fetchTodo(id)
</script>

<template>
  <article>
    <AppButton @click="router.go(-1)">이전</AppButton>
    <h1>{{ todo.title }}</h1>
    <AppButton
      :btn-style="todo.status ? 'success' : 'proceeding'"
      type="button"
      @click="toggleTodo(id, todo.status, { reload: 'todo' })"
      >{{ todo.status ? '완료' : '진행 중' }}</AppButton
    >
    <p>{{ todo.content }}</p>
    <hr />
    <div class="btn-wrap">
      <AppButton btn-style="primary" @click="router.push({ name: 'update', query: { t: id } })"
        >수정</AppButton
      >
      <AppButton btn-style="danger" @click="removeTodo(id, { redirect: true })">삭제</AppButton>
    </div>
  </article>
</template>

<style scoped>
h1 {
  margin: 20px 0;
}
p {
  white-space: pre-wrap;
  min-height: 300px;
  margin: 20px 0;
}
hr {
  margin: 20px 0;
}
.btn-wrap {
  display: flex;
  gap: 20px;
  justify-content: right;
}
</style>
