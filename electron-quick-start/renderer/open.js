/**
 * =======================渲染进程方式=======================================
 * 打开新窗口
 * */

var openNewWin = this.document.querySelector("#openNewWin");
var openNewMainWin = this.document.querySelector("#openNewMainWin");


//渲染进程没法直接调用主进程中的模块，但是可以通过electron中的remote模块间接调用主进程中的模块

var path = require('path')

var BrowserWindow = require('electron').remote.BrowserWindow;
var win = null;

openNewWin.onclick=function(){
    // alert("click")
    //调用BrowserWindow打开新窗口
    win = new BrowserWindow({
        width: 400,
        height: 300,
        // frame:false //无边框
        //fullscreen:true //全屏展示

    })
    //mainWindow.loadFile('index.html')  两种写法
    win.loadURL(path.join('file:',__dirname,'news.html'))

    win.on('close',()=>{
        win = null;
    })
}


/** ====================主进程方式======================================
* 主进程打开新窗口
 * 渲染进程=》渲染进程传值
* */
var {ipcRenderer} = require('electron')
openNewMainWin.onclick = function () {
    //ipcRenderer.send('openWindow','open main windows')

    /*
    * 方法一：通过localStorage实现页面传值
    * */
    /*var aid = 123;
    localStorage.setItem('aid',aid)*/


    var aid1 = 123456;
    ipcRenderer.send('openWindow',aid1)

}

