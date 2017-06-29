<template>
  <div id="app">
    <div id="about-page">
      <TopSection></TopSection>
      <!-- Section 1: Greeting -->
      <section data-index="1" class="about-section active">
        <TrianglifySection></TrianglifySection>
        <GreetingSection></GreetingSection>
      </section>
      <!-- Section 2: About my self -->
      <section data-index="2" class="about-section">
        <IntroductionSection></IntroductionSection>
      </section>
      <!-- Section 3: Skills -->
      <section data-index="3" class="about-section">
        <SkillSection></SkillSection>
      </section>
      <!-- Section 4: Working experiences -->
      <section data-index="4" class="about-section">
        <ExpSection></ExpSection>
      </section>
      <!-- Section 5: Goals -->
      <section data-index="5" class="about-section">
        <TargetSection></TargetSection>
      </section>
      <!-- End section -->
      <!-- Navigation button  -->
      <section class="control">
        <!-- <button v-on:click="goBack">Prev</button>
        <button v-on:click="goNext">Next</button> -->
        <span v-on:click="goBack" v-show="counter > 1">Prev</span>
        <span v-on:click="goNext" v-show="counter < 5">Next</span>
      </section>
    </div>
  </div>
</template>
<script>
  import TopSection from './about-section/TopSection'
  import TrianglifySection from './about-section/Trianglify'
  import GreetingSection from './about-section/Greeting'
  import IntroductionSection from './about-section/Introduction'
  import SkillSection from './about-section/Skill'
  import ExpSection from './about-section/Exp'
  import TargetSection from './about-section/Target'

  export default {
    name: 'About',
    components: {
      TrianglifySection, GreetingSection, TopSection, IntroductionSection, SkillSection, ExpSection, TargetSection
    },
    data () {
      return {
        counter: 1,
        currentIndex: 1
      }
    },
    methods: {
      goBack: function (event) {
        if (this.counter === 1) return
        this.counter -= 1
        console.log(this.counter)
      },
      goNext: function (event) {
        if (this.counter === 5) return
        this.counter += 1
        console.log(this.counter)
      }
    }
  }
</script>
<style lang="less">
  #about-page {
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: relative;
    height: 100%;
    .about-section {
      position: absolute;
      height: 100vh;
      width: 100%;
      .section-container {
        height: 100vh;
        width: 100%;
        position: absolute;
        background-color: white;
        z-index: 5;
      }
      &:nth-of-type(2) {
        transform: translateY(100%);
    	}
      &:nth-of-type(3) {
        transform: translateY(200%);
    	}
      &:nth-of-type(4) {
        transform: translateY(300%);
    	}
      &:nth-of-type(5) {
        transform: translateY(400%);
    	}
    }
    .control {
      position: fixed;
      left: 94%;
      top: 50%;
      color: black;
      z-index: 10;
    }
  }
</style>
