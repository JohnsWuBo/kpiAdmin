<template>
  <div class="fixedMaskDiv">
    <el-card class="fixedMaskDiv-card">
      <div slot="header">
        <h2>{{ this.id ? '修改' : '新建' }}</h2>
        <!-- tabs -->
        <el-tabs type="border-card" v-model="tabsName">
          <el-tab-pane label="医院名称" :disabled="orgLevel !== 0" name="0">
            <el-form label-width="100px" style="width: 100%" :model="hospitalForm" ref="hospital"
              :rules="hospitalRules">
              <el-form-item label="地区选择：" required prop="history">
                <!-- props值为配置选项表 -->
                <el-cascader :options="buildOptions" v-model="hospitalForm.history" clearable style="width: 50%"
                  :props="defaultParams"></el-cascader>
              </el-form-item>
              <el-form-item label="医院名称：" required prop="name">
                <el-input placeholder="请输入医院名称！" v-model="hospitalForm.name" style="width: 50%"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="hospitalClick('hospital')">{{ id > 0 ? '修改' : '新建' }}</el-button>
                <el-button @click="cancelBuildType">取消</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <!-- 分院 -->
          <el-tab-pane label="分院" :disabled="orgLevel !== 1" name="1">
            <el-form label-width="100px" style="width: 100%" :model="hospitalTwo" :rules="hospitalTwoRules" ref="hospitalTwo">
              <el-form-item label="地区选择：" required prop="history">
                <el-cascader :options="buildOptions" v-model="hospitalTwo.history" clearable style="width: 50%"
                  :props="defaultParams" :disabled="true"></el-cascader>
              </el-form-item>

              <el-form-item label="医院名称：" prop="hospitalName">
                <el-input v-model="hospitalTwo.hospitalName" style="width: 50%" :disabled="true">
                </el-input>
              </el-form-item>
              <el-form-item label="分院名称：" required prop="name">
                <el-input placeholder="请输入分院名称！" v-model="hospitalTwo.name" style="width: 50%"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="hospitalTwoClick('hospitalTwo')">{{ id > 0 ? '修改' : '新建' }}</el-button>
                <el-button @click="cancelBuildType">取消</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="科" :disabled="orgLevel !== 2" name="2">
            <el-form label-width="100px" style="width: 100%">
              <el-form-item label="医院名称：" required>
                <el-cascader :options="buildOptions" clearable style="width: 50%"></el-cascader>
              </el-form-item>

              <el-form-item label="分院名称：" required>
                <el-cascader :options="buildOptions" clearable style="width: 50%"></el-cascader>
              </el-form-item>
              <el-form-item label="科：" required>
                <el-input placeholder="请输入新建科的名称！"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary">新建</el-button>
                <el-button @click="cancelBuildType">取消</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="室" :disabled="orgLevel !== 3" name="3">
            <el-form label-width="100px" style="width: 100%">
              <el-form-item label="医院名称：" required>
                <el-cascader :options="buildOptions" clearable style="width: 50%"></el-cascader>
              </el-form-item>

              <el-form-item label="分院名称：" required>
                <el-cascader :options="buildOptions" clearable style="width: 50%"></el-cascader>
              </el-form-item>
              <el-form-item label="科：" required>
                <el-select v-model="value" clearable placeholder="请选择">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="室：" required>
                <el-row type="flex">
                  <el-select v-model="value" clearable placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                  <div style="margin-left: 10px">
                    <template v-if="roomType">
                      <el-button type="warning" style="margin-left: 10px" @click="roomFun">添加室</el-button>
                    </template>
                    <template v-else>
                      <el-input placeholder="请输入新添加室的名称！" style="width: 50%; margin-right: 5px"></el-input>
                      <el-button tyle="primary" @click="addRoom">添加</el-button>
                    </template>
                  </div>
                </el-row>
              </el-form-item>
              <el-form-item label="排序：" required>
                <el-input placeholder="按照大小写英文字母进行排序！"></el-input>
              </el-form-item>
              <el-form-item label="难易度：" required>
                <el-input placeholder="按照数字大小区分难易度！"></el-input>
              </el-form-item>
              <el-form-item label="稀缺度：">
                <el-input placeholder="按照数字大小区分稀缺都！"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary">新建</el-button>
                <el-button @click="cancelBuildType">取消</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-card>
  </div>
</template>

