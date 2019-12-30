<template>
  <div id="TopHeader">
    <div class="box">
      <!-- 左边icon标题 -->
      <div class="right">
        <img class="logo" src="../assets/img/logo.svg" alt="logo" />
      </div>
      <!-- 右边菜单链接 -->
      <div class="left">
        <ul class="nav">
          <li><router-link to="/"> 首页</router-link></li>
          <li><router-link to="/find"> 发现</router-link></li>
          <li class="menu">
            <i class="ali-icon-caidandianji"></i>
            <div id="menuPopup">
              <ul>
                <li><i class="ali-icon-erweima"></i> 扫码访问</li>
                <li><i class="ali-icon-youjian"></i> 问题反馈</li>
              </ul>
              <div class="arrow"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  "name": "topHeader",
  "components": {}
};
</script>

<style lang="scss" scoped>
@import "../assets/css/_config.scss";
#TopHeader {
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: #f2f2f2;
  box-shadow: 0 13px 15px rgba(31, 45, 61, 0.15);
  height: $fontSize * 4;
  display: flex;
  justify-content: center;
  .box {
    height: $fontSize * 4;
    color: $color;
    display: flex;
    justify-content: space-between;
    width: $windowWidth;
    .right {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 $fontSize * 2;
      .logo {
        width: $fontSize * 2;
        height: $fontSize * 2;
        padding: 0 $fontSize;
      }
      h2 {
        font-size: $fontSize * 2;
      }
    }
    .left {
      .nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: $fontSize * 4;
        padding: 0 $fontSize * 2;
        li {
          padding: 0 0.5 * $fontSize;
          font-size: $fontSize * 1;
          position: relative;
          a {
            color: #515151;
          }
          a:hover {
            text-decoration: underline;
          }
        }
        #menuPopup {
          display: none;
          position: absolute;
          top: 18px;
          right: 6px;
          width: 106px;
          color: #515151;
          font-size: $fontSize;
          ul {
            width: 86px;
            margin-top: 6px;
            background: #fff;
            padding: 5px 10px;
            box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
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
            top: 0px;
            right: 3px;
          }
        }
        .menu:hover #menuPopup {
          display: block;
        }
        #menuPopup:hover {
          display: block;
        }
      }
    }
  }
}
</style>
