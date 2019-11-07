<template>
  <div>
    <TopNav></TopNav>
    <LeftNav></LeftNav>
    <TagNav></TagNav>

    <!-- <router-view>
    </router-view> -->
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
<style lang="scss" scoped></style>
