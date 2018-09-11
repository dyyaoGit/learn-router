<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<div>-->
      <!--<ul>-->
        <!--<li>-->
          <!--<router-link :to="{name: 'home'}">首页</router-link></li>-->
        <!--<li>-->
          <!--<router-link :to="{name: '详情', params: {id: '我叫参数'} }">详情页</router-link>-->
        <!--</li>-->
        <!--<li>-->
          <!--<router-link to="/login">登录</router-link>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</div>-->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
