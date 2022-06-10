<template>
  <div class="annualBonus archivesCenter">
    <el-row class="TitleBottom" type="flex" align="middle" gutter="10">
      <el-col :span="5">
        <span>季度：</span>
        <el-select v-model="value" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="8">
        <span>选择时间：</span>
        <el-date-picker
          v-model="value1"
          type="monthrange"
          range-separator="至"
          start-placeholder="开始月份"
          end-placeholder="结束月份"
        >
        </el-date-picker>
      </el-col>
      <el-col :span="8">
        <el-button type="primary">查询</el-button>
        <el-button type="success">导出 Excel</el-button>
      </el-col>
    </el-row>
    <!-- 奖金表格 -->
    <el-row>
      <!-- 工作工程表格 -->
      <el-table
        tooltip-effect="dark"
        style="width: 100%"
        ref="annualBonus"
        border
        stripe
        :data="annualBonusList"
      >
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="ccc" prop="ccc"></el-table-column>
        <el-table-column label="ddd" prop="ddd"></el-table-column>
        <el-table-column label="eee" prop="eee"></el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "annualBonus",
  data() {
    return {
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
      value1: "",
      // 个人工作时间详情
      annualBonusList: [
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