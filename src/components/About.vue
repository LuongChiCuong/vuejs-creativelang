<template>
  <div id="app">
    <div id="about-page">
      <TopSection></TopSection>
      <TrianglifySection></TrianglifySection>
      <GreetingSection></GreetingSection>
    </div>
  </div>
</template>
<script>
  import TopSection from './about-section/TopSection'
  import TrianglifySection from './about-section/Trianglify'
  import GreetingSection from './about-section/Greeting'

  export default {
    name: 'About',
    components: {
      TrianglifySection, GreetingSection, TopSection
    }
  }
</script>
<style lang="less" scoped>
  #about-page {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
</style>
