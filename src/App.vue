<template>
  <div id="app">
    <router-view />
    <van-tabbar
      v-model="active"
      active-color="blue"
      inactive-color="#000"
      route
      placeholder
    >
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/classification">分类</van-tabbar-item>
      <van-tabbar-item icon="records" to="/learning">学习</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/personal">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      active: '/'
    }
  }
}
</script>
