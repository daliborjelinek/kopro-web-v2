<template>
  <div class="photo-portfolio text-white flex justify-center">
    <div class="content-wrapper">
      <h2 class="text-4xl">
        {{ route.params.category }}
      </h2>
      <div class="my-2">
        <div class="bg-white text-black px-3 mx-1 rounded-full inline-block">
          Svatební video
        </div>
        <div class="bg-white text-black px-3 mx-1 rounded-full inline-block">
          Reklama
        </div>
        <div class="bg-white text-black px-3 mx-1 rounded-full inline-block">
          Dokument
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
        <div v-for="item in items" class="group relative w-full h-full overflow-hidden ">
          <router-link :to="item.type+'/'+slugify(item.title)">
            <img class="w-full h-full top-0 transition duration-1000 group-hover:scale-105" :src="item.coverImage">
            <div class="w-full h-full top-0 transition duration-300 opacity-30 hover:opacity-100  hover:bg-[#0000004f] absolute">
              <div class="p-3 absolute -bottom-0">
                <h3 class="text-2xl">
                  {{ item.title }}
                </h3>
                <p>{{ item.subtitle }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import slugify from 'slugify'
import { portfolio } from '../../../assets/data/portfolio'

const route = useRoute()

console.log(route)

const items = ref(portfolio.filter(item => slugify(item.type) === route.params.category))
watch(route, (to) => {
  items.value = portfolio.filter(item => slugify(item.type) === to.params.category)
  console.log(route.params.category)
}, { immediate: true })

</script>

<style lang="scss">
.photo-portfolio {
  min-height: calc(100vh - 100px);
  background: linear-gradient(180deg, #000000 -33.58%, #000000 0.2%, rgba(255, 255, 255, 1) 100%);
}
</style>
