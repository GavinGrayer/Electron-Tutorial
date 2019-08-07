const { Menu,ipcMain,BrowserWindow} = require('electron');


//右键菜单
const contextMenuTemplate=[
    {
        label: '复制', role: 'copy' },
    {
        label: '黏贴', role: 'paste' },
    { type: 'separator' }, //分隔线
    {
        label: '其他功能',
        click: () => {
        console.log('click')
         }
    }
];
//[2]配置创建菜单
const contextMenu=Menu.buildFromTemplate(contextMenuTemplate);


ipcMain.on('contextmenu',function(){
    //弹出窗口显示
    //BrowserWindow.getFocusedWindow() 获取当前窗口，在此窗口弹出
    contextMenu.popup(BrowserWindow.getFocusedWindow());

})

