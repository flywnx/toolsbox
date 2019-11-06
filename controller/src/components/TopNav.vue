<template>
  <div class="topNav">
    <!-- left box -->
    <div class="leftBox">
      <i class="ali-icon-tools"></i>
      <h2>tools controller</h2>
    </div>
    <!-- right box -->
    <div class="rightBox">
      <el-dropdown class="userBox">
        <span id="username">用户名</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  name: "topNav",
  data: () => {
    return {};
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/_config.scss";
.topNav {
  background-color: #242f42;
  height: $topHeight;
  width: 100vw;
  line-height: $topHeight;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .leftBox {
    display: flex;
    justify-content: space-around;
    padding-left: $fontSize * 4;
    i,
    h2 {
      font-size: $fontSize * 2;
      color: aliceblue;
    }
    i {
      padding-right: $fontSize * 1;
    }
  }
  .rightBox {
    padding-right: $fontSize * 6;
    display: flex;
    align-items: center;
    .userBox {
      height: $fontSize * 1.5;
      line-height: $fontSize * 1.5;
    }
    #username {
      color: aliceblue;
      font-size: $fontSize * 1.5;
    }
  }
}
</style>
