<template>
  <article>
    <AppButton type="button" @click="router.go(-1)">이전</AppButton>
    <form @submit.prevent="submit">
      <div class="inputList">
        <FormInput label="제목" type="text" labelFor="title" v-model="form.title" />
        <FormTextarea label="내용" labelFor="content" v-model="form.content" />
        <div class="btnWrap">
          <AppButton btn-style="primary" type="submit">수정</AppButton>
        </div>
      </div>
    </form>
  </article>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import AppButton from '@/components/AppButton.vue'
import FormInput from '@/components/form/FormInput.vue'
import FormTextarea from '@/components/form/FormTextarea.vue'

import { updateTodo } from '@/api/todos'

import type { FormDataType, QueryValue } from '@/type'
import { useToastStore } from '@/stores/toast'
import { useTodosStore } from '@/stores/todos'
import { storeToRefs } from 'pinia'

const route = useRoute()
const router = useRouter()

const todoStore = useTodosStore()
const { todo } = storeToRefs(todoStore)
const { fetchTodo } = todoStore

const { addToast } = useToastStore()

const form = ref<FormDataType>({
  title: '',
  content: ''
})
const id: QueryValue = route.query.t

fetchTodo(id)

watchEffect(() => {
  form.value = todo.value
})

const submit = () => {
  const success = () => {
    addToast('수정이 완료되었습니다.', 'success')
    router.go(-1)
  }
  updateTodo(id, form.value, success, () => addToast('수정 중 문제가 발생하였습니다.', 'fail'))
}
</script>

<style scoped>
.inputList {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.btnWrap {
  display: flex;
  justify-content: right;
}
</style>
