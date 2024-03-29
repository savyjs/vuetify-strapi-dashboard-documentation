---
title: Users 
description: 'managing users with vsd' 
position: 6 
category: 'Pages'
---


<div style="text-align: center">
<iframe width="100%" height="315" src="https://www.youtube.com/embed/35wiwfygVyI"></iframe>
</div>


## strapi user system

[look at this](https://strapi.io/documentation/user-docs/latest/users-roles-permissions/introduction-to-users-roles-permissions.html)
if you are not familiar with Strapi users, roles and permissions system. like roles, we need to manage all suers inside
our dashboard instead of strapi panel. so we need to create a simple CRUD for this purpose.

## list of users

create a folder (route) for user management like following:

```pages/admin/system/users```

create ```index.vue``` and use [ListPage](/) component to create a table list.

```vue[index.vue]
<template>
  <list-page v-model="main"/>
</template>
<script>

import fields from "./fields";
import Info from "./config";

export default {
  head() {
    return {
      title: Info.title
    }
  },
  data() {
    return {
      main: {
        fields,
        ...Info
      }
    }
  }
}
</script>

```


## config.js
```js[config.js]
const config = {
  title: 'users',
  resource: 'users',
  name: '/admin/system/users', // web path - like admin/sample/ssr-list
}
export default config;
```


## fields.js
for fields

```js[fields.js]
export default [
  {
    text: 'id',
    align: 'start',
    sortable: true,
    value: 'id',
    header: false,
    edit: false,
    create: false,
    show: true,
    filterable: true,
    type: 'text',
    searchable: false,
  },

  {
    text: 'username',
    value: 'username',
    type: 'text', // textarea bool img rich price date
    header: true,
    table: true,
    show: true,
    pop: true,
    edit: true,
    align: 'start', // end
    sortable: true,
    searchable: true,
    filterable: true,
    colFilter: true, // true,
    role: '', // null
    permission: '', // null
  },
  {
    text: 'password',
    value: 'password',
    type: 'password', // textarea bool img rich price date
    header: false,
    table: false,
    show: false,
    pop: false,
    edit: true,
    create: true,
    align: 'start', // end
    sortable: true,
    searchable: true,
    filterable: true,
    colFilter: true, // true,
    role: '', // null
    permission: '', // null
  },
  {
    text: 'email',
    value: 'email',
    type: 'text', // textarea bool img rich price date
    header: true,
    show: true,
    pop: true,
    edit: true,
    align: 'start', // end
    sortable: true,
    searchable: true,
    filterable: true,
    colFilter: true, // true,
    role: '', // null
    permission: '', // null
  },
  {
    text: 'role',
    value: 'role',
    type: 'select', // textarea bool img rich price date
    meta: {
      text: 'name',
      value: 'id'
    },
    store: 'roles',
    header: true,
    show: true,
    pop: true,
    edit: true,
    align: 'start', // end
    sortable: true,
    searchable: true,
    filterable: true,
    colFilter: true, // true,
    role: '', // null
    permission: '', // null
  },
  {
    text: 'confirm',
    value: 'confirmed',
    type: 'bool', // textarea bool img rich price date
    header: true,
    show: true,
    pop: true,
    edit: true,
    create: true,
    expand: true,
    align: 'center', // end
    sortable: true,
    searchable: false,
    filterable: true,
    colFilter: true, // true,
  },
  {
    text: 'blocked',
    value: 'blocked',
    type: 'bool', // textarea bool img rich price date
    header: true,
    show: true,
    pop: true,
    edit: true,
    expand: true,
    align: 'center', // end
    sortable: true,
    searchable: false,
    filterable: true,
    colFilter: true, // true,
  },
  {
    text: '',
    value: 'actions',
    header: true,
    expand: false,
    show: false,
    edit: false,
    pop: false,
    create: false,
    sortable: false,
    searchable: false,
    filterable: false,
    align: 'left'
  }
];
```

your users list should be like this

![users in vsd](/content/users.png)

## manage user

create following file in users folder (or whenever you want):

```shell
-- /admin/system/users/edit/_id.vue
-- /admin/system/users/create.vue
-- /admin/system/users/_id.vue
```

### edit user

put this code in ```edit/_id.vue``` file:

```vue[_id.vue]
<template>
  <data-form-page
    v-model="main"
    :id="id"
  />
</template>
<script>
import Fields from "../fields";
import Info from "../config";

export default {
  head() {
    return {
      title: Info.title
    }
  },
  data() {
    return {
      id: undefined,
      main: {
        data: {},
        fields: Fields,
        ...Info,
      }
    }
  },
  async asyncData({params}) {
    return {id: params.id}
  }
}
</script>

```

### create user
put this code in ```create.vue```:

```vue[create.vue]
<template>
  <data-form-page
    v-model="main"
  />
</template>
<script>

import fields from "./fields";
import Info from "./config";

export default {
  head() {
    return {
      title: Info.title
    }
  },
  data() {
    return {
      main: {
        fields,
        ...Info,
      }
    }
  }
}
</script>

```

### show user
put this code in ```_id.vue```:

```vue[create.vue]
<template>
  <show-page
    :id="id"
    v-model="main"
  />
</template>
<script>
  import Fields from "./fields";
  import Info from "./config";

  export default {
    head() {
      return {
        title: Info.title
      }
    },
    data() {
      return {
        id: undefined,
        main: {
          data: {},
          fields: Fields,
          ...Info
        }
      }
    },
    async asyncData({params}) {
      return {id: params.id}
    }
  }
</script>

```

## add to menu

add this code to your menu.js file or in the ```menu``` array of vsd module options.

```js[menu.js]
    export default {
        ADMIN_DRAWER: [
            // ...
            title: 'team', icon: 'supervised_user_circle', items: [
              {title: 'users', permission: 'user.find', link: '/admin/system/users'}
            ]   
        ]
```

![users](/content/user-in-menu.png)