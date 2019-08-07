<template>
  <div id="app">

    <el-container :style="{'height':winHeight+'px'}">
      <el-aside :style="{'height':winHeight+'px'}">
        <el-menu :default-openeds="['1','2', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-location-outline"></i>起始页面</template>
            <el-menu-item index="2-4-1"><router-link to='home'>欢迎页面</router-link></el-menu-item>
            <el-menu-item index="2-4-1"><router-link to='home2'>欢迎页面2</router-link></el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>舆情报告</template>

            <el-menu-item index="2-4-1"><router-link to='report'>全部舆情</router-link></el-menu-item>

            <el-menu-item index="2-4-1"><router-link to='positivereport'>正面舆情</router-link></el-menu-item>

            <el-menu-item index="2-4-1"><router-link to='negativereport'>负面舆情</router-link></el-menu-item>

          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>舆情设置</template>

            <el-menu-item index="3-1">
              <router-link to='keywords'>舆情关键字设置</router-link>
            </el-menu-item>

            <el-menu-item index="3-2">
              <router-link to='alarm'>舆情报警设置</router-link>

            </el-menu-item>

          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>舆情设置</template>

            <el-menu-item index="3-1">
              <router-link to='keywords'>舆情关键字设置</router-link>
            </el-menu-item>

            <el-menu-item index="3-2">
              <router-link to='alarm'>舆情报警设置</router-link>

            </el-menu-item>

          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>舆情设置</template>

            <el-menu-item index="3-1">
              <router-link to='keywords'>舆情关键字设置</router-link>
            </el-menu-item>

            <el-menu-item index="3-2">
              <router-link to='alarm'>舆情报警设置</router-link>

            </el-menu-item>

          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container class="main" :style="{'height':winHeight+'px'}">
        <router-view></router-view>
      </el-container>
    </el-container>

    <!-- <router-link to="/">首页</router-link>
    <router-link to="/report">舆情报表</router-link>
    <router-link to="/keywords">舆情关键词设置</router-link>
    <router-link to="/alarm">舆情报警设置</router-link> -->



  </div>
</template>

<script>
  const path = require('path')
  const notifier = require('node-notifier')
  export default {
    name: 'electronproject',

    data(){
      return{
        winHeight:document.documentElement.clientHeight
      }
    },
    mounted() {

      /**====================================================================
       * 网络监控
       * */
      window.addEventListener('online', ()=>{
        this.noticeMsg('有网络了')
      });
      window.addEventListener('offline',()=>{
        this.noticeMsg('网络已经断开，请检查您的网络设置!')
      });


      window.onresize=()=>{

        this.winHeight=document.documentElement.clientHeight;
      };

      //监听右键菜单

      window.addEventListener('contextmenu',(e)=>{

        e.preventDefault();


        //给主进程广播事件   注意this指向

        this.$electron.ipcRenderer.send('contextmenu');

      })


    },
    sockets:{
      connect: function(){  //vue客户端和socket.io服务器端建立连接以后触发的方法
        console.log('socket connected')
      },
      serverEmit: function(val){  //接收服务器广播的数据

          this.noticeMsg(val['title']);
/*        const option = {
          title: '腾讯新闻',
          body: val.title,
          icon: path.join(__dirname,'assets/favicon2.ico')
        }*/
        //const myNotification = new window.Notification(option.title,option);

/*        myNotification.onclick = () =>{
          // console.log('点击了');
          this.$electron.shell.openExternal(val.url);
        }*/

      }
    },
    methods: {
      /**
       * System Notification
       * @param {string} msg
       */
       noticeMsg(msg) {
        console.log('111111'+__dirname)
        /** https://github.com/mikaelbr/node-notifier */
        notifier.notify({
          title: '消息通知',
          message: msg,
          icon: path.join(__dirname, 'static/favicon2.ico'),
          sound: true,
          wait:true,
          body:msg
        }, function (err, response) {
          // Response is response from notification
        }).on('click', function (notifierObject, options) {
          // Triggers if `wait: true` and user clicks notification
          console.log("点击通知")
        }).on('timeout', function (notifierObject, options) {
          // Triggers if `wait: true` and notification closes
          console.log("忽视超时")
        });
      }
    }
  }
</script>

<style lang="scss">

  *{

    margin:0px;
    padding:0px;
  }

  .el-aside {
    width: 220px!important;
    background: #eee;
    a{
      color: #333;
      display: block;
      text-decoration: none;

    }
    .el-menu{
      background: #eee;
    }

  }

  .main{
    overflow-y: auto; /*溢出 出现滚动条*/
    overflow-x: hidden;

    padding:10px;
    width: 100%;
  }

  .content{
    width: 100%;
  }
  .electron-table{
    /*去双边框*/
    ;border-collapse: collapse;
  }
  .electron-table tr td,.electron-table tr th{
    height: 30px;
    line-height: 30px;
    border: 1px solid #eeeeee;
    text-align: center;

    font-size: 16px;

    padding: 5px;
  }

  .v-modal{

    opacity: 0.8!important;
  }

</style>
