<template>
    <div class="tableBox">
        <div class="topBox">
            <el-button type="primary" icon="ali-icon-add" @click="addTaget">
                添加</el-button
            >
        </div>
        <el-table :data="tagInfo" border>
            <el-table-column prop="id" label="id" align="center">
            </el-table-column>
            <el-table-column prop="name" label="标签" align="center">
            </el-table-column>
            <el-table-column prop="id" label="编辑" align="center">
                <template slot-scope="scope">
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
import { getToolsTarget, addTarget } from "../api/index";
export default {
    "name": "toolsTagList",
    "data": () => {
        return {
            "tagInfo": []
        };
    },
    async created() {
        const tagInfo = await getToolsTarget();
        if (tagInfo.code === 0) {
            this.tagInfo = tagInfo.data;
            console.log(this.tagInfo);
        } else {
            this.$message.error("获取标签错误");
        }
    },
    "methods": {
        addTaget() {
            this.$prompt("请输入标签名", "添加标签", {
                "confirmButtonText": "确定",
                "cancelButtonText": "取消",
                "inputPlaceholder": "请输入标签名"
            })
                .then(async ({ value }) => {
                    console.log("开始添加 标签");
                    const callBack = await addTarget(`?tagName=${value}`);
                    if (callBack.code == 0) {
                        this.tagInfo = callBack.data;
                        this.$message({
                            "type": "success",
                            "message": "成功添加标签"
                        });
                    } else {
                        this.$message({
                            "type": "info",
                            "message": "标签添加失败"
                        });
                    }
                })
                .catch((err) => {
                    console.log(err);
                    this.$message({
                        "type": "info",
                        "message": "取消输入"
                    });
                });
        },
        deleteTag(e) {
            console.log(e);
        }
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
}
</style>
