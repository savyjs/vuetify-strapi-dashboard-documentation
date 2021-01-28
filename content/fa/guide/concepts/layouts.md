---
title: لایه ها 
prev: ./structure
next: ./view
---

برای قالب دهی و شکل دهی به سایت، فولدرهای لیوت ( لایه ، layout) و صفحه (page) مورد استفاده قرار می گیرند.
لیوت ها حکم پدر و صفحات ها حکم فرزند را دارند. شاکله و قسمت های ثابت قالب در لیوت قرار می گیرد و محتوای متغیر صفحات در فولدر page قرار می گیرد. در لیوت از asyncData نمی توان استفاده کرد. کدهای قرارگرفته در لیوت و پیج هر دو دارای سه قسمت template, script و style‌ می باشد. تگ template ضروری می باشد و فقط می تواند یک تگ درونی داشته باشد.

برای مثال فایل لیوت داشبورد ادمین:
```vue
<template>
<div>
 <navbar>...</navbar>
 <main>
  <nuxt /> <!-- صفحه در اینجا لود می شود -->
 <main>
 <footer>
 ...
 </footer>
</div>
</template>

<script>
export default {
// ~/layout/admin.vue
data(){
 return {

 }
},

}
</script>
```

به صورت پیشفرض لیوت Default.vue برای تمامی صفحات استفاده می شود. اگر می خواهید لیوت را به صفحه یا گروهی از صفحات اختصاص دهید کافی است نام لیوت را در مقابل layout بنویسید.
```vue
<template>
 <div>
  <nuxt /> <!-- حالا تمامی فایل های پوشه ی ادمین هم از لیوت این صفحه استفاده می کنند -->
 </div>
</template>
<Script>

<script>
// ~/pages/adminAuth.vue
export default {
layout: "admin" // نام فایل لیوت را بنویسید
}
</script>
```
