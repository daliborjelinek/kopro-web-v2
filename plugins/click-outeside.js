
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', {
    mounted (el, binding, vnode) {
      el.clickOutsideEvent = function (event) {
        // here I check that click was outside the el and his childrens
        if (!(el == event.target || el.contains(event.target))) {
          // and if it did, call method provided in attribute value
          binding.value()
        }
      }
      document.body.addEventListener('click', el.clickOutsideEvent)
    },
    unmounted (el) {
      // If the element that has v-closable is removed, then
      // unbind click/touchstart listeners from the whole page
      document.body.removeEventListener('click', el.clickOutsideEvent)
    }
  })
})
