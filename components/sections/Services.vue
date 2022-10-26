<template>
  <section id="sluzby" class="flex justify-center">
    <div class="content-wrapper">
      <h2 class="headline">
        Služby
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class=" flex-col services">
          <div v-for="service of services" :key="service.name" :class="['service', activeService?.name === service.name ? 'active' : '']">
            <h3
              class="cursor-pointer text-ellipsis overflow-hidden whitespace-nowrap"
              @click="setActive(service)"
            >
              {{ service.title }}
            </h3>
            <div :style="getHeight(service.name)" class="service-description">
              <div :ref="el => descriptionRefs[service.name] = el">
                <p v-html="service.description" />
                <div class="rounded-full text-white px-4 py-1 my-2 inline-block font-bold" :style="{'background-color': service.color }">
                  Přejít na portfolio {{ service.name }}
                  <IcoMdi:chevronRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
              justify-center hidden lg:flex transition duration-1000"
          :style="`transform: translateY(${activeService ? activeService.marginTop+'px' : '250px'})`"
        >
          <div :style="activeService ? `width: ${activeService.imageSize}px` : ''" :class="['service-preview', {active: activeService, switchC: activeService?.up}]">
            <div class="service-preview-image" :style="bgImage" />
          </div>
        </div>
      </div>
    </div>
    <image-loader :images="services.map((service)=> service.image)" />
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { services } from '../../assets/data/services'
const activeService = ref(null)
const lastActiveImage = ref(services[0].image)
const descriptionRefs = ref({})

const setActive = (service) => {
  if (activeService.value?.name === service.name) {
    activeService.value = null
  } else {
    activeService.value = service
    lastActiveImage.value = activeService.value?.image
  }
}

const getHeight = (name) => {
  return activeService.value?.name === name ? `height: ${descriptionRefs?.value[name]?.clientHeight}px` : 'height: 0'
}

const bgImage = computed(() => {
  if (activeService.value) {
    return {
      'background-image': `url(${lastActiveImage.value})`
    }
  } else { return { 'background-image': `url(${lastActiveImage.value})` } }
})

</script>

<style lang="scss">
.section-2 {
  background-color: black;
  padding-top: 50px;
}

.services {
  padding-top: 20px;
  display: flex;
}

.services h3 {
  font-size: 40px;
  color: white;
  font-family: 'Zacbel X';
  line-height: 69px;
  transition: 1s ;
}

.service-description {
  opacity: 0;
  height: 0;
  font-style: normal;
  font-weight: 100;
  margin-left: 50px;
  font-size: 15px;
  transition: 1s;
  color: #ffffff;
  overflow: hidden;
  transition-duration: .5s, .5s;
  transition-delay: 0.2s, 0s, 0.2s;
  transition-property: opacity, height, font-size;
  transition-timing-function: cubic-bezier(.55,.02,.28,1.2)
}

.service-preview::before, .service-preview::after {
  transition: .5s;
}

.service.active .service-description {
  opacity: 1;
}

.service-left {
  position: relative;
}

.services-right {
  justify-content: center;
  align-items: center;

  display: flex;
}

.service {
  height: auto;
  transition: 1s;
}

.service.active {
  h3 {
    font-size: 80px;
    line-height: 120px;
  }
}

.service-preview {
  position: relative;
  transition: 1s;
  width: 50px;
  height: 55px;
}

.service-preview.active {
  height: 250px;
  width: 200px;
}

.service-preview-image {
  height: 100%;
  width: 100%;
  transition: 1s;
  opacity: 0;
  background-size: cover;
  background-position: center;
}

.service-preview.active .service-preview-image {
  height: 100%;
  width: 100%;
  opacity: 1;
}

.service-preview::before {
  position: absolute;
  content: '';
  left: -71px;
  top: -48px;
  width: 120px;
  height: 100px;
  background-image: url(../../assets/c-team-top.svg);
  background-size: 150px 100px;
  background-repeat: no-repeat;
}

.service-preview::after {
  position: absolute;
  content: '';
  right: -71px;
  top: calc(100% - 51px);
  width: 150px;
  height: 100px;
  background-image: url(../../assets/c-team-bottom.svg);
  background-size: 150px 100px;
  background-repeat: no-repeat;
}

.service-preview.switchC::before {
  top: calc(100% - 38px);
  left: -58px;
  transform: rotate(-91deg);
}

.service-preview.switchC::after {
  right: -71px;
  top: -44px;
  transform: rotate(-91deg);
}
</style>
