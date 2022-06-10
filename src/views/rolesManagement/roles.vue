<template>
  <div class="roles">
    <el-card class="roles-card">
      <!-- 头部 -->
      <div slot="header">
        <el-button type="primary" @click="buildRoles(0)">新建</el-button>
      </div>
      <!-- 表格 -->
      <el-table
        tooltip-effect="dark"
        style="width: 100%"
        ref="rolesTable"
        :data="rolesData"
        border
        stripe
        v-loading="loading"
      >
        <el-table-column prop="name" label="角色名称" align="center">
        </el-table-column>
        <el-table-column prop="id" label="授权" align="center">
          <template slot-scope="scope">
            <el-button
              @click="authorization(scope.row.id)"
              circle
              icon="el-icon-edit"
              type="primary"
            ></el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作" prop="id">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="modifyBtn(scope.row.id)"
              >修改</el-button
            >
            <el-button type="warning" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 遮罩 -->
    <div class="fixedMask" v-if="roleType">
      <modify-roles @cancelRolesBtn="cancelRolesBtn" :modifyRolesId="modifyRolesId"></modify-roles>
    </div>
  </div>
</template>

<script>
// 修改角色组件
import modifyRoles from "./modifyRoles";
// 角色列表 
import { getRolesList } from '../../http/api/push/api';
export default {
  name: "roles",
  inject: ['reload'],
  data() {
    return {
      // loading
      loading: true,
      // 角色表格数组
      rolesData: [
      ],
      // 遮罩开关
      roleType: false,
      // 保存修改的id值
      modifyRolesId: 0,
    };
  },
  created () {
    this.getRolesList()
  },
  methods: {
    // 查询角色列表
    async getRolesList() {
      this.loading = true;
      const obj = {
        page: 1,
        pageSize: 5,
        name: ''
      };
      try {
        let query = await getRolesList(obj);
        let { code , data , msg } = query.data;
        if (code === 200) {
          this.rolesData = data;
        } else if (code === 202) {
          this.$message({
            type: 'warning',
            message: msg
          })
        }
        this.loading = false;
      } catch(error) {
        console.log(new Error(error));
      }
    },
    // 子组件取消按钮
    cancelRolesBtn() {
      this.modifyRolesId = 0;
      this.roleType = false;
      this.reload()
    },
    // 新建 角色
    buildRoles() {
        this.roleType = true;
        this.modifyRolesId = 0;
    },
    // 修改按钮
    modifyBtn(id) {
      console.log(id);
      this.modifyRolesId = id;
      this.roleType = true;
    },
    // 角色授权跳转
    authorization(id) {
      this.$router.push({
        name: "rolesAuthorization",
        params: {
          rolesId: id,
        },
      });
    },
  },
  components: {
    modifyRoles,
  },
};
</script>

<style lang="scss">
@import "../../assets/main.scss";
.roles {
  width: 100%;
  height: 100%;
  background: #ffffff;
}

.roles-card {
  width: 100%;
  height: $--mainHeight;
}
</style>