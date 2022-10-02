<template>
  <button class="text-white w-10 h-10 relative focus:outline-none" @click="open = !open">
    <div class="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
      <span aria-hidden="true" class="block absolute rounded h-1 w-7 bg-current transform transition duration-500 ease-in-out" :class="{'rotate-45': open,' -translate-y-2': !open }" />
      <span aria-hidden="true" class="block absolute rounded  h-1 w-7 bg-current   transform transition duration-500 ease-in-out" :class="{'opacity-0': open } " />
      <span aria-hidden="true" class="block absolute rounded  h-1 w-7 bg-current transform  transition duration-500 ease-in-out" :class="{'-rotate-45': open, ' translate-y-2': !open}" />
    </div>
  </button>
  <div class="hamburger-menu bg-purple-700 text-white text-2xl right-0 w-full fixed top-[100px]" :class="[{'hamburger-menu--active':open}]">
    <ul class="ml-5">
      <li class="dropdown_item-1">
        Item 1
      </li>
      <li class="dropdown_item-2">
        Item 2
      </li>
      <li class="dropdown_item-3 overflow-hidden">
        <span @click="openPortfolio = !openPortfolio">Item 3<!--<ChevronDown class="chev transition duration-500 ease-in-out" :class="[{'skew-x-40':openPortfolio}]" />--></span>
        <ul class="hamburger-menu ml-5" :class="[{'hamburger-menu--active':openPortfolio}]">
          <li>Fotky</li>
          <li>Videa</li>
          <li>Kokotiny</li>
        </ul>
      </li>
      <li class="dropdown_item-4">
        Item 4
      </li>
      <li class="dropdown_item-5">
        Item 5
      </li>
    </ul>
  </div>
</template>

<script setup>
//import ChevronDown from 'vue-material-design-icons/ChevronDown'
const open = ref(false)
const openPortfolio = ref(false)

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

.chev {
  transform-origin: 0 66%;
}
.hamburger-menu--active {
  //transform: scaleY(1);
  max-height: 500px;
  opacity: 1;
}
</style>
