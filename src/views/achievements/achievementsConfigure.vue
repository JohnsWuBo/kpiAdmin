<template>
  <div class="achievementsConfigure">
    <el-card class="achievementsConfigure-card">
      <div slot="header">
        <el-button type="primary">新建</el-button>
      </div>
      <el-row type="flex" justify="space-between">
        <el-col :span="12">
          <el-table
            tooltip-effect="dark"
            style="width: 100%"
            ref="achievementsConfigure"
            border
            stripe
            :data="achievementsConfigure"
            row-key="id"
            :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
          >
            <el-table-column label="劳动纪律" prop="name"></el-table-column>
            <el-table-column label="级别" prop="orgLevel"></el-table-column>
            <el-table-column label="操作">
              <el-button type="primary" size="mini">修改</el-button>
              <el-button type="warning" size="mini">删除</el-button>
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span="12">
          <el-table
            tooltip-effect="dark"
            style="width: 100%"
            ref="achievementsConfigure"
            border
            stripe
            :data="achievementsConfigure"
            row-key="id"
            :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
          >
            <el-table-column label="劳动纪律" prop="name"></el-table-column>
            <el-table-column label="级别" prop="orgLevel"></el-table-column>
            <el-table-column label="操作">
              <el-button type="primary" size="mini">修改</el-button>
              <el-button type="warning" size="mini">删除</el-button>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-card>
    <!-- 遮罩 -->
    <div class="fixedMask" v-if="dialogFormVisible">
      <div class="fixedMaskDiv">
        <el-card class="fixedMaskDiv-card">
          <div slot="header">
            <h2>新建配置项</h2>
          </div>
          <!-- tabs -->
          <el-tabs type="border-card">
            <el-tab-pane label="一级配置项">
              <el-form label-width="100px">
                <el-form-item label="一级配置项" required>
                  <el-input placeholder="请输入一级配置项字段！"></el-input>
                </el-form-item>
                <el-form-item label="系数" required>
                  <el-input placeholder="请输入对应系数！"></el-input>
                </el-form-item>
                <el-form-item label="类型" required>
                  <el-radio-group v-model="radio">
                    <el-radio :label="1">1</el-radio>
                    <el-radio :label="2">2</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary">创建</el-button>
                  <el-button type="warning">取消</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="二级配置项">
              <el-form label-width="100px">
                <el-form-item label="一级配置项" required>
                    <el-select v-model="configValue">
                    <el-option v-for="v in configList" :key="v.name" :label="v.name" :value="v.id"></el-option>
                </el-select>
                </el-form-item>
                <el-form-item label="二级配置项" required>
                  <el-input placeholder="请输入二级配置项！"></el-input>
                </el-form-item>
                <el-form-item label="系数" required>
                  <el-input placeholder="请输入对应系数！"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary">创建</el-button>
                  <el-button type="warning">取消</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "achievementsConfigure",
  data() {
    return {
        // select
        configValue: '',
        configList: [
            {
                name: '对应1及配置项',
                id: 1,
            }
        ],
      // 单选框
      radio: 1,
      // 遮罩开关
      dialogFormVisible: false,
      // 绩效项目配置表格
      achievementsConfigure: [
        {
          name: "医师",
          parentId: 0,
          id: 1,
          orgLevel: 1,
          coefficient: 0,
          children: [
            {
              name: "医生无资格证",
              parentId: 1,
              orgLevel: 2,
              id: 2,
              coefficient: 0.5,
            },
            {
              name: "医生有资格证",
              parentId: 1,
              orgLevel: 2,
              id: 3,
              coefficient: 1,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../../assets/main.scss";
.achievementsConfigure {
  width: 100%;
  height: 100%;
  //   background: #ffffff;
}

.achievementsConfigure-card {
  width: 100%;
  height: $--mainHeight;
}

// 标题h2 bottom
.TitleBottom {
  margin-bottom: 20px;
}
</style>