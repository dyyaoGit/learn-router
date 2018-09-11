<template>
  <div>
    <h1>我是首页</h1>
    <router-link :to="{path: '/login', query: {
      userinfo: 'name is shanmu'
      }}">跳转到登录
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "home"
  }
</script>

<style scoped>

</style>
