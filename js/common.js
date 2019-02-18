//封装获取元素
function $(id) {
    var ele;
    ele = document.getElementById(id);
    return ele;
}

//封装创建xhr
function createXhr() {
    var xhr = null;

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft XMLHttp');
    }

    return xhr;
}






