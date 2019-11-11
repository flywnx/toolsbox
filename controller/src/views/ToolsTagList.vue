<template>
  <el-table :data="tableData"
            border
            style="width: 100%">
    <el-table-column prop="date"
                     label="日期"
                     width="180">
    </el-table-column>
    <el-table-column prop="name"
                     label="姓名"
                     width="180">
    </el-table-column>
    <el-table-column prop="address"
                     label="地址">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  "name": "toolsTagList",
  "data": () => {
    return {
      "tagInfo": []
    };
  },
  async created () {
    const tagInfo = await getToolsTag();
    if (loginInfo.code === 0) {
      this.tagInfo = tagInfo;
      console.log(this.tagInfo);
      // this.$message.success("登录成功");
      // localStorage.setItem("ms_username", this.param.username);
      // this.$router.push("/home");
    } else {
      this.$message.error("获取标签错误");
    }
  },
};
</script>
<style lang="scss" scoped></style>
