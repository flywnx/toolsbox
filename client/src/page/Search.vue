<template>
  <div id="Search">
    <TopHeader />
    <h1>搜索</h1>
  </div>
</template>

<script>
import TopHeader from "../components/TopHeader.vue";
export default {
  "name": "search",
  "components": { TopHeader }
};
</script>

<style>
#Search {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
