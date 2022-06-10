<template>
  <div class="registerAchievements mainPadding">
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
          >保存</el-button
        >
      </el-col>
    </el-row>
    <!-- 统计表格 -->
    <el-row>
      <el-table
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        ref="performanceScore"
        border
        stripe
      >
        <el-table-column prop="date" label="日期"> </el-table-column>
        <el-table-column label="配送信息">
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column label="地址">
            <el-table-column prop="province" label="省份"> </el-table-column>
            <el-table-column prop="city" label="市区"> </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
            <el-table-column prop="zip" label="邮编"> </el-table-column>
          </el-table-column>
        </el-table-column>
      </el-table>
    </el-row>

    <!-- 保存支持工作量因素 -->
    <el-row style="margin-top: 20px">
      <el-card>
        <div slot="header" style="display: flex; justify-content: end">
          <el-button type="success">保存支持工作因素</el-button>
        </div>
        <el-table
          tooltip-effect="dark"
          style="width: 100%"
          ref="performanceScore"
          border
          stripe
          :data="workList"
        >
          <el-table-column type="index" width="50"> </el-table-column>
          <el-table-column property="date" label="日期"> </el-table-column>
          <el-table-column property="name" label="姓名"> </el-table-column>
          <el-table-column property="address" label="地址"> </el-table-column>
        </el-table>
      </el-card>
    </el-row>
    <!-- 总纲表 -->
    <el-row style="margin-top: 20px">
      <el-card>
        <div slot="header">
          <h2>总纲表</h2>
        </div>
        <el-table
          tooltip-effect="dark"
          style="width: 100%"
          ref="generalOutlineTable"
          border
          stripe
          :data="generalOutlineTableList"
        >
          <el-table-column type="index" width="50"> </el-table-column>
          <el-table-column property="date" label="日期"> </el-table-column>
          <el-table-column property="name" label="姓名"> </el-table-column>
          <el-table-column property="address" label="地址"> </el-table-column>
        </el-table>
      </el-card>
    </el-row>
     <!-- 当前职能 -->
    <el-row style="margin-top: 20px">
      <el-card>
        <div slot="header">
          <h2>当前职能</h2>
        </div>
        <el-table
          tooltip-effect="dark"
          style="width: 100%"
          ref="currenTfunctions"
          border
          stripe
          :data="currenTfunctionsList"
        >
          <el-table-column type="index" width="50"> </el-table-column>
          <el-table-column property="date" label="日期"> </el-table-column>
          <el-table-column property="name" label="姓名"> </el-table-column>
          <el-table-column property="address" label="地址"> </el-table-column>
        </el-table>
      </el-card>
    </el-row>
    <!-- 每天平均值 -->
    <el-row style="margin-top: 20px">
      <el-card>
        <div slot="header">
          <h2>每天平均值</h2>
        </div>
        <el-table
          tooltip-effect="dark"
          style="width: 100%"
          ref="dailyAverage"
          border
          stripe
          :data="dailyAverageList"
        >
          <el-table-column type="index"> </el-table-column>
          <el-table-column property="date" label="日期"> </el-table-column>
          <el-table-column property="name" label="姓名"> </el-table-column>
          <el-table-column property="address" label="地址"> </el-table-column>
        </el-table>
      </el-card>
    </el-row>
    <!-- 各当期职能日平均值计算 -->
    <el-row style="margin-top: 20px">
      <el-card>
        <div slot="header">
          <h2>各当期职能日平均值计算</h2>
        </div>
        <el-table
          tooltip-effect="dark"
          style="width: 100%"
          ref="codA"
          border
          stripe
          :data="codAList"
        >
          <el-table-column type="index"> </el-table-column>
          <el-table-column property="date" label="日期"> </el-table-column>
          <el-table-column property="name" label="姓名"> </el-table-column>
          <el-table-column property="address" label="地址"> </el-table-column>
        </el-table>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "registerAchievements",
  data() {
    return {
      monthValue: "",
      // 表格数据
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
      ],
      // 支持工作因素
      workList: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      // 总纲表
      generalOutlineTableList: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      // 当前职能
      currenTfunctionsList: [
          {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      // 每天平均值
      dailyAverageList: [
          {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],

      //各当期职能日平均值计算
      codAList: [
          {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ]
    };
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