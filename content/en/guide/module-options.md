---
title: Module Options
description: ''
position: 9
category: Guide
---

## introduction
look at module options that is introduced at setup page. let explore each one.
## config
this option set 

## menu
this option is drawer menu. drawer could be 1-level or 2-level menu. for example:
```js
  ADMIN_DRAWER: [
      {
        title: 'example1', icon: 'add', items: [
          {title: 'all', permission: "example1.find", icon: 'link', link: '/admin/example-1'},
          {title: 'new', permission: "example1.create", icon: 'link', link: '/admin/example-1/create'}
        ]
      },
      {title: 'customers', permission: "customer.find", icon: 'add', link: '/admin/customers'},
    ]
```
![access-alert](/content/static/access-alert.png)