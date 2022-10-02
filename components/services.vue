<template>
  <section id="sluzby" class="section section-2">
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
                  Přejít na portfolio {{ service.name }}<!-- <ChevronRight />-->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
              justify-center hidden lg:flex transition duration-1000"
          :style="`transform: translateY(${activeService ? activeService.marginTop+'px' : '40%'})`"
        >
          <div :style="activeService ? `width: ${activeService.imageSize}px` : ''" :class="['service-preview', {active: activeService}]">
            <div class="service-preview-image" :style="bgImage" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
//import ChevronRight from 'vue-material-design-icons/ChevronRight'
const activeService = ref(null)
const lastActiveImage = ref(null)
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

const services = [
  {
    name: 'video',
    title: 'Video',
    description: 'Baví nás nejen <br>samotná tvorba projektů a zaznamenávání životních, či kulturních událostí, ale také' +
        ' poznávání nám dosud neznámých míst a spolupráce s novými, ale i stálými zákazníky. Tím nejlepším pocitem ' +
        'je pro nás však finální spokojenost obou stran - když vidíme majitele firmy, jak hrdě sleduje svou novou,' +
        ' námi vytvořenou reklamu, dojatou nevěstu ze svatebního videa, no a nebo přistihneme sebe, spokojeně sledující' +
        ' povedené záběry. Vzdálenost, náročné podmínky, a ani několikadenní natáčení nejsou překážkou.' +
        ' Jsme profesionální štáb, který za sebe rád nechá hovořit své portfolio a do budoucna se nebojí žádné výzvy!',
    image: 'https://picsum.photos/200/300?random=1',
    imageSize: '300',
    marginTop: '0',
    color: '#9747FF'
  },
  {
    name: 'photo',
    title: 'Fotografie',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class\n' +
        'aptent taciti sociosqu ad litora torquent per conubia nostra,\n' +
        'per inceptos hymenaeos. Integer vulputate sem a nibh rutrum\n' +
        'consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing\n' +
        'elit. Mauris metus.',
    image: 'https://picsum.photos/200/300?random=2',
    imageSize: '400',
    marginTop: '50',
    color: '#4764FF'
  },
  {
    name: 'design',
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class\n' +
        'aptent taciti sociosqu ad litora torquent per conubia nostra,\n' +
        'per inceptos hymenaeos. Integer vulputate sem a nibh rutrum\n' +
        'consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing\n' +
        'elit. Mauris metus.',
    image: 'https://picsum.photos/200/300?random=4',
    imageSize: '500',
    marginTop: '100',
    color: '#0B9058'
  },
  {
    name: 'stream',
    title: 'Livestreaming',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class\n' +
        'aptent taciti sociosqu ad litora torquent per conubia nostra,\n' +
        'per inceptos hymenaeos. Integer vulputate sem a nibh rutrum\n' +
        'consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing\n' +
        'elit. Mauris metus.',
    image: 'https://picsum.photos/200/300?random=6',
    imageSize: '300',
    marginTop: '150',
    color: '#E547FF'
  },
  {
    name: 'drone',
    title: 'Droning',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class\n' +
        'aptent taciti sociosqu ad litora torquent per conubia nostra,\n' +
        'per inceptos hymenaeos. Integer vulputate sem a nibh rutrum\n' +
        'consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing\n' +
        'elit. Mauris metus.',
    image: 'https://picsum.photos/200/300?random=7',
    imageSize: '300',
    marginTop: '200',
    color: '#382BCC'
  },
  {
    name: 'koutky',
    title: 'Fotokoutky',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class\n' +
        'aptent taciti sociosqu ad litora torquent per conubia nostra,\n' +
        'per inceptos hymenaeos. Integer vulputate sem a nibh rutrum\n' +
        'consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing\n' +
        'elit. Mauris metus.',
    image: 'https://picsum.photos/200/300?random=8',
    imageSize: '300',
    marginTop: '250',
    color: ''
  },
  {
    name: 'podcasty',
    title: 'Podcasty',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class\n' +
        'aptent taciti sociosqu ad litora torquent per conubia nostra,\n' +
        'per inceptos hymenaeos. Integer vulputate sem a nibh rutrum\n' +
        'consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing\n' +
        'elit. Mauris metus.',
    image: 'https://picsum.photos/200/300?random=9',
    imageSize: '300',
    marginTop: '300',
    color: 'green'
  }
]
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
  transition-duration: 1s, 1s;
  transition-delay: 0.2s, 0s, 0.2s;
  transition-property: opacity, height, font-size;
  transition-timing-function: cubic-bezier(.55,.02,.28,1.2)
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
  background-image: url(assets/c-team-top.svg);
  background-size: 150px 100px;
  background-repeat: no-repeat;
}

.service-preview::after {
  position: absolute;
  content: '';
  right: -71px;
  bottom: -48px;
  width: 150px;
  height: 100px;
  background-image: url(assets/c-team-bottom.svg);
  background-size: 150px 100px;
  background-repeat: no-repeat;
}
</style>
