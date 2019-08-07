/**
 * 创建菜单
 * */

// 方法一
var remote = require('electron').remote
var Menu = remote.Menu
//方法二 es6
//const { Menu } = require('electron').remote


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

//右键菜单
window.addEventListener('contextmenu',function (e) {
    // this.alert('111122222')
    //组织当前窗口默认事件
    e.preventDefault()
    //在当前窗口点击右键的时候弹出  定义的菜单模板
    m.popup({window:remote.getCurrentWindow()})

},false)
