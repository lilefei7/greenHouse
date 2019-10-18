var http = require('http');
var express = require('express');
var sio = require('socket.io');
var app = express();
app.use(express.static(__dirname + ''));
var server = http.createServer(app);
server.listen(80);
var io = sio.listen(server);
io.sockets.on('connection', function (socket) {
    //这个回调函数包含着服务器的所有内容，所有的事件都是建立在联接的基础上的
    socket.on("sendDataToServer",function (data) {
        console.log("收到了数据");
        io.sockets.emit('sendDataToClient', data);
        console.log("收到了数据并进行了广播");
        
    });
});