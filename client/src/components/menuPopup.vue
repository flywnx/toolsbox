<template>
  <div id="menuPopup">
    <ul>
      <li><i class="ali-icon-erweima"></i> 扫码访问</li>
      <li><i class="ali-icon-youjian"></i> 问题反馈</li>
    </ul>
    <div class="arrow"></div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  "name": "menuPopup",
  "methods": {
    ...mapMutations(["setMenuPopup"])
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/_config.scss";
#menuPopup {
  display: block;
  position: absolute;
  top: 0px;
  right: 6px;
  width: 106px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  // background: #000;
  color: #222;
  font-size: $fontSize;

  ul {
    background: #fff;
    padding: 5px 10px;
    width: 86px;
    margin-top: 28px;
    li {
      line-height: $fontSize * 2;
      height: $fontSize * 2;
      text-align: center;
    }
    li:hover {
      margin: 1px 1px;
      border: 1px solid #d3d3d3;
      border-radius: 2px;
    }
  }

  .arrow {
    z-index: 1;
    position: absolute;
    background-color: #fff;
    width: $fontSize;
    height: $fontSize;
    transform: rotate(45deg);
    top: 22px;
    right: 3px;
  }
}
</style>
