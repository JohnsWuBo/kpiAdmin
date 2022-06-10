import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: '首页'
    },
    redirect: '/user/1',
    children: [
      // 系统管理开始------------------------------------------------------------------------------------------------------------------
      // 用户管理
      {
        path: 'user/:userPageId',
        name: 'userManagement',
        meta: {
          title: '用户管理'
        },
        component: () => import(/* webpackChunkName: 'userManagement' */'../views/userManagement/user.vue'),
        // redirect: '/user/1'
      },
      // 新增用户
      {
        path: 'addUser/:userPageId/:userId',
        name: 'addUser',
        meta: {
          title: '新增用户'
        },
        component: () => import(/* webpackChunkName: 'addUser' */'../views/userManagement/addUser.vue')
      },
      // 角色管理
      {
        path: 'roles',
        name: 'roles',
        meta: {
          title: '角色管理'
        },
        component: () => import(/* webpackChunkName: 'roles' */'../views/rolesManagement/roles.vue'),
      },
      // 角色授权
      {
        path: 'rolesAuthorization/:rolesId',
        name: 'rolesAuthorization',
        meta: {
          title: '角色授权'
        },
        component: () => import(/* webpackChunkName: 'rolesAuthorization' */'../views/rolesManagement/rolesAuthorization.vue')
      },
      // 系统管理结束-----------------------------------------------------------------------------------------------------------------
      // 科室管理开始-----------------------------------------------------------------------------------------------------------------
      // 科室管理
      {
        path: 'DepartmentManagemen',
        name: 'DepartmentManagemen',
        meta: {
          title: '科室管理'
        },
        component: () => import(/*webpackChunkName: 'DepartmentManagemen'*/'../views/DepartmentManagemen/departmentManage.vue')
      },
      // 科室管理结束------------------------------------------------------------------------------------------------------------------
      // 岗位管理开始------------------------------------------------------------------------------------------------------------------
      {
        path: 'postManagemen',
        name: 'postManagemen',
        meta: {
          title: '岗位管理及相应系数'
        },
        component: () => import(/*webpackChunkName: 'postManagemen'*/'../views/postManagemen/postManagemen.vue')
      },
      // 岗位管理结束-------------------------------------------------------------------------------------------------------------------
      // 绩效管理开始--------------------------------------------------------------------------------------
      {
        path: 'achievements',
        name: 'achievements',
        meta: {
          title: '月度奖金绩效总览明细'
        },
        component: () => import(/*webpackChunkName: 'achievements'*/'../views/achievements/achievements.vue'),
      },
      // 绩效分展示
      {
        path: 'performanceScore',
        name: 'performanceScore',
        meta: {
          title: '绩效分展示'
        },
        component: () => import(/*webpackChunkName: 'performanceScore'*/'../views/achievements/performanceScore.vue')
      },
      // 绩效项目配置
      {
        path: 'achievementsConfigure',
        name: 'achievementsConfigure',
        meta: {
          title: '绩效项目配置'
        },
        component: () => import(/*webpackChunkName: 'achievementsConfigure'*/ '../views/achievements/achievementsConfigure.vue')
      },
      // 绩效登记
      {
        path: 'registerAchievements',
        name: 'registerAchievements',
        meta: {
          title: '绩效登记'
        },
        component: () => import(/*webpackChunkName: 'registerAchievements'*/'../views/achievements/registerAchievements.vue')
      },
      // 绩效管理结束-----------------------------------------------------------------------------------------
      // 考核项目管理开始----------------------------------------------------------------------------------------
      // 考核标准
      {
        path: 'assessmentStandard',
        name: 'assessmentStandard',
        meta: {
          title: '考核标准'
        },
        component: () => import(/*webpackChunkName: 'assessmentStandard'*/'../views/assessmentStandard/assessmentStandard')
      },
      // 考核项目管理结束----------------------------------------------------------------------------------------
      // 统计管理开始-------------------------------------------------------------------------------------------------------------------
      // 档案室
      {
        path: 'archivesCenter',
        name: 'archivesCenter',
        meta: {
          title: '档案室和采血统计对比'
        },
        component: () => import(/*webpackChunkName: 'archivesCenter'*/'../views/archivesCenter/archivesCenter')
      },
      // 支持工作量因素统计
      {
        path: 'workloadStatistics',
        name: 'workloadStatistics',
        meta: {
          title: '支持工作量因素统计'
        },
        component: () => import(/*webpackChunkName: 'workloadStatistics'*/'../views/archivesCenter/workloadStatistics')
      },
      // 出勤率统计
      {
        path: 'attendanceStatistics',
        name: 'attendanceStatistics',
        meta: {
          title: '出勤率统计'
        },
        component: () => import(/*webpackChunkName: 'attendanceStatistics'*/'../views/archivesCenter/attendanceStatistics')
      },
      // 统计管理完成------------------------------------------------------------------------------------------------------------------
      // 工作管理开始------------------------------------------------------------------------------------------------------------------
      // 工作过程
      {
        path: 'workingProcessCom',
        name: 'workingProcessCom',
        meta: {
          title: '工作过程'
        },
        component: () => import(/*webpackChunkName: 'workingProcessCom'*/'../views/workSystem/workingProcessCom')
      },
      {
        path: 'workTimeRegister',
        name: 'workTimeRegister',
        meta: {
          title: '工作时间登记'
        },
        component: () => import(/*webpackChunkName: 'workTimeRegister'*/'../views/workSystem/workTimeRegister')
      },
      {
        path: 'workQuotaComplete',
        name: 'workQuotaComplete',
        meta: {
          title: '个人工作完成情况'
        },
        component: () => import(/*webpackChunkName: 'workQuotaComplete'*/'../views/workSystem/workQuotaComplete')
      },
      // 工作管理完成------------------------------------------------------------------------------------------------------------------
      // 数据汇总开始---------------------------------------------------------------------------------------------------------------
      // 个人统计
      {
        path: 'personalStatistics',
        name: 'personalStatistics',
        meta: {
          title: '个人统计'
        },
        component: () => import(/*webpackChunkName: 'dataSummary'*/'../views/dataSummary/personalStatistics')
      },
      // 年度奖金汇总
      {
        path: 'annualBonus',
        name: 'annualBonus',
        meta: {
          title: '年度奖金汇总'
        },
        component: () => import(/*webpackChunkName: 'annualBonus'*/'../views/dataSummary/annualBonus')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login"*/'../views/layout/login.vue'),
    meta: {
      title: '登录页'
    }
  },
  // 注册
  {
    path: '/reg',
    name: 'reg',
    component: () => import(/* webpackChunkName: "reg"*/'../views/layout/reg.vue'),
    meta: {
      title: '注册页'
    }
  },
  
]

const router = new VueRouter({
  routes
})



export default router
