<template>
  <div id="app">
    <div id="about-page" v-on:wheel="handleMouseWheel">
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
        <span v-on:click="clickOnBack" class="arrow-up" v-bind:class="{ hidden: counter <= 1}">
          <i class="material-icons" title="Go to previous Section">keyboard_arrow_up</i>
        </span>
        <span v-on:click="clickOnNext" class="arrow-down" v-bind:class="{ hidden: counter >= 5}">
          <i class="material-icons" title="Go to next Section">keyboard_arrow_down</i>
        </span>
      </section>
    </div>
  </div>
</template>
<script>
  const Velocity = require('velocity-animate')
  const $ = require('jQuery')
  const _ = require('lodash')
  // import components
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
        currentIndex: 1,
        topValue: 100,
        scrolled: false
      }
    },
    methods: {
      clickOnBack: function (event) {
        if (this.counter === 1) return
        this.counter -= 1
        var activeElement = this.findActiveElement()
        this.moveActiveSection(activeElement, this.counter)
        this.setActiveSection(this.counter)
        this.animateControl()
      },
      clickOnNext: function (event) {
        if (this.counter === 5) return
        this.counter += 1
        var activeElement = this.findActiveElement()
        this.moveActiveSection(activeElement, this.counter)
        this.setActiveSection(this.counter)
        this.animateControl()
      },
      findActiveElement: function () {
        return $('.about-section.active')
      },
      moveActiveSection: function (el, counter) {
        var moveTopValue = 0
        var index = parseInt(el.attr('data-index'))
        if (index < counter) {
          moveTopValue = (index * this.topValue * -1) + '%'
        } else if (index > counter) {
          moveTopValue = ((index - 1) * this.topValue) + '%'
        }
        // Velocity(el, {top: moveTopValue}, [8])
        Velocity(el, {scale: 0.8}, 450)
        Velocity(el, {top: moveTopValue}, 500, 'ease-in-out')
        // cubic bezier style
        // Velocity(el, {top: moveTopValue}, 1000, [ 0.17, 0.67, 0.83, 0.67 ])
        Velocity(el, {scale: 1}, 450)
        el.removeClass('active')
      },
      setActiveSection: function (counter) {
        $($('.about-section')[counter - 1]).addClass('active')
        // Velocity('.about-section.active', {top: 0}, [8])
        Velocity($('.about-section.active'), {scale: 0.8}, 450)
        // cubic bezier style
        // Velocity($('.about-section.active'), {top: 0}, 1000, [ 0.17, 0.67, 0.83, 0.67 ])
        Velocity($('.about-section.active'), {top: 0}, 500, 'ease-in-out')
        Velocity($('.about-section.active'), {scale: 1}, 450)
      },
      animateControl: function () {
        if (this.counter === 1) {
          Velocity($('.arrow-down'), {marginTop: '+=15px'}, {loop: true, delay: 150})
        } else if (this.counter === 5) {
          Velocity($('.arrow-up'), {marginTop: '-=15px'}, {loop: true, delay: 150})
        } else {
          Velocity($('.arrow-down'), 'stop')
          Velocity($('.arrow-down'), {marginTop: 0}, 150)
          Velocity($('.arrow-up'), 'stop')
          Velocity($('.arrow-up'), {marginTop: 0}, 150)
        }
      },
      handleMouseWheel: _.debounce(function (event) {
        if (event.detail > 0 || event.wheelDelta < 0) {
          // alternative options for wheelData: wheelDeltaX & wheelDeltaY
          // scroll down
          this.clickOnNext()
        } else {
          // scroll up
          this.clickOnBack()
        }
        // prevent page fom scrolling
        return false
      }, 500)
    },
    mounted: function () {
      this.animateControl()
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
    // transition: all 1s ease-in-out;
    // background-color: #001a00;
    background-color: #263238;
    color: #333;
    .about-section {
      position: absolute;
      height: 100vh;
      width: 100%;
      &.active{
        // top: 0 !important;
        // background-: teal !important;
      }
      .section-container {
        height: 100vh;
        width: 100%;
        position: absolute;
        background-color: white;
        z-index: 5;
      }
      &:nth-of-type(2) {
        top: 100%;
    	}
      &:nth-of-type(3) {
        top: 200%;
    	}
      &:nth-of-type(4) {
        top: 300%;
    	}
      &:nth-of-type(5) {
        top: 400%;
    	}
    }
    .control {
      position: fixed;
      left: 94%;
      top: 44%;
      color: inherit;
      z-index: 10;
      cursor: pointer;
      width: 45px;
      text-align: center;
      .hidden {
        visibility: hidden;
      }
      span {
        display: block;
        i {
          font-size: 45px;
          line-height: 45px;
        }
      }
    }
  }
</style>
