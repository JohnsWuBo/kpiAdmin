import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 保存用户信息
    userInfo: JSON.parse(localStorage.getItem('userInfo')) ? JSON.parse(localStorage.getItem('userInfo')) : {},
    // 保存token
    token: JSON.parse(localStorage.getItem('token')) ? JSON.parse(localStorage.getItem('token')) : '',
    // 权限列表
    tabsList: [],
  },
  getters: {
  },
  mutations: {
    // 保存用户信息
    saveUserInfo(state, info) {
      state.userInfo = info;
      state.token = info.token;
      localStorage.setItem('userinfo', JSON.stringify(info))
      localStorage.setItem('token', JSON.stringify(info.token  ))
    },
    // 清空用户信息
    delUserInfo(state, info) {
      state.userInfo = {};
      localStorage.removeItem('userinfo');
      localStorage.removeItem('token');
    }
  },
  actions: {
    // 保存用户信息
    saveUserInfo({commit}, info) {
      return new Promise((resolve) => {
        commit('saveUserInfo', info);
        resolve()
      })
    },
    // 清空用户信息
    delUserInfo({commit}, info) {
      return new Promise((resolve) => {
        commit('delUserInfo')
        resolve()
      })
    }
  },
  modules: {
  }
})
