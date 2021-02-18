---
title: API helper
description: ''
position: 3
category: API Helpers
---

## custom api helpers 
every page (list page, form page, show page) has 3 mixins. first is common.js, second is strapi.js that handle api connection and third is your custom mixin which can add in module config. so you can easily override functional parts without conflict. 

```js[FormHelper.js]
export default {
  mixins: [common, strapi, customPageHelper],
}
```

### table list 
you can add custom api helper for your dashboard. 
sometimes our dashboard needs another API endpoints.
in module config you can set ```apiListHelper```. 
```js[nuxt.config]
{
apiListHelper: require('./modules/custom/apiListHelper.js').default,
}
```
you can look at [strapi.js](https://github.com/savyjs/vuetify-strapi-dashboard/blob/master/src/components/common-ssr/strapi.js) file

in ```apiListHelper.js```:

```js[apiListHelper.js]

```

### form helper

if you want to create or edit an item, you can add your own apiHelper by setting ```apiFormHelper``` property in module options.  
property the key is ```apiFormHelper```. for more information look at you can look at [strapi.js](https://github.com/savyjs/vuetify-strapi-dashboard/blob/master/src/components/common-ssr/formData/strapi.js) file
```js[apiFormPage.js]

export default {
  methods: {
    loadData() {
      let id = _.get(this.formData, 'id', null);
      if (!id) {
        this.canSave = true;
        return;
      }
      this.loader = true;
      this.$axios.$get(this.resource + '/' + id).then(res => {
        this.formData = {...this.formData, ...res};
        this.canSave = true;
      }).catch(err => {
        this.$notifError(err);
      }).finally(() => {
        this.loader = false;
      })
    },
    save(show = false) {
      this.loader = true;
      let formData = this.formData;
      let id = this.formData.id;
      let response;
      if (id) {
        response = this.$axios.$put(this.resource + '/' + id, formData);
      } else {
        response = this.$axios.$post(this.resource, formData);
      }
      response.then(res => {
        this.$notifSuccess(this.$t("success"))
        let id = _.get(res, 'id', id);
        this.formData.id = id;
        if (show && _.get(this, 'showBack', true)) this.$router.push(this.back + '/' + id);
      }).catch(e => {
        this.$notifError(e)
      }).finally(() => {
        this.loader = false;
      })
    }
  }
}
```

