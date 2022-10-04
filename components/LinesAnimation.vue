<template>
  <svg width="100%" viewBox="-100 -5 870 680" fill="blue" xmlns="http://www.w3.org/2000/svg">
    <rect x="-100" y="-5" width="100%" height="100%" fill="black" />
    <image
      :style="getStyleObj.img1"
      x="0"
      y="0"
      width="590"
      height="407"
      href="~/assets/animations/first-lines.svg"
    />
    <image
      :style="getStyleObj.img2"
      x="0"
      y="0"
      width="798"
      height="476"
      href="~/assets/animations/second-lines.svg"
    />
    <image
      :style="getStyleObj.img3"
      x="0"
      y="0"
      width="590"
      height="636"
      href="~/assets/animations/third-lines.svg"
    />
    <image
      :style="getStyleObj.c1"
      x="0"
      y="0"
      width="98"
      height="101"
      href="~/assets/animations/c-shape.svg"
    />
    <image
      :style="getStyleObj.c2"
      x="0"
      y="0"
      width="98"
      height="101"
      href="~/assets/animations/c-shape.svg"
    />

  </svg>
</template>

<script>
export default {
  data () {
    return {
      styleArray: [
        {
          img1: {
            // important
            x: 0,
            y: 0,
            ang: 0,
            opacity: 1
          },
          img2: {
            x: -101,
            y: -132,
            ang: 30,
            opacity: 0
          },
          img3: {
            x: 6,
            y: -201,
            ang: 14,
            opacity: 0
          },
          c1: {
            x: 68,
            y: -21,
            ang: 61,
            opacity: 1
          },
          c2: {
            x: 516,
            y: 382,
            ang: 239,
            opacity: 1
          }
        },
        {
          img1: {
            x: 144,
            y: 113,
            ang: -30,
            opacity: 0
          },
          img2: {
            // importnat
            x: 0,
            y: 0,
            ang: 0,
            opacity: 1
          },
          img3: {
            x: 125,
            y: -77,
            ang: -16,
            opacity: 0
          },
          c1: {
            x: 107,
            y: 265,
            ang: 0,
            opacity: 1
          },
          c2: {
            x: 713,
            y: 375,
            ang: 226,
            opacity: 1
          }
        },
        {
          img1: {
            x: -5,
            y: 193,
            ang: -5,
            opacity: 0
          },
          img2: {
            x: -109,
            y: 76,
            ang: 25,
            opacity: 0
          },
          img3: {
            // important
            x: 0,
            y: 0,
            ang: 10,
            opacity: 1
          },
          c1: {
            x: -18,
            y: 243,
            ang: 54,
            opacity: 1
          },
          c2: {
            x: 455,
            y: 611,
            ang: 244,
            opacity: 1
          }
        }
      ],
      index: 2
    }
  },
  computed: {
    getStyleObj () {
      const result = {}
      const selectedStyle = this.styleArray[this.index]
      for (const [key, conf] of Object.entries(selectedStyle)) {
        result[
          key
        ] = `transform: translate(${conf.x}px, ${conf.y}px) rotate(${conf.ang}deg); opacity: ${conf.opacity}`
      }
      return result
    }
  },
  created () {
    this.runAnimation()
  },
  methods: {
    increment () {
      if (this.index === this.styleArray.length - 1) {
        this.index = 0
      } else {
        this.index++
      }
    },
    async runAnimation () {
      while (true) {
        await new Promise(resolve => setTimeout(resolve, 500))
        this.increment()
        await new Promise(resolve => setTimeout(resolve, 500))
      }
    }
  }
}
</script>

<style>
image {
  transition: 0.5s;
}
</style>
