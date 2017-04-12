<template>
  <div class="ebook-page">
    <navigation></navigation>
    <div class="banner grey valign-wrapper">
      <h1 class="get-in-touch center-align valign">Free IT Ebook</h1>
    </div>
    <div class="ebook-section container">
      <div class="row">
        <h2 class="center-align">My Favorite Ebook</h2>
        <h3 class="center-align">Choose a book that is right for you then go along with it to reach your goal.</h3>
        <div class="underline center-align">
            <span>&nbsp;</span>
        </div>
      </div>
      <div class="row list-book">
        <ul>
            <li class="col s12 m3 l2 book-item center-align" v-for="book in ebooks">
              <div class="book-info">
                <img :src="require(`../assets/img/${book.img}`)" :alt="book.title" class="cover-book">
                <div class="info-section">
                  <a :href="book.url" class="title" target="_blank">{{book.title}}</a>
                </div>
              </div>
            </li>
        </ul>
      </div>
    </div>
    <FooterSection></FooterSection>
</div>
</template>
<script>
  import Navigation from './Navigation'
  import FooterSection from './FooterSection'
  export default {
    name: 'Ebook',
    data () {
      return {
        ebooks: []
      }
    },
    methods: {
      loadEbooks: function () {
        var api = 'https://nodejs-creativelang.herokuapp.com/ebooks'
        // var api = 'http://localhost:3000/ebooks'
        this.$http.get(api).then((res) => {
          this.ebooks = res.body
        }, (err) => {
          console.log(err)
        })
      }
    },
    mounted: function () {
      this.loadEbooks()
    },
    components: {
      Navigation, FooterSection
    }
  }
</script>

<style lang="less" scoped>
  @teal-color : #64ffda;
  .ebook-page {
    overflow: hidden;
  }
  .banner {
    height: 550px;
    width: 100%;
    margin-top: -30px;
    background: url('../assets/book-shelf-bg.jpg') center no-repeat;
    background-size:cover;
    @media only screen and (max-width: 600px) {
        height: 300px;
    }
    .get-in-touch {
      font-size: 3rem;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      background: white;
      padding: 50px 70px;
      @media only screen and (max-width: 600px) {
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
  .ebook-section {
    padding: 50px 0;
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1rem;
    }
    .underline {
      position: relative;
      span{
          width: 120px;
          height: 2px;
          position: absolute;
          left: 50%;
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
          background-color: black;
      }
    }
    .list-book{
      margin: 25px 0;
      ul {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        margin: 0;
        .book-item {
          min-height: 350px;
          margin: 0;
          @media only screen and (max-width: 600px) {
              padding: 0;
              margin: 0 0 30px 0;
              min-height: auto;
          }
          .book-info {
            .cover-book {
              width: 100%;
              height: 250px;
              @media only screen and (max-width: 600px) {
                  width: initial;
              }
            }
            .info-section {
              a {
                font-size: 16px;
                line-height: 18px;
                font-weight: bold;
                color: #333;
                display: inline-block;
                &:before {
                  content: '';
                  height: 2px;
                  width: 0;
                  background-color: @teal-color;
                  display: block;
                  position: relative;
                  top: 10px;
                }
                &:hover {
                  &:before {
                    width: 100%;
                    transition: width ease-in-out 0.5s;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  /*.ebook-section {
    padding: 70px;
  }
  .ebook-section h3 {
    font-size: 2.0rem;
    position: relative;
    padding: 10px 20px;
    background-color: #000;
    color: #fff;
    display: inline-block;
    margin-bottom: 20px;
    color: #64ffda;
  }
  .ebook-section h3::after {
    content: '';
    position: absolute;
    left: 10px;
    bottom: -14px;
    border: 7px solid transparent;
    border-top-color: #000;
  }
  .ebook-section ul li {
    margin-bottom: 10px;
    font-size: 1.2rem;
  }

  .avatar {
    width: 100%;
    margin-top: 30px;
  }

  #map {
    width: 100%;
    height: 400px;
    background-color: grey;
  }*/
</style>
