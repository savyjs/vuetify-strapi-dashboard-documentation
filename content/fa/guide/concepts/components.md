---
title: کامپوننت 
prev: ./routing
next: ./store
---

# مطالب
[[toc]]


## کامپوننت ها
تمامی فایل هایی که پسوند vue دارند به نوعی کامپوننت ویو محسوب می شوند. این فایل ها سه قسمت template , script و style دارند. در اینجا منظورمان از کامپوننت ها آنهایی هستند که می توانند در صفحات، لایه ها و دیگر کامپوننت ها ایمپورت شوند، یکسری داده به عنوان prop بگیرند و یکسری داده خروجی برگردانند و یا به اصطلاح emit کنند.

## ساخت کامپوننت جدید
کامپوننت ها به صورت پیشفرض در فولدر components قرار دارند. اما به صورت کلی این فایل ها هر جایی می توانند باشند و نیازی نیست که حتما در فولدر کامپوننت باشند.
::: tip
برای ساخت کامپوننت برای یک صفحه به آدرس users/profile بهتر است درون فولدر ```components``` همین مسیر را بسازید، یعنی

```
مسیر صفحه: ~/pages/users/profile/index.vue
مسیر کامپوننت (پیشنهاد): ~/components/users/profile/MyComponent.vue
```
:::
::: tip
بهتر است نام کامپوننت ها ```PascalCase``` باشد.
:::


## استفاده از کامپوننت ها
برای استفاده از کامپوننت ها در ناکس مثل ویو عمل کنید. ابتدا آن را به صفحه import کنید و سپس در قسمت component آن را رجیستر کنید.
اگر بخوایم از کامپوننت بالا استفاده کنیم داریم:

```// مسیر صفحه: ~/pages/users/profile/index.vue```
```vue
<template>
 <div>
  <my-component v-model="data" />
 </div>
</template>

<script>
import MyComponent from ~/components/users/profile/MyComponent.vue

export default {
 data(){
  return {
   data: null 
  }
 },
 components: {MyComponent}
}
</script>

```

## تزریق دیتا به کامپوننت (یکطرفه) به کمک PROPS
در ناکس مانند ویو برای ارسال اطلاعات به داخل کامپوننت از props استفاده می شود. به مثال زیر توجه کنید:

```vue
<!-- موقع استفاده از کامپوننت -->
<my-component label="برچسب" v-model="data" :help="getHelp" :item="myItem" />
```

```js
// داخل کامپوننت
<script>
  export default {
    props: ['label', 'value', 'help', 'item'],
  ....

</script>
``` 
## تزریق و گرفتن همزمان دیتا (دو طرفه) با v-model
همانگونه که در مثال های بالا دیدید برای استفاده از v-model در کامپوننت ها باید از prop با نام value استفاده کنید. از آن طرف برای Emit کردن باید مقدار جدید را به input ارسال کنید.

```vue 
<my-component v-model="id" />
```
```js 
  export default {

    props: ['value'],

   // ...
    
    methods: {
      sendId(id){
        this.$emit('input',id)
      }
    }
 } 
```
