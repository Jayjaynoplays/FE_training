<template>
  <div id="tree">
    <span>
      {{ datass.title }}
    </span>
    <treeInside :contentss ="datass.contents"></treeInside>
  </div>
</template>

<script>
// import treeInside from "./tree-inside.vue"; 

export default {
  name: "tree",
  components: {
    treeInside: () => import('./tree-inside.vue')
    // treeInside,
  },
  props: {
    datass: Object,
  },
};
</script>

<style>
</style>