<template>
  <div class="userManagement">
    <el-card class="userManagement-card">
      <!-- 头部筛选框 -->
      <div slot="header" class="clearfix">
        <el-row type="flex" align="center" :gutter="30">
          <el-col :span="4">
            <el-input
              placeholder="请输入手机号！"
              label="手机号："
              label-width="100px"
              v-model="userForm.name"
            ></el-input>
          </el-col>
          <el-col :span="4">
            <el-input
              placeholder="姓名搜索！"
              v-model="userForm.userName"
            ></el-input>
          </el-col>
          <el-col :span="16">
            <el-col>
              <el-button @click="sreachBtn">查询</el-button>
              <el-button type="primary" @click="addUser(0)">新增</el-button>
              <el-button type="success">导入表格</el-button>
              <el-button type="warning">下载模板</el-button>
            </el-col>
          </el-col>
        </el-row>
      </div>
      <!-- 表格 -->
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        stripe
        border
        @selection-change="handleSelectionChange"
        v-loading="false"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column width="50" type="index" label="序号"></el-table-column>
        <!-- <el-table-column label="日期" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column> -->
        <el-table-column prop="name" label="手机号" width="150">
          <template slot-scope="scope">
            <el-tag>{{ scope.row.name }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="userName" label="姓名" width="150" align="center">
          <template slot-scope="scope">
            <el-tag type="success">{{ scope.row.userName }}</el-tag>
          </template>
        </el-table-column>
        <!-- show-overflow-tooltip -->
        <el-table-column prop="hospital" label="医院"> </el-table-column>
        <el-table-column prop="title" label="职称"> </el-table-column>
        <el-table-column prop="age" label="年龄"> </el-table-column>
        <el-table-column prop="idcode" label="证件号"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="addUser(scope.row.id)"
              >修改</el-button
            >
            <el-button type="warning" size="mini" @click="delUserTable">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div
        style="
          margin-top: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="pageSizeArr"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
import { systemUserList } from "../../http/api/push/api";
export default {
  data() {
    return {
      // 总共页数
      total: 0,
      // 筛选信息
      userForm: {
        name: "",
        userName: "",
      },
      // Loading
      myLoading: true,
      // 用户列表
      tableData: [],
      multipleSelection: [],
      // 当前页
      currentPage4: 1,
      // pagesizeArr
      pageSizeArr: [5, 10, 15, 20],
      // pagesize
      pageSize: 5,
    };
  },
  created() {
    this.systemUserList();
  },
  name: "userManagement",
  methods: {
    // 用户列表请求
    async systemUserList() {
      // const { page, pageSize, name, userName } = ctx.query;
      let obj = {
        page: this.currentPage4,
        pageSize: this.pageSize,
        name: this.userForm.name,
        userName: this.userForm.userName,
      };
      try {
        let arr = await systemUserList(obj);
        let { data, code } = arr.data;
        if (code === 200) {
          // 列表请求成功
          this.tableData = data;
          this.total = arr.data.total;
        } else if (code === 202) {
          this.$message({
            type: "error",
            message: "当前没有用户列表！",
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage4 = 1;
      this.$router.push({
        name: 'userManagement',
        params: {
          userPageId: 1,
        }
      })
      this.systemUserList();
    },
    handleCurrentChange(val) {
      this.currentPage4 = val;
      this.pageSize = 5;
      this.$router.push({
        name: 'userManagement',
        params: {
          userPageId: val,
        }
      })
      this.systemUserList();
    },
    // 新增用户 形参为id值 为0 为新增 有值为修改
    addUser(userId) {
      let pageId = this.$route.params.userPageId;
      console.log(this.$route);
      if (userId) {
        console.log("修改！");
        this.$router.push({
          name: 'addUser',
          params: {
            userPageId: this.currentPage4,
            userId,
          }
        })
      } else {
        this.$router.push("/addUser/" + pageId + "/" + userId);
      }
    },
    // 查询按钮
    sreachBtn() {
      if (this.userForm.name || this.userForm.userName) {
        this.systemUserList();
      } else {
        this.$message({
          type: 'error',
          message: '需要填写手机号或者姓名才能进行筛选！'
        })
      }
    },
    // shanchu按钮
    delUserTable() {
      this.$message({
        type: 'error',
        message: '当前不支持删除功能！'
      })
    }
  },
  watch: {
    '$route.params.userPageId': {
      handler(value) {
        console.log(value)
        this.currentPage4 = parseInt(value)
      },
      deep: true,
      immediate: true,
    }
  }
};
</script>

<style>
.userForm {
  width: 100%;
}

.userManagement {
  width: 100%;
  height: 100%;
}
.userManagement .el-card {
  width: 100%;

  /* overflow: auto; */
}

.userManagement-card {
  min-height: 100%;
}
</style>