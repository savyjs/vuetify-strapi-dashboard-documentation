---
title: Options
description: ''
position: 2.5
category: Options
---

## define options 

```js[nuxt.config.js]
export default {
   /*
  ** Nuxt.js modules
  */
  modules: [
    ['vuetify-strapi-dashboard',{
      baseUrl: process.env.BASE_URL,
      socket: false,
      rtl: false,
      i18n: true,
      locale: 'fa-ir',
      crm: {
        logo: '/crm/basic-panel.png',
        home: '/crm',
        support: '/crm/ticket/new',
        menu: require('./modules/crm/menu').default
      },
      builder: {
        form: '/forms',
        group: '/groups',
        element: '/elements',
        record: '/records',
      },
      apiListHelper: require('./modules/demo/api').default,
      apiShowHelper: require('./modules/demo/apiShowPage').default,
      apiFormHelper: require('./modules/demo/apiFormPage').default,
      validations: require('./modules/demo/validations').default,
      config: require('./modules/demo/config').default,
      settings: require('./modules/demo/settings').default,
      menu: require('./modules/demo/menu').default
    }]
  ]
}
```