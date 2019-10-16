<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
export default class App extends Vue {}
</script>
<style>
.slot {
  width: 100%;
  height: 100vh;
}
</style>
