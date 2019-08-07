var {ipcRenderer}=require('electron');


var myWebviewDom=document.querySelector('#myWebview');



ipcRenderer.on('openWebview',function(event,data){


    // data就是链接地址

    myWebviewDom.src=data;

})