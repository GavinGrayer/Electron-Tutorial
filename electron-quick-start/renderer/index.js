/**
 * 渲染进程index.html的index.js
 * */
var fs = require('fs')

window.onload = function () {
    var btn = this.document.querySelector("#btn");
    var textarea = this.document.querySelector("#textarea");
    // alert('1111')
    // 1、获取本地的文件
    fs.readFile('package.json',(err,data)=>{
        // console.log(data)
        //2、赋值给textarea
        textarea.innerHTML = data
    })

    /*
        释放目标时触发的事件:
        ondragenter - 当被鼠标拖动的对象进入其容器范围内时触发此事件
        ondragover - 当某被拖动的对象在另一对象容器范围内拖动时触发此事件
        ondragleave - 当被鼠标拖动的对象离开其容器范围内时触发此事件
        ondrop - 在一个拖动过程中，释放鼠标键时触发此事件
    */
    var content = this.document.querySelector("#content");
    content.ondragenter = content.ondragover = content.ondragleave = function () {
        return false;
    }

    content.ondrop = function (e) {
        e.preventDefault();
        console.log(e.dataTransfer.files[0])
        fs.readFile(e.dataTransfer.files[0].path,'utf-8',(err, data) => {
            if (!err){
                content.innerHTML = data;
            } else {
                return false;
            }
        })
    }

}
