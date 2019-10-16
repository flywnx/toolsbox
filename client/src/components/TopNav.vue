<template>
  <div id='topNav'>
    <p class='title'>工具箱</p>
    <div class='title'>搜索</div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class TopNav extends Vue {}
</script>
<style lang='scss' scoped>
#topNav {
  min-height: 4 * $fontsize;
  background-color: #333;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
}
.title {
  color: #9d9d9d;
  font-size: 2.5 * $fontsize;
  height: 3 * $fontsize;
  width: auto;
  line-height: 3 * $fontsize;
  padding: 0 $fontsize;
}
.title:hover {
  color: #fff;
}
</style>