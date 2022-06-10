<template>
  <div>
    <template v-for="item in subAsideList">
    <el-submenu v-if="item.children && item.children.length > 0" :key="item.title" :index="item.title">
        <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.title}}</span>
        </template>
        <For-tree :subAsideList="item.children"></For-tree>
    </el-submenu>
      <el-menu-item v-else :key="item.title" :index="item.path">
        
          <i class="el-icon-location"></i>
          <span slot="title">{{ item.title }}</span>
        
      </el-menu-item>
    </template>
  </div>
</template>

<script>
import ForTree from "./tree";
export default {
  name: "ForTree",
  data() {
    return {};
  },
  props: ["subAsideList"],
  components: {
      ForTree
  }
};
</script>