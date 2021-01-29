---
title: Usage
description: ''
position: 3
category: Guide
---

## Basic CRUD

create your page. for example `pages/customers`  

```bash
  -| pages
  --| customers
  ---| config.js
  ---| fields.js
  ---| index.vue
  ---| create
  ---| _id
  ---| edit
  ----| _id.vue
```

table list:
```js[index.vue]
<template>
  <ListPage v-model="main"/>
</template>
<script>

  import Fields from "./fields";
  import Info from "./config";

  export default {
    head() {
      return {
        title:Info.title
      }
    },
    data() {
      return {
        main: {
            // required
            Fields,
            title: 'Customers',
            api: 'customers', // api end-point
            resource: 'customers', // path on nuxt project
            
            // optional
            icon: "fa-shield",
            name: 'customers', // custom name
            popTitle: 'Customer Details',
            popWidth: '1120',
            color: 'success darken-4',
            sortable: false,
            filterable: false,
            reportable: true,
            searchable: true,
            searchQuery: true,
            deleteAll: false,
            newItem: false,
            editItem: false,
        }
      }
    }
  }
</script>

```
