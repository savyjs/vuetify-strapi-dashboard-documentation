---
title: Records
description: ''
position: 11.4
category: 'Process Builder'
---

## Introduction
records shows an specific form saved records. 

## config
```vue

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
    value: 'crud' // array of data
}
```

## props
- v-model 
- label