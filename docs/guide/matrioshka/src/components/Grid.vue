<template>
  <div>
    <h1 class="clr-indigo-600 m-b-2">Сетка</h1>
    <div class="rw h-3">
        <div class="cl w-1 clr-bg-green-50"></div>
        <div class="cl w-1 clr-bg-green-100"></div>
        <div class="cl w-1 clr-bg-green-200"></div>
        <div class="cl w-1 clr-bg-green-300"></div>
        <div class="cl w-1 clr-bg-green-400"></div>
        <div class="cl w-1 clr-bg-green-500"></div>
        <div class="cl w-1 clr-bg-green-600"></div>
        <div class="cl w-1 clr-bg-green-700"></div>
        <div class="cl w-1 clr-bg-green-800"></div>
        <div class="cl w-1 clr-bg-green-900"></div>
        <div class="cl w-1 clr-bg-green-800"></div>
        <div class="cl w-1 clr-bg-green-700"></div>
    </div>

    <pre class="p-2 clr-bg-grey-100 m-t-2 m-b-2 clr-grey-700">
      &lt;div class="rw">
       &lt;div class="cl w-1">&lt;/div>
       &lt;div class="cl w-1">&lt;/div>
       &lt;div class="cl w-1">&lt;/div>
       &lt;div class="cl w-1">&lt;/div>
       &lt;div class="cl w-1">&lt;/div>
       &lt;div class="cl w-1">&lt;/div>
       &lt;div class="cl w-1">&lt;/div>
       &lt;div class="cl w-1">&lt;/div>
       &lt;div class="cl w-1">&lt;/div>
       &lt;div class="cl w-1">&lt;/div>
       &lt;div class="cl w-1">&lt;/div>
      &lt;/div></pre>

    <div class="rw h-2 m-t-2">
        <div class="cl w-4 clr-bg-blue-50"></div>
        <div class="cl w-4 clr-bg-blue-100"></div>
        <div class="cl w-4 clr-bg-blue-200"></div>
    </div>

    <pre class="p-2 clr-bg-grey-100 m-t-2 m-b-2 clr-grey-700">
      &lt;div class="rw">
       &lt;div class="cl w-4">&lt;/div>
       &lt;div class="cl w-4">&lt;/div>
       &lt;div class="cl w-4">&lt;/div>
      &lt;/div></pre>

    <div class="rw h-2 m-t-2">
        <div class="cl w-6 clr-bg-amber-50"></div>
        <div class="cl w-6 clr-bg-amber-100"></div>
    </div>

    <pre class="p-2 clr-bg-grey-100 m-t-2 m-b-2 clr-grey-700">
      &lt;div class="rw">
       &lt;div class="cl w-6">&lt;/div>
       &lt;div class="cl w-6">&lt;/div>
      &lt;/div></pre>

  </div>
</template>

<script>
export default {
  name: 'Start',
  data () {
    return {
      iterator: 12
    }
  }
}
</script>
