<template>
  <div id="toolPage">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  "name": "toolPage"
};
</script>

<style lang="scss" scoped>
@import "../assets/css/_config.scss";
#toolPage {
  width: 75vw;
  margin-top: $fontSize * 4;
}
</style>
