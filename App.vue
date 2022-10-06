<template>
  <div>
    <TopNavigation v-if="route.path!== '/' " />
    <router-view v-slot="{ Component }">
      <transition mode="out-in" name="slide-fade" @after-enter="scroll()">
        <component :is="Component" />
      </transition>
    </router-view>

    <footer-view v-if="route.path!== '/' " />
  </div>
</template>

<script setup>
import { scrollToFc } from './utils/smoothScroll'
const route = useRoute()
const scroll = () => {
  scrollToFc(route.hash)
}
</script>
