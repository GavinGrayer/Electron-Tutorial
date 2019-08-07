var {Menu, Tray, BrowserWindow, app} = require('electron');

var path = require('path');


var iconTray = new Tray(path.join(__dirname, '../static/favicon2.ico'));

//绑定右键菜单
var trayMenu = Menu.buildFromTemplate([

    {

        label: '设置',
        click: function () {

            console.log('setting')
        }
    },
    {

        label: '升级',
        click: function () {

            console.log('update')
        }
    },
    {

        label: '退出',
        click: function () {
            if (process.platform !== 'darwin') {
                app.quit();
            }
        }
    }
]);
iconTray.setContextMenu(trayMenu);
//鼠标悬停提示文字
iconTray.setToolTip('electron应用');


//实现点击关闭按钮让应用保存在托盘里面 ，双击托盘打开应用
var win = BrowserWindow.getFocusedWindow();
win.on('close', (e) => {
    console.log(win.isFocused());
    if (!win.isFocused()) { //创建是否在显示   true:显示 false:隐藏
        win = null;
    } else {
        e.preventDefault();  //阻止窗口的关闭事件
        win.hide();
    }

})


//监听任务栏图标的点击事件
iconTray.on('double-click', function () {
    win.show();
})


//闪烁图标
var count = 0;
var timer = setInterval(function () {
    count++;

    if (count % 2 == 0) {

        iconTray.setImage(path.join(__dirname, '../static/favicon2.ico'))

    } else {

        iconTray.setImage(path.join(__dirname, '../static/empty.ico'))
    }

}, 500)

