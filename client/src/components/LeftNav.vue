<template>
  <div id='LeftNav'>
    <div>
      <ul>
        <li>文件工具</li>
      </ul>
    </div>
    <div>
      <p>关于我</p>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class LeftNav extends Vue {}
</script>
<style lang='scss' scoped>
#LeftNav {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 20%;
  background-color: #f5f5f5;
  position: fixed;
  top: 4 * $fontsize;
  bottom: 0;
  left: 0;
  padding: 2 * $fontsize;
  li,
  p {
    font-size: 2 * $fontsize;
    color: #337ab7;
  }
}
</style>