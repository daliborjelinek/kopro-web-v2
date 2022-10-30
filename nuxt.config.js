import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      charset: 'utf-16',
      title: 'Ko.Pro',
      meta: [
        { name: 'description', content: 'Kocar production official website' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
    }
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    }
  },
  buildModules: [
    // 'nuxt-storm',
  ],
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/default.css'
  ],
  modules: [
    'unplugin-icons/nuxt'
  ],
  vite: {
    plugins: [
      UnpluginComponentsVite({
        dts: true,
        options: { defaultClass: 'material-design-icon' },
        resolvers: [
          IconsResolver({
            prefix: 'Ico'
          })
        ]
      }),
      Icons({ defaultClass: 'material-design-icon' })
    ]
  }
})
