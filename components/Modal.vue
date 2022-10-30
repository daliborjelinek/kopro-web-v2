<script setup>
const props = defineProps({
  show: Boolean
})
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask flex justify-center items-center" @keydown.esc="$emit('close')" @click="$emit('close')">
      <div class=" modal-container relative flex flex-col max-h-full mx-4 p-4 border border-gray-800 bg-black" @click.stop>
        <div class="text-4xl text-center">
          <IcoMdi:email-fast-outline class="text-gray-400" />
        </div>
        <span class="text-xl text-white font-bold">
          <slot name="title">Zpráva odeslána</slot>
        </span>
        <button class="mt-3 float-right bg-secondary text-black font-bold px-5 py-2 transition duration-300 hover:brightness-50" @click="$emit('close')" @click.prevent="submit">
          Zavřít
        </button>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.modal-container {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
