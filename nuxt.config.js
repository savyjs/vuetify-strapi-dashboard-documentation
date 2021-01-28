import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#E24F55'
  },
  i18n: {
    locales: () => [{
      code: 'fa',
      iso: 'fa-IR',
      file: 'da-IR.js',
      name: 'فارسی'
    }, {
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    }],
    defaultLocale: 'en'
  },
})
