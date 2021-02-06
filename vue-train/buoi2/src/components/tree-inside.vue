<template>
  <div id="treeInside">
    <ul>
      <li v-for="(contentItem, index) in contentss" :key="index">
        <tree v-if="contentItem.contents" :datass="contentItem" />
        <span v-else><p>{{contentItem.title
          }}</p></span>
      </li>
    </ul>
  </div>
</template>

<script>
import tree from "./tree.vue";
export default {
  name: "treeInside",
  components: {
    tree,
  },
  props: {
    contentss:Array,
    datass :Object,
  },
};
</script>

<style>
</style>