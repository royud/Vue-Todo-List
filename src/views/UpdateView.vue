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
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import AppButton from '@/components/AppButton.vue'
import FormInput from '@/components/form/FormInput.vue'
import FormTextarea from '@/components/form/FormTextarea.vue'

import { updateTodo, getTodo } from '@/api/todos'

import type { FormDataType, QueryValue } from '@/type'

const route = useRoute()
const router = useRouter()

const form = ref<FormDataType>({
  title: '',
  content: ''
})
const id: QueryValue = route.query.t

const fetch = async () => {
  const data = await getTodo(id)

  form.value.title = data.title
  form.value.content = data.content
}
fetch()

const submit = () => {
  updateTodo(id, form.value)
  router.go(-1)
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
