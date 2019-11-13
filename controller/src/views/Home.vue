<template>
  <div>
    <TopNav></TopNav>
    <LeftNav></LeftNav>
    <TagNav></TagNav>
    <div class="viewBox">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>

import TopNav from "../components/TopNav";
import LeftNav from "../components/LeftNav";
import TagNav from "../components/TagNav";
export default {
  "name": "home",
  "data": () => {
    return {};
  },
  "components": {
    TopNav,
    LeftNav,
    TagNav
  }
};
</script>
<style lang="scss" scoped>
.viewBox {
  width: 85%;
  position: fixed;
  right: 0;
  top: 80px;
}
</style>
