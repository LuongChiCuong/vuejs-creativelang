<template>
  <div class="row search-result-container">
    <div class="push-m2 col m8 pull-m2 result-list-container">
      <p v-if="bookmarks.length == 0 && noResult && searchKey">Sorry I cannot find <b>{{searchKey}}</b> :(</p>
      <p v-if="bookmarks.length > 0 && searchKey">Showing results in: <b>{{searchKey}}</b></p>
      <p v-if="bookmarks.length == 0 && searchKey && !noResult">Please Press Enter or Search Icon to results in: <b>{{searchKey}}</b></p>
      <div class="col m12">
        <ul>
          <li class="col m12 result-row" v-if="bookmarks.length > 0" v-for="bm in bookmarks">
            <div class="card-content">
              <div class="card-icon">
                <img :src="'https://www.google.com/s2/favicons?domain=' + bm.url" class="favicon">
              </div>
              <a class="card-title" :href="bm.url" target="_blank"><b>{{ bm.title }}</b></a>
              <br/>
              <i>{{ bm.url }}</i>
              <p>{{ bm.description }}</p>
              <ul class="tag-list">
                <li v-for="tag in bm.tags">
                  <span class="chip tag">{{tag.name}}</span>&nbsp;
                </li>
              </ul>
              <!-- <a :href="bm.url" target="_blank">Open in new tab</a> -->
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  var _ = require('lodash')
  export default {
    name: 'searchResult',
    props: ['value'],
    data: function () {
      return {
        searchKey: this.value,
        bookmarks: [],
        noResult: false
      }
    },
    watch: {
      value: function (val) {
        this.searchKey = this.value
        this.noResult = false
        if (_.isEmpty(this.value)) {
          this.bookmarks = []
        }
        // } else {
        //   setTimeout(function () {
        //     this.callSearchAPI(this.value)
        //   }.bind(this), 1000)
        // }
      }
    },
    created: function () {
      this.$parent.$on('full-text-search', this.callSearchAPI)
    },
    methods: {
      callSearchAPI: function (text) {
        var api = 'https://nodejs-creativelang.herokuapp.com/bookmarks/search'
        // var api = 'http://localhost:3000/bookmarks/search'
        this.$http.post(api,
        {'query': text}).then((res) => {
          if (_.isEmpty(res.body) || _.isEmpty(res)) {
            this.bookmarks = []
            this.noResult = true
          } else {
            this.bookmarks = res.body
          }
        }, (err) => {
          console.log(err)
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @teal-color : #64ffda;
  .search-result-container {
    height: 75vh;
    .result-list-container {
      max-height: calc(100% - 5px);
      overflow-y: auto;
      overflow-x: hidden;
      .result-row {
        padding: 15px 0;
        border-bottom: 1px solid darkgrey;
        &:first-child {
          padding-top: 0;
        }
        .card-content {
          border: none;
          .card-icon {
            position: relative;
          }
          .card-title {
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
          .tag-list {
            margin-bottom: 6px;
          }
        }
      }
    }
  }
</style>
