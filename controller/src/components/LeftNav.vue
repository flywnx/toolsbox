<template>
  <div class="leftNav">
    <el-menu @open="onOpen"
             @close="onClose"
             :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="ali-icon-biaodan"></i>
          <span>工具</span>
        </template>
        <el-menu-item index="1-1"
                      class="item"
                      @click="toToolsList">工具列表</el-menu-item>
        <el-menu-item index="1-2"
                      class="item"
                      @click="toToolsTagList">工具标签列表</el-menu-item>

      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
// import { mapState } from 'vuex';
export default {
  "name": 'leftNav',
  "data": () => {
    return {
      "isCollapse": false
    };
  },
  "methods": {
    toToolsList () {

    },
    toToolsTagList () {
      this.$router.push("/home/toolsTagList");
    },
    onOpen () {

    },
    onClose () {

    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/_config.scss";
.leftNav {
  position: fixed;
  margin-top: $topHeight;
  width: 15%;
  top: 0;
  bottom: 0;

  ul {
    height: 100%;
    background-color: #324157;

    i {
      font-size: $fontSize * 2;
      color: #909399;
      padding: 0 $fontSize;
    }
    span,
    li {
      font-size: $fontSize * 1.5;
      color: #909399;
    }
  }
}
.el-menu-item {
  background-color: #455771;
}
.el-menu-item:hover {
  background-color: #ecf5ff;
}
</style>

