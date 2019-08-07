/**
 * 创建菜单
 * */

/* 方法一
var electron = require('electron')
var Menu = electron.Menu
*/
//方法二 es6
const { Menu } = require('electron')
//[1]定义菜单
var template = [
    {
        label:'文件',
        submenu:[
            {
                label:'新建文件',
                accelerator:'ctrl+n',//绑定快捷键
                click:function () {//监听点击事件
                    console.log('ctrl+n')
                }
            },
            {
                label:'新建窗口',
                click:function () {
                    console.log('new window')
                }
            }
        ]
    },
    {
        label:'编辑',
        submenu:[
            {
                label:'复制',
                role:`copy`
            },
            {
                label:'剪贴',
                role: `cut`
            },
            {
                label:'粘贴',
                role: `paste`
            }
        ]
    }
]

//[2]配置
var m = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(m)
