<template>
  <div class="achievements">
    <el-row class="mainPadding">
      <!-- 绩效管理头部筛选 -->
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
        <el-col>
          <span>整月休班人员设置：</span>
          <el-select v-model="restUser" clearable placeholder="请选择">
            <el-option
              v-for="item in restUserList"
              :key="item.name"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
          <el-button type="primary" style="margin-left: 8px">保存</el-button>
        </el-col>
      </el-row>
      <!-- 休班人员名单 -->
      <el-row class="TitleBottom">
        <el-card>
          <div slot="header">
            <h2>休班人员名单</h2>
          </div>
          <!-- 休假人员表格 -->
          <el-table
            tooltip-effect="dark"
            style="width: 100%"
            ref="achievementsTable"
            border
            stripe
            :data="achievementsList"
          >
            <el-table-column label="人员" prop="name"> </el-table-column>
            <el-table-column label="开始日期" prop="create"></el-table-column>
            <el-table-column label="结束日期" prop="desTroy"></el-table-column>
            <el-table-column label="详细" prop="details">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>详细: {{ scope.row.details }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.details }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="warning" size="mini">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-row>
      <!-- 奖金设置 bonus -->
      <el-row class="TitleBottom">
        <el-card>
          <div slot="header">
            <h2>奖金设置</h2>
          </div>
          <!-- form -->
          <el-form label-width="120px" style="padding: 0 40px">
            <el-row type="flex" justify="center">
              <el-col :span="12">
                <el-col :span="16">
                  <el-form-item label="月份" required>
                    <el-date-picker
                      v-model="monthValue"
                      type="month"
                      placeholder="选择月"
                      format="yyyy 年 MM 月"
                      style="width: 100%"
                    >
                    </el-date-picker>
                  </el-form-item>
                </el-col>
              </el-col>
              <el-col :span="12">
                <el-col :span="16">
                  <el-form-item label="每日工作数" required>
                    <el-input placeholder="请输入每月工作天数"></el-input>
                  </el-form-item>
                </el-col>
              </el-col>
            </el-row>

            <el-row type="flex" justify="center">
              <el-col :span="12">
                <el-col :span="16">
                  <el-form-item label="每天工作时间" required>
                    <el-input placeholder="请输入每天工作的时间"></el-input>
                  </el-form-item>
                </el-col>
              </el-col>
              <el-col :span="12">
                <el-col :span="16">
                  <el-form-item label="总奖金" required>
                    <el-input placeholder="请输入每月总奖金"></el-input>
                  </el-form-item>
                </el-col>
              </el-col>
            </el-row>

            <el-row type="flex" justify="center">
              <el-col :span="12">
                <el-col :span="16">
                  <el-form-item label="公司管理费用" required>
                    <el-input placeholder="请输入公司管理费用"></el-input>
                  </el-form-item>
                </el-col>
              </el-col>
              <el-col :span="12">
                <el-col :span="16">
                  <el-form-item label="离职费用" required>
                    <el-input placeholder="请输入离职费用"></el-input>
                  </el-form-item>
                </el-col>
              </el-col>
            </el-row>

            <el-row type="flex" justify="center">
              <el-col :span="12">
                <el-col :span="16">
                  <el-form-item label="绩效初始调整" required>
                    <el-input placeholder="请输入绩效初始调整"></el-input>
                  </el-form-item>
                </el-col>
              </el-col>
              <el-col :span="12">
                <el-col :span="16">
                  <el-form-item label="绩效管理基金" required>
                    <el-input placeholder="请输入绩效管理基金"></el-input>
                  </el-form-item>
                </el-col>
              </el-col>
            </el-row>

            <el-row type="flex" justify="center">
              <el-col :span="12">
                <el-col :span="16">
                  <el-form-item label="月奖金">
                    <el-input placeholder="请输入月奖金" disabled></el-input>
                  </el-form-item>
                </el-col>
              </el-col>
              <el-col :span="12">
                <el-col :span="16">
                  <el-form-item label="平均奖" required>
                    <el-input placeholder="请输入平均奖" disabled></el-input>
                  </el-form-item>
                </el-col>
              </el-col>
            </el-row>
            <el-row>
              <el-form-item>
                <el-button type="primary">保存</el-button>
              </el-form-item>
            </el-row>
          </el-form>
        </el-card>
      </el-row>
      <!-- 岗位人员及职称 -->
      <el-row class="TitleBottom">
        <el-card>
          <div slot="header">
            <h2>岗位人员及职称</h2>
          </div>
          <!-- 岗位人员及职称 -->
          <el-table
            tooltip-effect="dark"
            style="width: 100%"
            ref="postTable"
            border
            stripe
            :data="postsList"
          >
            <el-table-column label="职称名称" prop="name"> </el-table-column>
            <el-table-column label="人数" prop="count"></el-table-column>
            <el-table-column label="姓名" prop="userName"></el-table-column>
            <el-table-column
              label="退休离职人员职称名称"
              prop="retireNames"
            ></el-table-column>
            <el-table-column
              label="退休离职人员人数"
              prop="retireUserCount"
            ></el-table-column>
            <el-table-column
              label="退休离职人员姓名"
              prop="retireUsers"
            ></el-table-column>
          </el-table>
        </el-card>
      </el-row>
      <!-- 奖金统计表 -->
      <el-row class="TitleBottom">
        <el-card>
          <div
            slot="header"
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <h2>奖金统计表</h2>
            <el-button type="success">导出excel</el-button>
          </div>
          <!-- 奖金统计表 -->
          <el-table
            tooltip-effect="dark"
            style="width: 100%"
            ref="postTable"
            border
            stripe
            :data="bonusList"
          >
            <el-table-column label="用户名称" prop="name"> </el-table-column>

            <el-table-column label="绩效分" prop="achievementsCount">
            </el-table-column>
            <el-table-column label="出勤率" prop="attendance">
            </el-table-column>
            <el-table-column label="初步奖金" prop="createAttendance">
            </el-table-column>
            <el-table-column label="加班费" prop="overtimePay">
            </el-table-column>
            <el-table-column label="奖金基数" prop="bonusCount">
            </el-table-column>
            <el-table-column label="绩效奖金" prop="attendanceBonus">
            </el-table-column>
            <el-table-column label="营销效果奖励" prop="MarketingIncentives">
            </el-table-column>
          </el-table>
        </el-card>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "achievements",
  data() {
    return {
      // 月
      monthValue: "",
      // 休班人员
      restUser: "",
      // 人员名单
      restUserList: [
        {
          id: 1,
          name: "测试1",
        },
        {
          id: 2,
          name: "测试2",
        },
        {
          id: 3,
          name: "测试3",
        },
        {
          id: 4,
          name: "测试4",
        },
        {
          id: 5,
          name: "测试5",
        },
        {
          id: 6,
          name: "测试6",
        },
      ],
      // 岗位人员及职称
      postsList: [
        {
          name: "医生",
          count: 4,
          userName: "赵xx，吴信息，吴阿斯顿",
          retireNames: "哦xx，啊xx，从xx",
          retireUserCount: 1,
          retireUsers: "啊xx，从xx，的xx",
        },
        {
          name: "医生2",
          count: 4,
          userName: "赵xx，吴信息，吴阿斯顿",
          retireNames: "哦xx，啊xx，从xx",
          retireUserCount: 1,
          retireUsers: "啊xx，从xx，的xx",
        },
        {
          name: "医生3",
          count: 4,
          userName: "赵xx，吴信息，吴阿斯顿",
          retireNames: "哦xx，啊xx，从xx",
          retireUserCount: 1,
          retireUsers: "啊xx，从xx，的xx",
        },
        {
          name: "医生4",
          count: 4,
          userName: "赵xx，吴信息，吴阿斯顿",
          retireNames: "哦xx，啊xx，从xx",
          retireUserCount: 1,
          retireUsers: "啊xx，从xx，的xx",
        },
      ],
      // 休假人员表格数据
      achievementsList: [
        {
          name: "人员1",
          create: "2022.5.3",
          desTroy: "2022.6.10",
          details: "xxxxxxxxxxxxxxxxxxxxxxxx",
        },
        {
          name: "人员2",
          create: "2022.5.3",
          desTroy: "2022.6.10",
          details: "xxxxxxxxxxxxxxxxxxxxxxxx",
        },
        {
          name: "人员3",
          create: "2022.5.3",
          desTroy: "2022.6.10",
          details: "xxxxxxxxxxxxxxxxxxxxxxxx",
        },
      ],
      // 奖金统计表
      bonusList: [
        {
          name: "xxx",
          achievementsCount: 1,
          attendance: 1,
          createAttendance: 100,
          overtimePay: 1,
          bonusCount: 1,
          attendanceBonus: 222,
          MarketingIncentives: 21212121,
        },
        {
          name: "xxx",
          achievementsCount: 1,
          attendance: 1,
          createAttendance: 100,
          overtimePay: 1,
          bonusCount: 1,
          attendanceBonus: 222,
          MarketingIncentives: 21212121,
        },
        {
          name: "xxx",
          achievementsCount: 1,
          attendance: 1,
          createAttendance: 100,
          overtimePay: 1,
          bonusCount: 1,
          attendanceBonus: 222,
          MarketingIncentives: 21212121,
        },
      ],
    };
  },
  mounted() {},
};
</script>

<style lang="scss">
@import "../../assets/main.scss";
.achievements {
  width: 100%;
  height: 100%;
  //   background: #ffffff;
}

.achievements-card {
  width: 100%;
  height: $--mainHeight;
}

// 标题h2 bottom
.TitleBottom {
  margin-bottom: 20px;
}
</style>