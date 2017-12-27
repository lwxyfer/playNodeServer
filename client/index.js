/**
 * 1. 同一个连接， 多次 send ？ 这个有什么问题？
 * 2. setRequestHeader  可以自定义值？ 不是固定类型？  可以测试下？ 包括后端这部分。
 *    后端接受类型。。。
 * 3. 不同情况， 后端也需要做相对调整。
 * 4. 后端如何处理 Formdata 格式
 * 5. 默认的 content-type
 */

function $(id) {
  return document.querySelector('#' + id)
}

var img = $('img')
var imgURL;
var pre = $('preview')

img.onchange = function (e) {
  if (e.target.files) {
    var file = e.target.files[0]
    console.log(file)
    imgURL = URL.createObjectURL(file)
    console.log(imgURL)

    pre.src = imgURL


    var reader = new FileReader();

    reader.addEventListener("load", function () {
      console.log('qq', reader.result);
    }, false);

    if (file) {
      // reader.readAsDataURL(file);
      reader.readAsArrayBuffer(file);
    }
  }
}



var data = new FormData();
data.append('name', $('name').value)
data.append('password', $('password').value)


function AJAX(data) {
  function reqListener() {
    console.log(this.responseText);
  }

  function handler() {
    console.log(oReq.readyState, oReq.status)
  }

  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("POST", "http://127.0.0.1:9527", true);

  oReq.setRequestHeader('Content-Type', 'application/json');
  // oReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  oReq.setRequestHeader('Cache-Control', 'no-cache');
  oReq.setRequestHeader('Time', '123456678');

  oReq.addEventListener('load', function () {
    console.log('fuck')
  })

  oReq.onreadystatechange = handler

  oReq.send(JSON.stringify({
    "name": "daf",
    "password": "22222"
  }));

  // var a = new FormData();

  // a.append('name', '111')
  // a.append('ps', '222')

  // oReq.send()

}


$('send').onclick = function () {
  console.log('send')
  AJAX(data)
}
