<template>
  <header>
    <div class="nav-wrapper">
      <logo-glitch />

      <div class="items-center hidden lg:flex">
        <div v-for="(item, index) in menu" class="inline-block relative">
          <NuxtLink
            v-if="item.link !== ''"
            :to="item.link"
          >
            <span class="nav-item">{{ item.title }}</span>
          </NuxtLink>
          <span v-else class="nav-item cursor-pointer" @click.stop="item.submenu.isOpen = !item.submenu.isOpen">
            {{ item.title }}
          </span>
          <ul v-if="item.submenu" v-show="item.submenu.isOpen" v-click-outside="() => item.submenu.isOpen = false" class="dropdown-menu bg-black absolute text-white pt-1 w-40">
            <li v-for="subitem in item.submenu.items" @click="item.submenu.isOpen = false">
              <NuxtLink class="hover:bg-gray-800 py-2 px-4 block whitespace-no-wrap" :to="subitem.link">
                {{ subitem.title }}
              </NuxtLink>
            </li>
          </ul>
          <span v-if="index !== menu.length-1" class="spacer" />
        </div>
      </div>
      <hamburger-menu :items="menu" class="lg:hidden" />
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menu = ref([
  {
    name: 'Services.vue',
    title: 'Služby',
    link: '/web#sluzby'
  },
  {
    name: 'portfolio',
    title: 'Portfolio',
    link: '',
    submenu: {
      items: [{
        name: 'video',
        title: 'Video',
        link: '/portfolio/video'
      },
      {
        name: 'photo',
        title: 'Fotografie',
        link: '/portfolio/Photo'
      }],
      isOpen: false
    }
  },
  {
    name: 'about',
    title: 'O nás',
    link: '/web#tym'
  },
  {
    name: 'contact',
    title: 'Kontakt',
    link: '/web#kontakt'
  }
])

</script>

<style lang="scss">
header {
  height: 100px;
  background-color: black;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 10000;
}

.nav-item {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #FFFFFF;
  transition: 0.3s;
}

.nav-item:hover {
  color: #9747FF;
  /* background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%); */

}

.nav {
  align-items: center;
  display: flex;
  margin: 27px 0;
}

.nav a {
  text-decoration: none !important;
  transition: 1s;
}
.nav a:hover {
  //transform: skew(-10deg);
}

.nav-wrapper {
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.spacer {
  display: inline-block;
  height: 18px;
  width: 2px;
  background-color: #FFFFFF;
  margin: 0 30px;
}

</style>
