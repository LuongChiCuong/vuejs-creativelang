<template>
  <ul class="tag-list">
    <li v-for="tag in tags">
      <span class="chip tag" href="#">{{tag.name}}</span>&nbsp;
    </li>
  </ul>
</template>

<script>
export default {
  name: 'tag',
  props: ['tagValue'],
  computed: {
    tags: function () {
      return this.tagValue
    }
  }
}
</script>

<style>
  .tag-list {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 1rem 0 0 0;
  }
  .tag {
    height: 20px;
    line-height: 22px;
    border-radius: 0;
  }
</style>
