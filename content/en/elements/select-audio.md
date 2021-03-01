---
title: select audio
description: ''
position: 11
category: 'Form Elements'
---

## Introduction
this is a component that create an upload input for audio files.

## component
```vue
<select-audio  v-model="audioSrc"  label="upload audio"/>
```

## field
you can set ```type: "image"``` in ```fields.js```.

```js[fields.js]
export default {
    value: 'audio',
    type: 'audio',
    text: 'user voice'
}
```

## props
- v-model: URL of uploaded file
- type: photo | audio | video | files
- label
- placeholder
- getId: return uploaded file id (default: false)
- getObj: return uploaded file object (default: false)