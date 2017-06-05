<template>
  <div id="app">
    <div id="about-page">
      <h1>About me</h1>
    </div>
  </div>
</template>
<script>
  var Trianglify = require('trianglify')
  var pattern = Trianglify({
    cell_size: 100,
    variance: '0.88',
    seed: '3onhz',
    // ['#f0f0f0','#bdbdbd','#636363']
    // ['#ffffff','#f0f0f0','#d9d9d9','#bdbdbd','#969696','#737373','#525252','#252525','#000000']
    // ['#543005','#8c510a','#bf812d','#dfc27d','#f6e8c3','#f5f5f5','#c7eae5','#80cdc1','#35978f','#01665e','#003c30']
    // x_colors: ['#f7f7f7', '#cccccc', '#969696', '#f7f7f7', '#636363', '#252525']
    // x_colors: 'BuGn',
    x_colors: ['#1a1a1a', '#4d4d4d', '#878787', '#bababa', '#e0e0e0', '#ffffff', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '003c30'],
    y_colors: 'match_x',
    palette: Trianglify.colorbrewer,
    color_space: 'lab',
    color_function: false,
    height: window.innerHeight,
    width: window.innerWidth})
  import Navigation from './Navigation'
  import FooterSection from './FooterSection'
  export default {
    name: 'About',
    components: {
      Navigation, FooterSection
    },
    methods: {
      loadTrianglify: function () {
        document.getElementById('about-page').appendChild(pattern.canvas())
        var canvas = document.querySelector('canvas')
        // set style for canvas element
        canvas.setAttribute('style', 'display: block;')
      },
      updateStyleTrianglify: function () {
        setInterval(function () {
          var randomVariance = Math.random()
          pattern.opts.variance = randomVariance
          pattern.canvas()
          // document.getElementById('about-page').appendChild(pattern.canvas())
        }, 1000)
      }
    },
    mounted: function () {
      this.loadTrianglify()
      this.updateStyleTrianglify()
    }
  }
</script>
<style lang="less" scoped>
  #about-page {
    margin: 0;
    padding: 0;
    overflow: hidden;
    h1 {
      position: absolute;
      top: 50%;
      left: 50%;
      display: inline-block;
    }
  }
</style>
