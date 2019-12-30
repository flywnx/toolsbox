<template>
  <div id="app">
    <router-view></router-view>
    <!-- <FootBox /> -->
  </div>
</template>

<script>
// import FootBox from "./components/FootBox.vue";
export default {
  "name": "app"
  // "components": { FootBox }
};
</script>

<style>
html {
  background: #f0f2f7;
}
#app {
  height: 100vh;
  width: 100vw;
}
</style>
