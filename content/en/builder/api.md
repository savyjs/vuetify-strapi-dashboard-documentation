---
title: API structure
description: ''
position: 11
category: 'Process Builder'
---

## Introduction
process builder is a component which creates forms, groups and elements. 
the configuration of process manager loads from API.

## config

```js[config.js]
export default {
     title: 'Register New User',
     formId: 1,
     icon: "shield",
     path: '/admin/process/register-user', // custom name
}
```

## props
- v-model 
- label