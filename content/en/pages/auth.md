---
title: Auth Pages
description: ''
position: 1
category: 'Pages'
---
## layouts
there are 2 built-in layouts:

#### 1- vsd
```vsd``` layout contains all necessary components like menu, access controller, auth middleware, snackbar, sweetAlert, etc.
you can use this layout for your crud pages.
```js[admin/customers/index.vue]
<template>
    <list-page />
</template>
<script>

export default {
    layout: 'vsdDashboard'
}
</script>
```


<alert type="warning">
this layout contains auth middleware, so you should config auth module before using this layout.
</alert>

#### 2- vsdAuth 
```vsdAuth``` is another layout. you can create your own login/register/forget pages if you want. but if you want something "ready to use", consider this layout.
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
