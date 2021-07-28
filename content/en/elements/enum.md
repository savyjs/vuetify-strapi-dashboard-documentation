---
title: enum select
description: ''
position: 11
category: 'Form Elements'
---

## Introduction
text element represent a select list from defined array. if you want to load items from store or api server look at [select element](/elements/select).

## component

```vue
<select-enum v-model="data" :field="field" :label="label"/>
```

## name
you can set ```type: "enum"``` in ```fields.js``` for having enum select element your CRUD.

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