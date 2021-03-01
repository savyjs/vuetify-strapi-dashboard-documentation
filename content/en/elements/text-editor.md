---
title: text editor
description: ''
position: 11
category: 'Form Elements'
---

## Introduction
this field shows a text editor with [vue-wysiwyg](https://www.npmjs.com/package/vue-wysiwyg) component.

## component

```vue
<text-editor v-model="text" label="about me" />
```

## name
you can set ```type: "text"``` in ```fields.js``` for having text field in your CRUD.

example:
```js[fields.js]
export default {
    type: 'rich', 
    value: 'about',
    text: 'about me'
}
```

## props
| name  |  description |  
|---|---|
| value | value of field  | 