<!--
  主窗口
-->

<template>
  <div id="app">
    <MyHeader />

    <div class="header">

      <!--根据路由展示不同内容-->
      <router-link to="home">首页</router-link>
      <router-link to="news">新闻</router-link>
      <router-link to="user">用户管理</router-link>

    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  /*将自定义的MyHeader.vue引入*/
  import MyHeader from './components/MyHeader'
  export default {
    name: 'electronvuedemo01',
    /*将自定义的注册进来*/
    components:{
      MyHeader:MyHeader
    }
  }
</script>

<!-- sass-loader -->
<style lang="scss">
  /*将整体的body与边框宽度调为0*/
  *{
    margin:0px;
    padding: 0px;
  }

  /* CSS */
  .header{
    height: 44px;
    line-height: 44px;
    text-align: center;
    color: black;
    /*background: #ffffff;*/

    a{
      color: black;
      padding: 40px;
    }
  }


</style>
