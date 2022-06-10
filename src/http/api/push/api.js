import axios from '../../axios';
// 全局模块入口
// 请求用户列表
export function systemUserList (data) {
    return axios({
        method: 'post',
        url: '/users/systemUserList',
        data,
    })
}

// 查询角色列表
export function getRolesList(data) {
    return axios({
        method: 'post',
        url: '/roles/getRolesList',
        data,
    })
}

// 新增列表接口
export function addUser(data) {
    return axios({
        method: 'post',
        url: '/users/addUser',
        data,
    })
}

// 拼接id值 获取用户信息
export function searchAuthor(data) {
    return axios({
        method: 'post',
        url: '/users/searchAuthor',
        data,
    })
}

// 编辑用户信息
export function complieUser(data) {
    return axios({
        method: 'post',
        url: '/users/complieUser',
        data,
    })
}

// 编辑角色信息
export function rolesInsert(data) {
    return axios({
        method: 'post',
        url: '/roles/rolesInsert',
        data,
    })
}

// 编辑角色
export function compolieRolesUser(data) {
    return axios({
        method: 'post',
        url: '/roles/compolieRolesUser',
        data,
    })
}

// 查询角色
export function searchRolesUser(data) {
    return axios({
        method: 'post',
        url: '/roles/searchRolesUser',
        data,
    })
}

// 查询所有导航
export function rolesRouter(data) {
    return axios({
        method: 'post',
        url: '/roles/rolesRouter',
        data,
    })
}

// 按照当前权限获取路由id
export function jurisdictionRouter(data) {
    return axios({
        method: 'post',
        url: '/roles/jurisdictionRouter',
        data,
    })
}

// 编辑导航
export function updateRolseAuthorization(data) {
    return axios({
        method: 'post',
        url: '/roles/updateRolseAuthorization',
        data,
    })
}

// 获取全部地址数据
export function allHistory(data) {
    return axios({
        method: 'post',
        url: '/departmentManagemen/allHistory',
        data,
    })
}

// 新建（修改）医院
export function updateHospital(data) {
    return axios({
        method: 'post',
        url: '/departmentManagemen/updateHospital',
        data
    })
}

// 展示医院数据接口
export function getHospital(data) {
    return axios({
        method: 'post',
        url: '/departmentManagemen/getHospital',
        data,
    })
}

// 新建（修改）分院数据
export function updateHospitalTwo(data) {
    return axios({
        method: 'post',
        url: '/departmentManagemen/updateHospitalTwo',
        data,
    })
}