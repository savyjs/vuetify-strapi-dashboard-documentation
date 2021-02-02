---
title: Setup
description: ''
position: 2
category: Guide
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
    'vuetify-strapi-dashboard'
  ],
}
```
