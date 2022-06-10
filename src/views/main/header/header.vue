<template>
  <div id="wuHeader">
    <!-- title -->
    <h2>标题</h2>
    <!-- 用户下拉 -->
    <div class="user-link" @click.stop="userCheck">
      <!-- 点击按钮 -->
      <div class="user-dropdown">
        <span class="user-dropdown-link">
          <template v-if="userInfo.headline">
            <i
              style="width: 30px; height: 30px; border-radius: 50%"
              v-if="userInfo.headline"
            >
                            <img
                :src="userInfo.headline"
                alt="用户头像"
                style="border-radius: 50%; width: 100%"
              />
                        </i
            >
          </template>
          <template v-else>
            <i class="el-icon-user-solid"></i>
          </template>
          <span class="user-name">{{ userInfo.name }}</span>
          <i
            class="el-icon-caret-bottom"
            style="margin-left: 2px; font-size: 16px"
          ></i>
        </span>
      </div>
    </div>
    <!-- 定位 -->
    <div class="user-potion" v-if="userCheckType">
      <!-- 账号名 -->
      <p>
        账号名：<span>{{ userInfo.name }}</span>
      </p>
      <!-- 昵称 -->
      <p>
        昵称：<span>{{ userInfo.userName }}</span>
      </p>
      <!-- 角色 -->
      <p>角色：<span>超级管理员</span></p>
      <!-- 退出按钮 -->
      <div class="role-out" @click.stop="roleOut">
        <span>退出</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      // 角色信息出现开关
      userCheckType: false,
    };
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  methods: {
    // 角色信息点击事件
    userCheck() {
      this.userCheckType = !this.userCheckType;
    },
    // 退出登录
    roleOut() {
      console.log("退出");
    },
    // 全局事件
    addClick(e) {
      let _this = this;
      _this.userCheckType = false;
      e.stopPropagation();
    },
  },
  mounted() {
    this.$nextTick(() => {
      let _this = this;
      document.addEventListener("click", this.addClick, false);
      // console.log(this.userInfo)
    });
  },
  destroyed() {
    document.removeEventListener("click", this.addClick, false);
  },
};
</script>

<style>
#wuHeader {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user-link {
  color: rgb(34, 40, 50) !important;
  position: relative;
  cursor: pointer;
  user-select: none;
}
.user-dropdown-link {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#wuHeader h2 {
  line-height: 50px;
}
#wuHeader h2,
.user-dropdown-link i,
.user-dropdown-link span {
  color: rgb(34, 40, 50) !important;
}
.user-dropdown-link i:first-child {
  font-size: 18px;
  margin-right: 8px;
}

.user-potion {
  position: fixed;
  top: 48px;
  right: 0;
  min-width: 340px;
  background: linear-gradient(135deg, #f56c6c, rgb(27, 32, 40)),
    linear-gradient(-145deg, rgb(27, 32, 40), #f56c6c);
  font-size: 14px;
  padding: 20px 10px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  word-break: break-all;
  color: #ffffff;
  opacity: 0.6;
  z-index: 2000;
  transform: translateY(-20px);
  animation: infoRoleOut 0.7s forwards ease-in-out;
}
.user-potion p {
  margin: 14px 0;
}

.role-out {
  height: 24px;
  padding: 0 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 12px;
  background: #f56c6c;
  position: absolute;
  right: 20px;
  top: 30px;
  border-radius: 5px;
  user-select: none;
}

/* 信息显示动画 */
@keyframes infoRoleOut {
  from {
    opacity: 0.6;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>