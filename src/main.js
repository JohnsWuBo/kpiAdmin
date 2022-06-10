import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
console.log('进入！！！！！')
// -------------------------------------------------使用组件库
// 请求库axios
import axios from 'axios'
// element-ui
import ElementUi from 'element-ui'
// element-ui css
import './assets/element-variables.scss'
// 图标 echarts
// import Echarts from 'vue-echarts'
// import 'echarts/lib/chart/line'
// 视频播放
// import VideoPlayer from 'vue-video-player'
// require('video.js/dist/video-js.css')
// require('vue-video-player/src/custom-theme.css')
// 相册组件(图片放大或者缩小)
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
var option = {
  maxSpreadZoom: 1, // 管制预览图最大的倍数，默认是2倍，我这里改成了原图
  fullscreenEl: false, //管制是否显示右上角全屏按钮
  closeEl: false, //管制是否显示右上角敞开按钮
  tapToClose: true, //点击滑动区域应敞开图库
  shareEl: false, //管制是否显示分享按钮
  zoomEl: false, //管制是否显示放大放大按钮
  counterEl: false, //管制是否显示左上角图片数量按钮
  arrowEl: true,  //管制如图的左右箭头（pc浏览器模拟手机时）
  tapToToggleControls: true, //点击应切换控件的可见性
  clickToCloseNonZoomable: true //点击图片应敞开图库，仅当图像小于视口的大小时
}
 
// 图片懒加载
import VueLazyload from 'vue-lazyload'
// 上传图片 压缩组件
import lrz from 'lrz'
// 进度条导入
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


// 给vue添加全局组件
// Vue.component('chart', Echarts);
Vue.prototype.$http = axios
Vue.prototype.$store = store
// 使用库 当库是一个对象的时候需要用use 使用 如果是一个方法 可以绑定在vue实例里面
Vue.use(ElementUi);
// Vue.use(VideoPlayer)
Vue.use(VueLazyload, {
  preload: 1.3,
  loading: require('./assets/logo.png'),
  attempt: 1,
})
Vue.use(preview, option)
Vue.config.productionTip = false

// 前置钩子
router.beforeEach((to, from, next) => {
  NProgress.start();
  console.log(to.path)
  if (localStorage.getItem('userinfo') && localStorage.getItem('token')) {
    if (to.path == '/Login') {
      next('/');
      NProgress.done();
    } else {
      next();
      NProgress.done();
    }
  } else {
    if (to.path == '/Login') {
      next();
      NProgress.done();
    } else {
      next('/Login');
      NProgress.done();
    }
  }
  // next()
})

// 后置钩子
router.afterEach((to, from,next) => {
  if (to.meta.title !== undefined || to.meta.title !== null) {
    document.title = to.meta.title
  };
  NProgress.done();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
