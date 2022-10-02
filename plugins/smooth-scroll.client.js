import VueSmoothScroll from 'v-smooth-scroll'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueSmoothScroll, {
    duration: 1000,
    offset: -100

  })
})
