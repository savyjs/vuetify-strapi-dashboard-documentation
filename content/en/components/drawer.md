---
title: Drawer (Side Menu)
description: ''
position: 2
category: Components
---

## introduction

## change permissions

to set menu item permission you can set ```permission``` property. for example:

```js[menu.js]
export default {
  ADMIN_DRAWER: [
    {title: 'example1', permission: "example1.find", icon: 'add', link: '/admin/example-1'},
    {title: 'customers', permission: "customer.find", icon: 'add', link: '/admin/customers'},
  ]
}
```

