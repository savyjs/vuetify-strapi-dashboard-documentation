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

## Installation



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
    ['vuetify-strapi-dashboard']
  ],
}
```


you can check out all options [here](/options/introduction). 


## env file

the list of env parameters:

```dotenv[.env]
API_URL=https://YOUR-API-URL-HERE
PORT=9200
BASE_URL=http://YOUR-NUXT-PORT
DESCRIPTION="meta description"
KEYWORDS="meta keywords"
TITLE="vuetify strapi dashboard"
SINGLE_TITLE="VSD"
FOOTER_TITLE= "VSD"
CRM_LOGO=/crm-logo.png
SYSTEM_LOGO=/system-logo.png # top of menu
LOADER=true
ENABLE_2FA=false
SPLASH=true
RECAPTCHAKEY=FROM_GOOGLE
LOGIN_URL=/auth/local
SHOW_USER=false
```

## other options 

### auth and axios config

recommended config for axios and auth:

```js[nuxt.config.js]
const _ = require lodash;

export default { 
// ...
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
      callback: '/admin/auth',
      home: '/admin'
    }
  },
  // ...
}
```

### i18n options 

create `locale` folder and these files there:

```shell
/locales/en.js
/locales/fa.js
```

and set i18n module option in nuxt.config.js like following:

```js[nuxt.config.js]
    ['nuxt-i18n',
      {
        vueI18nLoader: true,
        locales: [
          {code: 'en', iso: 'en-US', file: 'en.js', dir: 'ltr'},
          {code: 'fa', iso: 'fa-IR', file: 'fa.js', dir: 'rtl'}
        ],
        rtl: false,
        lazy: true,
        langDir: "locale/",
        defaultLocale: 'en'
      }
    ],
```

for more information please check out [i18n module](https://i18n.nuxtjs.org)

### recaptcha

add this options for nuxt-recaptcha module in nuxt.config.js like following:

```js[nuxt.config.js]
...

recaptcha: {
    //language: 'fa',   // Recaptcha language (v2)
    siteKey: process.env.RECAPTCHAKEY,    // Site key for requests
    version: 3,     // Version
    size: 'invisible'        // Size: 'compact', 'normal', 'invisible' (v2)
  }
  ...
```

check out [recaptcha module](https://github.com/nuxt-community/recaptcha-module) site for more information.


