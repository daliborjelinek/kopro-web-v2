<template>
  <div class="w-full bg-white">
    <Carousel :items-to-show="2" wrap-around>
      <template #addons>
        <Pagination />
        <Navigation />
      </template>
      <Slide v-for="member in members" :key="member.tag">
        <div class="carousel__item">
          <div class="flex flex-col w-60 member-wrapper">
            <div class="relative h-[248px]">
              <img :src="`/faces/${member.tag}.png`" class="absolute top-0">
              <img :src="`/faces/${member.tag}_wild.png`" class=" transition duration-300 absolute top-0 opacity-0 hover:opacity-100">
            </div>
            <div>
              <div class="h-52 bg-primary p-2 member-description-wrapper member-open">
                <p class="text-white font-bold text-lg">
                  {{ member.name }}
                </p>
                <p class="text-white text-sm font-light leading-3">
                  {{ member.role }}
                </p>

                <p class="text-white mt-3 text-sm font-light leading-4">
                  {{ member.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script setup>

import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const props = defineProps({
  members: Array
})

</script>

<style lang="scss">
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide .member-wrapper {
  opacity: 1;
  transform:  scale(1);
}

.carousel__slide--active ~ .carousel__slide .member-wrapper {
 //transform: scale(0.8);
}

.carousel__slide--prev .member-wrapper {
  opacity: 0.3;
  transform: scale(0.6);
  z-index: 0;
  pointer-events: none;
}

.carousel__slide--next .member-wrapper {
  opacity: 0.3;
  transform: scale(0.8);
  z-index: 0;
  pointer-events: none;
}

.carousel__slide--active {
  z-index: 10;
  opacity: 1;
  transform: scale(1);
}

.carousel__prev, .carousel__next {
  top:25%
}
</style>
