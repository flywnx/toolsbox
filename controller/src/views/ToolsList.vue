<template>
    <div class="tableBox">
        <div class="topBox">
            <el-button
                type="primary"
                icon="ali-icon-add"
                @click="addDialogShow = true"
                >添加</el-button
            >
        </div>
        <el-table :data="toolsInfo" border>
            <el-table-column
                prop="id"
                label="ID"
                align="center"
                width="64px"
            ></el-table-column>
            <el-table-column
                prop="name"
                label="名称"
                align="center"
            ></el-table-column>
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
            <el-table-column
                prop="url"
                label="链接"
                align="center"
            ></el-table-column>
            <el-table-column prop="target" label="标签" align="center">
                <template slot-scope="scope">
                    <el-tag
                        type="success"
                        v-for="(item, index) in scope.row.target.split(',')"
                        :key="index"
                        >{{ item }}</el-tag
                    >
                </template>
            </el-table-column>
            <el-table-column
                prop="showType"
                label="展示"
                align="center"
                width="64px"
            >
                <template slot-scope="scope">
                    <i
                        v-show="scope.row.showType == 0"
                        class="ali-icon-yanjing"
                    ></i>
                    <i
                        v-show="scope.row.showType == 1"
                        class="ali-icon-yanjing1"
                    ></i>
                </template>
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间" align="center">
                <template slot-scope="scope">
                    <i>{{
                        new Date(Number(scope.row.createTime)).toLocaleString()
                    }}</i>
                </template>
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

        <el-dialog
            title="新增道具"
            :visible.sync="addDialogShow"
            :modal-append-to-body="false"
        >
            <el-input placeholder="名称" v-model="addInfo.name"></el-input>

            <el-input placeholder="链接" v-model="addInfo.url"></el-input>

            <div class="lineMore">
                <el-select v-model="addInfo.tag" multiple placeholder="标签">
                    <el-option
                        v-for="item in tagInfo"
                        :key="item.id"
                        :label="item.name"
                        :value="item.name"
                    ></el-option>
                </el-select>
                <el-switch
                    v-model="addInfo.showType"
                    active-text="展示"
                    inactive-text="隐藏  "
                ></el-switch>
            </div>
            <div class="lineMore">
                <el-input
                    type="file"
                    placeholder="选择图片"
                    v-model="addInfo.icon"
                    @change="selectIcon"
                ></el-input>
                <el-button type="primary" @click="onAddTools">确定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import {
    getToolsInfo,
    getToolsTarget,
    addTools
    // getQiniuToken
} from "../api/index";
import * as qiniu from "qiniu-js";
export default {
    "name": "toolsList",
    "data": () => {
        return {
            "toolsInfo": [],
            "tagInfo": [],
            "addDialogShow": false,
            "addInfo": {
                "name": "",
                "icon": "",
                "url": "",
                "showType": true,
                "tag": []
            },
            "fileList": []
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
        const tagInfo = await getToolsTarget();
        if (tagInfo.code === 0) {
            this.tagInfo = tagInfo.data;
            console.log(this.tagInfo);
        } else {
            this.$message.error("获取标签错误");
        }
    },
    "methods": {
        selectIcon($event) {
            console.log($eventn, $event.target);
            const file = this.addInfo.icon.target.files[0];
            console.log(file);
            // 限制上传文件的大小为200M
            if (file.size > 209715200) {
                const cur_size =
                    Math.floor((file.size * 100) / 1024 / 1024) / 100;
                this.$message.error(
                    "上传文件大小不得超过200M 当前文件" + cur_size + "M "
                );
                return false;
            }
        },
        onAddTools() {},
        deleteTools() {}
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
        font-size: $fontSize * 3;
        position: relative;
        top: $fontSize * 0.7;
    }
    .el-tag + .el-tag {
        margin-left: 10px;
    }
    .el-dialog__body {
        .el-input,
        .el-select {
            margin-bottom: $fontSize;
        }
        .lineMore {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
}
</style>
