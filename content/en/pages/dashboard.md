---
title: Dashboard 
description: ''
position: 2
category: 'Pages'
---
## layouts
there are 2 layouts. the first one is [```vsdAuth```](/pages/auth) and second is ```vsd```.

#### default layout
```vsd``` layout contains all necessary components like menu, access controller, auth middleware, snackbar, sweetAlert, etc.
you can use this layout for your crud pages.
```js[admin/index.vue]
<template>
    your dashboard
</template>
<script>

export default {
    layout: 'vsd'
}
</script>
```


<alert type="warning">
this layout contains "auth" middleware, so you should config auth module before using this layout.
</alert>
