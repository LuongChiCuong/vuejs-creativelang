<template>
    <div class="greeting">
      <section>
        <h1>Hi, I'm Cuong as a Creative Front End Developer.</h1>
        <h2>Nice to know you.</h2>
      </section>
    </div>
</template>
<script>
  export default {
    name: 'Greeting'
  }
</script>
<style lang="less" scoped>
  .greeting {
    position: absolute;
    // background: white;
    // opacity: 0.4;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    section {
      position: absolute;
      z-index: 2;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      h1 {
        font-size: 2.5rem;
        line-height: 46px;
      }
      h2 {
        font-size: 1.5rem;
        letter-spacing: 5px;
      }
    }
  }

</style>
