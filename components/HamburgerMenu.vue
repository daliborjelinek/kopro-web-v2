<template>
  <div>
    <button class="text-white w-10 h-10 relative focus:outline-none" @click="open = !open">
      <div class="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
        <span aria-hidden="true" class="block absolute rounded h-1 w-7 bg-current transform transition duration-500 ease-in-out" :class="{'rotate-45': open,' -translate-y-2': !open }" />
        <span aria-hidden="true" class="block absolute rounded  h-1 w-7 bg-current   transform transition duration-500 ease-in-out" :class="{'opacity-0': open } " />
        <span aria-hidden="true" class="block absolute rounded  h-1 w-7 bg-current transform  transition duration-500 ease-in-out" :class="{'-rotate-45': open, ' translate-y-2': !open}" />
      </div>
    </button>
    <div class="hamburger-menu flex justify-center bg-purple-700 text-white text-2xl right-0 w-full fixed top-[100px]" :class="[{'hamburger-menu--active':open}]">
      <ul class="w-4/5">
        <li v-for="item in items" class="dropdown_item-3 overflow-hidden my-3">
          <NuxtLink
            v-if="item.link !== ''"
            :to="item.link"
            @click="open = false"
          >
            <span v-if="!item.submenu">
              {{ item.title }}
            </span>
          </NuxtLink>
          <span v-else class="cursor-pointer" @click="openPortfolio = !openPortfolio ">
            {{ item.title }}
            <IcoMdi:chevronDown v-if="item.submenu" class="transition duration-500 ease-in-out" :class="[{'skew-x-40':openPortfolio}]" />
          </span>
          <ul v-if="item.submenu" class="hamburger-menu ml-5" :class="[{'hamburger-submenu--active':openPortfolio}]">
            <li v-for="subitem in item.submenu.items" class="my-1">
              <NuxtLink @click="open = false" :to="subitem.link">
                {{ subitem.title }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const open = ref(false)
const openPortfolio = ref(false)
const props = defineProps({
  items: Array
})

</script>

<style lang="scss">
.hamburger-menu{
  opacity: 0;
 // transform: scaleY(0);
 // transform-origin: top;
  max-height: 0;
  transition: 0.5s;
  overflow: hidden;
}

.skew-x-40 {
  transform: rotateX(180deg);

}

.hamburger-menu--active {
  //transform: scaleY(1);
  max-height: 300px;
  opacity: 1;
}

.hamburger-submenu--active {
  //transform: scaleY(1);
  max-height: 100px;
  opacity: 1;
}
</style>
