---
title: CRUD
description: ''
position: 3
category: Guide
---

## Introduction

because each crud has more than 1 page, it is better to use a shared config file for them. this file includes basic properties like name, api resource url, icon and title.

## Create CRUD directory
in `~pages` folder create your CRUD directory. for example create a folder called `customers` in `/admin` folder and index.vue and config.js files.
```bash
- pages/admin/customers
-- index.vue -> table
-- config.vue -> CRUD config
-- fields.js -> fields config
```
## config.js

```js['config.js']

```

## properties

| property  |  description | example  |  
|---|---|---|
|  title |  CRUD title | `Verified customers`  |  
| resource  | API path url  | if strapi url is `http://site.com/customers` the resource is `customers`  |
| name  |   |   |   |
| api  | (optional) if backend is not strapi it is useful. you can access yo this property in loadData() method. |  `customers`  |
| icon  |   |   |   |
| resource  |   |   |   |
| resource  |   |   |   |