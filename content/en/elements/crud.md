---
title: CRUD
description: ''
position: 11
category: 'Form Elements'
---

## Introduction
this is a component that create a CRUD as a field.

## component
```vue
<CRUD v-model="data" label="items"/>
```

## field
you can set ```type: "crud"``` in ```fields.js```.

```js[fields.js]
export default {
    text: 'Items',
    type: 'crud',
    meta: [
        ...fields, // array of json fields
    ],
    value: 'crud'
}
```

## props
- v-model 
- label