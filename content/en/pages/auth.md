---
title: Auth Page
description: ''
position: 1
category: 'Pages'
---

## Login Page
you can create your own login/register/forget pages if you want. but if you want something "ready to use", consider this layout.
 you can use this layout with ```VsdLogin``` component to have this nice login page.
 
 
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
