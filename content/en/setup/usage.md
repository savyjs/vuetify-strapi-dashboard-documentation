---
title: Usage
description: ''
position: 2
category: Setup
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

### Table Page 

Table page in index.vue: 

```js[index.vue]
<template>
  <ListPage v-model="main"/>
</template>
<script>

  import Fields from "./fields";

  export default {
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

or with config.js:

```js[index.vue]
<template>
  <ListPage v-model="main"/>
</template>
<script>

  import Fields from "./fields";
  import Info from "./config";

  export default {
    data() {
      return {
        main: {
          Fields,
          ...Info
        }
      }
    }
  }
</script>

```
### CRUD Config 

and config.js:

```js[config.js]
        export default {
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
            editItem: false
        }
```

### Fields

array of API fields:

```js[fields.js]

export default [
  {
    text: 'identifer',
    value: 'id',
    type: 'text',
    header: true, // show on table
    edit: true, // show on edit 
    create: true, // show on create page
    show: true, // show page 
    pop: true,  // show on pop
    filterable: true,
    searchable: true
  }
}
```

### Create Page

create.vue:

```js[create.vue]
<template>
  <data-form-page
    v-model="formData"
    :fields="Fields"
    :name="name"
    :resource="resource"
    :title="title"
  />
</template>
<script>
  import Fields from "./fields";
  import Info from "./config";

  export default {
    data() {
      return {
        formData: {},
        Fields,
        ...Info,
      }
    }
  }
</script>

```

### Edit Page

```js[edit/_id.vue]
<template>
  <data-form-page
    v-model="data"
    :fields="Fields"
    :name="name"
    :resource="resource"
    :title="title"
  />
</template>
<script>
  import Fields from "../fields";
  import Info from "../config";

  export default {
    data() {
      return {
        data: {},
        Fields,
        ...Info,
      }
    },
    async asyncData({params}) {
      return {data: {id: params.id}}
    }
  }
</script>

```