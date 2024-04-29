<script setup lang="ts">
import TodoList from '@/components/todos/TodoList.vue'
</script>

<template>
  <article>
    <h2>현재 Todo 리스트</h2>

    <Suspense timeout="0">
      <TodoList />
      <template #fallback><span>로딩 중</span></template>
    </Suspense>
  </article>
</template>

<style scoped>
h2 {
  margin-bottom: 20px;
}
</style>
