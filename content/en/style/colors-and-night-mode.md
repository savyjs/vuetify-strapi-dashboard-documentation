---
title: Icons8
description: ''
position: 15
category: 'colors and night mode'
---

## disable night mode button
set 

## vsd layout - theme coloros

list of Vsd layout colors:

```js[nuxt.config.js]
import colors from 'vuetify/es5/util/colors'
...

theme: {
      themes: {
        light: {
          appbar: colors.blue.darken3,
          appbartext: colors.shades.white,
          drawer: colors.shades.white,
          drawertext: colors.blue.darken3,
        },
        dark: {
          appbar: colors.grey.darken3,
          appbartext: colors.shades.white
        },
      }
}
```