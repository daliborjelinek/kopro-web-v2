<template>
  <div class="animation-wrapper">
    <img
      :style="getStyleObj.img1"
      class="img img1"
      src="/assets/animations/first-lines.svg"
    />
    <img
      :style="getStyleObj.img2"
      class="img img2"
      src="/assets/animations/second-lines.svg"
    />
    <img
      :style="getStyleObj.img3"
      class="img img3"
      src="/assets/animations/third-lines.svg"
    />
    <img
      :style="getStyleObj.c1"
      class="img c-left"
      src="/assets/animations/c-shape.svg"
    />
    <img
      :style="getStyleObj.c2"
      class="img c-right"
      src="/assets/animations/c-shape.svg"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      styleArray: [
        {
          img1: {
            // important
            x: 0,
            y: 0,
            ang: 0,
            opacity: 1,
          },
          img2: {
            x: -101,
            y: -132,
            ang: 30,
            opacity: 0,
          },
          img3: {
            x: 6,
            y: -201,
            ang: 14,
            opacity: 0,
          },
          c1: {
            x: 0,
            y: 0,
            ang: 50,
            opacity: 1,
          },
          c2: {
            x: 473,
            y: 267,
            ang: 249,
            opacity: 1,
          },
        },
        {
          img1: {
            x: 144,
            y: 113,
            ang: -30,
            opacity: 0,
          },
          img2: {
            // importnat
            x: 0,
            y: 0,
            ang: 0,
            opacity: 1,
          },
          img3: {
            x: 125,
            y: -77,
            ang: -16,
            opacity: 0,
          },
          c1: {
            x: 107,
            y: 265,
            ang: 0,
            opacity: 1,
          },
          c2: {
            x: 671,
            y: 255,
            ang: 226,
            opacity: 1,
          },
        },
        {
          img1: {
            x: -5,
            y: 193,
            ang: -5,
            opacity: 0,
          },
          img2: {
            x: -109,
            y: 76,
            ang: 25,
            opacity: 0,
          },
          img3: {
            // important
            x: 0,
            y: 0,
            ang: 10,
            opacity: 1,
          },
          c1: {
            x: -21,
            y: 216,
            ang: 54,
            opacity: 1,
          },
          c2: {
            x: 492,
            y: 450,
            ang: 244,
            opacity: 1,
          },
        },
      ],
      index: 0,
    }
  },
  computed: {
    getStyleObj() {
      const result = {}
      const selectedStyle = this.styleArray[this.index]
      for (const [key, conf] of Object.entries(selectedStyle)) {
        result[
          key
        ] = `transform: translate(${conf.x}px, ${conf.y}px) rotate(${conf.ang}deg); opacity: ${conf.opacity}`
      }
      return result
    },
  },
  created() {
    this.runAnimation()
  },
  methods: {
    increment() {
      if (this.index === this.styleArray.length - 1) {
        this.index = 0
      } else {
        this.index++
      }
    },
    async runAnimation() {
      while (true) {
        await new Promise((resolve) => setTimeout(resolve, 500))
        this.increment()
        await new Promise((resolve) => setTimeout(resolve, 500))
      }
    },
  },
}
</script>

<style>
.img {
  position: absolute;
  transition: 0.5s;
}

.animation-wrapper {
  width: 500px;
  height: 500px;
}
</style>
