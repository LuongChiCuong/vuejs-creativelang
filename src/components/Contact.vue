<template>
  <div class="contact-page">
    <navigation></navigation>
    <div class="banner grey valign-wrapper">
      <h1 class="get-in-touch center-align valign">GET IN TOUCH</h1>
    </div>
    <div class="contact-section container">
      <div class="row">
        <div class="contact-content col m8">
          <article>Keep In Touch</article>
          <ul>
            <li><b>Name:</b> Luong Chi Cuong</li>
            <li><b>Email:</b> luongchicuong93@gmail.com</li>
            <li><b>Address:</b> Thich Quang Duc, Ward 5, Phu Nhuan District, Ho Chi Minh city</li>
            <li><b>Nation:</b> Viet Nam
            <li><b>Phone:</b>  (+84) 937 422 456</li>
          </ul>
          <article>Ask To Answer</article>
          <ul>
            <li><b>Facebook:</b> <a class="blue-text text-darken-1" href="https://www.facebook.com/creativelang" target="_blank"> Creative Lang </a></li>
            <li><b>Quora:</b> <a class="red-text text-darken-1" href="https://www.quora.com/profile/Cuong-Luong-6" target="_blank"> https://www.quora.com/profile/Cuong-Luong-6 </a></li>
          </ul>
        </div>
        <div class="contact-content col m4">
          <img class="avatar" src="../assets/avatar.jpg" alt="Cuong Luong"/>
        </div>
      </div>
    </div>
    <!-- <div id="map">
      <img src="../assets/map.png" alt="Google Map Capture" />
    </div>
    <div class="made-by center-align white">
      <p>Made with <b class="heart">&#10084;</b> by luongchicuong93@gmail.com - Powered by VueJS - NodeJS - MongoDB</p>
    </div> -->
    <FooterSection></footerSection>
</div>
</template>
<script>
  import Navigation from './Navigation'
  import FooterSection from './FooterSection'
  export default {
    name: 'Contact',
    components: {
      Navigation, FooterSection
    }
  }
</script>

<style lang="less" scoped>
  .contact-page {
    overflow: hidden;
  }
  .banner {
    height: 550px;
    width: 100%;
    margin-top: -30px;
    background: url('../assets/get-in-touch.jpg') center no-repeat;
    background-size:cover;
    @media only screen and (max-width: 600px) {
        height: 300px;
    }
    .get-in-touch {
      font-size: 3rem;
      font-family: Orbitron;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      background: white;
      padding: 50px 70px;
      @media only screen and (max-width: 600px) {
        font-size: 2rem;
        left: 0;
        transform: translateX(0%);
        width: 100%;
        margin: 0 10px;
        padding: 10px;
      }
      &:after {
        content: '';
        position: absolute;
        top: -6px;
        left: -6px;
        right: -6px;
        bottom: -6px;
        display: block;
        border: 1px solid white;
        z-index: 1;
        -webkit-transition: .5s ease;
        transition: .5s ease;
      }
      &:hover {
        &:after {
          top: -12px;
          left: -12px;
          right: -12px;
          bottom: -12px;
          opacity: 0;
        }
      }
    }
  }

  .contact-section {
    padding: 70px 0;
    article {
      font-size: 2.0rem;
      position: relative;
      padding: 10px 20px;
      background-color: #000;
      color: #fff;
      display: inline-block;
      margin-bottom: 20px;
      color: #64ffda;
      @media only screen and (max-width: 600px) {
          font-size: 1.5rem;
      }
      &:after {
        content: '';
        position: absolute;
        left: 10px;
        bottom: -14px;
        border: 7px solid transparent;
        border-top-color: #000;
      }
    }
    ul li {
      margin-bottom: 10px;
      font-size: 1.2rem;
      @media only screen and (max-width: 600px) {
          font-size: 1rem;
      }
    }
  }

  .avatar {
    width: 100%;
    margin-top: 30px;
  }
/*
  #map {
    width: 100%;
    height: 400px;
    background-color: grey;
  }*/
</style>
