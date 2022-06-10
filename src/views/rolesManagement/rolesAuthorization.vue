<template>
  <div class="rolesAuthorization">
    <el-card class="rolesAuthorization-card">
      <div slot="header">
        <h2>角色授权</h2>
      </div>
      <!-- 授权tree -->
      <el-tree
        ref="rolesTree"
        :data="list"
        show-checkbox
        node-key="id"
        :default-expanded-keys="[]"
        :props="defaultProps"
        :accordion="true"
        :check-strictly="isCheck"
      >
      </el-tree>
      <div class="authorization-button">
        <el-button type="primary" @click="rolesIdBtn">授权</el-button>
        <el-button type="info">清空</el-button>
        <el-button @click="cancelAuthorization">取消</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
// 获取所有路由导航 按照当前权限获取导航id 编辑导航
import {
  rolesRouter,
  jurisdictionRouter,
  updateRolseAuthorization,
} from "../../http/api/push/api";
console.log(rolesRouter);
console.log(jurisdictionRouter);
// 调用工具
import { transformTree } from "../../tool/tool";
export default {
  name: "rolesAuthorization",
  inject: ["reload"],
  data() {
    return {
      // 互不相连
      isCheck: false,
      defaultProps: {
        children: "children",
        label: "name",
      },
      // 获取当前id
      rolesId: null,
      // 保存所有导航数据
      list: [],
      // 保存当前获取到得id集合
      expanded: [],
    };
  },
  methods: {
    // 授权接口
    async updateRolseAuthorization(list) {
      try {
        let query = await updateRolseAuthorization({
          rolesId: this.rolesId,
          routeList: list,
        });
        let { code, msg } = query.data;
        if (code === 200) {
          this.$message({
            type: "success",
            message: msg,
          });
          let time = setTimeout(() => {
            this.reload();
            time = null;
          }, 2000);
        } else {
          this.$message({
            type: "warning",
            message: msg,
          });
        }
        console.log(query.data);
      } catch (error) {
        console.log(new Error(error));
      }
    },
    // 授权
    rolesIdBtn() {
      // 获取父节点+子节点的值
      let list = this.$refs.rolesTree
        .getCheckedKeys()
        .concat(this.$refs.rolesTree.getHalfCheckedKeys());
      this.updateRolseAuthorization(list);
    },
    cancelAuthorization() {
      this.$router.push({
        name: "roles",
      });
    },
    // 获取所有导航
    async rolesRouter() {
      try {
        let list = await rolesRouter();
        let aa = await jurisdictionRouter({
          jurisdiction: this.rolesId,
        });
        let { data, code } = list.data;
        console.log(aa.data);
        if (code === 200 || aa.data.code === 200) {
          if (code === 200) {
            this.list = transformTree(data);
          }
          if (aa.data.code === 200) {
            this.isCheck = true;
            this.expanded = aa.data.data;
            console.log(aa)
            // 改变父节点获取到 会选中所有子节点的回显问题
            this.$nextTick(() => {
              console.log(this.expanded);
              this.$refs.rolesTree.setCheckedKeys(this.expanded);
              this.isCheck = false;
            });
          }

          console.log(this.expanded);
        }
      } catch (error) {
        console.log(new Error(error));
      }
    },
  },
  created() {
    // 保存当前id值
    this.rolesId = this.$route.params.rolesId;
    console.log(this.rolesId);
    // 获取所有导航调用
    this.rolesRouter();
  },
  mounted() {},
};
</script>



<style lang="scss">
@import "../../assets/main.scss";
.rolesAuthorization {
  width: 100%;
  height: 100%;
  background: #ffffff;
}

.rolesAuthorization-card {
  width: 100%;
  height: $--mainHeight;
}

.authorization-button {
  margin-top: 40px;
}
</style>
