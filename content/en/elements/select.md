---
title: select
description: ''
position: 11
category: 'Form Elements'
---

## Introduction
text field is a select list that uses nuxt store or strapi collections. 

## component

```vue
<select-relation v-model="data" :field="field" :label="label"/>
```

## name
you can set ```type: "select"``` in ```fields.js``` for having select field in your CRUD.

example:
```js[fields.js]
export default {
    value: 'group',
    text: 'select group',
    type: 'select',
    multiple: true,
    meta:{
      text: 'name',
      value: 'id'
    },
    server: 'groups',
    // or
    store: 'roles'
}
```
## server 
you can load select options dynamically from server. for example, you may need load user groups from 'http://URL/groups' endpoint.
this option let you load and define options from API. when your VSD loads first time, your api options will save in store. (state path: `commonSelect.server` ). 
so if you use this element more than one time, it will load items just once and will save it in store for another usages. 

## load select options from store 
to reduce load time and reuse loaded data, you can put data in store and load your select item from there. you can define your store action and state with same name. so when this element loads, it dispatches your action first and then loads state items.
this is how it works, it dispatches your store first:
```js
this.$store.dispatch(`${name}`, name); // name is your store name you set in your field config
```

then load items in select list:
```js
return _.get(this.$store.state, `commonSelect.${name}`, _.get(this.$store.state, name, []));
```

for example, we loaded roles from store: 

```js[fields.js]
// ...
{
    text: 'role',
    value: 'role',
    type: 'select',
    store: 'roles',
    meta:{
      text: 'text',
      value: 'value'
    },
  },
  // ...
  
```
![user-roles](/content/user-role.png)

## props
- v-model: id or key 
- multiple: (false)
- server: API path of items, like 'customers' - if you have a specific resource on your API and you want to show that items on your list
- store: Store path of items, like 'roles' (from store root or from commonSelect) - if you have a specific resource on your vue Store and you want to show that items on your list
- meta : ``` {text:'name',value:'id'} ```. name of relation property text and value.