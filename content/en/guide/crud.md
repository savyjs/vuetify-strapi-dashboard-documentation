---
title: Creating CRUD
description: ''
position: 7
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
-- create.vue -> create new item page
-- _id.vue -> show item page
-- edit/_id.vue -> edit item page
```
## config.js
when you create a CRUD, there is some options that are common between pages.
an example of this config:
```js['config.js']
export default {
title: "Customers", 
resource: "customers", // API resource endpoint
icon: "account",
...
}
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
| color  |   |   |   |
| popTitle  |   |   |   |
| sortable  |   |   |   |
| filterable  |   |   |   |
| searchQuery  |   |   |   |
| deleteAll  |   |   |   |
| newItem  |   |   |   |
| editItem  |   |   |   |
| redirectAfterSave  |  redirect to show page after saving new item |   |   |
| headerIcon  |   |   |   |
| showSimple  |   |   |   |
| showBack  | showing back buttons |   |   |
| defaultActions  | add default actions column |   |   |

## show simple 
true means disabled VCardHeader on form pages

