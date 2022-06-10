<template>
  <div class="workingProcessCom archivesCenter">
    <el-row class="TitleBottom" type="flex">
      <el-col>
        <!-- 月 -->
        <el-date-picker
          v-model="monthValue"
          type="month"
          placeholder="选择月"
          format="yyyy 年 MM 月"
        >
        </el-date-picker>
        <el-button type="primary" style="margin-left: 8px">查询</el-button>
        <el-button type="warning">修改</el-button>
        <el-button type="success" style="margin-left: 8px" plain
          >导出Excel</el-button
        >
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <!-- 工作工程表格 -->
        <el-table
          tooltip-effect="dark"
          style="width: 100%"
          ref="workingProcessCom"
          border
          stripe
          :data="workingProcessCom"
        >
          <el-table-column label="姓名" prop="name"></el-table-column>
          <el-table-column label="总纲" prop="programme">
            <template slot-scope="scope">
              <div @click="workCell(scope.row)">
                {{ scope.row.programme }}
              </div>
            </template>
          </el-table-column>
          <el-table-column label="难易度" prop="facility"></el-table-column>
          <el-table-column label="稀缺度" prop="rare"></el-table-column>
          <el-table-column
            label="工作量权重"
            prop="workloadweight"
          ></el-table-column>
          <el-table-column
            label="工作量得分"
            prop="workloadScore"
          ></el-table-column>
          <el-table-column
            label="工作过程"
            prop="workprocess"
          ></el-table-column>
          <el-table-column
            label="工作过程权重"
            prop="workprocessWeight"
          ></el-table-column>
          <el-table-column
            label="工作过程得分"
            prop="workprocessScore"
          ></el-table-column>
          <el-table-column label="权重类别" prop="weightType"></el-table-column>
          <el-table-column
            label="支持工作量因素 "
            prop="workfactor"
          ></el-table-column>
          <el-table-column
            label="权重类别"
            prop="weightType2"
          ></el-table-column>
          <el-table-column
            label="支持工作量因素得分"
            prop="workfactorScore"
          ></el-table-column>
          <el-table-column
            label="支持工作量因素得分合计"
            prop="workfactorAllScore"
          ></el-table-column>
          <el-table-column label="绩效分" prop="achieveScore"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <!-- 工作过程mask -->
    <div class="fixedMask" v-if="workMaskType">
      <el-card class="fixedMaskDivMini">
        <div slot="header">
          <span>{{ workMaskObj.name }}</span> 请选择
          {{ workMaskObj.workprocess }} 的行为
        </div>
        <el-row type="flex" justify="center">

            <el-form>
              <el-form-item>
                <el-cascader
                  :options="options"
                  :props="props"
                  clearable
                ></el-cascader>
              </el-form-item>
              <el-form-item>
                <el-button type="primary">确定</el-button>
                <el-button @click="cancelType">取消</el-button>
              </el-form-item>
            </el-form>

        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "workingProcessCom",
  data() {
    return {
      
      monthValue: "",
      // 工作过程行为数组
      props: { multiple: true },
      options: [
        {
          value: 1,
          label: "东南",
          children: [
            {
              value: 2,
              label: "上海",
              children: [
                { value: 3, label: "普陀" },
                { value: 4, label: "黄埔" },
                { value: 5, label: "徐汇" },
              ],
            },
            {
              value: 7,
              label: "江苏",
              children: [
                { value: 8, label: "南京" },
                { value: 9, label: "苏州" },
                { value: 10, label: "无锡" },
              ],
            },
            {
              value: 12,
              label: "浙江",
              children: [
                { value: 13, label: "杭州" },
                { value: 14, label: "宁波" },
                { value: 15, label: "嘉兴" },
              ],
            },
          ],
        },
        {
          value: 17,
          label: "西北",
          children: [
            {
              value: 18,
              label: "陕西",
              children: [
                { value: 19, label: "西安" },
                { value: 20, label: "延安" },
              ],
            },
            {
              value: 21,
              label: "新疆维吾尔族自治区",
              children: [
                { value: 22, label: "乌鲁木齐" },
                { value: 23, label: "克拉玛依" },
              ],
            },
          ],
        },
      ],
      // 修改工作过程mask
      workMaskType: false,
      // 修改工作过程保存的对象
      workMaskObj: {
        name: "",
        workprocess: "",
      },
      // 工作过程表格
      workingProcessCom: [
        {
          name: "xxx",
          programme: "111",
          facility: 1,
          rare: 1,
          workloadweight: 0,
          workloadScore: 0,
          workprocess: 1,
          workprocessWeight: 0,
          workprocessScore: 0,
          weightType: 0,
          workfactor: 0,
          weightType2: 0,
          workfactorScore: 0,
          workfactorAllScore: 0,
          achieveScore: 0,
        },
        {
          name: "xxx",
          programme: "111",
          facility: 1,
          rare: 1,
          workloadweight: 0,
          workloadScore: 0,
          workprocess: 1,
          workprocessWeight: 0,
          workprocessScore: 0,
          weightType: 0,
          workfactor: 0,
          weightType2: 0,
          workfactorScore: 0,
          workfactorAllScore: 0,
          achieveScore: 0,
        },
        {
          name: "xxx",
          programme: "111",
          facility: 1,
          rare: 1,
          workloadweight: 0,
          workloadScore: 0,
          workprocess: 1,
          workprocessWeight: 0,
          workprocessScore: 0,
          weightType: 0,
          workfactor: 0,
          weightType2: 0,
          workfactorScore: 0,
          workfactorAllScore: 0,
          achieveScore: 0,
        },
      ],
    };
  },
  methods: {
    // 每一个单元格点击
    workCell(row) {
      this.workMaskObj = {
        name: row.name,
        workprocess: row.workprocess,
      };
      this.workMaskType = true;
    },
    // 初始化 mask 数据
    createdWorkMask() {
      this.workMaskObj = {};
      this.workMaskType = false;
    },
    // 取消按钮
    cancelType() {
      this.createdWorkMask();
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/main.scss";
.archivesCenter {
  width: 100%;
  height: 100%;
  //   background: #ffffff;
}

.archivesCenter-card {
  width: 100%;
  height: $--mainHeight;
}

// 标题h2 bottom
.TitleBottom {
  margin-bottom: 20px;
}
</style>