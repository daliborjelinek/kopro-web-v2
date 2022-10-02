<template>
  <header>
    <div class="nav-wrapper">
      <logo-glitch />

      <div v-if="false" class="nav">
        <a
          v-smooth-scroll
          href="#sluzby"
        ><span class="nav-item">Služby</span></a>
        <span class="spacer" />
        <div class="inline-block relative">
          <a v-smooth-scroll href="#portfolio" @click.stop="showDropdown = !showDropdown">
            <span class="nav-item">Porfolio</span></a>
          <ul v-show="showDropdown" v-click-outside="() => showDropdown = false" class="dropdown-menu bg-black absolute text-white pt-1 w-40">
            <li class="">
              <a class="hover:bg-gray-800 py-2 px-4 block whitespace-no-wrap" href="#">Video</a>
            </li>
            <li class="">
              <a class="hover:bg-gray-800 py-2 px-4 block whitespace-no-wrap" href="#">Fotografie</a>
            </li>
            <li class="">
              <a class="hover:bg-gray-800 py-2 px-4 block whitespace-no-wrap" href="#">Grafický desing</a>
            </li>
            <li class="">
              <a class="hover:bg-gray-800 py-2 px-4 block whitespace-no-wrap" href="#">Livestreaming</a>
            </li>
            <li class="">
              <a class="hover:bg-gray-800 py-2 px-4 block whitespace-no-wrap" href="#">Dronning</a>
            </li>
          </ul>
        </div>

        <span class="spacer" />
        <a v-smooth-scroll href="#tym"> <span class="nav-item">O nás</span></a>
        <span class="spacer" />
        <a v-smooth-scroll href="#kontakt"> <span class="nav-item">Kontakt</span></a>
      </div>
      <hamburger-menu v-else />
    </div>
  </header>
</template>

<script setup>

import { ref } from 'vue'


const showDropdown = ref(false)
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
  transition: .3s;
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

</style>
