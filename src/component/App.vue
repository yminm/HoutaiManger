<template>
  <div>
      {{key}}
      <!-- 根组件路由站位 将来通过url来控制页面展示 -->
      <router-view></router-view>
  </div>

</template>
<script>
    export default{
        data(){
            return {
                key:"你好这是测试"
            }
        }
    }
</script>
<style scoped>

</style>


