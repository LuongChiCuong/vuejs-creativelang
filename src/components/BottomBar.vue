<template>
  <div class="row">
    <div class="col m12 center black bottom-nav">
      <ul class="bottom-tag-list">
        <li v-for="tag in tags" :class="{ active: isActive(tag) }">
            <span v-on:click="filterBy(tag.name)">{{tag.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
var tagsData = [
  {name: 'All'},
  {name: 'HTML/CSS'},
  {name: 'JS'},
  {name: 'AngularJS'},
  {name: 'VueJS'},
  {name: 'NodeJS'},
  {name: 'Awwwards'},
  {name: 'UI/UX'}
]

export default {
  name: 'bottomBar',
  data () {
    return {
      activeTab: 'All',
      tags: tagsData
    }
  },
  methods: {
    isActive: function (tag) {
      return tag.name === this.activeTab
    },
    filterBy: function (tagName) {
      // console.log(Vue)
      this.activeTab = tagName
      this.$parent.$emit('changeTagName', tagName)
    }
  }
}
</script>

<style lang="less" scoped>
  @teal-color : #64ffda;
  .bottom-nav {
    position: fixed;
    bottom: 0;
    color: white;
    height: 50px;
    @media only screen and (max-width: 600px) {
        max-width: 100%;
        // height: 60px;
        overflow: auto;
    }
    .bottom-tag-list {
      height: 100%;
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      margin-top: 0;
      @media only screen and (max-width: 600px) {
          width: 700px;
          margin-bottom: 0;
      }
      li {
        margin: 0 20px;
        color: white;
        cursor: pointer;
      }
      li.active {
        color: @teal-color;
        font-weight: 600;
        transition: ease-in color 0.8s;
        -web-kit-transition: ease-in-out color 0.8s;
        -moz-transition: ease-in-out color 0.8s;
      }
    }
    // custom scroll bar CSS
    &::-webkit-scrollbar {
      -webkit-appearance: none;
    }
    &::-webkit-scrollbar:vertical {
        width: 0;
        height: 0;
    }
    &::-webkit-scrollbar:horizontal {
        height: 5px;
    }
    &::-webkit-scrollbar-thumb {
        // background-color: rgba(0, 0, 0, .5);
        background-color: @teal-color;
        border-radius: 5px;
        // border: 2px solid #ffffff;
    }
    &::-webkit-scrollbar-track {
        // border-radius: 10px;
        background-color: black;
    }
  }
</style>
