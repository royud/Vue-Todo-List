<script setup lang="ts">
import { ref } from 'vue'
import { type Todo, getTodos } from '@/api/todos'

const todoData = ref<Todo[]>()
todoData.value = await getTodos()
</script>

<template>
  <ul>
    <li v-for="todo in todoData" :key="todo.id">
      <div class="contents">
        <h3 class="content">{{ todo.title }}</h3>
        <div class="content">{{ todo.content }}</div>
      </div>
      <div class="btn-wrap">
        <button :class="todo.status ? 'success' : 'proceeding'">
          {{ todo.status ? '완료' : '진행 중' }}
        </button>
        <button>수정</button>
        <button class="delete">삭제</button>
      </div>
    </li>
  </ul>
</template>

<style scoped>
ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}
li {
  width: 300px;
  filter: drop-shadow(5px 5px 5px #1919193e);
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
  height: 50px;
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
