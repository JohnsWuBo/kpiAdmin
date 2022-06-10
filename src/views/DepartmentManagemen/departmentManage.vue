<template>
  <div class="DepartmentManagemen">
    <el-card class="DepartmentManagemen-card">
      <div slot="header">
        <el-button type="primary" @click="newBuildBtn(0)">新建医院</el-button>
      </div>
      <!-- 表格 -->
      <el-table
        tooltip-effect="dark"
        style="width: 100%"
        ref="DepartmentTable"
        border
        stripe
        :data="departmentList"
        row-key="id"
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        >
        <el-table-column label="名称">
          <template slot-scope="scope">
            <el-tag :type="departmentNameType(scope.row.orgLevel)">{{
              scope.row.userName
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="级别" prop="level" align="center">
          <template slot-scope="scope">
            <el-tag :type="departmentNameType(scope.row.orgLevel)">{{
              scope.row.userName
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="newBuildBtn(scope.row.orgLevel, scope.row.id)"
              v-if="
                scope.row.orgLevel === 1 ||
                scope.row.orgLevel === 2 ||
                scope.row.orgLevel === 3
              "
              >{{ newBuildText(scope.row) }}</el-button
            >
            <el-button size="mini" type="success" @click="modifyBtn(scope.row.id,scope.row.orgLevel)">修改</el-button>
            <el-button size="mini" type="warning">删除</el-button>
            <el-button size="mini" type="info" v-if="scope.row.orgLevel === 4" @click="configBtn"
              >配置</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 遮罩 -->
    <div class="fixedMask" v-if="buildType || configRoom">
      <!-- 新建组件 -->
      <new-build-department @cancelBuildType="cancelBuildType" :orgLevel="orgLevel" :id="id" v-if="buildType"></new-build-department>
      <!-- 配置室组件 -->
      <room-configure v-if="configRoom" @cancelconfigRoom="cancelconfigRoom"></room-configure>
    </div>
  </div>
</template>

<script>
// 新建遮罩
import newBuildDepartment from './newBuildDepartment';
// 配置室room
import roomConfigure from './roomConfigure';

export default {
  name: "DepartmentManagemen",
  data() {
    return {
      // 保存点击的id值
      id: null,
      // 配置室组件开关
      configRoom: false,
      // 记录orgLevel的值 用来控制显示子组件的部分
      orgLevel: 0,
      // 新建 修改 组件开关
      buildType: false,
      // 科室数据
      departmentList: [
        {
          id: 1,
          parentId: 0,
          userName: "承德医院",
          level: "医院",
          orgLevel: 1,
          children: [
            {
              id: 2,
              orgLevel: 2,
              parentId: 1,
              userName: "承德分院",
              level: "分院",
              children: [
                {
                  id: 3,
                  orgLevel: 3,
                  parentId: 2,
                  userName: "体验课",
                  level: "科",
                  children: [
                    {
                      id: 4,
                      orgLevel: 4,
                      parentId: 3,
                      userName: "暗适应",
                      level: "室",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  },
  computed: {
    // 颜色
    departmentNameType() {
      return function (id) {
        switch (id) {
          case 1:
            return "primary";
          case 2:
            return "success";
          case 3:
            return "warning";
          case 4:
            return "info";
          default:
            return "primary";
        }
      };
    },
    // 过滤新建按钮文字
    newBuildText() {
      return function (row) {
        let orgLevel = row.orgLevel;
        if (orgLevel !== 4) {
          switch (orgLevel) {
            case 1:
              return "新建分院";
            case 2:
              return "新建科";
            case 3:
              return "新建室";
            default:
              return "新建";
          }
        }
      };
    },
  },
  components: {
    //新建组件
    newBuildDepartment,
    // 配置组件
    roomConfigure
  },

  methods: {
    // 修改按钮
    modifyBtn(id, orgLevel) {
      this.id = id;
      this.orgLevel = orgLevel - 1;
      this.buildType = true;
      this.configRoom = false;
    },
    // 新建函数
    newBuildBtn(orgLevel, id) {
      this.orgLevel = orgLevel;
      this.id = id;
      this.buildType = true;
      this.configRoom = false;
    },
    // 子组件取消函数
    cancelBuildType() {
      this.buildType = false;
      this.configRoom = false;
      this.id = null;
    },
    // 配置室显示函数
    configBtn() {
      this.buildType = false;
      this.configRoom = true;
    },
    // 配置室取消函数
    cancelconfigRoom() {
      this.buildType = false;
      this.configRoom = false;
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/main.scss";
.DepartmentManagemen {
  width: 100%;
  height: 100%;
  background: #ffffff;
}

.DepartmentManagemen-card {
  width: 100%;
  height: $--mainHeight;
}
</style>