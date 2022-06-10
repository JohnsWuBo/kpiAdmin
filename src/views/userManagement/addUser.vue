<template>
  <div class="addUser">
    <h2>新增用户</h2>
    <!-- 开始 form 账号，密码，角色，状态，真实姓名，排序，年龄，身份证号，性别，科，职称 -->
    <el-form
      label-width="100px"
      :model="addUserModel"
      :rules="rules"
      ref="addUserModel"
      v-loading="roleList.length <= 0"
    >
      <el-form-item label="手机号：" required prop="user">
        <el-input
          placeholder="请输入手机号！"
          v-model="addUserModel.user"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码：" required prop="pass">
        <el-input
          type="passworld"
          placeholder="请输入密码"
          show-password
          v-model="addUserModel.pass"
        ></el-input>
      </el-form-item>
      <el-form-item label="角色：" required prop="roleNum">
        <el-radio-group v-model="addUserModel.roleNum">
          <el-radio v-for="v in roleList" :key="v.name" :label="v.id">{{
            v.name
          }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="状态：" required prop="rolesType">
        <el-switch
          v-model="addUserModel.rolesType"
          active-color="#cccccc"
          inactive-color="#f56c6c"
          active-value="1"
          inactive-value="0"
        >
        </el-switch>
        {{addUserModel.rolesType}}
      </el-form-item>
      <el-form-item label="真实姓名：" required prop="userName">
        <el-input
          placeholder="请输入真实姓名！"
          v-model="addUserModel.userName"
        ></el-input>
      </el-form-item>
      <el-form-item label="排序：">
        <el-input placeholder="请输入排序字段！"></el-input>
      </el-form-item>
      <el-form-item label="年龄：" required prop="age">
        <el-input
          placeholder="请输入年龄！"
          v-model="addUserModel.age"
        ></el-input>
      </el-form-item>
      <el-form-item label="性别：" required prop="gender">
        <el-radio-group v-model="addUserModel.gender">
          <el-radio label="1">男</el-radio>
          <el-radio label="2">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="科室：" required prop="departmentOptions">
        <el-cascader
          :options="departmentOptions"
          :props="{ checkStrictly: true }"
          clearable
          v-model="addUserModel.departmentOptions"
        ></el-cascader>
      </el-form-item>
      <el-form-item label="职称：" required prop="titleOptions">
        <el-cascader
          :options="titleOptions"
          clearable
          v-model="addUserModel.titleOptions"
        ></el-cascader>
      </el-form-item>
      <el-form-item label="工作状态" prop="workType">
        <el-radio-group v-model="addUserModel.workType">
          <el-radio label="1">正常</el-radio>
          <el-radio label="2">退休/离职</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button
          @click="saveUser('addUserModel')"
          type="primary"
          size="medium"
          >保存</el-button
        >
        <el-button @click="cancelBtn" size="medium">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// 获取角色列表 新增用户接口 凭借id查找当前用户信息 编辑用户信息
import {
  getRolesList,
  addUser,
  searchAuthor,
  complieUser,
} from "../../http/api/push/api";
export default {
  name: "addUser",
  data() {
    // 规则
    // 手机号
    const userRule = (rule, value, callback) => {
      if (!value) {
        callback(new Error("手机号不能为空！"));
        return;
      } else if (isNaN(value)) {
        callback(new Error("请输入正确的手机号！"));
        return;
      } else {
        callback();
      }
    };
    // 密码
    const passRule = (rule, value, callback) => {
      if (!value) {
        callback(new Error("密码不能为空！"));
        return;
      } else {
        callback();
        return;
      }
    };
    // 真实姓名
    const userNameRule = (rule, value, callback) => {
      var reg = /^[\u4E00-\u9FA5\uf900-\ufa2d]{1,10}[\.]{0,1}[\u4E00-\u9FA5\uf900-\ufa2d]{1,10}$/;
      if (!value) {
        callback(new Error("真实姓名不能为空！"));
        return;
      } else if (!reg.test(value)) {
        callback(new Error("请输入正确的真实姓名！"));
        return;
      } else {
        callback();
      }
    };
    // 年龄
    const ageRule = (rule, value, callback) => {
      if (!value) {
        callback(new Error("年龄不能为空！"));
        return;
      } else if (isNaN(value)) {
        callback(new Error("请填写正确的年龄！"));
      } else {
        callback();
      }
    };
    return {
      // 判断是否是修改
      userId: 0,
      // 规则
      rules: {
        user: [
          {
            validator: userRule,
            trigger: ["blur", "change"],
          },
        ],
        pass: [
          {
            validator: passRule,
            trigger: ["blur", "change"],
          },
        ],
        userName: [
          {
            validator: userNameRule,
            trigger: ["blur", "change"],
          },
        ],
        roleNum: [
          {
            required: true,
            message: "角色不能为空",
            trigger: ["blur", "change"],
          },
        ],
        workType: [
          {
            required: true,
            message: "工作状态不能为空",
            trigger: ["blur", "change"],
          },
        ],
        gender: [
          {
            required: true,
            message: "性别不能为空",
            trigger: ["blur", "change"],
          },
        ],
        departmentOptions: [
          {
            required: true,
            message: "科室不能为空",
            trigger: ["blur", "change"],
          },
        ],
        titleOptions: [
          {
            required: true,
            message: "职称不能为空",
            trigger: ["blur", "change"],
          },
        ],
        rolesType: [
          {
            required: true,
            message: "状态开关不能为空",
            trigger: ["blur", "change"],
          },
        ],
        age: [
          {
            validator: ageRule,
            trigger: ["blur", "change"],
          },
        ],
      },
      // 新增用户数据
      addUserModel: {
        user: "",
        pass: "",
        // 真实姓名
        userName: "",
        // 角色
        roleNum: 1,
        // 工作在状态
        workType: "1",
        // 年龄
        age: "",
        // 性别
        gender: "1",
        // 科室
        departmentOptions: "",
        // 职称
        titleOptions: "",
        // 状态开关
        rolesType: 0,
      },
      // 保存上一页的页码
      userPageId: 0,

      // 角色选择数组
      roleList: [],
      // 职称数组
      titleOptions: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致",
                },
                {
                  value: "fankui",
                  label: "反馈",
                },
                {
                  value: "xiaolv",
                  label: "效率",
                },
                {
                  value: "kekong",
                  label: "可控",
                },
              ],
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局",
                },
                {
                  value: "color",
                  label: "Color 色彩",
                },
                {
                  value: "typography",
                  label: "Typography 字体",
                },
                {
                  value: "icon",
                  label: "Icon 图标",
                },
                {
                  value: "button",
                  label: "Button 按钮",
                },
              ],
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框",
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框",
                },
                {
                  value: "input",
                  label: "Input 输入框",
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器",
                },
                {
                  value: "select",
                  label: "Select 选择器",
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器",
                },
                {
                  value: "switch",
                  label: "Switch 开关",
                },
                {
                  value: "slider",
                  label: "Slider 滑块",
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器",
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器",
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器",
                },
                {
                  value: "upload",
                  label: "Upload 上传",
                },
                {
                  value: "rate",
                  label: "Rate 评分",
                },
                {
                  value: "form",
                  label: "Form 表单",
                },
              ],
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格",
                },
                {
                  value: "tag",
                  label: "Tag 标签",
                },
                {
                  value: "progress",
                  label: "Progress 进度条",
                },
                {
                  value: "tree",
                  label: "Tree 树形控件",
                },
                {
                  value: "pagination",
                  label: "Pagination 分页",
                },
                {
                  value: "badge",
                  label: "Badge 标记",
                },
              ],
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告",
                },
                {
                  value: "loading",
                  label: "Loading 加载",
                },
                {
                  value: "message",
                  label: "Message 消息提示",
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框",
                },
                {
                  value: "notification",
                  label: "Notification 通知",
                },
              ],
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单",
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页",
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑",
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单",
                },
                {
                  value: "steps",
                  label: "Steps 步骤条",
                },
              ],
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框",
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示",
                },
                {
                  value: "popover",
                  label: "Popover 弹出框",
                },
                {
                  value: "card",
                  label: "Card 卡片",
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯",
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板",
                },
              ],
            },
          ],
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components",
            },
            {
              value: "sketch",
              label: "Sketch Templates",
            },
            {
              value: "jiaohu",
              label: "组件交互文档",
            },
          ],
        },
      ],
      // 科室数组
      departmentOptions: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致",
                },
                {
                  value: "fankui",
                  label: "反馈",
                },
                {
                  value: "xiaolv",
                  label: "效率",
                },
                {
                  value: "kekong",
                  label: "可控",
                },
              ],
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局",
                },
                {
                  value: "color",
                  label: "Color 色彩",
                },
                {
                  value: "typography",
                  label: "Typography 字体",
                },
                {
                  value: "icon",
                  label: "Icon 图标",
                },
                {
                  value: "button",
                  label: "Button 按钮",
                },
              ],
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框",
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框",
                },
                {
                  value: "input",
                  label: "Input 输入框",
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器",
                },
                {
                  value: "select",
                  label: "Select 选择器",
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器",
                },
                {
                  value: "switch",
                  label: "Switch 开关",
                },
                {
                  value: "slider",
                  label: "Slider 滑块",
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器",
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器",
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器",
                },
                {
                  value: "upload",
                  label: "Upload 上传",
                },
                {
                  value: "rate",
                  label: "Rate 评分",
                },
                {
                  value: "form",
                  label: "Form 表单",
                },
              ],
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格",
                },
                {
                  value: "tag",
                  label: "Tag 标签",
                },
                {
                  value: "progress",
                  label: "Progress 进度条",
                },
                {
                  value: "tree",
                  label: "Tree 树形控件",
                },
                {
                  value: "pagination",
                  label: "Pagination 分页",
                },
                {
                  value: "badge",
                  label: "Badge 标记",
                },
              ],
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告",
                },
                {
                  value: "loading",
                  label: "Loading 加载",
                },
                {
                  value: "message",
                  label: "Message 消息提示",
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框",
                },
                {
                  value: "notification",
                  label: "Notification 通知",
                },
              ],
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单",
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页",
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑",
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单",
                },
                {
                  value: "steps",
                  label: "Steps 步骤条",
                },
              ],
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框",
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示",
                },
                {
                  value: "popover",
                  label: "Popover 弹出框",
                },
                {
                  value: "card",
                  label: "Card 卡片",
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯",
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板",
                },
              ],
            },
          ],
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components",
            },
            {
              value: "sketch",
              label: "Sketch Templates",
            },
            {
              value: "jiaohu",
              label: "组件交互文档",
            },
          ],
        },
      ],
    };
  },
  created() {
    // 判断是否是修改
    this.userId = this.$route.params.userId;
    // 保存上一页的页码
    this.userPageId = this.$route.params.userPageId;
    if (this.userId > 0) {
      this.searchAuthor();
      console.log(this.userId);
    }
  },
  mounted() {
    // 角色列表，拉去科室列表，拉去职称列表请求
    this.all();
  },
  methods: {
    // 编辑用户信息
    async complieUser() {
      let id = this.userId;
      this.addUserModel.id = id;
      console.log(this.addUserModel)
      try {
        let query = await complieUser(this.addUserModel);
        let { data, code } = query.data;
        if (code === 200) {
          this.$message({
            type: "success",
            message: query.data.msg,
          });
          let time = setTimeout(() => {
            this.$router.push({
              name: "userManagement",
              params: {
                userPageId: this.userPageId,
              },
            });
            clearTimeout(time);
          }, 2000);
        } else if (code === 203) {
          this.$message({
            type: "warning",
            message: query.data.msg,
          });
        } else if (code === 402) {
          this.$message({
            type: "warning",
            message: query.data.msg,
          });
        }
      } catch (error) {
        console.log(new Error(error));
      }
    },
    // 凭借id 查找用户信息
    async searchAuthor() {
      let id = this.userId;
      try {
        let query = await searchAuthor({
          id,
        });
        let { data, code } = query.data;
        if (code === 200) {
          //   pass: "",
          // // 真实姓名
          // userName: "",
          // // 角色
          // roleNum: 1,
          // // 工作在状态
          // workType: "1",
          // // 年龄
          // age: "",
          // // 性别
          // gender: "1",
          // // 科室
          // departmentOptions: "",
          // // 职称
          // titleOptions: "",
          // // 状态开关
          // rolesType: true,
          data = data[0];
          this.addUserModel = {
            user: data.name,
            pass: data.pass,
            userName: data.userName,
            roleNum: data.roleNum,
            workType: String(data.workType),
            age: String(data.age),
            gender: String(data.gender),
            departmentOptions: "",
            titleOptions: "",
            rolesType: String(data.rolesType),
          };
        } else if (code === 203) {
          this.$message({
            type: "warning",
            message: query.data.query,
          });
        }
        console.log(query);
      } catch (error) {
        console.log(new Error(error));
      }
    },
    // 新增用户接口
    async addUser() {
      try {
        let query = await addUser({
          user: this.addUserModel.user,
          pass: this.addUserModel.pass,
          // 真实姓名
          userName: this.addUserModel.userName,
          // 角色
          roleNum: parseInt(this.addUserModel.roleNum),
          // 工作在状态
          workType: parseInt(this.addUserModel.workType),
          // 年龄
          age: parseInt(this.addUserModel.age),
          // 性别
          gender: parseInt(this.addUserModel.gender),
          // 科室
          departmentOptions: "",
          // 职称
          titleOptions: "",
          // 状态开关
          rolesType: Number(this.addUserModel.rolesType),
        });
        let { data, code } = query.data;
        if (code === 200) {
          this.$message({
            type: "success",
            message: query.data.msg,
            duration: 2000,
          });
          let time = setTimeout(() => {
            this.$router.push({
              name: "userManagement",
              params: {
                userPageId: this.userPageId,
              },
            });
            clearTimeout(time);
          }, 2000);
        } else if (code === 203) {
          this.$message({
            type: "error",
            message: query.data.msg,
          });
          return;
        }
      } catch (errpr) {
        console.log(error);
      }
    },
    // 获取角色列表，拉去科室列表，拉去职称列表
    async all() {
      try {
        let obj = await Promise.all([this.getRolesList()]);
        this.roleList = obj[0].data;
        console.log(obj);
      } catch (error) {
        console.log(error);
      }
    },
    // 获取角色列表
    async getRolesList() {
      const obj = {
        page: 1,
        pageSize: 10,
        name: "",
      };
      try {
        let query = await getRolesList(obj);
        if (query.data.code === 200) {
          return query.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    // 取消
    cancelBtn() {
      this.$router.push({
        name: "userManagement",
        params: {
          userPageId: this.$route.params.userPageId,
        },
      });
    },
    // 保存
    saveUser(ref) {
      this.$refs[ref].validate((valid) => {
        if (valid) {
          console.log(this.addUserModel);
          if (this.userId > 0) {
            this.complieUser();
          } else {
            this.addUser();
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style>
.addUser {
  width: 100%;
  height: 100%;
  background: #ffffff;
  padding: 10px 20px;
  box-sizing: border-box;
}
</style>