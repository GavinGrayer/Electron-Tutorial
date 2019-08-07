/**
* 消息通知   node-notifier
* */
const notifier = require('node-notifier')
const path = require('path')

const msg = "系统通知测试!"
//notice(msg)
// String
//notifier.notify('Message').body('hello').icon(path.join(__dirname, 'static/favicon2.ico'));

// Object
/*notifier.notify({
    title: 'My notification',
    message: 'Hello, there!',
    icon: path.join(__dirname, 'static/favicon2.ico'),
});*/

/**
 * System Notification
 * @param {string} msg
 */
function notice(msg) {
    console.log('111111'+__dirname)
    /** https://github.com/mikaelbr/node-notifier */
    notifier.notify({
        title: '消息通知',
        message: msg,
        icon: path.join(__dirname, 'static/favicon2.ico'),
        sound: true,
        wait:true,
        body:msg,
        timeout:2
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

//点击按钮实现通知
var btn=document.querySelector('#btn');

btn.onclick=function(){
    notice("点击按钮通知")
}



/**====================================================================
* 网络监控
* */
window.addEventListener('online',function () {
    notice('有网络')
})

window.addEventListener('offline',function () {
    notice("网络已断开")
})
