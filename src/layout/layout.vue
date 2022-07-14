<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <app-aside></app-aside>
      </el-aside>
      <el-container>
        <el-header></el-header>
        <el-main>
         <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import AppAside from './components/app-aside.vue'
export default Vue.extend({
  data() {
    return {}
  },
  components: {
    AppAside
  },
  methods: {}
})
</script>

<style lang='scss' scoped>
.el-container {
  min-height: 100vh;
  min-width: 980px;
}
.el-aside {
  background-color: $navbar-color;
}
.el-header {
  background-color: $navbar-color;
}
</style>