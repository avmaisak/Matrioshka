<template>
  <div id="app">
    <header class="clr-bg-indigo-500 p-1 clr-pal-def-white pos-fixed fix-t">
      <div class="cont-fluid">
        <a><router-link to="/" class="m-r-1"><i class="mi-home"></i></router-link></a>
        <a href="https://github.com/avmaisak/Matrioshka" class="m-r-1 flt-r"><i class="mi-github"></i></a>
      </div>
    </header>
    <main class="m-t-3">
      <div class="rw">
        <div class="cl w-2 h-100 clr-bg-grey-200 clr-indigo-800 d-none-smx d-none-sm">
          <div class="p-t-1 p-l-2">
           <a><router-link to="/" class="d-block p-t-1 p-b-1">Главная</router-link></a>
           <a><router-link to="/Start" class="d-block p-b-1">Начало</router-link></a>
           <h3 class="m-b-1 txt-sz-1-3">Общие</h3>
           <div class="clr-grey-800">
              <a><router-link to="/Grid" class="d-block p-b-1">Сетка</router-link></a>
              <a><router-link to="/Palette" class="d-block p-b-1">Цветовая палитра</router-link></a>
              <a><router-link to="/Icons" class="d-block p-b-1">Иконки</router-link></a>
           </div>
           </div>
        </div>
        <div class="cl w-10 w-12-sm w-12-smx">
          <div class="p-t-2 p-l-2 p-r-3 p-b-4">
            <router-view/>
          </div>
        </div>
      </div>
    </main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" src="../../../../src/scss/matrioshka.complete.scss"></style>
<style lang="css" src="../../../../dist/icons/css/matrioshkaIcons.min.css"></style>
