var {shell} = require('electron')

var openlink = document.querySelector("#openlink")

openlink.onclick = function (e) {
    //组织a标签的默认行为
    e.preventDefault()
    //shell模块 打开外部浏览器
    var href = this.getAttribute('href')
    shell.openExternal(href)
}
