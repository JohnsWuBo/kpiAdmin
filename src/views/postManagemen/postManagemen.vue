<template>
  <div class="postManagemen">
    <el-card class="postManagemen-card">
      <div slot="header">
        <el-button type="primary" @click="postFun">新建</el-button>
      </div>
      <!-- 表格 -->
      <el-table
        tooltip-effect="dark"
        style="width: 100%"
        ref="postManagemenTable"
        border
        stripe
        :data="postManagemenList"
        row-key="id"
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column label="名称" prop="name">
        </el-table-column>
        <el-table-column label="级别" prop="orgLevel">
            <template slot-scope="scope">
                <el-tag :type="levelObj[scope.row.orgLevel].color">{{levelObj[scope.row.orgLevel].name}}</el-tag>
            </template>
        </el-table-column>
        <el-table-column label="职称系数" prop="coefficient">
            
        </el-table-column>
        <el-table-column label="操作">
            <el-button type="primary" size="mini">修改</el-button>
            <el-button size="mini">删除</el-button>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 遮罩mask -->
    <div class="fixedMask" v-if="postType">
        <buildPost @cancelPost="cancelPost"></buildPost>
    </div>
  </div>
</template>

<script>
// 新建/修改 岗位
import buildPost from './buildPost';
export default {
    data() {
        return {
            // 控制遮罩层 flag
            postType: false,
            // 存放请求 级别对应的文字
            levelObj: {
                1: {
                    'name': '职称',
                    'color': 'primary'
                },
                2: {
                    'name': '证书',
                    'color': 'warning'
                }
            },
            // 表格数据
            postManagemenList: [
                {
                    name: '医师',
                    parentId: 0,
                    id: 1,
                    orgLevel: 1,
                    coefficient: 0,
                    children: [{
                        name: '医生无资格证',
                        parentId: 1,
                        orgLevel: 2,
                        id: 2,
                        coefficient: 0.5,
                    },{
                        name: '医生有资格证',
                        parentId: 1,
                        orgLevel: 2,
                        id: 3,
                        coefficient: 1,
                    }]
                }
            ]
        }
    },
    components: {
        buildPost
    },
    methods: {
        //取消函数
        cancelPost() {
            this.postType = false;
        },
        // 新建/修改按钮
        postFun() {
            this.postType = true;
        }
    }
}
</script>

<style lang="scss">
@import "../../assets/main.scss";
.postManagemen {
  width: 100%;
  height: 100%;
  background: #ffffff;
}

.postManagemen-card {
  width: 100%;
  height: $--mainHeight;
}
</style>