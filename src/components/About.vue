<template>
  <div id="app">
    <div class="about-page">
      <navigation></navigation>
      <div class="video-bg-container">
        <div class="video-content">
          <div class="inner-content">
            <h1>About Me</h1>
            <h2>&ldquo; Be a Creative Front End developer. &rdquo;</h2>
          </div>
        </div>
          <div class="filter"></div>
          <video preload="true" autoplay loop muted playsinline class="fillWidth responsive-video" poster="https://nodejs-creativelang.herokuapp.com/images/black-key.jpg">
              <!-- <source src="http://localhost:3000/video/black-key.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
              <source src="http://localhost:3000/video/black-key.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser. -->
              <source src="https://nodejs-creativelang.herokuapp.com/video/black-key.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
              <source src="https://nodejs-creativelang.herokuapp.com/video/black-key.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
          </video>
      </div>
      <div class="container center-align">
        <div class="row">
          <div class="introduce-content col m10 s12 offset-m1">
            <article>About This Website</article>
            <p>
                This site is a collection of bookmark and free e-book about <mark><b>Front End Development</b></mark>
                with the purpose of sharing my knowledge and passion for everyone.
                <br/></br>
                It has been designed and built by hand from the ground up.
                It's handled through <b>VueJS</b>, <b>NodeJS</b> support API, database is controlled by <b>MongoDB</b>
                and all of things is compiled with <b>Webpack</b>.
            </p>
            <article>About My Self</article>
            <p>
                My name is Cuong, with a special passion for <mark><b>Front End Development</b></mark>.
                Be a <mark><b>Creative Front End Developer</b></mark> is my target, why?
                <br/><br/>
                Because I want to directly develop ideas with my creativity,
                I do not want to be limited in thinking and only following the design and marketing teams.
                As a fan of <mark><b>Front End</b></mark>, I will prove to the fucking developers who think FE is simple and easy that <mark><b>FE is an art</b></mark>.
            </p>
            <div class="resume">
              <p>*For more information, please take a look at</p>
              <a href="https://drive.google.com/open?id=0B6RjoVyOOjxyUzBIcWM3R2RxcGs" target="_blank">My Resume</a>
            </div>
          </div>
        </div>
      </div>
      <FooterSection></footerSection>
    </div>
  </div>
</template>
<script>
  import Navigation from './Navigation'
  import FooterSection from './FooterSection'
  export default {
    name: 'About',
    components: {
      Navigation, FooterSection
    }
  }
</script>
<style lang="less" scoped>
  .about-page {
    overflow: hidden;
    .video-bg-container {
      position: relative;
      margin-top: -80px;
      .video-content {
        position: absolute;
        color: white;
        top: 45%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        width: 100%;
        text-align: center;
        @media only screen and (max-width: 600px) {
            top: 50%;
        }
        .inner-content {
          font-family: Orbitron;
          h1{
            font-size: 2rem;
            @media only screen and (max-width: 600px) {
                font-size: 1rem;
            }
          }
          h2{
            font-size: 2.5rem;
            letter-spacing: 5px;
            @media only screen and (max-width: 600px) {
                font-size: 1.5rem;
            }
          }
        }

      }
      video {
        position: relative;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        z-index: -100;
        // background: url('../assets/black-key.jpg') no-repeat;
        background-color: black;
        background-size: cover;
        transition: 1s opacity;
        @media only screen and (max-width: 600px) {
            height: 300px;
        }
      }
    }
  }

  .introduce-content {
    margin-bottom: 120px;
    article{
      font-size: 1.5rem;
      &:before {
        display: block;
        content: "";
        width: 3px;
        height: 9.6rem;
        background-color: rgba(149, 149, 149, 0.7);
        margin: 1rem auto 1rem;
      }
      @media only screen and (max-width: 600px) {
          font-size: 1rem;
      }
    }
    p {
      font-size: 2.0rem;
      mark{
        background-color: #64ffda;
      }
      @media only screen and (max-width: 600px) {
          font-size: 1.2rem;
      }
    }
    .resume {
      p {
        font-size: 1.5rem;
        @media only screen and (max-width: 600px) {
            font-size: 1rem;
        }
      }
      a {
        display: inline-block;
        width: 200px;
        height: 50px;
        border: 1px solid black;
        vertical-align: middle;
        line-height: 48px;
        color: black;
      }
    }
  }
</style>
