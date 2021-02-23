---
title: linearCRUD
description: ''
position: 11
category: 'Form Elements'
---

## Introduction
this is a component that create a CRUD as a field. this is like CRUD but different in view.

## component
```vue
<linearCrud v-model="data" label="items"/>
```

## field
you can set ```type: "linearCrud"``` in ```fields.js```.

```js[fields.js]
export default {
    text: 'Items',
    type: 'linearCrud',
    meta: [
        ...fields, // array of json fields
    ],
    value: 'crud' // array of data
}
```

## props
- v-model 
- label