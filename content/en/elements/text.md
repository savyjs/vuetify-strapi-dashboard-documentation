---
title: Text
description: ''
position: 11
category: 'Form Elements'
---

## Introduction
text field is simple component of v-text-field of vuetify component.

## component

```js
< />
```

## name
you can set ```type: "text"``` in ```fields.js``` for having text field in your CRUD.

example:
```js[fields.js]
export default {
    type: 'text', 
    value: 'lastname',
    text: 'title name',
    sortable: true,
    header: true,
    edit: true,
    create: true,
    show: true, 
    pop: true,
    filterable: true,
    searchable: true,
}
```

## props
| name  |  description |  
|---|---|
| value | value of field  | 