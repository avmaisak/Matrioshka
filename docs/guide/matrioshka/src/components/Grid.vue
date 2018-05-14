<template>
  <div>
    <h1 class="clr-indigo-600 m-b-2">Сетка</h1>
    <div class="rw h-3 m-b-2">
        <div class="cl w-1 clr-bg-green-50">1</div>
        <div class="cl w-1 clr-bg-green-100">2</div>
        <div class="cl w-1 clr-bg-green-200">3</div>
        <div class="cl w-1 clr-bg-green-300">4</div>
        <div class="cl w-1 clr-bg-green-400">5</div>
        <div class="cl w-1 clr-bg-green-500">6</div>
        <div class="cl w-1 clr-bg-green-600">7</div>
        <div class="cl w-1 clr-bg-green-700">8</div>
        <div class="cl w-1 clr-bg-green-800">9</div>
        <div class="cl w-1 clr-bg-green-900">10</div>
        <div class="cl w-1 clr-bg-green-800">11</div>
        <div class="cl w-1 clr-bg-green-700">12</div>
    </div>

    <div class="rw h-3">
        <div class="cl w-3 clr-bg-blue-50">3</div>
        <div class="cl w-4 clr-bg-blue-100">4</div>
        <div class="cl w-5 clr-bg-blue-200">5</div>
    </div>
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
