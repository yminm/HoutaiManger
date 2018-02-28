<template>
  <div>
      {{key}}
      <!-- 根组件路由站位 将来通过url来控制页面展示 -->
      <router-view></router-view>

      <el-switch
  style="display: block"
  v-model="value4"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-text="按月付费"
  inactive-text="按年付费">
</el-switch>

  </div>

</template>
<script>
export default {
  data() {
    return {
      key: "你好这是测试",
      value4: true
    };
  },
  created () {
    this.$http.get(this.$api.logout).then(()=>console.log("退出登录"));
  }
  
};
</script>
<style scoped>

</style>


