---
title: Relation Select
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
you can set ```type: "select"``` in ```fields.js``` for having text field in your CRUD.

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
}
```

## props
- v-model: id or key 
- multiple: (false)
- meta : ``` {text:'name',value:'id'} ```. name of relation property text and value.