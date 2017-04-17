<template>
  <div class="url-container">
    <p class="count-item">Viewing total {{bookmarks.length}} bookmarks</p>
    <div class="row">
        <transition-group name="list" tag="ul" class="list-item">
          <li v-for="(bm, index) in filteredBookmarks(bookmarks)"
            :key="bm"
            v-bind:data-index="index"
            class="col s12 m3 l3 item-content">
            <bookmarkContent :bmValue="bm"></bookmarkContent>
          </li>
        </transition-group>
    </div>
  </div>
</template>

<script>
import BookmarkContent from './BookmarkContent'
// var _ = require('lodash')
// var Velocity = require('velocity-animate')

export default {
  name: 'items',
  components: {
    BookmarkContent
  },
  data () {
    return {
      bookmarks: [],
      filterText: 'All'
    }
  },
  // computed: {
  //   computedBookmarks: function () {
  //     return this.bookmarks.filter(function (bm) {
  //       for (var i = 0; i < bm.tags.length; i++) {
  //         return bm.tags[i].name === 'HTML/CSS'
  //       }
  //     })
  //   }
  // },
  created: function () {
    this.$parent.$on('changeTagName', this.filterBy)
  },
  methods: {
    // beforeEnter: function (el) {
    //   el.style.opacity = 0
    //   // el.style.height = 0
    // },
    // enter: function (el, done) {
    //   var delay = el.dataset.index * 150
    //   setTimeout(function () {
    //     Velocity(
    //       el,
    //       { opacity: 1 },
    //       { complete: done }
    //     )
    //   }, delay)
    // },
    // leave: function (el, done) {
    //   var delay = el.dataset.index * 150
    //   setTimeout(function () {
    //     Velocity(
    //       el,
    //       { opacity: 0, position: 'absolute', top: '0px' },
    //       { complete: done }
    //     )
    //   }, delay)
    // },
    loadBookmarks: function () {
      var api = 'https://nodejs-creativelang.herokuapp.com/bookmarks'
      // var api = 'http://localhost:3000/bookmarks'
      this.$http.get(api).then((res) => {
        this.bookmarks = res.body
        this.curBmLength = this.bookmarks.length
      }, (err) => {
        console.log(err)
      })
    },
    filteredBookmarks: function (bookmarks) {
      let filterValue = this.filterText
      if (filterValue === 'All') {
        return this.bookmarks
      } else {
        return bookmarks.filter(function (bm) {
          for (var i = 0; i < bm.tags.length; i++) {
            if (bm.tags[i].name === filterValue) {
              return true
            }
          }
        })
      }
    },
    filterBy: function (tagName) {
      this.filterText = tagName
      this.filteredBookmarks(this.bookmarks)
    }
  },
  mounted: function () {
    this.loadBookmarks()
  }
}
</script>

<style lang="less">
  @teal-color : #64ffda;
  .url-container {
    padding: 0 20px 20px 20px;
    .count-item{
      margin: 30px 0 30px 10px;
    }
    .list-item {
      display: -webkit-box;
      display: -moz-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: row;
      flex-direction: row;
      -webkit-flex-wrap: wrap;
      flex-wrap: wrap;
      .item-content {
        margin: 0;
      }
      .list-enter-active, .list-leave-active {
        transition: all ease-in-out 1s;
      }
      .list-enter, .list-leave-to /* .list-leave-active for <2.1.8 */ {
        opacity: 0;
        transform: scale(0.5, 0.5);
        // transform: translateY(30px);
      }
    }
  }
  // separate to make searchResult inherit style
  .card-icon {
    position: absolute;
    .favicon {
      width: 20px;
      height: 20px;
    }
  }
</style>
