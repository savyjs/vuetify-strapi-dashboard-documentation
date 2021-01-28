---
title: صفحه بندی 
prev: ./layouts
next: ./routing
---

## ساختار قالب و صفحات ناکس

در ناکس صفحات در پوشه pages ساخته می شوند. فرمت صفحات vue. می باشد. هر صفحه از حداقل یک تگ ```<template>``` تشکیل می شود. اسکریپت ها و متدهای بکارگرفته شده در صفحه نیز باید در قسمت ```<script>``` قرار بگیرند.
 
 
 ![قالب دهی در ناکس](</view-in-vue.png>)
 
یک نمونه کد صفحه در ناکس به شکل زیر است:

```vue
<template>
 <div>
  <h1 class="red">سلام {{ name }}!</h1>
  <p>قیمت: {{priceShow}}</p>
 </div>
</template>

<script>
export default {
  
  head () { 
    return {title: '' , titleTemplate: '%s - my site' }
    // تنظیم تگ های عنوان و متاتگ های کلیدی صفحه
  },
  data() {
    return {
    name: null ,
    price: 2000,
    // این تابع شامل متغیرهای صفحه می باشد که در تمام قسمت های صفحه در دسترس اند
   }
  },
  computed: {
    // در این قسمت مقادیر محاسبه شده به برنامه اضافه می شود
    // می تواند یک طرفه از نوع فقط گرفتنی باشد یا دو طرفه از نوع ست/گت باشد
    // 
    priceShow(){
       return (this.price + 'ریال')
    },
    amount:{
     get(){
      return price/200;
     },
     set(number){
      this.pirce = 200*number;
     }
    }
  },
  asyncData (context) {
    // قبل از بارگذاری صفحه این متد اجرا می شود
    // این تابع به صورت اسینک اجرا می شود
    // مقدار بازگتشی این تابع با دیتای صفحه ترکیب می شود
    return { name: 'World' }
  },
  fetch () {
    // این متد قبل از بارگذاری صفحه مقادیر دلخواه را به استور اضافه می کند
  },
   methods: {
     // در این قسمت متدهای دلخواه پروژه افزوده می شود
     calc(first,second){
       return first * second;
     } 
   }
  // ...
}
</script>

<style>
.red {
  color: red;
}
</style>
```
