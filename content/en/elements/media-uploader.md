---
title: media uploader
description: ''
position: 11
category: 'Form Elements'
---

## Introduction
this is a component that create an upload input for media files.

## component
```vue
<media-uploader :type="['photo']" v-model="imgSrc"  label="photo"/>
```

## field
you can set ```type: "media"``` in ```fields.js```.

```js[fields.js]
export default {
    value: 'media',
    type: 'media',
    types: ['photo', 'audio', 'video', 'files'],
    text: 'media'
}
```

## props
- v-model: URL of uploaded file
- type: photo | audio | video | files
- label
- placeholder
- getId: return uploaded file id (default: false)
- getObj: return uploaded file object (default: false)