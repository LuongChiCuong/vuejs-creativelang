<template>
  <section class="control">
    <!-- <button v-on:click="goBack">Prev</button>
    <button v-on:click="goNext">Next</button> -->
    <span v-on:click="clickOnBack" v-bind:class="{ hidden: counter <= 1}">
      <i class="material-icons" title="Go to previous Section">keyboard_arrow_up</i>
    </span>
    <span v-on:click="clickOnNext" v-bind:class="{ hidden: counter >= 5}">
      <i class="material-icons" title="Go to next Section">keyboard_arrow_down</i>
    </span>
  </section>
</template>
<script>
  export default {
    name: 'Control'
  }
</script>
<style lang="less" scoped>
  .control {
    position: fixed;
    right: 15px;
    top: 44%;
    color: inherit;
    z-index: 10;
    cursor: pointer;
    width: 45px;
    text-align: center;
    .hidden {
      visibility: hidden;
    }
    span > i {
      font-size: 45px;
      line-height: 45px;
    }
  }
</style>
