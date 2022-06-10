<template>
  <div class="fixedMaskDiv">
    <el-card class="fixedMaskDiv-card">
      <div slot="header">
        <h2>配置室</h2>
      </div>
      <h2 style="text-align: center">暗适应</h2>
      <!-- 内容开始 -->
      <div class="configContent">
        <div class="addRoomConfig">
          <el-button type="primary" @click="addWork">添加工作量</el-button>
          <!-- 基准值 -->
          <div class="ReferenceValue">
            <span>基准值定额：</span>
            <el-input placeholder="请输入基准值定额数值！"></el-input>
          </div>
        </div>
        <!-- 数据循环 -->
        <el-form
          class="addRoomConfigMid"
          label-width="100px"
          :model="configRoomList"
        >
          <template v-for="v in configRoomList.configRoomData">
            <el-row :key="v.name">
              <el-col :span="24"
                ><el-form-item label="名称：">
                  <el-input
                    placeholder="请输入工作量的名称！"
                  ></el-input> </el-form-item
              ></el-col>
            </el-row>
            <el-row :gutter="20" :key="v.name">
              <el-col :span="8">
                <el-form-item label="定额：">
                  <el-input placeholder="请输入定额的数值！"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="工作定额统计：" label-width="120px">
                  <el-checkbox v-model="checked">备选项</el-checkbox>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="是否统计：">
                  <el-radio-group v-model="radio">
                    <el-radio :label="3">备选项</el-radio>
                    <el-radio :label="6">备选项</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-row>
          </template>
          <el-form-item>
            <el-button type="primary">保存</el-button>
            <el-button @click="cancelConfigRoom">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      radio: 3,
      // 配置室form对象
      configRoomList: {
        configRoomData: [
          {
            name: 1,
            quota: 1,
          },
        ],
      },
      // 数据对象
      configRoom: {
          name: '',
          quota: ''
      }
    };
  },
  methods: {
    // 取消
    cancelConfigRoom() {
      this.$emit("cancelconfigRoom");
    },
    // 添加工作量
    addWork() {
        this.configRoomList.configRoomData.push(this.configRoom)
    }
  },
};
</script>

<style>
.configContent {
  width: 100%;
}
.addRoomConfig {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.ReferenceValue {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.ReferenceValue span {
  white-space: nowrap;
}

.addRoomConfigMid {
  margin-top: 20px;
}
</style>