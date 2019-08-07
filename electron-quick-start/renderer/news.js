
var {ipcRenderer} = require('electron')
//获取localStorage的数据
/*var aid = localStorage.getItem('aid')
console.log("news::" + aid)*/

ipcRenderer.on('tonews',function (event, aid) {
    console.log(aid)
})


