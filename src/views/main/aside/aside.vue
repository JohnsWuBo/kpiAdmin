<template>
  <div id="wuAside">
    <div class="aside-top">
      <!-- <el-radio-group v-model="isCollapse">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group> -->
      <!-- 展开收缩按钮 -->
      <div :class="isCollapse ? 'aside-top-btn active' : 'aside-top-btn'">
        <el-button
          :icon="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
          @click="isCollapseBtn"
        ></el-button>
      </div>
    </div>
    <div class="line"></div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      text-color="#fff"
      unique-opened
      active-text-color="#ffd04b"
      background-color="rgb(34, 40, 50)"
      router
    >
      <tree :subAsideList="arr"></tree>
    </el-menu>
  </div>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100%;
}
</style>

<script>
import tree from "../../../components/tree.vue";
export default {
  name: "ForTree",
  data() {
    return {
      isCollapse: false,
      arr: [],
    };
  },
  mounted() {
    this.arr = [
      {
        title: "系统管理",
        path: "",
        children: [
          {
            path: "/user/1",
            title: "用户管理",
          },
          {
            path: "/roles",
            title: "角色管理",
          },
        ],
      },
      {
        path: "",
        title: "科室管理",
        children: [
          {
            title: "科室管理",
            path: "/DepartmentManagemen",
          },
        ],
      },
      {
        path: "",
        title: "岗位管理",
        children: [
          {
            title: "岗位管理及相应系数",
            path: "postManageman",
          },
        ],
      },
      {
        path: "",
        title: "绩效管理",
        children: [
          {
            path: "/achievements",
            title: "月度奖金绩效总览明细",
          },
          {
            path: "/performanceScore",
            title: "绩效分展示",
          },
          {
            path: "/achievementsConfigure",
            title: "绩效项目配置",
          },
          {
            path: "/registerAchievements",
            title: "绩效登记",
          },
        ],
      },
      {
        path: "",
        title: "考核项目管理",
        children: [
          {
            path: "/assessmentStandard",
            title: "考核标准",
          },
        ],
      },
      {
        path: "",
        title: "统计管理",
        children: [
          {
            path: "/archivesCenter",
            title: "档案室和采血统计对比",
          },
        ],
      },
    ];
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    isCollapseBtn() {
      this.isCollapse = !this.isCollapse;
    },
  },
  components: {
    tree,
  },
};
</script>

<style>
#wuAside {
  width: auto;
  height: 100%;
  overflow: hidden;
  background: rgb(34, 40, 50);
}

/* 按钮 */
.aside-top {
  width: 100%;
  height: 50px;
}
.aside-top-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-left: 6px solid transparent;
}

/* .aside-top-btn.active{
  border-color: #f56c6c;
} */

.aside-top-btn button {
  background: rgb(34, 40, 50);
  color: #909399;
  border: none;
}

.aside-top-btn button:hover {
  background: rgb(27, 32, 40);
  color: #f56c6c;
}

.aside-top-btn button.el-button,
.aside-top-btn button.el-button--default.isActive {
  background: rgb(34, 40, 50);
  color: #909399;
}

#wuAside .line {
  border-top: 1px solid hsla(0, 0%, 100%, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
</style>