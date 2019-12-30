<template>
  <div id="FootBox">
    <p>
      © 2019-2020 playtheone.com 版权所有
      <a href="http://www.beian.miit.gov.cn/">浙ICP备19050095号</a>
    </p>
  </div>
</template>

<script>
export default {
  "name": "footBox",
  "components": {}
};
</script>

<style lang="scss" scoped>
@import "../assets/css/_config.scss";
#FootBox {
  color: #999;
  height: $fontSize * 4;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  a {
    color: #999;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
}
</style>
