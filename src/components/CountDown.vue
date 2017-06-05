<template>
  <div id="app">
    <div class="countdown-container">
      <navigation></navigation>
      <h1>Hello World</h1>
    </div>
  </div>
</template>

<script>
  import Navigation from './Navigation'
  export default {
    name: 'CountDown',
    components: {
      Navigation
    }
  }
</script>
