<template>
    <div id="home">
        {{msg}}
        <br>
        <br>
        <button @click="send()">给主进程广播数据</button>

        <!--click.stop  阻止冒泡
        click.prevent   阻止默认行为
        -->
        <a id="url" @click.prevent="openUrl($event)" href="http://www.baidu.com">打开百度</a>

        <button @click="runNode()">使用nodejs的模块</button>

        <div class="box">
            <ul>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
            </ul>
        </div>
    </div>
</template>

<script>

    var path = require('path')

    export default {
        name: "Home",
        data(){
            return{
                msg:'首页组件'
            }
        },
        methods:{
            send() {
                alert('执行了')
                this.$electron.ipcRenderer.send('toMain',"我是渲染进程数据")
            },
            openUrl(event){
                console.log(event)
                this.$electron.shell.openExternal(event.srcElement.href)
            },
            runNode(){
                var dir = path.join(__filename,'/aaaa')
                console.log("dir::" + dir)
            }
        }
    }
</script>

<style lang="scss">
    .box{
        border: 1px solid #eee;

        ul{
            list-style-type: none;

            li{
                line-height: 44px;
                height: 44px;
            }
        }
    }
</style>
