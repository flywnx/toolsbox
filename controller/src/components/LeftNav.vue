<template>
  <div class="leftNav">
    <el-menu @open="onOpen" @close="onClose" :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="ali-icon-biaodan"></i>
          <span>工具列表</span>
        </template>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "leftNav",
  data: () => {
    return {
      // 是否水平折叠收起菜单
      isCollapse: false
    };
  },
  methods:{
    onOpen(){

    },
    onClose(){
      console.log('123');
      
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/_config.scss";
.leftNav{
  position: fixed;
  margin-top: $topHeight;
  width: 15%;
  top: 0;
  bottom: 0;
  i{
     font-size: $fontSize * 2;
      color: #909399;
  }
  ul{
    height: 100%;
  }
}

</style>
