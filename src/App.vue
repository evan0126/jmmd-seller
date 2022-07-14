<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      count: 0
    }
  }
})
</script>
<style lang="scss" scoped>
.title {
  background-color: $success-color;
}
</style>
