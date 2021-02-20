---
title: Elements
description: ''
position: 10
category: 'Form Elements'
---
## common elements
elements are components that handle fields in a CRUD.
to manage fields in crud more easy, there are some components to handle fields in table view, form view,show page view, filter view and report view. these components called ```CommonType```s.

## CommonTypesField
the first component is ```CommonTypesField``` that used to show inpput fields in forms. 
#### Props
- v-model: set and get value of field 
- formData: data of other fields
- type: type of filed, text, image, date , ... . see elements list for list of types.
- field: properties of field from ```fields.js``` file.
- place: where is the place of field. could be edit page or create form.

## CommonTypesShow
this component used to show value of filed in ```showPage``` and ```tablePage```. 

## CommonTypesExpand 

## CommonTypesFilterField

## CommonTypesReportField