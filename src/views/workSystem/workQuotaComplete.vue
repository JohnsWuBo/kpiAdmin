<template>
  <div class="workQuotaComplete">
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
        <el-button>保存</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <!-- 个人工作额定完成情况表格 -->
        <el-table
          tooltip-effect="dark"
          style="width: 100%"
          ref="workQuotaComplete"
          border
          stripe
          :data="workQuotaCompleteList"
        >
          <el-table-column label="姓名" prop="name"></el-table-column>
          <el-table-column label="ccc" prop="ccc"></el-table-column>
          <el-table-column label="ddd" prop="ddd"></el-table-column>
          <el-table-column label="eee" prop="eee"></el-table-column>
          <el-table-column label="操作" prop="id">
            <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="quotaPush(scope.row)">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <div class="fixedMask" v-if="workMaskType">
      <el-card class="fixedMaskDiv">
        <div slot="header">
          <h2>个人工作定额情况</h2>
        </div>
        <el-row>
          <el-col :span="24">
            <el-button type="warning">个人选择室</el-button>
          </el-col>
          <el-col :span="24" class="departmentDiv">
            <el-row
              type="flex"
              justify="space-between"
              style="text-align: left;"
            >
              <el-col>
                <span>
                  <b>姓名：</b>
                  <i>找江南</i>
                </span>
              </el-col>
              <el-col
                ><span>
                  <b>姓名：</b>
                  <i>找江南</i>
                </span></el-col
              >
              <el-col
                ><span>
                  <b>姓名：</b>
                  <i>找江南</i>
                </span></el-col
              >
            </el-row>
            <el-row
              type="flex"
              justify="space-between"
              style="text-align: left;margin-top: 10px;"
            >
              <el-col>
                <span>
                  <b>姓名：</b>
                  <i>找江南</i>
                </span>
              </el-col>
              <el-col
                ><span>
                  <b>姓名：</b>
                  <i>找江南</i>
                </span></el-col
              >
              <el-col
                ><span>
                  <b>姓名：</b>
                  <i>找江南</i>
                </span></el-col
              >
            </el-row>
            <el-row
              type="flex"
              justify="space-between"
              style="text-align: left;margin-top: 10px;"
            >
              <el-col>
                <span>
                  <b>姓名：</b>
                  <i>找江南</i>
                </span>
              </el-col>
              <el-col
                ><span>
                  <b>姓名：</b>
                  <i>找江南</i>
                </span></el-col
              >
              <el-col
                ><span>
                  <b>姓名：</b>
                  <i>找江南</i>
                </span></el-col
              >
            </el-row>
          </el-col>
          <el-col :span="24" class="workQuotaCompleteBtn">
              <el-button type="primary">保存</el-button>
              <el-button @click="quotaCancel">取消</el-button>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "workQuotaComplete",
  data() {
    return {
      // 遮罩mask
      workMaskType: false,
      // 月
      monthValue: "",
      // 个人完成情况表格
      workQuotaCompleteList: [
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
      // 遮罩取消按钮
      quotaCancel() {
          this.workMaskType = false;
      },
      // 详情按钮
      quotaPush() {
          this.workMaskType = true;
      }
  }
};
</script>


<style lang="scss">
@import "../../assets/main.scss";
.workQuotaComplete {
  width: 100%;
  height: 100%;
  //   background: #ffffff;
}

.workQuotaComplete-card {
  width: 100%;
  height: $--mainHeight;
}

// 标题h2 bottom
.TitleBottom {
  margin-bottom: 20px;
}

// 科室div
.departmentDiv {
    margin-top:20px;
    padding: 20px;
    border-radius: 7px;
    border:1px solid #cccccc;
}

// 科室保存按钮
.workQuotaCompleteBtn{
    margin-top: 20px;
}
</style>