<template>
  <div id="login">
    <Rain />
    <div class="login-content">
      <el-card shadow="always" class="login-content-card">
        <h2>医院账号Kpi</h2>
        <!-- form -->
        <el-form
          class="login-form"
          status-icon
          :model="loginModel"
          ref="loginForm"
          :rules="loginRules"
        >
          <!-- 账号 -->
          <el-form-item prop="name" required>
            <el-input placeholder="请输入账号" v-model="loginModel.name">
              <template slot="prepend">
                <i class="el-icon-user-solid"></i>
              </template>
            </el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="pass" required>
            <el-input
              placeholder="请输入密码"
              v-model="loginModel.pass"
              type="password"
            >
              <template slot="prepend">
                <i class="el-icon-key"></i>
              </template>
            </el-input>
          </el-form-item>
          <!-- 记住密码 -->
          <el-form-item class="checkbox-content" prop="label" required>
            <el-checkbox v-model="loginModel.label" style="font-size: 12px"
              ><span class="checkbox-pass">记住密码</span></el-checkbox
            >
          </el-form-item>
          <!-- 按钮 -->
          <el-form-item class="login-btn">
            <el-button type="primary" @click="loginForm('loginForm')"
              >提交</el-button
            >
            <el-button @click="resetForm('loginForm')">重置</el-button>
            <el-button @click="pushReg" type="warning" disabled>注册</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
import Rain from "../../components/Rain";
import Login from "../../http/api/push/layout"; // 登录接口
import { mapActions } from "vuex";
export default {
  data() {
    // 账号验证变量
    const name = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号！"));
        return;
      } else if (isNaN(value)) {
        callback(new Error("请输入正确的账号！"));
        return;
      } else {
        callback();
      }
    };
    // 密码
    const pass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码！"));
        return;
      } else {
        callback();
      }
    };
    // 勾选项目
    const label = (rule, value, callback) => {
      // console.log(value);
      if (!value) {
        // console.log(12121)
        callback(new Error("请勾选！"));
        return;
      } else {
        callback();
      }
    };
    return {
      // form 数据
      loginModel: {
        pass: "",
        name: "",
        label: "",
      },
      // 验证规则
      loginRules: {
        name: [
          {
            validator: name,
            trigger: ["blur", "change"],
          },
        ],
        pass: [
          {
            validator: pass,
            trigger: ["blur", "change"],
          },
        ],
        label: [
          {
            validator: label,
            trigger: ["blur", "change"],
          },
        ],
      },
    };
  },
  mounted() {},
  components: {
    Rain,
  },
  methods: {
    ...mapActions(["saveUserInfo"]),
    // 注册
    pushReg() {
      this.$router.push("/Reg");
    },
    // 异步login
    async login_ajax(data) {
      try {
        let arr = await Login(data);
        console.log(arr.data.code)
        if (arr.data.code === 200) {
          let msg = arr.data.msg;
          let data = {
            id: arr.data.data.id,
            name: arr.data.data.name,
            roles: arr.data.data.roles,
            token: arr.data.data.token,
            userName: arr.data.data.userName,
            headline: arr.data.data.headline,
          };
          this.$message({
            type: "success",
            message: msg,
          });
          // 保存token和元信息
          this.saveUserInfo(data);
          // 跳转
          setTimeout(() => {
            this.$router.push("/");
          }, 2000);
        } else if (arr.data.code === 302) {
          this.$message({
            type: 'warning',
            message: arr.data.msg
          })
        }
      } catch (error) {
        console.log(213123123)
        this.$message({
          type: "warning",
          message: "服务器错误！",
        });
      }
    },
    // 登录
    loginForm(e) {
      // console.log(e);
      this.$refs[e].validate((valid) => {
        // console.log(this.loginModel.label);
        if (valid) {
          this.login_ajax({
            userName: this.loginModel.name,
            pwd: this.loginModel.pass,
          });
        } else {
          return false;
        }
      });
    },
    // 重置
    resetForm(e) {
      this.$refs[e].resetFields();
    },
  },
};
</script>

<style>
#login {
  width: 100%;
  height: 100%;
  background: url("../../assets/loginBG.webp") center no-repeat;
  background-size: cover;
}
/* login开始 */
.login-content {
  width: 100%;
  height: 100%;
  position: relative;
}
/* 中心卡片 */
.login-content-card {
  width: 25%;
  padding: 10px 20px 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -20%;
  animation: login-card 1s forwards ease-in-out;
}

/* form 开始 */
.login-form {
  width: 100%;
  padding-top: 20px;
}

.checkbox-pass {
  font-size: 12px;
  color: #808080;
}

/* checkbox处理 */
.login-btn {
  display: flex;
  justify-content: right;
}

.checkbox-content {
  margin: 0;
}

@keyframes login-card {
  from {
    top: -20%;
  }
  to {
    top: 200px;
  }
}
</style>