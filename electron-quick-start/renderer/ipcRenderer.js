/**
 * 进程之间通信
 * */
var ipcRenderer = require('electron').ipcRenderer

/*
 * 渲染进程给主进程发送消息
 * */
var send = this.document.querySelector("#send");
//渲染进程间接执行主进程里面的方法
send.onclick=function(){
    //渲染进程给主进程广播数据
    ipcRenderer.send('sendM','this is renderer...')

}

/*
* 渲染进程发送数据并获得反馈（异步）
* */
var sendreply = this.document.querySelector("#sendreply");

//渲染进程间接执行主进程里面的方法
sendreply.onclick=function(){
    //渲染进程给主进程广播数据
    ipcRenderer.send('sendReply','this is renderer...reply')

}

ipcRenderer.on('reply',function (event,data) {
    console.log('feedback ' + data)
})


/*
* 渲染进程发送数据并获得反馈（同步）
* */

var sendSync = this.document.querySelector("#sendSync");

//渲染进程间接执行主进程里面的方法
sendSync.onclick=function(){
    //同步    渲染进程给主进程广播数据
    var msg = ipcRenderer.sendSync('sendSync','this is renderer...sendSync')
    console.log("同步msg::"+msg)
}

