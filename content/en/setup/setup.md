---
title: Setup
description: ''
position: 2
category: Setup
---

## Requirements

- [Nuxtjs](https://vnuxtjs.org)
- [Vuetify module](https://vuetify.nuxtjs.org) 
- [Axios module](https://axios.nuxtjs.org)

<alert>
you should install and config vuetify and axios before using this module.
</alert>

##  Installation

Add `vuetify-strapi-dashboard` dependency to your project:

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add vuetify-strapi-dashboard
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm install vuetify-strapi-dashboard
  ```

  </code-block>
</code-group>

Then add `vuetify-strapi-dashboard` to the `modules` in `nuxt.config.js`:

```js[nuxt.config.js]
{
  modules: [
    ['vuetify-strapi-dashboard',
	{
        rtl: true,
        lang: 'fa',
        builder:{
          form: '/forms',
          group: '/groups',
          element: '/elements',
          record: '/records',
        },
        apiListHelper: require('./modules/crypto/api').default,
        apiEditHelper: require('./modules/crypto/api').default,
        apiShowHelper: require('./modules/crypto/api').default,
        validations: require('./modules/crypto/validations').default,
        config: require('./modules/crypto/config').default,
        settings: require('./modules/crypto/settings').default,
        menu: require('./modules/crypto/menu').default
      }
    ]
  ],
}
```

## auth and axios config
recommended config for axios and auth:
```js[nuxt.config.js]
axios: {
    changeOrigin: true,
    baseURL: 'http://your-api-server-here',
    debug: false
  },
  auth: {
    strategies: {
      admin: {
        _scheme: 'local',
        endpoints: {
          login: {url: _.get(process, 'env.LOGIN_URL', '/auth/local'), method: 'post', propertyName: 'jwt'},
          logout: {url: '/auth/logout', method: 'post'},
          user: {url: '/users/me', method: 'get'}
        },
        tokenRequired: true,
        tokenType: 'bearer',
        autoFetchUser: true
      }
    },
    redirect: {
      login: '/admin/auth',
      logout: '/admin/system/profile/logout',
      callback: '/admin/login',
      home: '/admin'
    }
  },
```
