<template>
    <div id="myHeader">

        <div class="titlebtn">
            <div class="min"  @click="min"><i class="iconfont">&#xe623;</i></div>
            <div class="max" @click="max"><i class="iconfont">&#xe665;</i></div>
            <div class="close" @click="close"><i class="iconfont">&#xe6fc;</i></div>

            <!--<div class="min"  @click="min"> <img src="../assets/min.png" alt=""></div>
            <div class="max"><button  @click="max"> [] </button></div>
            <div class="close"><button @click="close"> X </button></div>-->
        </div>

    </div>
</template>

<script>
    export default {
        name: "MyHeader",
        data(){
            return{
            }
        },
        methods:{
            min(){
                console.log('min')
                this.$electron.ipcRenderer.send('window-min');
            },
            max(){
                this.$electron.ipcRenderer.send('window-max');
            },
            close(){
                this.$electron.ipcRenderer.send('window-close');
            }

        }
    }
</script>

<style lang="scss">
    #myHeader {
        width: 100%;
        height: 44px;
        line-height: 44px;
        background-color: rgb(198, 47, 47);
        /*使得myHeader可以进行拖拽*/
        -webkit-app-region: drag;
    }

        .titlebtn {
            position: relative;
        width: 200px;
        height: 44px;
        line-height: 44px;
        float: right;
        -webkit-app-region: no-drag;

        .min{
            position: absolute;
            /*background: green;*/
            right: 100px;
            width: 20px;
            /*鼠标悬停变为手型*/
            cursor:pointer;
            img{
                width: 100%;
                margin-top:6px;
            }
        }
        .max{
            position: absolute;
            /*background: yellow;*/
            right: 60px;
            width: 20px;
            cursor:pointer;
        }
        .close{
            position: absolute;
            /*background:black;*/
            right:20px;
            width: 20px;
            cursor:pointer;
        }
    }
</style>

