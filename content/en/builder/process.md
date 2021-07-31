---
title: Process Builder
description: ''
position: 11.1
category: 'Process Builder'
---

## Introduction
process builder is a set of VSD components that allow you to create forms, groups and elements. 
it also shows saved record as a table.
the original idea of this component came from "Fabrik", a joomla component for creating forms and building processes.
this VSD component has 3 levels:

### 1- forms
a form is the first level of creating a process. each form should contain at least one group and has its own records. for example, if you want an advanced form for adding your customers,
your form is "user" and all registered users will be shown within the users table.

form


records
![form](/content/form-vsd.png)

### 2- groups
groups are between forms and elements. a group is a set of some elements.

### 3- elements
elements are atomic part of form, like fields. text field, image field, simple text.

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