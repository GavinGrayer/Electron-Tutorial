/**
*   全局快捷键时间
* */

var { app , globalShortcut } = require('electron')

app.on('ready',function () {
    //注册全局快捷键
    globalShortcut.register('ctrl+e',function () {
        console.log('ctrl+e')
    })

    //判断是否注册
    var result = globalShortcut.isRegistered('ctrl+e')
    console.log(result)
}).on('will-quit',function () {
    //取消全局快捷键
    globalShortcut.unregister('ctrl+e')
})

