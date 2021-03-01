---
title: select photo
description: ''
position: 11
category: 'Form Elements'
---

## Introduction
this is a component that create an upload input for photo files.

## component
```vue
<select-photo  v-model="imgSrc"  label="upload photo"/>
```

## field
you can set ```type: "image"``` in ```fields.js```.

```js[fields.js]
export default {
    value: 'image',
    type: 'image',
    text: 'avatar'
}
```

## props
- v-model: URL of uploaded file
- type: photo | audio | video | files
- label
- placeholder
- getId: return uploaded file id (default: false)
- getObj: return uploaded file object (default: false)