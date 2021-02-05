<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App">
      <!-- <template v-slot:upper>
       <p>fuck u bitch!!!!</p> 
      </template> -->
      <!-- <template v-slot:below>
        this is the below slot that already defined in the app.vue file
      </template> -->
    </HelloWorld>
    <tree v-for="(item, index) in treeData" :datass="item" :key="index"> </tree>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import tree from "./components/tree.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    tree,
  },
  data() {
    return {
      treeData: [
        {
          title: "pet trong nha 1",
          contents: [
            {
              title: "con cho",
              contents: [
                {
                  title: "con cho con",
                  contents: [
                    {
                      title: "con cho con mau xanh",
                      contents: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: "pet trong cong ty 2",
          contents: [
            {
              title: "con meo",
              contents: [
                {
                  title: "con meo con",
                  contents: [],
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
