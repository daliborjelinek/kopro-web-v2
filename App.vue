<template>
  <div>
    <TopNavigation v-if="route.path!== '/' " />
    <router-view v-slot="{ Component }">
      <div class="pt-[100px]">
        <transition mode="out-in" name="slide-fade" @after-enter="scroll()">
          <component :is="Component" />
        </transition>
      </div>
    </router-view>

    <footer-view v-if="route.path!== '/' " />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { scrollToFc } from './utils/smoothScroll'
const route = useRoute()
const scroll = () => {
  scrollToFc(route.hash)
}
</script>
