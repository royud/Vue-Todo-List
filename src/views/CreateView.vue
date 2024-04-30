<template>
  <article>
    <AppButton btn-style="primary" type="button" @click="router.go(-1)">이전으로</AppButton>
    <form @submit.prevent="submit">
      <div class="inputList">
        <FormInput label="제목" type="text" labelFor="title" v-model="form.title" />
        <FormTextarea label="내용" labelFor="content" v-model="form.content" />
        <div class="btnWrap">
          <AppButton btn-style="primary" type="submit">저장</AppButton>
        </div>
      </div>
    </form>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import AppButton from '@/components/AppButton.vue'
import FormInput from '@/components/form/FormInput.vue'
import FormTextarea from '@/components/form/FormTextarea.vue'

import { postTodo } from '@/api/todos'

const router = useRouter()

const form = ref<{
  title: string
  content: string
}>({
  title: '',
  content: ''
})

const submit = () => {
  postTodo(form.value)
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