<script>
// 接口信息 获取所有地址数据 新建（修改）医院接口 获取医院接口 新建（修改）分院接口
import { allHistory, updateHospital, getHospital, updateHospitalTwo } from './../../http/api/push/api';
export default {
  // 传来的等级参数
  props: ["orgLevel", 'id'],
  data() {
    return {
      // 分院规则
      hospitalTwoRules: {
        history: [
          {
            required: true,
            message: '必须选择地区！',
            trigger: ['blur', 'change']
          }
        ],
        name: [
          {
            required: true,
            message: '必须填写分院名称！',
            trigger: ['blur', 'change']
          }
        ],
        hospitalName: [
          {
            required: true,
            message: '必须选择医院名称！',
            trigger: ['blur', 'change']
          }
        ]
      },
      // 分院form
      hospitalTwo: {
        history: [],
        name: '',
        hospitalName: '',
        hospitalId: null,
        orgLevel: null,
      },
      // 医院form
      hospitalForm: {
        history: [],
        name: '',
      },
      // 医院规则
      hospitalRules: {
        name: [
          {
            required: true,
            message: '必须填写医院名称！',
            trigger: ['change', 'blur']
          }
        ],
        history: [
          {
            required: true,
            message: '必须选择地区！',
            trigger: ['change', 'blur']
          }
        ]
      },
      // 地区选项表
      defaultParams: {
        value: 'id',
        label: 'cityName',
        children: 'children'
      },
      // 添加室type值
      roomType: true,
      // 从服务器拉取数据 (科，室)
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      // 地区选择数组
      buildOptions: [],
    };
  },
  computed: {
    tabsName() {
      return String(this.orgLevel)
    },
  },
  inject: ['reload'],
  mounted() {
    // 获取地区
    this.allHistory()
    if (this.orgLevel == 0) {
      // 医院
      if (this.id) {
        this.getHospital({
          id: this.id,
          orgLevel: this.orgLevel+ 1
        })
          .then((res) => {
            let { code, msg } = res.data;
            if (code === 200) {
              this.hospitalForm.history = res.data.data.historyId.split(',').map((value) => {
                return parseInt(value)
              });
              console.log(this.hospitalForm.history)
              this.hospitalForm.name = res.data.data.name;
              console.log(res)
            } else {
              this.$message({
                type: 'warning',
                message: msg
              })
            }
          })
          .catch((rej) => {
            this.$message({
              type: 'error',
              message: '系统错误！'
            })
          })
        return;
      };
      console.log('新建！')
    } else if (this.orgLevel == 1) {
      // 分院
      // 无论是新建或者修改 地区选择和医院名称都能展示，但是不能修改的
      this.getHospital({
        id: this.id,
        orgLevel: this.orgLevel
      })
      .then((res) => {
        let { code, msg } = res.data;
        if (code == 200) {
          this.hospitalTwo.history = res.data.data.historyId.split(',').map((value) => {
            return parseInt(value)
          });
          this.hospitalTwo.hospitalName = res.data.data.name;
          this.hospitalTwo.hospitalId = res.data.data.id;
          this.hospitalTwo.orgLevel = res.data.data.orgLevel;
        } else {
          this.$message({
            type: 'warning',
            message: msg,
          });
          return ;
        }
      })
      .catch((error) => {
        console.log(new Error(error))
      })
      // if (this.id > 0) {
      //   // 修改

      // } else {
      //   // 新建
      // }
    }
  },
  methods: {
    // 新建（修改）分院接口
    async updateHospitalTwo(obj) {
      return await updateHospitalTwo({
        id: obj.id,
        hospitalId: obj.hospitalId,
        name: obj.name,
        orgLevel: obj.orgLevel,
      })
    },
    // 获取医院接口
    async getHospital(obj) {
      return await getHospital({
        id: obj.id,
        orgLevel: obj.orgLevel
      });
    },
    // 新建（修改）医院接口
    async updateHospital(id) {
      await updateHospital({
        id: this.id,
        historyId: this.hospitalForm.history,
        name: this.hospitalForm.name,
        orgLevel: this.orgLevel + 1,
      })
        .then((res) => {
          let { code, msg } = res.data;
          if (code === 200) {
            this.$message({
              type: 'success',
              message: msg,
              duration: 2000,
            })
            let time = setTimeout(() => {
              clearTimeout(time);
              this.cancelBuildType()
            }, 2000)
          } else {
            this.$message({
              type: 'warning',
              message: msg,
            })
          }
        })
        .catch((rej) => {
          this.$message({
            type: 'error',
            message: '系统错误！'
          })
        })
    },
    // 医院 新建（修改）点击
    hospitalClick(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.hospitalForm)
          this.updateHospital();
        } else {
          // console.log('error submit!!');
          return false;
        }
      });
    },
    // 分院 新建（修改）点击
    hospitalTwoClick(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.hospitalForm)
          this.hospitalTwo.id = 0;
          this.updateHospitalTwo(this.hospitalTwo)
          .then((res) => {
            let { code, msg } = res.data;
            if (code === 200)  {
              this.$message({
                duration: 2000,
                message: msg,
                type: 'success'
              });
              let time = setTimeout(() => {
                clearTimeout(time);
                this.reload();
              } , 2000)
            } else {
              this.$message({
                type: 'warning',
                message: msg
              })
            }
          })
        } else {
          // console.log('error submit!!');
          return false;
        }
      });
    },
    // 获取所有地址信息
    async allHistory() {
      await allHistory().then((res) => {
        // console.log(res)
        if (res.data.code === 200) {
          this.buildOptions = res.data.data;
        } else {
          this.$message({
            type: 'warning',
            message: res.data.msg
          })
        }
      })
        .catch((rej) => {
          this.$message({
            type: 'error',
            msg: rej.msg,
          })
        })
    },
    // 添加室开关
    roomFun() {
      this.roomType = false;
    },
    // 添加室函数
    addRoom() {
      this.roomType = true;
    },
    // 取消函数
    cancelBuildType() {
      this.roomType = true
      this.$emit('cancelBuildType');
    }
  },
};
</script>

<style>
.buildInput {
  max-width: 160px;
}
</style>