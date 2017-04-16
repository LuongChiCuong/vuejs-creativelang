<template>
  <footer class="skills left-align grey darken-4">
      <div class="skills-content container">
          <div class="row">
              <div class="footer-column col m4 s12 white-text">
                  <h4>Site Map</h4>
                  <ul>
                    <li>
                      <router-link class="link-item" :to="{ name: 'app'}">Home
                      </router-link>
                    </li>
                    <li>
                      <router-link class="link-item" :to="{ name: 'list'}">Bookmarks
                      </router-link>
                    </li>
                    <li>
                      <router-link class="link-item" :to="{ name: 'ebook'}">Ebooks
                      </router-link>
                    </li>
                    <li>
                      <router-link class="link-item" :to="{ name: 'about'}">About
                      </router-link>
                    </li>
                    <li>
                      <router-link class="link-item" :to="{ name: 'contact'}">Contact
                      </router-link>
                    </li>
                  </ul>
              </div>
              <div class="footer-column col m4 s12 white-text">
                  <h4>Do & Like</h4>
                  <ul>
                      <li v-for="skill in workingSkills">
                          <!-- <i class="small material-icons hide-on-small-only">done</i> -->
                          <span>{{skill.name}}</span>
                      </li>
                  </ul>
              </div>
              <div class="footer-column col m4 s12 white-text">
                  <h4>Learn & Research</h4>
                  <ul>
                      <li v-for="skill in learningSkills">
                          <!-- <i class="small material-icons hide-on-small-only">trending_up</i> -->
                          <span>{{skill.name}}</span>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <div class="made-by center-align white">
        <p>Made with <b class="heart">&#10084;</b> by luongchicuong93@gmail.com - Powered by VueJS - NodeJS - MongoDB - WebPack</p>
      </div>
  </footer>
</template>

<script>
  let oldSkill = [
    {name: 'HTML5', color: 'red-text text-darken-1'},
    {name: 'CSS3/Less/Sass', color: 'blue-text text-darken-1'},
    {name: 'Materialize CSS', color: 'red-text text-lighten-2'},
    // {name: 'Javascript', color: 'yellow-text text-lighten-1'},
    {name: 'AngularJS', color: 'red-text text-darken-3'},
    {name: 'VueJS', color: 'red-text text-darken-1'},
    // {name: 'Jquery', color: 'blue-text text-lighten-1'},
    {name: 'NodeJS', color: 'blue-text text-darken-1'},
    {name: 'ExpressJS', color: 'red-text text-lighten-2'},
    // {name: 'Ruby on Rails', color: 'red-text text-darken-3'},
    // {name: 'MySQL', color: 'blue-text'},
    {name: 'MongoDB', color: 'yellow-text text-lighten-1'}
  ]
  let newSkill = [
    {name: 'Interaction Design', color: 'blue-text text-darken-1'},
    {name: 'WebGL', color: 'blue-text text-darken-1'},
    {name: 'Pixi.js', color: 'red-text text-darken-3'},
    {name: 'Three.js', color: 'blue-text text-lighten-1'}
  ]
  export default {
    name: 'FooterSection',
    data () {
      return {
        workingSkills: oldSkill,
        learningSkills: newSkill
      }
    }
  }
</script>

<style lang="less">
  @teal-color : #64ffda;
  .skills {
    background: url('../assets/mountain.png') repeat-x;
    opacity: 0.9;
    @media only screen and (max-width: 600px) {
        background-size: cover;
    }
    h4 {
        font-size: 1.5rem;
    }
    .skills-content {
      min-height: 200px;
      padding: 30px 0;
      .footer-column ul {
        @media only screen and (max-width: 600px) {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
        }
        li {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          font-size: 1.2rem;
          @media only screen and (max-width: 600px) {
              margin-right: 10px;
          }
          a{
            color: @teal-color;
          }
          // span {
            // color: #64ffda;
            // margin-left: 10px;
          // }
        }
      }
    }
  }

  /* The animation code */
  @keyframes color-heart {
      from {color: #e53935 ;}
      to {color: #ff8a80;}
  }

  .made-by {
    p {
      margin: 0;
      padding: 10px 5px;
    }
    b {
      animation-name: color-heart;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
    }
  }

</style>
