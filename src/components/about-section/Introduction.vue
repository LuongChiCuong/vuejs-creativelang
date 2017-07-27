<template>
    <div class="section-container">
      <main>
        <h1>A few things about me.</h1>
        <h3>What is creativelang.com?</h3>
        <p>
            This website is a collection of bookmark and free e-book about <mark><b>Front End Development</b></mark>
            with the purpose of sharing my knowledge and passion for everyone.
            <br/></br>
            It has been designed and built by hand from the ground up.
            It's handled through <b>VueJS 2.0</b>, <b>NodeJS</b> support API, database is controlled by <b>MongoDB</b>
            and all of things is compiled with <b>Webpack</b>.
        </p>
        <h3>Who is the owner?</h3>
        <p>
            As you know my name is Cuong. I live in HoChiMinh city. I have a special passion for <mark><b>Front End Development</b></mark>.
            Be a <mark><b>Great Creative Front End Developer</b></mark>on Awwwards.com is my goal.
            <br/><br/>
            Because I want to directly develop ideas with my creativity,
            I do not want to be limited in thinking and only following the design and marketing teams.
            As a fan of <mark><b>Front End</b></mark>, I will prove to the fucking developers who think FE is simple and easy that <mark><b>FE is an art</b></mark>.
        </p>
      </main>
    </div>
</template>
<script>
  export default {
    name: 'Introduction'
  }
</script>
<style lang="less">
  main {
    width: 55%;
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translateY(-50%);
    h1 {
      letter-spacing: 3px;
    }
    h3 {
      font-size: 30px;
      letter-spacing: 3px;
    }
    p {
      font-size: 18px;
      mark {
        background-color: #64ffda;
      }
    }

  }
</style>
