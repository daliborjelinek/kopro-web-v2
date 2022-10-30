<template>
  <h2 class="headline text-4xl mb-3">
    Napište nám
  </h2>
  <div class="md:w-1/2">
    <form>
      <label for="mail" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Váš email</label>
      <div class="relative mb-6">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <IcoMdi:at class="text-gray-400" />
        </div>
        <input
          id="mail"
          v-model="data.email"
          required
          type="email"
          :class="{'border-red-800  focus:border-red-600': formDirty && !validator.email}"
          class="border border-gray-600 text-sm focus:border-primary outline-0 block w-full pl-10 p-2.5 text-white bg-gray-700 "
          placeholder="abychom věděli kam odpovědět..."
        >
      </div>
      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Váše jméno</label>
      <div class="relative mb-6">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <IcoMdi:account class="text-gray-400" />
        </div>
        <input
          id="name"
          v-model="data.name"
          required
          type="text"
          :class="{'border-red-800  focus:border-red-600': formDirty && !validator.name}"
          class="border border-gray-600 text-sm focus:border-primary outline-0 block w-full pl-10 p-2.5 text-white bg-gray-700 "
          placeholder="abychom věděli jak vás oslovit..."
        >
      </div>
      <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Text zprávy</label>
      <div class="relative mb-6">
        <div class="absolute pt-2 inset-y-0 left-0  pl-3 pointer-events-none">
          <IcoMdi:text class="text-gray-400" />
        </div>
        <textarea
          id="text"
          v-model="data.text"
          type="text"
          :class="{'border-red-800  focus:border-red-600': formDirty && !validator.text}"
          class="border border-gray-600 text-sm focus:border-primary outline-0 block w-full pl-10 p-2.5 text-white bg-gray-700 min-h-[100px]"
          placeholder="text zprávy"
        />
      </div>
      <button class=" float-right bg-secondary text-black font-bold px-5 py-2 transition duration-300 hover:brightness-50" @click.prevent="submit">
        Odeslat
      </button>
    </form>
  </div>
  <vue-final-modal
    v-slot="{ params, close }"
    v-model="showModal"
    classes="flex justify-center items-center"
    content-class="relative flex flex-col max-h-full mx-4 p-4 border border-gray-800 bg-white bg-black"
  >
    <span class="text-2xl text-white font-bold">
      <slot name="title">Zpráva odeslána</slot>
    </span>
    <div class="flex-shrink-0 flex justify-center items-center pt-4">
      <button class=" bg-secondary text-black font-bold px-5 py-3 transition duration-300 hover:brightness-50" @click="showModal = false">
        Zavřít
      </button>
    </div>
  </vue-final-modal>
</template>

<script setup>
import * as emailjs from '@emailjs/browser'
import { computed, reactive } from 'vue'

const data = reactive({ name: '', email: '', text: '' })
const formDirty = ref(false)

const showModal = ref(false)

const validator = computed(() => {
  const output = { name: false, email: false, text: false, valid: false }
  if (data.name.length) { output.name = true }
  if (data.text.length) { output.text = true }
  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) { output.email = true }
  if (output.name && output.email && output.text) { output.valid = true }
  return output
}
)

function submit () {
  if (validator.value.valid) {
    emailjs.send('service_81lph6q', 'template_k9lgl9e', { email: data.email, name: data.name, message: data.text }, '9h--18d7i6IxsYNHo')
      .then((result) => {
        console.log('SUCCESS!', result.text)
      }, (error) => {
        console.log('FAILED...', error.text)
      })
    data.email = ''
    data.name = ''
    data.text = ''
    showModal.value = true
    formDirty.value = false
  } else {
    formDirty.value = true
  }
}
</script>

<style scoped>

</style>
