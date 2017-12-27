/**
 * Node 设置 content-type
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,  Cache-Control, Time");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header('Access-Control-Allow-Credentials', 'true');  // 允许服务器端发送Cookie数据

  // 加快预检请求
  if (req.method == 'OPTIONS') {
    res.send(200); 
  }
  else {
    next();
  }
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', function (req, res) {
  // console.log(req.body)
  res.send('Hello World!');
});

app.post('/', function (req, res) {
  console.log(req.body);
  console.log(req.headers);
  console.log('Time', req.get('Time'))

  res.send('Got a POST request');
});


app.listen(9527, function () {
  console.log('Example app listening on port 9527!');
});
