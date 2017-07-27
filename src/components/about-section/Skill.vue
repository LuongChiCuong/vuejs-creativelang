<template>
  <div class="section-container">
    <main>
      <h1>Some of my best skills.</h1>
      <h3>Main Skills</h3>
      <p>
          HTML5, CSS3, Materialize, Bootstrap, Bulma.
          <br/>
          Javascript, AngularJS, VueJS, ReactJS, VelocityJS, Jquery, Pug.
          <br/>
          Gulp, Webpack.
          <br/>
          Search Engine Optimization.
      </p>
      <h3>Support Skills</h3>
      <p>
          JS stack: Node.js + ExpressJS + MongoDB
          <br/>
          RoR stack: Ruby on Rails + My SQL
          <br/>
          .NET stack: ASP.NET + VB.NET + SQL Server.
      </p>
      <h3>Soft Skills</h3>
      <p>
          Creative and strange thinking, open mind, management.
      </p>
    </main>
    <particleCanvas></particalCanvas>
  </div>
</template>
<script>
  import particleCanvas from './particleCanvas'
  export default {
    name: 'Skill',
    components: {
      particleCanvas
    }
  }
</script>
<style lang="less" scoped>
  main {
    z-index: 999;
    width: 60%;
    p {
      line-height: 36px;
      letter-spacing: 2px;
    }
  }
</style>
