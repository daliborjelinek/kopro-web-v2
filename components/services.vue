<template>
  <section id="sluzby" class="section section-2">
    <div class="content-wrapper">
      <h2 class="headline">Služby</h2>
      <div>
        <div class="services">
          <div class="services-left">
            <div
              :class="['service', activeService === 'video' ? 'active' : '']"
            >
              <h3
                @click="
                  activeService = activeService === 'video' ? false : 'video'
                "
              >
                Video
              </h3>
              <p class="service-description">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos hymenaeos. Integer vulputate sem a nibh rutrum
                consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit. Mauris metus.
              </p>

              <p class="service-description">
                Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at
                dui. Mauris dictum facilisis augue. Integer tempor. In dapibus
                augue non sapien. Integer vulputate sem a nibh rutrum consequat.
                Sed convallis magna eu sem. Integer tempor. Fusce consectetuer
                risus a nunc. Duis risus. Nunc dapibus tortor vel mi dapibus
                sollicitudin
              </p>
            </div>
            <div :class="['service', activeService === 'foto' ? 'active' : '']">
              <h3
                @click="
                  activeService = activeService === 'foto' ? false : 'foto'
                "
              >
                Fotografie
              </h3>
              <p class="service-description">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos hymenaeos. Integer vulputate sem a nibh rutrum
                consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit. Mauris metus.
              </p>

              <p class="service-description">
                Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at
                dui. Mauris dictum facilisis augue. Integer tempor. In dapibus
                augue non sapien. Integer vulputate sem a nibh rutrum consequat.
                Sed convallis magna eu sem. Integer tempor. Fusce consectetuer
                risus a nunc. Duis risus. Nunc dapibus tortor vel mi dapibus
                sollicitudin
              </p>
            </div>
            <div
              :class="['service', activeService === 'design' ? 'active' : '']"
            >
              <h3
                @click="
                  activeService = activeService === 'design' ? false : 'design'
                "
              >
                Design
              </h3>
              <p class="service-description">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos hymenaeos. Integer vulputate sem a nibh rutrum
                consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit. Mauris metus.
              </p>

              <p class="service-description">
                Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at
                dui. Mauris dictum facilisis augue. Integer tempor. In dapibus
                augue non sapien. Integer vulputate sem a nibh rutrum consequat.
                Sed convallis magna eu sem. Integer tempor. Fusce consectetuer
                risus a nunc. Duis risus. Nunc dapibus tortor vel mi dapibus
                sollicitudin
              </p>
            </div>
          </div>
          <div class="services-right">
            <div :class="{ 'service-preview': true, active: activeService }">
              <div class="service-preview-image" :style="bgImage"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
const activeService = ref(false)
const bgImage = computed(() => {
  if (activeService.value === 'video')
    return {
      width: '300px',
      'background-image': 'url(https://picsum.photos/200/300?random=1)',
    }
  if (activeService.value === 'foto')
    return {
      width: '400px',
      'background-image': 'url(https://picsum.photos/200/300?random=2)',
    }
  else
    return { 'background-image': 'url(https://picsum.photos/200/300?random=3)' }
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
  font-size: 48px;
  color: white;
  font-family: 'Zacbel X';
  line-height: 69px;
  transition: 1s;
}

.service-description {
  opacity: 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 100;
  margin-left: 50px;
  font-size: 15px;
  line-height: 18px;
  transition: 0.3s;
  color: #ffffff;
}

.service.active .service-description {
  opacity: 1;
  transition: 1s;
}

.services-left,
.services-right {
  width: 50%;
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
  height: 100px;
  transition: 1s;
}

.service.active {
  h3 {
    font-size: 96px;
    line-height: 120px;
  }

  height: 300px;
}

.service-preview {
  position: relative;
  transition: 1s;
}

.service-preview.active {
}

.service-preview-image {
  width: 50px;
  height: 55px;
  transition: 1s;
  opacity: 0;
  background-size: cover;
}

.service-preview.active .service-preview-image {
  height: 250px;
  width: 200px;
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
