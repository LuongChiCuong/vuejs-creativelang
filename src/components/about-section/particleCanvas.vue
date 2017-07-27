<template>
    <div id='renderer'>
    </div>
</template>
<script>
  const PIXI = require('pixi.js')
  // requestanimationframe
  const raf = require('raf')
  export default {
    name: 'particleCanvas',
    methods: {
      initCanvas: function () {
        // Create the renderer
        var innerWidth = window.innerWidth
        var innerHeight = window.innerHeight
        var totalDots = 75
        var distance = 150
        var gravity = 0.0001
        var Dots = []

        var renderer = PIXI.autoDetectRenderer(
          innerWidth,                     // innerWidth
          innerHeight,                     // innerHeight
          {                        // Options
            antialiasing: false,
            transparent: false,
            autoResize: true,
            resolution: 1
          },
          false                    // Optionally force canvas rendering
        )
        // Add the canvas to the HTML document
        var renderElm = document.getElementById('renderer')
        console.log(renderElm)
        renderElm.appendChild(renderer.view)
        var stage = new PIXI.Container()
        renderer.view.style.position = 'absolute'
        renderer.view.style.innerWidth = window.innerWidth + 'px'
        renderer.view.style.innerHeight = window.innerHeight + 'px'
        renderer.view.style.display = 'block'
        // To change the background color
        // renderer.backgroundColor = 0x061639
        renderer.backgroundColor = 0xB2DFDB
        // init Dot object
        function Dot () {
          this.x = 0
          this.y = 0
          this.vy = 0
          this.vx = 0
          this.r = 2 + 2 * Math.random()
          // this.color = 0x86A4C1
          this.color = 0x37474F
          this.reset()
        }
        // implement reset function
        Dot.prototype.reset = function () {
          this.x = (Math.random() * innerWidth)
          this.y = (Math.random() * innerHeight)
          var rand = Math.random()
          this.vx = (2 * Math.random() + 0.1) * 3 / this.r
          if (rand > 0.5) {
            this.vx = -1 * this.vx
          }
          rand = Math.random()
          this.vy = (2 * Math.random() + 0.1) * 3 / this.r
          if (rand > 0.5) {
            this.vy = -1 * (2 * Math.random() + 0.1) * 1
          }
        }
        // kiem tra su va cham giua cac Dot
        Dot.prototype.collisionCheck = function () {
          if (this.x < 0 - this.r - distance) this.x = innerWidth
          if (this.x > innerWidth + this.r + distance) this.x = 0
          if (this.y < 0 - this.r - distance) this.y = innerHeight
          if (this.y > innerHeight + this.r + distance) this.y = 0
        }

        // init Dot based on totalDots
        for (var i = 0; i < totalDots; i++) {
          var dot = new Dot()
          Dots.push(dot)
        }
        // calculate distance between 2 Dot
        function calDistance (x1, y1, x2, y2) {
          var xdiff = x1 - x2
          var ydiff = y1 - y2
          return Math.sqrt(xdiff * xdiff + ydiff * ydiff)
        }
        // animate Dot
        raf(animate)
        // declare new object Graphic
        var graphics = new PIXI.Graphics()
        function drawDot (graphics, dot) {
          graphics.beginFill(dot.color, 1.0)
          graphics.drawCircle(dot.x, dot.y, dot.r)
          graphics.endFill()
        }
        function animate () {
          // Clears the graphics that were drawn to this Graphics object
          // and resets fill and line style settings.
          graphics.clear()
          // loop through each dot in Dots array
          for (var i = 0; i < Dots.length; i++) {
            var dot1 = Dots[i]
            dot1.collisionCheck()
            // draw Dot
            drawDot(graphics, dot1)
            // loop through the next Dot
            for (var j = i + 1; j < Dots.length; j++) {
              var dot2 = Dots[j]
              var x1 = dot1.x
              var x2 = dot2.x
              var y1 = dot1.y
              var y2 = dot2.y
              // distance between dot1 and dot2
              var dist = calDistance(x1, y1, x2, y2)
              // if current distance <= initial distance
              if (dist <= distance) {
                var normalizedDist = dist / distance
                var lineWidth = (dot1.r + dot2.r) * 0.3 / (2 * Math.sqrt(normalizedDist) + 0.00001)
                var alpha = 1.0 - (normalizedDist * normalizedDist)
                // use Graphics object to draw line (width, color, alpha)
                // graphics.lineStyle(lineWidth, 0xFFFFFF, alpha)
                graphics.lineStyle(lineWidth, 0x37474F, alpha)
                var x1r = (0.5 + x1) << 0
                var y1r = (0.5 + y1) << 0
                var x2r = (0.5 + x2) << 0
                var y2r = (0.5 + y2) << 0
                // draw line between dot1 and dot2
                graphics.moveTo(x1r, y1r)
                graphics.lineTo(x2r, y2r)

                var x1next = dot1.x + dot1.vx
                var y1next = dot1.y + dot1.vy
                var x2next = dot2.x + dot2.vx
                var y2next = dot2.y + dot2.vy
                var distnext = calDistance(x1next, y1next, x2next, y2next)
                if (distnext <= dist) {
                  // dots are getting closer
                  dot1.x += gravity * dot2.r * x2 * Math.pow(normalizedDist, 2)
                  dot2.x += gravity * dot1.r * x1 * Math.pow(normalizedDist, 2)
                  dot1.y += gravity * dot2.r * y2 * Math.pow(normalizedDist, 2)
                  dot2.y += gravity * dot1.r * y1 * Math.pow(normalizedDist, 2)
                } else {
                  dot1.x -= gravity * dot2.r * x2 * Math.pow(normalizedDist, 2)
                  dot2.x -= gravity * dot1.r * x1 * Math.pow(normalizedDist, 2)
                  dot1.y -= gravity * dot2.r * y2 * Math.pow(normalizedDist, 2)
                  dot2.y -= gravity * dot1.r * y1 * Math.pow(normalizedDist, 2)
                }
              }
            }
            dot1.y += dot1.vy
            dot1.x += dot1.vx
          }
          // render the stage
          stage.addChild(graphics)
          renderer.render(stage)
          raf(animate)
        }
      }
    },
    mounted: function () {
      this.initCanvas()
    }
  }
</script>
<style lang='less' scoped>
</style>
