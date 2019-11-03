<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 基础表格
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-button type="primary" icon="el-icon-plus" @click="addTools"></el-button>
            </div>
            <el-table
                :data="tableData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
            >
                <el-table-column type="selection" width="55" align="center"></el-table-column>

                <el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>

                <el-table-column prop="name" label="工具名"></el-table-column>

                <el-table-column label="图标" align="center">
                    <template slot-scope="scope">
                        <i :class="scope.row.icon"></i>
                    </template>
                </el-table-column>

                <el-table-column prop="url" label="链接"></el-table-column>

                <el-table-column label="标签" align="center">
                    <template slot-scope="scope">
                        <el-tag v-for="t in scope.row.target" :key="t">{{t}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="状态" align="center">
                    <template slot-scope="scope">{{scope.row.showType?'显示':'隐藏'}}</template>
                </el-table-column>
                <el-table-column prop="createTime" label="创建时间"></el-table-column>
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            icon="el-icon-edit"
                            @click="handleEdit(scope.$index, scope.row)"
                        >编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination
                    background
                    layout="total, prev, pager, next"
                    :current-page="query.pageIndex"
                    :page-size="query.pageSize"
                    :total="pageTotal"
                    @current-change="handlePageChange"
                ></el-pagination>
            </div>
        </div>

        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="70px">
                <el-form-item label="工具名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="图标">
                    <el-input v-model="form.icon"></el-input>

                    <el-button
                        type="text"
                        icon="el-icon-question"
                        class="question"
                        @click="onIconIngo"
                    ></el-button>
                </el-form-item>
                <el-form-item label="链接">
                    <el-input v-model="form.url"></el-input>
                </el-form-item>
                <el-form-item label="标签">
                    <el-select v-model="form.target" multiple placeholder="请选择">
                        <el-option
                            v-for="item in tableTarget"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="显示状态">
                    <el-switch v-model="form.showtype"></el-switch>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { getToolsInfo, getToolsTarget, saveToolsInfo } from '../../api/index';
import { isJson } from '../../utils/json';
export default {
    name: 'basetable',
    data() {
        return {
            query: {
                address: '',
                name: '',
                pageIndex: 1,
                pageSize: 10
            },
            tableData: [],
            tableTarget: [],
            targetDiction: {},
            multipleSelection: [],
            delList: [],
            editVisible: false,
            pageTotal: 0,
            form: {},
            idx: -1,
            id: -1
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        // 获取数据
        async getData() {
            // 获取标签信息
            let toolsTarget = await getToolsTarget();
            if (toolsTarget.code == 0) {
                this.tableTarget = toolsTarget.data;
                toolsTarget.data.forEach((item, index) => {
                    this.targetDiction[item.id] = item.name;
                });
                // console.log(this.targetDiction);
            } else {
                alert('获取标签信息错误');
            }
            // 获取工具信息
            let toolsInfo = await getToolsInfo();
            if (toolsInfo.code == 0) {
                toolsInfo.data.map(item => {
                    item.target = JSON.parse(item.target);
                    item.target.map((i, count) => {
                        item.target[count] = this.targetDiction[i];
                        return;
                    });
                });
                this.tableData = toolsInfo.data;
            } else {
                alert('获取工具信息错误');
            }
            console.log(this.tableData);
        },
        // 添加工具
        addTools() {},
        // 编辑操作
        handleEdit(index, row) {
            this.idx = index;
            this.form = row;
            this.editVisible = true;
        },
        // 保存编辑
        async saveEdit() {
            // 获取工具信息
            const h = this.$createElement;
            console.log(this.form);
            this.form.target = JSON.stringify(this.form.target);
            let saveCallback = await saveToolsInfo(this.form);
            if (saveCallback.code == 0) {
                this.$notify({
                    title: '保存工具信息',
                    message: h('i', { style: 'color: teal' }, '获取工具信息成功')
                });
            } else {
                this.$notify({
                    title: '保存工具信息',
                    message: h('i', { style: 'color: teal' }, '获取工具信息错误')
                });
            }
        },
        // 分页导航
        handlePageChange(val) {
            this.$set(this.query, 'pageIndex', val);
            this.getData();
        },
        // 跳转到图标详细页
        onIconIngo() {}
    }
};
</script>

<style scoped>
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.handle-input {
    width: 300px;
    display: inline-block;
}
.table {
    width: 100%;
    font-size: 14px;
}
.red {
    color: #ff0000;
}
.mr10 {
    margin-right: 10px;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
.question {
    position: absolute;
    right: 20px;
}
</style>
