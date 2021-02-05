<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <p>this page is for the homepage</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { helloMixin } from "@/mixins";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  mixins:[helloMixin],
  created() {
    this.sayHello();
  },
};
</script>
