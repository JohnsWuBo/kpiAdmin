<template>
  <div class="attendanceStatistics">
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
      </el-col>
    </el-row>
    <!-- 表格1 -->
    <el-row class="TitleBottom">
      <el-col>
        <!-- 表格 -->
        <el-table
          tooltip-effect="dark"
          style="width: 100%"
          ref="attendanceStatistics"
          border
          stripe
          :data="attendanceStatistics"
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
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "attendanceStatistics",
  data() {
    return {
      // 表格数据
      attendanceStatistics: [
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
};
</script>

<style lang="scss">
@import "../../assets/main.scss";
.attendanceStatistics {
  width: 100%;
  height: 100%;
  //   background: #ffffff;
}

.attendanceStatistics-card {
  width: 100%;
  height: $--mainHeight;
}

// 标题h2 bottom
.TitleBottom {
  margin-bottom: 20px;
}
</style>