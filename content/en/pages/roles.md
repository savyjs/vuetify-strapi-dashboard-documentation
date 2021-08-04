---
title: Roles 
description: 'creating role system with strapi and vsd' 
position: 6 
category: 'Pages'
---

## strapi role and permission system

[look at this](https://strapi.io/features/custom-roles-and-permissions) if you are not familiar with Strapi role based
system. each user in Strap has a role. these roles have specific permissions. when you create a controller in Strapi
backend, you'll need a permission to access it through API. Strapi has it's own UI for managing roles and permissions,
but we want our customers to be in VSD dashboard. so our strategy is like this:

1- developers can manage roles and permissions in both VSD (if they want) and in Strapi panel 2- our customer (site
owner) can edit roles and permissions with VSD and don't have access to Strapi panel.

## list of roles

create a folder (route) for role management like following:

```pages/admin/system/roles```

create ```index.vue``` and use [ListPage](/) component to create a table list.

```vue

<template>
  <div>
    <list-page :value="main"/>
  </div>
</template>
<script>

import fields from "./fields";
import config from "./config";

export default {
  created() {
  },
  data() {
    return {
      main: {
        ...config,
        fields
      }
    }
  }
}
</script>
```

```js[config.js]
export default {
  title: 'Roles',
  resource: 'users-permissions/roles',
  icon: "shield",
  name: '/admin/system/roles',
  api: 'roles',
  popTitle: 'Role',
  popWidth: '1120',
  color: 'success darken-4',
  sortable: true,
  filterable: false,
  reportable: false,
  searchable: false,
  searchQuery: false,
  deleteAll: true,
  newItem: true,
  editItem: true,
  defaultActions: true,
}

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
    show: true,
    filterable: true,
    type: 'text',
    searchable: true,
  },
  {
    text: 'title',
    value: 'name',
    type: 'text',
    header: true,
    table: true,
    show: true,
    pop: true,
    edit: true,
    align: 'start',
    sortable: true,
    searchable: true,
    filterable: true,
    colFilter: true,
  },
  {
    text: 'type',
    value: 'type',
    type: 'text',
    header: true,
    show: true,
    pop: true,
    edit: true,
    align: 'start',
    sortable: true,
    searchable: true,
    filterable: true,
    colFilter: true
  },
  {
    text: 'description',
    value: 'description',
    show: true,
    header: false,
    expand: false,
    pop: true,
    filterable: false,
    type: 'textarea',
    align: 'center'
  },
  {
    text: 'users',
    value: 'nb_users',
    show: true,
    header: false,
    edit: false,
    expand: false,
    pop: true,
    filterable: false,
    type: 'text',
    align: 'center'
  },
  {
    text: '',
    filterable: false,
    value: 'actions',
    show: false,
    edit: false,
    sortable: false,
    searchable: false,
    align: 'left'
  },
]


```

your role list page should be like this

![roles in vsd](/content/roles.png)

## create/edit a role permissions

First, you need to create these files for edit/create roles.

```shell
-- /admin/system/roles/create.vue
-- /admin/system/roles/edit/_id.vue
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
        this.$notifSuccess(this.$t('saved_successfully'));
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
## fields and config

put this code in `fields.js` 

```js[fields.js]
export default [
  {
    text: 'id',
    align: 'start',
    sortable: true,
    value: 'id',
    header: false,
    edit: false,
    show: true,
    filterable: true,
    type: 'text',
    searchable: true,
  },
  {
    text: 'title',
    value: 'name',
    type: 'text',
    header: true,
    table: true,
    show: true,
    pop: true,
    edit: true,
    align: 'start',
    sortable: true,
    searchable: true,
    filterable: true,
    colFilter: true
  },
  {
    text: 'type',
    value: 'type',
    type: 'text',
    header: true,
    show: true,
    pop: true,
    edit: true,
    align: 'start', 
    sortable: true,
    searchable: true,
    filterable: true,
    colFilter: true
  },
  {
    text: 'description',
    value: 'description',
    show: true,
    header: false,
    expand: false,
    pop: true,
    filterable: false,
    type: 'textarea',
    align: 'center'
  },
  {
    text: 'users',
    value: 'nb_users',
    show: true,
    header: false,
    edit: false,
    expand: false,
    pop: true,
    filterable: false,
    type: 'text',
    align: 'center'
  },
  {
    text: '',
    filterable: false,
    value: 'actions',
    show: false,
    edit: false,
    sortable: false,
    searchable: false,
    align: 'left'
  },
]


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


## add to menu 
if you want to add roles route in menu, add this code to your menu.js file or in the ```menu``` array of vsd module options.
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
you can limit specific routes by setting permission for them.
as you see above, you can attach the namespace of role to menu items to set access for that route.
```js
permission: 'user.find'
```
"user" is namespace of role and "find" is  its permission. in this example for ```user.*``` permissions, you should set them in Strapi panel first.
if user doesn't have permission, both menu item and route will be hidden.
