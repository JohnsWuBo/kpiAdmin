<template>
  <div class="performanceScore">
    <el-row class="mainPadding">
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
          <el-button type="success" style="margin-left: 8px" plain
            >导出Excel</el-button
          >
        </el-col>
      </el-row>

      <!-- 绩效分表格 -->
      <el-row class="TitleBottom">
        <el-table
          tooltip-effect="dark"
          style="width: 100%"
          ref="performanceScore"
          border
          stripe
          :data="performanceScoreList"
        >
          <el-table-column label="姓名" prop="name"></el-table-column>
          <el-table-column label="总纲" prop="programme"></el-table-column>
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
      </el-row>
      <!-- 根据工作状态选择权重级别 -->
      <el-row class="TitleBottom">
        <el-card>
          <div slot="header">
            <h2>根据工作状态选择权重级别</h2>
          </div>
          <el-row type="flex" justify="start" style="margin-bottom: 20px">
            <el-button type="primary" size="small" @click="buildWeight"
              >新建</el-button
            >
            <el-button type="warning" size="small">修改</el-button>
          </el-row>
          <el-row>
            <!-- 表格选择 -->
            <el-table
              tooltip-effect="dark"
              style="width: 100%"
              ref="performanceScore"
              border
              stripe
              :data="performanceWeightList"
            >
              <el-table-column label="工作量权重" prop="workWeight">
              </el-table-column>
              <el-table-column label="工作量过程权重" prop="workprocessWeight">
              </el-table-column>
              <el-table-column label="支持工作量因素" prop="factorWorkWeight">
              </el-table-column>
              <el-table-column label="级别" prop="level"> </el-table-column>
              <el-table-column label="操作" prop="">
                <el-button type="primary" size="mini">启动</el-button>
                <el-button type="warning" size="mini">删除</el-button>
              </el-table-column>
            </el-table>
          </el-row>
        </el-card>
      </el-row>
    </el-row>
    <!-- 遮罩 -->
    <div class="fixedMask" v-if="maskType">
      <div class="fixedMaskDiv">
        <el-card>
          <div slot="header">
            <h2>新建</h2>
          </div>
          <el-form label-width="140px">
            <el-form-item label="工作量权重" required>
              <el-input placeholder="请输入工作量权重！"></el-input>
            </el-form-item>
            <el-form-item label="工作过程权重" required>
              <el-input placeholder="请输入工作过程权重！"></el-input>
            </el-form-item>
            <el-form-item label="支持工作量因素" required>
              <el-input placeholder="请输入支持工作量因素！"></el-input>
            </el-form-item>
            <el-form-item label="级别" required>
              <el-input placeholder="请输入级别！"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">新建</el-button>
              <el-button @click="cancelWeight">取消</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "performanceScore",
  data() {
    return {
      // 月
      monthValue: "",
      // 表格
      performanceScoreList: [
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
      // 根据工作状态选择权重级别
      performanceWeightList: [
        {
          workWeight: 0,
          workprocessWeight: 0,
          factorWorkWeight: 0,
          level: 0,
        },
      ],
      // 控制遮罩层开关
      maskType: false,
    };
  },
  methods: {
    // 新建 开启/关闭遮罩层
    buildWeight() {
      this.maskType = !this.maskType;
    },
    // 遮罩层取消事件
    cancelWeight() {
      this.maskType = false;
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/main.scss";
.performanceScore {
  width: 100%;
  height: 100%;
  //   background: #ffffff;
}

.performanceScore-card {
  width: 100%;
  height: $--mainHeight;
}

// 标题h2 bottom
.TitleBottom {
  margin-bottom: 20px;
}
</style>