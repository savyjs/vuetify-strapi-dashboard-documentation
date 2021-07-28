---
title: Users description: 'creating users with strapi and vsd' position: 6 category: 'Pages'
---

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

```js[config.js]
const config = {
  title: 'users',
  resource: 'users',
  name: '/admin/system/users', // web path - like admin/sample/ssr-list
}
export default config;
```

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
      path: 'name',
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

## create user
 
```shell
-- /admin/system/users/create.vue
```

put these code in ```_id.vue``` file:

```vue[_id.vue]
<script>
  import form from '../create'
  export default form
</script>
```

and this code in ```create.vue```:

```vue[create.vue]
<template>
  <section>
    <v-container grid-list-lg>
      <v-card :loading="loader">
       <vsd-v-card-header margin-right="1%" width="98%">
          <h3 class="px-2">
            <v-icon class="mx-1">edit</v-icon>
            {{ title }}
          </h3>
          <v-spacer/>
          <v-btn :loading="loader" small color="warning" class="mx-4" :to="back">
            <v-icon class="mx-1">backspace</v-icon>
            {{ $t('back') }}
          </v-btn>
          <v-btn :disabled="id && id!=formData.id" :loading="loader" class="px-5" small color="success"
                 @click="save">
            <v-icon class="mx-1">save</v-icon>
            {{ $t('save') }}
          </v-btn>
        </vsd-v-card-header>
        <v-card-text @keypress.enter="save">
          <role-data-form
            :permissionsConfig="permissionsConfig"
            :resource="resource"
            ref="form"
            type="create"
            name="name"
            title="title"
            v-model="formData"></role-data-form>
        </v-card-text>
        <v-card-actions class="text-left">
          <v-layout wrap row class="pa-1">
            <v-flex xs12 class="pa-1 text-left">
              <v-btn :loading="loader" small color="success" @click="save">
                <v-icon class="mx-1">save</v-icon>
                {{ $t('save') }}
              </v-btn>
            </v-flex>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-container>
  </section>
</template>

<i18n>
{
  "en": {
    "saved_successfully": "saved successfully!"
  },
  "fa": {
    "saved_successfully": "با موفقیت ذخیره شد"
  }
}
</i18n>
<script>

const permissionsConfig = require(`./permissionConfig`).default;
const
  name = 'system/roles',
  title = 'role',
  resource = 'users-permissions/roles',
  back = '/admin/' + name

export default {
  head() {
    return {
      title: !this.id ? this.$t('new') : this.$t('edit'),
    }
  },
  data() {
    return {
      permissionsConfig,
      id: null,
      loader: false,
      name, title, back, resource,
      formData: {},
      permissions: [],
    }
  },
  mounted() {
    if (this.id) this.loadData();
  },
  methods: {
    loadData() {
      this.loading = true;
      this.$axios.$get(resource + '/' + this.id).then(res => {
        this.formData = _.get(res, 'role', {});
      }).catch(err => {
        this.$notifError(err)
      }).finally(() => {
        this.loading = false;
      })
    },
    save() {
      this.doSaveSendDataToServer();
    },
    doSaveSendDataToServer() {
      this.loader = true;
      let id = _.get(this.formData, 'id', null);
      let method = id ? 'put' : 'post';
      let url = id ? resource + '/' + id : resource;
      let data = _.cloneDeep(this.formData);
      console.log({data})
      this.$axios.$request({method, url, data}).then(res => {
        this.$notifSuccess($t('saved_successfully'));
        this.$router.push(back)
      }).catch(err => {
        if (err.errors) {
          this.$refs.form.setErrors(err.errors);
          return;
        }
        this.$notifError(err)
      }).finally(() => {
        this.loader = false;
      })
    }
  },
  async asyncData({params}) {
    return {id: params.id}
  }
}
</script>
```

for permissionConfig file:

```js[permissionConfig.js]
export default {
  deniedRoles: ['contenttypes', 'content-types', 'collection-types', 'relations', 'uid',  'single-types', 'documentation', 'connections', 'proxy', 'builder', 'componentcategories', 'components', 'components', 'contentmanager', 'contentmanager'],
  translate: {
    "contenttypes": "Content-Types"
  }
}
```

if you need to filter some roles just add them in ```deniedRoles``` and if you want to show a different name for a role
add it in ```translate``` array.

the result should be like this
![add-role-in-vuetify-strapi-dashboard](/content/role.png)

edit role

![add-role-in-vuetify-strapi-dashboard](/content/role-edit.png)

## add menu

if you want to add roles route in menu, add this code to your menu.js file or in the ```menu``` array of vsd module
options.

```js[menu.js]
    export default {
        ADMIN_DRAWER: [
            // ...
            {
            title: 'team', icon: 'supervised_user_circle', permission: 'user.find', link: '/admin/system/user', items: [
                {title: 'roles', icon: 'add', link: '/admin/system/roles'}
            ]
        }
```

## set specific permission for menu items

you can limit specific routes by setting permission for them. as you see above, you can attach the namespace of role to
menu items to set access for that route.

```js
permission: 'user.find'
```

"user" is namespace of role and "find" is its permission. in this example for ```user.*``` permissions, you should set
them in Strapi panel first. if user doesn't have permission, both menu item and route will be hidden.
