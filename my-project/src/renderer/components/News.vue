<template>
    <div id="news">
        新闻组件

        <button @click="runNode()">使用nodejs的模块</button>

        <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-row>

        <el-button type="primary" @click="open">点击打开 Message Box</el-button>

    </div>
</template>

<script>

    var fs = require('fs')

    export default {
        data(){
            return{
                msg:'我是新闻组件'
            }
        },
        methods:{
            runNode(){
                fs.readFile('package.json',function(err,data){
                    if (err){
                        console.log(err)
                        return false
                    }else {
                        console.log(data.toString())
                        return true
                    }
                })
            },
            open() {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    console.log('确定')
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    console.log('取消')
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        }
    }
</script>
