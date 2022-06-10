<template>
  <div id="home">
    <el-container style="width: 100%; height: 100%">
      <el-aside style="width: auto !important">
        <wu-aside />
      </el-aside>
      <el-container>
        <el-header
          height="50"
          style="background: #ffffff; border-bottom: 2px solid #e9e9e9"
        >
          <wu-header />
        </el-header>
        <el-main>
          <wu-Main />
        </el-main>
        <el-footer
          style="
            height: 50px;
            border-top: 1px solid #e9e9e9;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
          "
        >
          Copyright © 2019-2021 WuJohn. All rights reserved.
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// 侧边栏 头部 main 底部
import HelloWorld from "@/components/HelloWorld.vue";
import wuAside from "@/views/main/aside/aside.vue";
import wuHeader from "@/views/main/header/header.vue";
import wuMain from "@/views/main/main.vue";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
    wuAside,
    wuHeader,
    wuMain,
  },
};
</script>

<style>
#home {
  width: 100%;
  height: 100%;
}
</style>