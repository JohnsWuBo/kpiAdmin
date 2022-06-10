<template>
  <div class="modifyRoles">
    <el-card class="modifyRoles-card">
      <div solt="header">
        <h2>{{ modifyRolesId > 0 ? "修改角色" : "新建角色" }}</h2>
      </div>
      <!-- form -->
      <el-form
        label-width="100px"
        :model="rolesModel"
        ref="modifyRoles"
        :rules="role"
      >
        <el-form-item label="角色名称：" required prop="name">
          <el-input
            placeholder="请输入角色名称!"
            v-model="rolesModel.name"
          ></el-input>
        </el-form-item>
        <el-form-item label="角色描述：">
          <el-input
            type="textarea"
            :row="3"
            placeholder="请输入内容!"
            v-model="rolesModel.details"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveRoles('modifyRoles')"
            >保存</el-button
          >
          <el-button @click="cancelRolesBtn">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
// 新建角色信息 编辑角色 获取角色信息
import { rolesInsert, compolieRolesUser, searchRolesUser } from "../../http/api/push/api";
export default {
  props: ["modifyRolesId"],
  data() {
    return {
      rolesModel: {
        name: "",
        details: "",
      },
      role: {
        name: [
          {
            required: true,
            message: "必须输入角色名称！",
            trigger: ["blur", "change"],
          },
        ],
      },
    };
  },
  created () {
    if (this.modifyRolesId > 0) {
        this.searchRolesUser();
    }
  },
  methods: {
      // 获取角色信息
      async searchRolesUser() {
          try {
              let query = await searchRolesUser({
                  id: this.modifyRolesId
              })
              let { data, code, msg } = query.data;
              console.log(data)
              if (code === 200) {
                  this.rolesModel = {
                      name: data.name,
                      details: data.details || ''
                  }
              } else if(code === 203) {
                  this.$message({
                      type: 'warning',
                      message: msg,
                  })
              }
          } catch(error) {
              console.log(new Error(error))
          }
      },
    // 新建函数
    async rolesInsert() {
        try {
            let query = await rolesInsert(this.rolesModel);
            let { code, msg } = query.data;
            if (code === 200) {
                this.$message({
                    type: 'success',
                    message: msg,
                    duration: 2000
                });
                let time = setTimeout(() => {
                    this.$emit("cancelRolesBtn", "");
                    clearTimeout(time)
                }, 2000)
            } else if (code === 201) {
                this.$message({
                    type: 'warning',
                    message: msg
                })
            } else if (code === 203) {
                this.$message({
                    type: 'warning',
                    message: msg
                })
            }
        } catch(error) {
            console.log(new Error(error))
        }
    },
    // 编辑角色
    async compolieRolesUser() {
        try {
            let query = await compolieRolesUser({
                id: this.modifyRolesId,
                name: this.rolesModel.name,
                details: this.rolesModel.details || ''
            })
            let { data, code ,msg } = query.data;
            if (code === 200) {
                this.$message({
                    message: msg,
                    type: 'success',
                    duration: 2000
                })
                let time = setTimeout(() => {
                    clearTimeout(time);
                    this.$emit("cancelRolesBtn", "");
                }, 2000)
            } else if (code === 203) {
                this.$message({
                    message: msg,
                    type: 'warning'
                })
            } else if (code === 402) {
                this.$message({
                    message: msg,
                    type: 'error'
                })
            }
        } catch(error) {
            console.log(new Error(error))
        }
    },
    // 取消角色修改按钮
    cancelRolesBtn() {
      this.$emit("cancelRolesBtn", "");
    },
    // 保存按钮
    saveRoles(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
            if (this.modifyRolesId > 0) {
                this.compolieRolesUser();
            } else {
                this.rolesInsert();
            }
        } else {
        //   console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style>
.modifyRoles {
  width: 50%;
  /* min-height: 300px; */
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
}

.modifyRoles-card {
  min-height: 300px;
}

.modifyRoles-card h2 {
  margin-bottom: 35px;
}
</style>