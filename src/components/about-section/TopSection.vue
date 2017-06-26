<template>
    <div class="top-section">
      <span  v-on:click="goToPrevious" class="back-txt">Back to Creative Lang</span>
    </div>
</template>
<script>
  import VueRouter from 'vue-router'

  var router = new VueRouter()
  export default {
    name: 'TopSection',
    methods: {
      goToPrevious: function () {
        router.back()
      }
    }
  }
</script>
<style lang="less" scoped>
  .top-section {
    z-index: 9;
    position: fixed;
    top: 10px;
    color: white;
    width: 100%;
    text-align: left;
    .back-txt{
      opacity: 0.7;
      margin-left: 10px;
      cursor: pointer;
    }
  }
</style>
