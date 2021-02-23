---
title: Calculate Field
description: ''
position: 11
category: 'Form Elements'
---

## component
```vue
<calc v-model="data" label="sum"/>
```

## field

you can set ```type: "bool"``` in ```fields.js```.

```js[fields.js]
export default {
    type: 'calc', 
    isPrice: true | false, 
    calc: 'sum | formula | multiply', 
    value: 'created_at',
    text: 'Created At'
}
```

## sum

you can set ```type: "bool"``` in ```fields.js```.

```js[fields.js]
export default {
    text: 'total price'
    type: 'calc',
    calc: 'sum',   
    value: 'prices', // [1200,2500,9800]
}
```

## multiply

you can set ```type: "bool"``` in ```fields.js```.

```js[fields.js]
export default {
    text: 'Created At',
    type: 'calc',
    calc: 'multiply',   
    value: 'orders'
}
```

## formula

you can set ```type: "bool"``` in ```fields.js```.

```js[fields.js]
export default {
    type: 'calc',
    calc: 'formula',
    'formula' : '2* values /3', // eval() script - values, this.value and formData are accessible  
    input: [1,2,3,4],   
    value: 'created_at',
    text: 'Created At'
}
```_

## props
- v-model 
- label