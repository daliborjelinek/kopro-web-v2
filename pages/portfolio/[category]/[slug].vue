<template>
  <div class="flex justify-center bg-white portfolio-detail">
    <div class="content-wrapper">
      <h2 class="text-4xl mt-3 text-black">
        {{ project.title }}
      </h2>
      <p class="text-primary ">
        {{ project.subtitle }}
      </p>
      <p><span class="font-bold">Datum:</span> {{ project.date }}</p>
      <p><span class="font-bold">Klinet:</span> {{ project.client }}</p>
      <p><span class="font-bold">Autor:</span> {{ project.author }}</p>
      <div class="grid grid-cols-3 gap-3">
        <div class="col-span-3 md:col-span-2">
          <img class=" w-full" :src="project.coverImage">
        </div>
        <div class="col-span-3 md:col-span-1">
          <h3 class="text-xl">
            O projektu
          </h3>
          <p class="text-justify text-sm" v-html="project.description" />
        </div>
      </div>
      <vue-easy-lightbox
        :visible="visible"
        :imgs="imgsRef"
        :index="index"
        move-disabled
        @hide="onHide"
      >
        <template #toolbar="{ toolbarMethods }" />
      </vue-easy-lightbox>

      <masonry-wall
        v-if="project"
        class="my-1"
        :items="project.images"
        :ssr-columns="1"
        :column-width="300"
        :gap="5"
      >
        <template #default="{ item, index }">
          <img style="width: 100%" :src="item" @click="open(index)">
        </template>
      </masonry-wall>
    </div>
  </div>
</template>

<script setup>

import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import slugify from 'slugify'
import { portfolio } from '../../../assets/data/portfolio'
const route = useRoute()
// const images = [...Array(10).keys()].map(index => `https://picsum.photos/${index % 2 === 0 ? 200 : 300}/200?random=${index}`)

const project = ref(null)
watch(route, (to) => {
  project.value = portfolio.find(item => slugify(item.title) === to.params.slug)
  console.log(project, route.params.slug)
}, { immediate: true })

const imgsRef = ref(project.value?.images)
const onHide = () => {
  visible.value = false; console.log('hide')
}
const index = ref(0)
const visible = ref(false)

const open = (imgIndex) => {
  console.log(imgIndex)
  index.value = imgIndex
  visible.value = true
}

</script>

<style lang="scss">
.portfolio-detail {
  min-height: calc(100vh - 200px);
}
</style>
