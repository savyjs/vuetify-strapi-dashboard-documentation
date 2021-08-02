---
title: Options
description: ''
position: 2.5
category: Options
---

## define options 
default options ([you can check that here](https://github.com/savyjs/vuetify-strapi-dashboard/blob/d454555254889193f9ebf8744b14185584cf47c3/src/index.js#L23-L50)):

```js[nuxt.config.js]
export default {
   /*
  ** Nuxt.js modules
  */
  modules: [
    ['vuetify-strapi-dashboard',{
      baseUrl: process.env.BASE_URL,
      rtl: false,
      i18n: true,
      builder: {
        form: '/forms',
        group: '/groups',
        element: '/elements',
        record: '/records',
      },
      crm: {
        home: '/crm',
        support: '/crm/ticket/new',
        menu: {}
      },
      notification: {
        show: false,
        url: null
      },
      apiListHelper: {},
      apiShowHelper: {},
      apiFormHelper: {},
      config: {}, // config of vsd
      settings: {}, // fields in settings page
      menu: {},
      validations: {}
    }]
  ]
}
```