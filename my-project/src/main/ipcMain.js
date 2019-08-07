var {ipcMain , BrowserWindow }= require('electron')

/*
* 接收渲染进程广播数据
* */
ipcMain.on('toMain',function (event, data) {
    console.log('main::data:'+data)
})

/*
* 接收渲染进程广播的数据执行最小化 最大化  关闭的操作
* */

//获取当前的窗口对象   BrowserWindow.getFocusedWindow();
var mainWindow= BrowserWindow.getFocusedWindow();

ipcMain.on('window-min',()=>{

    console.log('window-min')

    mainWindow.minimize()
})

ipcMain.on('window-max',()=>{

    if(mainWindow.isMaximized()){
        mainWindow.restore();//恢复到以前的状态
    }else{
        mainWindow.maximize()
    }
})

ipcMain.on('window-close',()=>{
    mainWindow.close()
})
