/**
*   clipboard模块  主进程和渲染进程都可以使用
* */

var {clipboard , nativeImage} = require('electron')

//复制操作
clipboard.writeText('机器码')



/*
* 双击复制机器码   剪切文字
* */
var code = document.querySelector('#code')
var input = document.querySelector('#input')
console.log(code)
code.onclick = function () { //单击
    clipboard.writeText(code.innerHTML)
    console.log('success')
}
code.ondblclick = function () { //双击
    clipboard.writeText(code.innerHTML)
    input.value = code.innerHTML
    console.log('双击success')
}



/*
* 赋值图片  剪切板——图片
* */
var  btncopyimg=document.querySelector('#btncopyimg');

btncopyimg.onclick=function(){
    //复制图片黏贴到我们页面上
    /*
    1.引入nativeImage
    2、创建一个nativeImage的对象
    */
    var image=nativeImage.createFromPath('static/favicon2.ico');
    //复制图片
    clipboard.writeImage(image);
    //粘贴图片
    var imgsrc=clipboard.readImage().toDataURL();
    console.log(imgsrc);   //base64的地址
    //创建一个img标签 指定他的src
    var imgDom=new Image();
    imgDom.src=imgsrc;
    document.body.appendChild(imgDom);
}
