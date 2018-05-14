<template>
  <div id="app">
    <header class="clr-bg-indigo-500 p-2"></header>
    <main >
      <div class="rw">
        <div class="cl w-2 h-100 clr-bg-grey-200 p-t-1 p-l-2 clr-indigo-800">
           <a><router-link to="/">Главная</router-link></a>
        </div>
        <div class="cl w-10 ">
          <div class="p-t-1 p-l-2 p-r-3 p-b-4">
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
