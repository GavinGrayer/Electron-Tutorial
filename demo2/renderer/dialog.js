/**
* 弹出框
* */
var {remote}=require('electron');


//https://electronjs.org/docs/api/dialog
var errorDom=document.querySelector('#error');

var mesageBoxDom=document.querySelector('#mesageBox');

var openDialogDom=document.querySelector('#openDialog');

var saveDialogDom=document.querySelector('#saveDialog');

/*
* 错误框
* */
errorDom.onclick=function(){
    remote.dialog.showErrorBox('警告','操作有误');
}

/*
* 提示框
* */
mesageBoxDom.onclick=function(){
    remote.dialog.showMessageBox({
        type:'info',
        title:'提示信息',
        message:'内容',
        buttons:['ok','no']

    },function(index){

        console.log(index)
    })


}

/*
* 选择文件
* */
openDialogDom.onclick=function(){


    remote.dialog.showOpenDialog({

        // properties:['openDirectory','openFile']
        //[允许选择文件 , 允许选择文件夹]

        properties:['openFile']

    },function(data){//返回文件路径
        console.log(data);
        //["C:\Users\Administrator\Desktop\新建文件夹\js\index.js"]
    })

}

/*
* 保存文件
* */
saveDialogDom.onclick=function(){
    remote.dialog.showSaveDialog({

        title:'save file',
        defaultPath:"aaa.jpg",
        filters: [
            {name: 'Images', extensions: ['jpg', 'png', 'gif']},
            {name: 'Movies', extensions: ['mkv', 'avi', 'mp4']},
            {name: 'Custom File Type', extensions: ['as']},
            {name: 'All Files', extensions: ['*']}
        ]

    },function(path){ //返回保存路径
        console.log(path);
        // C:\Users\Administrator\Desktop\新建文件夹\js\aaa.jpg
        //保存以后会打印保存的路径  , 但是不会实现真的保存功能  （具体保存什么数据可以写在nodejs里面）
    })
}
