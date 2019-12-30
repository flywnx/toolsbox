<template>
  <div id="Info">
    <TopHeader />
    <h1>简介</h1>
  </div>
</template>

<script>
import TopHeader from "../components/TopHeader.vue";
export default {
  "name": "info",
  "components": { TopHeader }
};
</script>

<style>
#Info {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
