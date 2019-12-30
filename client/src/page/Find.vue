<template>
  <div id="find">
    <TopHeader />
    <vue-waterfall-easy
      :imgsArr="toolsInfo"
      :maxCols="maxCols"
      :imgWidth="240"
      :gap="36"
      srcKey="icon"
    >
      <div class="img-info" slot-scope="props">
        <p class="some-info">{{ props.value.name }}</p>
      </div>
    </vue-waterfall-easy>
  </div>
</template>

<script>
import TopHeader from "../components/TopHeader.vue";
import vueWaterfallEasy from "vue-waterfall-easy";
import { mapState, mapMutations } from "vuex";
import { getToolsInfo } from "../api/index";
export default {
  "name": "find",
  "data": () => {
    return {
      "maxCols": 5
    };
  },
  beforeCreate() {
    if (!this.$store.state.toolsInfo.length) {
      this.$router.push("home");
    }
  },
  "methods": {},
  "computed": {
    ...mapState(["toolsInfo"])
  },

  "components": { TopHeader, vueWaterfallEasy }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/_config.scss";
#find {
  height: 100vh;
  display: flex;
  padding: $fontSize * 4;
  .img-info {
    background-color: #fff;
  }
  .some-info {
    display: block;
    padding: 10px 16px;
    line-height: $fontSize * 1.5;
    overflow: hidden;
    word-wrap: break-word;
  }
}
</style>
