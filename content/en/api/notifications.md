---
title: Snackbar notifications
description: 'showing notifications in snackbar with global methods'
position: 13.1
category: API Helpers
---

## snackbar component
you can send snackbar notification with [vsdSnackbar.vue](https://github.com/savyjs/vuetify-strapi-dashboard/blob/master/src/components/VsdSnackbar.vue) component. this component registers global methods as shown below:
```js
this.$notifError('a problem occurred!');
this.$notifSuccess('done!');
this.$notifWarning('do not close this window!');
this.$notifInfo('last login 2 hours ago');
```