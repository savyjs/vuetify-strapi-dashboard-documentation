---
title: boolean Button
description: ''
position: 11
category: 'Form Elements'
---

## component
```vue
<bool-btn v-model="status" label="label"/>
```

## field

you can set ```type: "bool"``` in ```fields.js```.

```js[fields.js]
export default {
    type: 'bool', 
    value: 'created_at',
    text: 'Created At'
}
```


## props
- v-model 
- label