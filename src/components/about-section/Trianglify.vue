<template>
  <div id="trianglify-container">
  </div>
</template>
<script>
  var Trianglify = require('trianglify')
  var pattern = Trianglify({
    cell_size: 100,
    variance: '0.88',
    seed: '3onhz',
    x_colors: 'YlGnBu',
    // x_colors: ['#1a1a1a', '#4d4d4d', '#878787', '#bababa', '#e0e0e0', '#ffffff', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '003c30'],
    y_colors: 'match_x',
    palette: Trianglify.colorbrewer,
    color_space: 'lab',
    color_function: false,
    height: window.innerHeight,
    width: window.innerWidth})

  export default {
    name: 'Trianglify',
    methods: {
      loadTrianglify: function () {
        document.getElementById('trianglify-container').appendChild(pattern.canvas())
        var canvas = document.querySelector('canvas')
        // set style for canvas element
        canvas.setAttribute('id', 'canvas-pattern')
        canvas.setAttribute('style', 'display: block;')
        document.getElementById('canvas-pattern').addEventListener('mouseover', this.zoomInCanvasPattern)
        document.getElementById('canvas-pattern').addEventListener('mouseout', this.zoomOutCanvasPattern)
      }
    },
    mounted: function () {
      this.loadTrianglify()
    }
  }
</script>
<style lang="less" scoped>
  #trianglify-container {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
</style>
