/**
 * 主进程处理渲染进程广播的数据
 * */
//方法一：var {ipcMain} = require('electron')
var ipcMain = require('electron').ipcMain

ipcMain.on('sendM',function (event,data) {
    console.log(data)
    console.log(event)
})

ipcMain.on('sendReply',function (event,data) {
    console.log(data)
    console.log(event)
    //主进程发送数据
    event.sender.send('reply' ,'ok ')
})



ipcMain.on('sendSync',function (event,data) {
    console.log(data)
    console.log(event)
    //同步-->主进程发送数据
    event.returnValue = 'this is sync main'
})


//========================================================
/*
* 主进程打开新窗口
* */
// var {BrowserWindow} = require('electron')
var path = require('path')
var BrowserWindow = require('electron').BrowserWindow;
var win = null;
ipcMain.on('openWindow',function (event,aid) {
    //alert('hello')
    //调用BrowserWindow打开新窗口
    win = new BrowserWindow({
        width: 400,
        height: 300,
        // frame:false //无边框
        //fullscreen:true //全屏展示
        webPreferences: {
            //开新窗口必须加，否则新窗口使用require会报错ReferenceError: require is not define
            nodeIntegration: true
        }
    })
    //mainWindow.loadFile('index.html')  两种写法
    win.loadURL(path.join('file:',__dirname,'../news.html'))
    //开启新窗口的调试模式
    win.webContents.openDevTools()

    //通过win.webContents.send()吧当前数据广播给news.html渲染进程
    win.webContents.on('did-finish-load',function () {
        console.log('did-finish-load::'+aid)
        win.webContents.send('tonews',aid)
    })

    win.on('close',()=>{
        win = null;
    })
})



