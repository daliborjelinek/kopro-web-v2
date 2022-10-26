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
              <img :src="`/faces/${member.tag}_wild.png`" class="wild-image transition duration-300 absolute top-0 opacity-0">
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
  z-index: -1;
}

.carousel__slide.carousel__slide--prev .member-wrapper {

  transform: rotateY(-54deg) scale(0.6);;
}

.carousel__slide.carousel__slide--next .member-wrapper {
  transform: rotateY(54deg) scale(0.6);;
}
.carousel__track {
  transform-style: preserve-3d;
}

.member-wrapper {
  transition: 0.3s;
}

.carousel__slide--active {
  z-index: 10;
}

.carousel__slide .member-wrapper {
  opacity: 1;
  transform:  scale(1);
}

.carousel__slide .member-wrapper {
  opacity: 0.3;
  transform: scale(0.6);

  pointer-events: none;
}

.carousel__slide--active .member-wrapper {
  opacity: 1;
  transform: scale(1);
}

.carousel__slide .wild-image {
  transition: 1s;
  transition-delay: 1s;
}

.carousel__slide--active .wild-image {
  opacity: 1;
}

.carousel__prev, .carousel__next {
  height: 100%;
}
</style>
