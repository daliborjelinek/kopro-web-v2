<template>
  <section style="height: 100vh" class=" section section-1 fixed top-0">
    <div class="mt-56">
      <picture
        :class="{ 'landing-logo': true, animate: animation }"
        @mouseenter="runAnimation"
      >
        <img src="~/assets/logo.svg">
      </picture>
      <p class="text-gray-400 text-4xl mt-20 text-center">
        coming soon
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const delay = '2000'

const animation = ref(false)
function runAnimation () {
  if (animation.value === true) { return }
  animation.value = true
  setTimeout(() => (animation.value = false), delay)
}
</script>

<style lang="scss">
@keyframes noise-anim {
  $steps: 7;
  @for $i from 0 through $steps {
    #{percentage(calc($i*(1/($steps + 1))))} {
      clip: rect(random(200) + px, 9999px, random(250) + px, 0);
    }
  }
  100% {
    clip: rect(250px, 9999px, 250px, 0);
  }
}

@keyframes noise-anim-2 {
  $steps: 5;
  @for $i from 0 through $steps {
    #{percentage(calc($i*(1/($steps + 1))))} {
      clip: rect(random(200) + px, 9999px, random(250) + px, 0);
    }
  }
  100% {
    clip: rect(250px, 9999px, 250px, 0);
  }
}

.landing-logo.animate::before {
  content: url('assets/logo.svg');
  //filter: drop-shadow( 3px 3px 0px #fd5901b1);
  background-color: rgba(151, 71, 255, 0.69);
  position: absolute;
  animation: noise-anim linear;
  animation-duration: 2000ms;
  animation-fill-mode: forwards;
  left: 50px;
  top: 50px;
}

.landing-logo.animate::after {
  content: url('assets/logo.svg');
  //filter: drop-shadow( -3px -3px 0px #249ea0af);
  position: absolute;
  background-color: rgba(36, 158, 160, 0.69);
  left: -50px;
  top: -50px;
  animation: noise-anim-2 2000ms linear;
  animation-fill-mode: forwards;
}

.section-1 {
  background-image: url('assets/bg-sec1.png');
  background-size: cover;
  height: 100vh;
}
</style>
