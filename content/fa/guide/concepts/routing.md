---
title: روتینگ 
prev: ./view
next: ./components
--

## روتینگ ساده
ناکس با کمک ```vue-router``` تمامی روت های سایت را به صورت اتوماتیک و بر اساس چینش درختی فولدر pages می سازد.
برای جابجایی بین صفحات بهترین کار استفاده از کامپوننت ```<nuxt-link/>``` می باشد.

```vue
<template>
  <nuxt-link to="/">خانه</nuxt-link>
</template>
```

برای آشناشدن با روتینگ ناکس درختواره ی زیر را در نظر بگیرید

``` 
pages/
--| user/
-----| index.vue
-----| one.vue
--| index.vue
```

این ساختار به صورت اتوماتیک تبدیل به روتینگ زیر می شود

```js
router: {
  routes: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'user',
      path: '/user',
      component: 'pages/user/index.vue'
    },
    {
      name: 'user-one',
      path: '/user/one',
      component: 'pages/user/one.vue'
    }
  ]
}
```

## روتینگ دینامیک 

برای متغیر کردن پارامترهای روت کافی است از زیرخط "_" در ابتدای نام فایل استفاده کنید.
به مثال زیر توجه کنید
‍‍
```
pages/
--| _slug/
-----| comments.vue
-----| index.vue
--| users/
-----| _id.vue
--| index.vue
```


این نام گذاری معادل روتینگ زیر است
```js
router: {
  routes: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'users-id',
      path: '/users/:id?',
      component: 'pages/users/_id.vue'
    },
    {
      name: 'slug',
      path: '/:slug',
      component: 'pages/_slug/index.vue'
    },
    {
      name: 'slug-comments',
      path: '/:slug/comments',
      component: 'pages/_slug/comments.vue'
    }
  ]
}

```
همانطور که می بینید مقدار ```id``` در مسیر /users/ با علامت ```؟``` آمده است که به معنای اختیاری بودن id می باشد. برای اجباری کردن id کافی است یک فایل با نام ```index.vue``` در فولدر user بسازید.

::: warning
روت های دینامیک با دستور ```generate``` ساخته نمی شوند.
:::

## روتینگ تودرتو

گاهی اوقات نیاز دارید تا یک صفحه را درون یک صفحه ی دیگر نمایش دهید. در ناکس برای این کار کافی است یک فایل همنام درکنار فولدر پدر بسازید.
به مثال زیر توجه کنید
```
pages/
--| users/
-----| _id.vue
-----| index.vue
--| users.vue
```

حالا تگ <nuxt-child/> را درون فایل users.vue که کامپوننت پدر می باشد قرار می دهیم
```vue
<template>
 <nuxt-child />
</template>
```

روت های زیر به صورت اتوماتیک ساخته می شوند
```js
router: {
  routes: [
    {
      path: '/users',
      component: 'pages/users.vue',
      children: [
        {
          path: '',
          component: 'pages/users/index.vue',
          name: 'users'
        },
        {
          path: ':id',
          component: 'pages/users/_id.vue',
          name: 'users-id'
        }
      ]
    }
  ]
}
```

 
## روتینگ تودرتو اتوماتیک

این مدل روتینگ خیلی پیش نمی آید ولی فرض کنید قرار باشد چندین روت دینامیک به صورت تودرتو داشته باشیم.
در این شرایط دو حالت ممکن است رخ دهد:

   - اینکه عمق روت ها محدود باشد.
    - اینکه عمق روت ها نامعلوم باشد.

برای مورد اول ناکس این کار را با همان منطق قبل برای شما انجام می دهد. به مثال زیر دقت کنید.
```
pages/
--| _category/
-----| _subCategory/
--------| _id.vue
--------| index.vue
-----| _subCategory.vue
-----| index.vue
--| _category.vue
--| index.vue
```

این ساختار مشابه کد زیر است
```js
router: {
  routes: [
    {
      path: '/',
      component: 'pages/index.vue',
      name: 'index'
    },
    {
      path: '/:category',
      component: 'pages/_category.vue',
      children: [
        {
          path: '',
          component: 'pages/_category/index.vue',
          name: 'category'
        },
        {
          path: ':subCategory',
          component: 'pages/_category/_subCategory.vue',
          children: [
            {
              path: '',
              component: 'pages/_category/_subCategory/index.vue',
              name: 'category-subCategory'
            },
            {
              path: ':id',
              component: 'pages/_category/_subCategory/_id.vue',
              name: 'category-subCategory-id'
            }
          ]
        }
      ]
    }
  ]
}
```




برای حالتی که عمق روت نامعلوم است کافی است نام فایل را به آندریلاین یعنی ``` ـ ```تغییر دهید.
به مثال زیر دقت کنید.
```
pages/
--| people/
-----| _id.vue
-----| index.vue
--| _.vue
--| index.vue
```
در این حالت، ریکوئست های ارسالی به شکل زیر تقسیم می شود:

 ![قالب دهی در ناکس](</routing-path.png>)
 
## دسترسی به پارامترهای روت

برای دسترسی به مقادیر متغیر پارامتر مانند id می توانید از طریق متغیر گلوبال به شکل زیر آن را بگیرید:

```js
this.$route.params.{parameterName}
```

برای مثال
```js
//فایل: users\_id.vue


computed:{
 id(){
  return this.$route.params.id
 }
}

// و یا

async asyncData({params}){
 return {id:params.id}
}
```

