<template>
  <div class="txt-c">
    <div class="clr-indigo-800">
      <h1>{{title}}</h1>
      <h3>{{msg}}</h3>
    </div>
    <img src="../../../../../misc/design/logo/matreshka.svg" width="240" alt="matreshka" class="m-t-3 m-b-2" />
    <p class="p-l-10 p-r-10 m-t-4 m-b-3 txt-j">{{desc}}</p>
    <a :href="srcUrl" class="btn clr-bg-indigo-800 clr-pal-def-white brd-radius-3 brd-style-none">Исходный код</a>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: 'Матрёшка',
      msg: 'Модульный HTML5/CSS3 каркас',
      srcUrl: 'https://github.com/avmaisak/Matrioshka',
      desc: 'Матрёшка позволяет быстро прототипировать Ваши идеи, и воплощать их в жизнь. Благодаря модульной системе, Вы экономите место и используете только те компоненты, которые Вам необходимы в каждом конкретном случае.'
    }
  }
}
</script>
