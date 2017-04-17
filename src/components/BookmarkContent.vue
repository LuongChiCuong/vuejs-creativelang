<template>
  <div class="card-content">
    <!-- <div class="card-icon">
      <img :src="'https://www.google.com/s2/favicons?domain=' + bm.url" class="favicon">
    </div> -->
    <div class="title">

      <a :href="bm.url" target="_blank">
        <img :src="'https://www.google.com/s2/favicons?domain=' + bm.url" v-bind:key="bm" class="favicon">
        {{ bm.title }}
      </a>
    </div>
    <tags :tagValue="bm.tags"></tags>
    <p class="description">{{ bm.description }}</p>
    <!-- <i class="url-text">{{ bm.url }}</i> -->
    <!-- <a :href="bm.url" target="_blank">Open in new tab</a> -->
  </div>
</template>

<script>
import Tags from './Tags'
export default {
  name: 'bookmarkContent',
  components: {
    Tags
  },
  props: ['bmValue'],
  computed: {
    bm: function () {
      return this.bmValue
    }
  }
}
</script>

<style lang="less">
@teal-color : #64ffda;
.card-content {
  margin-right: 30px;
  border-top: 1px solid #333;
  .title {
    margin-top: 1rem;
    a {
      img {
        margin: 0 5px 0 0;
      }
      // margin-left: 5px;
      font-size: 16px;
      line-height: 18px;
      font-weight: bold;
      color: #333;
      display: inline-block;
      // &:before {
      //   content: '';
      //   height: 2px;
      //   width: 0;
      //   background-color: black;
      //   display: block;
      //   position: relative;
      //   top: 10px;
      // }
      &:hover {
        text-decoration: line-through;
        // &:before {
        //   width: 100%;
        //   transition: width ease-in-out 0.5s;
        // }
      }
    }

  }
  .url-text {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .description {
    // min-height: 100px;
  }
}
</style>
