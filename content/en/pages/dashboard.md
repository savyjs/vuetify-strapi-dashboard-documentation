---
title: Dashboard 
description: ''
position: 6
category: 'Pages'
---
## layouts
when you start building you dashboard, you need to have some dashboard layouts. first mission of VSD is providing advanced layouts that make your work easier.
in most cases material design is the best choice for dashboard. so we use vuetify as our default ui kit.


#### default layout
the name of our default layout is `vsd`. this layout contains all necessary components like menu, access controller, auth middleware, snackbar, sweetAlert, etc.

## dashboard default page
create an index page in your admin root folder, for example our admin folder is ```~/pages/admin```.
then we create our `index.vue` there like following.
```js[admin/index.vue]
<template>
    <div>hello world!</div>
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

## widgets

if you search dashboard UI in google, you'll se that most of them follow a same pattern, there are a lot of widgets and statistics in the first page of dashboard.

![dashboardExamples](/content/dashboard-ui.png)