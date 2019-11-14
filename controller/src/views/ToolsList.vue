<template>
    <div class="tableBox">
        <div class="topBox">
            <el-button type="primary" icon="ali-icon-add" @click="addTaget">
                添加</el-button
            >
        </div>
        <el-table :data="toolsInfo" border>
            <el-table-column prop="id" label="ID" align="center" width="64px">
            </el-table-column>
            <el-table-column prop="name" label="名称" align="center">
            </el-table-column>
            <el-table-column
                prop="icon"
                label="图标"
                align="center"
                width="72px"
                height="72px"
            >
                <template slot-scope="scope">
                    <i :class="scope.row.icon" class="icon"></i>
                </template>
            </el-table-column>
            <el-table-column prop="url" label="链接" align="center">
            </el-table-column>
            <el-table-column prop="target" label="标签" align="center">
            </el-table-column>
            <el-table-column
                prop="showType"
                label="展示"
                align="center"
                width="64px"
            >
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间" align="center">
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button
                        type="primary"
                        plain
                        icon="el-icon-delete"
                        @click="deleteTag(scope.row)"
                        >编辑</el-button
                    >
                    <el-button
                        type="danger"
                        plain
                        icon="el-icon-delete"
                        @click="deleteTag(scope.row)"
                        >删除</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { getToolsInfo } from "../api/index";
export default {
    "name": "toolsTagList",
    "data": () => {
        return {
            "toolsInfo": []
        };
    },
    async created() {
        const toolsInfo = await getToolsInfo();
        if (toolsInfo.code === 0) {
            this.toolsInfo = toolsInfo.data;
            console.log(this.toolsInfo);
        } else {
            this.$message.error("获取标签错误");
        }
    },
    "methods": {
        addTaget() {},
        deleteTag() {}
    }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/_config.scss";
.tableBox {
    width: 80%;
    margin-left: 10%;
    .topBox {
        padding: $fontSize * 2 0;
    }
    .icon {
        font-size: $fontSize * 4;
    }
}
</style>
