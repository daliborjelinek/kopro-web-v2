<template>
  <img v-for="url in images"  class="h-0 w-0 absolute" :src="url">
</template>

<script setup>
const props = defineProps({
  images: Array
})
</script>
