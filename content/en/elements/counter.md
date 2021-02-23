---
title: counter
description: ''
position: 11
category: 'Form Elements'
---

## component
```vue
<counter v-model="value" label="label"/>
```

## field

you can set ```type: "counter"``` in ```fields.js```.

```js[fields.js]
export default {
    type: 'counter', 
    value: 'counts',
    text: 'total items'
}
```


## props
- value: with format ```YYYY-MM-DDTHH:mm:ss```
- locale: your time locale code. like 'fa-IR' for Persian Jalali. but values should be UTC. 
- label
- outlined
- filled