var {Menu,shell,BrowserWindow}=require('electron');

function openWeb(url){
    shell.openExternal(url);
}

function openWebview(url){
    var win=BrowserWindow.getFocusedWindow();
    win.webContents.send('openWebview',url);
}

var template=[

    {
        label: '加载网页',
        submenu: [
            {
                label: '腾讯',
                click:function(){
                    console.log(BrowserWindow.getFocusedWindow());
                    var winId=BrowserWindow.getFocusedWindow().id;
                    console.log(winId);
                    console.log(BrowserWindow.fromId(winId))

                  openWebview('http://www.qq.com')
                }
            },
            {
                type: 'separator'
            },
            {
                label: '百度',
                click:function(){
                    openWebview('http://www.baidu.com')
                }
            }

        ]
    },
    {
        label: '帮助',
        submenu:[
            {
                label: '百度',
                click:function(){
                    openWeb('https://www.baidu.com');
                }
            },
            {
                type: 'separator'  /*分隔符*/
            },
            {
                label: '联系我们',
                click:function(){
                    openWeb('https://www.itying.com');
                }
            }
        ]
    }

]

var m=Menu.buildFromTemplate(template);


Menu.setApplicationMenu(m);

