<template>
  <div class="personalStatisticsList archivesCenter">
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
    <el-row>
      <el-col>
        <!-- 工作工程表格 -->
        <el-table
          tooltip-effect="dark"
          style="width: 100%"
          ref="personalStatistics"
          border
          stripe
          :data="personalStatisticsList"
        >
          <el-table-column label="姓名" prop="name"></el-table-column>
          <el-table-column label="ccc" prop="ccc"></el-table-column>
          <el-table-column label="ddd" prop="ddd"></el-table-column>
          <el-table-column label="eee" prop="eee"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "personalStatistics",
  data() {
    return {
      // 月份
      monthValue: "",
      // 个人统计表格
      personalStatisticsList: [
        {
          name: "xxxx",
          ccc: "xxxxxxxcc",
          ddd: "xxxxxdd",
          eee: "xxxxxee",
        },
        {
          name: "xxxx",
          ccc: "xxxxxxxcc",
          ddd: "xxxxxdd",
          eee: "xxxxxee",
        },
        {
          name: "xxxx",
          ccc: "xxxxxxxcc",
          ddd: "xxxxxdd",
          eee: "xxxxxee",
        },
        {
          name: "xxxx",
          ccc: "xxxxxxxcc",
          ddd: "xxxxxdd",
          eee: "xxxxxee",
        },
        {
          name: "xxxx",
          ccc: "xxxxxxxcc",
          ddd: "xxxxxdd",
          eee: "xxxxxee",
        },
        {
          name: "xxxx",
          ccc: "xxxxxxxcc",
          ddd: "xxxxxdd",
          eee: "xxxxxee",
        },
      ],
      // 工作时间登记
      workTimeRegisterList: [
        {
          name: "xxxx",
          ccc: "xxxxxxxcc",
          ddd: "xxxxxdd",
          eee: "xxxxxee",
        },
        {
          name: "xxxx",
          ccc: "xxxxxxxcc",
          ddd: "xxxxxdd",
          eee: "xxxxxee",
        },
        {
          name: "xxxx",
          ccc: "xxxxxxxcc",
          ddd: "xxxxxdd",
          eee: "xxxxxee",
        },
        {
          name: "xxxx",
          ccc: "xxxxxxxcc",
          ddd: "xxxxxdd",
          eee: "xxxxxee",
        },
        {
          name: "xxxx",
          ccc: "xxxxxxxcc",
          ddd: "xxxxxdd",
          eee: "xxxxxee",
        },
        {
          name: "xxxx",
          ccc: "xxxxxxxcc",
          ddd: "xxxxxdd",
          eee: "xxxxxee",
        },
      ],
    };
  },
  methods: {
  }
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