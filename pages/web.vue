<template>
  <div>
    <SectionsHome />
    <SectionsServices />
    <SectionsCreateArt />
    <section id="tym" class="section bg-white relative">
      <SectionsTeam />
    </section>
    <section id="kontakt" class="section section-6">
      <div class="content-wrapper">
        <SectionsContact />
      </div>
    </section>
  </div>
</template>

<script setup>
import { scrollToFc } from '../utils/smoothScroll'

const router = useRouter()
router.afterEach((to, from) => {
  if (from.name === to.name) { scrollToFc(to.hash) }
  if (!to.hash) {
    window.scrollTo(0, 0)
  }
})

</script>

<style lang="scss">
@media screen and (max-width: 600px) {
  .nav { display: none !important}
}

.section-3 {
  background: linear-gradient(180deg, #797979 7.29%, rgba(237, 207, 207, 0) 100%);

  padding-top: 50px;
}

.section-6 {
  padding-top: 50px;
  background: linear-gradient(141.35deg, #FAFAFA -4.79%, rgba(0, 0, 0, 0.619792) -4.78%, rgba(0, 0, 0, 0.634054) 4.76%, #000000 71.66%, #000000 109.9%);
  min-height: initial;
}

.content-wrapper {
  width: 80%;

}
.centerized {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
