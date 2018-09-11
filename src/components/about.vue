<template>
  <div>
    <h1>我是详情页</h1>
    <h1>
      我是动态路由参数{{$route.params.id}}
    </h1>
  </div>
</template>

<script>
  export default {
    name: "about",
    created() {
      console.log(this.$route.params.id)
    }
  }
</script>

<style scoped>

</style>
