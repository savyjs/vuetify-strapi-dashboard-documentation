---
title: date time picker description: ''
position: 11 category: 'Form Elements'
---

## Introduction

this element is a combination of ```datepicker``` and ```timepicker```

```vue

<date-time-picker v-model="dateTime" label="label"/>
```

## field

you can set ```type: "date"``` in ```fields.js```.

```js[fields.js]
export default {
    type: 'date', 
    meta: 'YYYY/M/D HH:mm', 
    jalali: false, 
    value: 'created_at',
    text: 'Created At'
}
```

## props

- value: with format ```YYYY-MM-DDTHH:mm:ss```
- label
- outlined
- filled