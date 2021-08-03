---
title: API structure 
description: ''
position: 11.1 
category: 'Process Builder'
---

## Introduction

process builder is a component which creates forms, groups and elements. VSD form builder uses 4 strapi collections with
specific fields:
1- form 2- group 3- element 4- records

as you see, we have to create following collections:

## 1. form

go to Strap Admin panel and create a form collection. this collection has relations to group (many-to-many) and record (
one-to-many).

list of fields:

```json[form]
{
  "id": "string",
  "name": "string",
  "photo": {
    "id": "string",
    "name": "string",
    "alternativeText": "string",
    "caption": "string",
    "width": 0,
    "height": 0,
    "formats": {},
    "hash": "string",
    "ext": "string",
    "mime": "string",
    "size": 0,
    "url": "string",
    "previewUrl": "string",
    "provider": "string",
    "provider_metadata": {},
    "related": "string"
  },
  "active": true,
  "groups": [
    {
      "id": "string",
      "name": "string",
      "pre_text": "string",
      "after_text": "string",
      "active": true,
      "forms": [
        "string"
      ],
      "photo": "string",
      "title": "string",
      "page_break": true,
      "elements": [
        "string"
      ]
    }
  ],
  "records": [
    {
      "id": "string",
      "form": "string",
      "meta": {},
      "status": "string",
      "data": {}
    }
  ],
  "title": "string",
  "pre_text": "string",
  "after_text": "string"
}
```

after that, when you want to load a form in VSD, you just need to put form id in `config.js` file like this:

```js[config.js]
export default {
  title: 'Users',
  formId: 1, // form id from Strapi
  icon: "shield",
  path: '/admin/process/register-user'
}

```

![form-strapi](/content/form-strapi.png)

## 2. group

group collection has a relation with form, and also a many-to-many relation with element collection. like above, create
a group collection with these fields in strapi:

```json[group]
{
  "id": "string",
  "title": "string",
  "name": "string",
  "pre_text": "string",
  "after_text": "string",
  "active": true,
  "forms": [
    {
      "id": "string",
      "name": "string",
      "photo": "string",
      "active": true,
      "groups": [
        "string"
      ],
      "records": [
        "string"
      ],
      "title": "string",
      "pre_text": "string",
      "after_text": "string"
    }
  ],
  "photo": {
    "id": "string",
    "name": "string",
    "alternativeText": "string",
    "caption": "string",
    "width": 0,
    "height": 0,
    "formats": {},
    "hash": "string",
    "ext": "string",
    "mime": "string",
    "size": 0,
    "url": "string",
    "previewUrl": "string",
    "provider": "string",
    "provider_metadata": {},
    "related": "string"
  },
  "page_break": true,
  "elements": [
    {
      "id": "string",
      "name": "string",
      "active": true,
      "groups": [
        "string"
      ],
      "title": "string",
      "help": "string",
      "placeholder": "string",
      "readonly": true,
      "hide": true,
      "required": true,
      "type": "string",
      "table": true,
      "show": true,
      "edit": true,
      "pop": true,
      "expand": true,
      "create": true,
      "rules": "string",
      "field": {}
    }
  ]
}
```

![group-strapi](/content/group-strapi.png)

## 3. element

element collection belongs to many groups. like above, create an element collection with these fields in strapi:

```json[element]
{
  "id": "string",
  "name": "string",
  "active": true,
  "groups": [
    {
      "id": "string",
      "name": "string",
      "pre_text": "string",
      "after_text": "string",
      "active": true,
      "forms": [
        "string"
      ],
      "photo": "string",
      "title": "string",
      "page_break": true,
      "elements": [
        "string"
      ]
    }
  ],
  "title": "string",
  "help": "string",
  "placeholder": "string",
  "readonly": true,
  "hide": true,
  "required": true,
  "type": "text",
  "table": true,
  "show": true,
  "edit": true,
  "pop": true,
  "expand": true,
  "create": true,
  "rules": "string",
  "field": {}
}
```

![element-strapi](/content/element-strapi.png)

you can check out [elements](/elements/elements) for available element types.

## 4. records

to save data records we need a collection. you can change controller of this endpoint to customize saved data. if you
want use it normally, create a collection with name "record", with following fields:

```json[record]
{
  "id": "string",
  "form": {
    "id": "string",
    "name": "string",
    "photo": "string",
    "active": true,
    "groups": [
      "string"
    ],
    "records": [
      "string"
    ],
    "title": "string",
    "pre_text": "string",
    "after_text": "string"
  },
  "meta": {},
  "status": "unknown",
  "data": {}
}
```

![records-strapi](/content/records-strapi.png)