// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],

  colorMode: {
    classSuffix: '',
    classPrefix: '--'
  },

  // https://content.nuxtjs.org
  content: {
    documentDriven: true,
    navigation: {
      fields: ['navTitle']
    },
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: 'dracula',
      preload: ['bibtex']
    },
    markdown: {
      remarkPlugins: [
        'remark-math'
      ],
      rehypePlugins: [
        ['rehype-katex', { output: 'html' }]
      ]
    }
  },

  components: [{
    path: '~/components',
    global: true
  }],

  compatibilityDate: '2024-10-14'
})
