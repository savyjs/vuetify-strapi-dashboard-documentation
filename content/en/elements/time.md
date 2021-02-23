---
title: timePicker
description: ''
position: 11
category: 'Form Elements'
---

## component
```vue
<time-picker v-model="time" label="label"/>
```

## field

you can set ```type: "time"``` in ```fields.js```.

```js[fields.js]
export default {
    type: 'time', 
    value: 'created_at',
    text: 'Created At'
}
```


## props
- value: with format ```HH:mm:ss```
- label
- outlined
- filled