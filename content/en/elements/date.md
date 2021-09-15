---
title: date picker
description: ''
position: 11
category: 'Form Elements'
---

## component
```vue
<date-picker v-model="dateTime" label="label"/>
```

## field

you can set ```type: "date"``` in ```fields.js```.

```js[fields.js]
export default {
    type: 'date', 
    meta: 'YYYY/M/D', 
    jalali: false, 
    value: 'created_at',
    text: 'Created At'
}
```


## props
- value: with format ```YYYY-MM-DDTHH:mm:ss```
- locale: your time locale code. like 'fa-IR' for Persian Jalali. but values should be UTC. 
- label
- outlined
- filled