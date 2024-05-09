<template>
  <article>
    <AppButton type="button" @click="router.go(-1)">이전</AppButton>
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
import type { FormDataType } from '@/type'
import { useToastStore } from '@/stores/toast'

const router = useRouter()

const { addToast } = useToastStore()

const form = ref<FormDataType>({
  title: '',
  content: ''
})

const submit = () => {
  const success = () => {
    addToast('생성이 완료되었습니다.', 'success')
    router.go(-1)
  }

  postTodo(form.value, success, () => addToast('생성 중 문제가 발생하였습니다.', 'fail'))
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
