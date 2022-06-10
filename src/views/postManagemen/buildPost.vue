<template>
  <div class="fixedMaskDiv">
    <el-card class="fixedMaskDiv-card">
      <div slot="header">
        <h2>新建职称及相应系数</h2>
      </div>
      <!-- 标签页 -->
      <el-tabs type="border-card" v-model="tabsName">
        <el-tab-pane label="职称名称" name="0">
          <el-form label-width="100px">
            <el-form-item label="职称名称" required>
              <el-input placeholder="请输入职称名称！"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">新建</el-button>
              <el-button @click="cancelPost">取消</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="职称名称" name="1">
          <el-form label-width="100px">
            <el-form-item label="职称名称" required>
              <el-select v-model="value" clearable placeholder="请选择">
                <el-option
                  v-for="item in buildPostName"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="证书" required>
                <el-input placeholder="请输入证书名称！"></el-input>
            </el-form-item>
            <el-form-item label="系数" required>
                <el-input placeholder="请输入系数！"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">新建</el-button>
              <el-button @click="cancelPost">取消</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabsList: [
        {
          pane: "职称名称",
          orgLevel: 1,
          id: 1,
        },
        {
          pane: "证书名称",
          orgLevel: 2,
          id: 2,
        },
      ],
      // 职称名称下拉框
      buildPostName: [
          {
              label: '123123',
              value: 1,
          },
          {
              label: '123123',
              value: 1,
          },
          {
              label: '123123',
              value: 1,
          }
      ]
    };
  },
  methods: {
      // 取消函数
      cancelPost() {
          this.$emit('cancelPost')
      }
  }
};
</script>