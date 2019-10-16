<template>
  <div id="home">
    <TopNav></TopNav>
    <LeftNav></LeftNav>
    <ListContent></ListContent>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import ListContent from "../components/ListContent.vue";
import TopNav from "../components/TopNav.vue";
import LeftNav from "../components/LeftNav.vue";
// @Component({})
@Component({
  components: { TopNav, LeftNav, ListContent }
})
export default class Home extends Vue {}
</script>
<style lang='scss' scoped>
</style>
