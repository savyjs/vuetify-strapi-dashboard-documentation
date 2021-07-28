---
title: Enum Select
description: ''
position: 11
category: 'Form Elements'
---

## Introduction
text field is a select list that uses nuxt store or strapi collections. 

## component

```vue
<select-enum v-model="data" :field="field" :label="label"/>
```

## name
you can set ```type: "select"``` in ```fields.js``` for having select field in your CRUD.

example:
```js[fields.js]
export default {
    value: 'group',
    text: 'select group',
    type: 'enum',
    multiple: false,
    meta: [
	{text:'option 1 ',value: 1},
	{text:'option 2 ',value: 2},
	]
}
```

## props
- v-model: id or key 
- multiple: (false)