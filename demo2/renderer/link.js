/**
* 连接
* */
var {shell}=require('electron')

var aDom=document.querySelector('#adom');


aDom.onclick=function(e){
    // 阻止a标签的默认行为
    e.preventDefault();
    var href=this.getAttribute('href');
    //sheel模块打开外部浏览器
    shell.openExternal(href)

}
