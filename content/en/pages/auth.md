---
title: Auth Page
description: ''
position: 5
category: 'Pages'
---

## Login Page
you can create your own login, register and forget pages, but if you want something "ready", consider this layout.
use this layout with ```VsdLogin``` component to have this nice simple login page. `vsdLogin` component works with strapi and nuxt auth module to handle auth process. 

![vsd-login](/content/login.png)
 
```js[admin/auth/index.vue]
<template>
  <vsdLogin />
</template>
<script>
  export default {
    layout: 'vsdAuth',
    head() {
      return {
        title: 'Login Page'
      }
    },
  }
</script>

```
