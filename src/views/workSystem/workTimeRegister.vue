<template>
  <div class="workTimeRegister">
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
          ref="workTimeRegister"
          border
          stripe
          :data="workTimeRegisterList"
        >
          <el-table-column label="姓名" prop="name"></el-table-column>
          <el-table-column label="ccc" prop="ccc"></el-table-column>
          <el-table-column label="ddd" prop="ddd"></el-table-column>
          <el-table-column label="eee" prop="eee"></el-table-column>
          <el-table-column label="操作" prop="id">
            <template slot-scope="scope">
              <el-button
                type="primary"
                size="mini"
                @click="quotaPush(scope.row)"
                >详情</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <div class="fixedMask" v-if="workMaskType">
      <el-card class="fixedMaskDiv">
        <div slot="header">
          <h2>个人工作时间详情</h2>
        </div>
        <el-row>
          <el-row :span="24" style="margin-bottom: 20px; text-align: center"
            ><h2>长叶铭</h2></el-row
          >
          <!-- 加班休班 保存 -->
          <el-row :span="24">
            <el-col :span="18">
              <el-row :span="24" type="flex">
                <el-col :span="9" type="flex">
                  <el-row type="flex" align="middle">
                    <el-col :span="4" style="text-align: center">
                      <span>休班</span>
                    </el-col>
                    <el-col :span="20">
                      <el-input placeholder="请输入休班的时间！"></el-input>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="9">
                  <el-row type="flex" align="middle">
                    <el-col :span="4" style="text-align: center">
                      <span>加班</span>
                    </el-col>
                    <el-col :span="20">
                      <el-input placeholder="请输入加班的时间！"></el-input>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="6">
                  <el-row type="flex" justify="center" align="middle">
                    <el-button type="primary">保存</el-button>
                    <el-button @click="registerCancel">取消</el-button>
                  </el-row>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="6">
              <el-row type="flex" justify="center" align="middle">
                <el-button type="warning">个人选择室</el-button>
              </el-row>
            </el-col>
          </el-row>
          <!-- 表格 -->
          <el-table
            tooltip-effect="dark"
            style="width: 100%;margin-top: 20px;"
            ref="workTimeDetails"
            border
            stripe
            :data="workTimeDetailsList"
          >
            <el-table-column label="姓名" prop="name"></el-table-column>
            <el-table-column label="ccc" prop="ccc"></el-table-column>
            <el-table-column label="ddd" prop="ddd"></el-table-column>
            <el-table-column label="eee" prop="eee"></el-table-column>
          </el-table>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "workTimeRegister",
  data() {
    return {
      // 遮罩masktype
      workMaskType: false,
      // 月份
      monthValue: "",
      // 个人工作时间详情
      workTimeDetailsList: [
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
      // 遮罩取消按钮
      registerCancel() {
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