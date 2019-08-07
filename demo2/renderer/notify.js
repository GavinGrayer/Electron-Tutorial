/**
* 消息通知  h5通知api实现   win没法用废弃
* */

var path=require('path');

/*var option={
    title:'electron 通知api',
    body:'electron跨平台软件开发教程更新了，electron 通知',
    icon:path.join('static/favicon2.ico')
}

console.log('path::'+__filename)

var myNotification=new Notification(option.title,{body:"hello"});*/


//点击按钮实现通知
var btn=document.querySelector('#btn');

btn.onclick=function(){
    var option={
        title:'electron 通知',
        body:'electron跨平台软件开发教程更新了'
    }
    console.log("is::"+window.Notification.permission)
    var Notification = window.Notification || window.mozNotification || window.webkitNotification
    var myNotification= new Notification(option.title,option);

    myNotification.onclick=function(){

        console.log('点击了');
    }

}
