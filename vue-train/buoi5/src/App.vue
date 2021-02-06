<template>
  <div id="app">
    <home /> 
    <!-- <archive /> -->
    <!-- <single /> -->
    <!-- home,archive,single are in the layouts folder -->
  </div>
</template>
  
<script>
import {home} from  '@/layouts'; //note the way of this import method, take a look at layouts folder for more understanding
export default {
  components:{
    home,
    // archive,
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
