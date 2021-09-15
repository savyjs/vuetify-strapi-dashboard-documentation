---
title: custom component element 
description: ''
position: 11 
category: 'Form Elements'
---

## field properties

define this field with properties like below

```js
{
    text: 'Inquiry Account',
        value
:
    'status',
        emit
:
    'id',
        type
:
    'custom',
        meta
:
    {
        component: 'InquiryAccount'
    }
,
    align: 'start',
        sortable
:
    false,
        header
:
    false,
        edit
:
    true,
        filterable
:
    false,
        create
:
    false,
        show
:
    true,
        pop
:
    true
}
,
```

## in common types filed

```vue

<component
    :required="_.get(field,'required',false)"
    :is="_.get(field,'meta.component',undefined)"
    v-model="data"
    :rules="getRules"
    :error-messages="errors"
    :place="place || 'create'"
    :type="type"
    :formData="formData"
    @updateFormData="updateFormData"
    @reload="reload"
    :label="label"
    :icon="icon"
    :field="field"
/>
```



## in common types show

when it's time to show element value these props are available to component.

```vue

<component
    @reload="reload"
    @update="update"
    :item="item"
    :is="_.get(field,'meta.component',undefined)"
    v-model="data"
    :main="main"
    :place="place || 'show'"
    :field="field"
/>
```

update and reload methods:

```js
methods:{
    update(value)
    {
        let name = _.get(this.field, 'emit', _.get(this.field, 'value', undefined));
        let id = this.getId;
        if (this.field.edit !== undefined && name) {
            this.$emit('update', id, name, value)
        }
    },
    reload()
    {
        this.$emit('reload', true)
    }
}
```

## props

- v-model
- label