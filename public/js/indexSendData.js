var sendData;
var data = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd",
    e: "ee",
    f: "ff",

};
function window_onload() {
    sendData = document.getElementById('sendData');

}
function sendData_onclick() {
    // console.log("按钮被点击了");

    socket = io.connect();//与服务器建立连接
    socket.on('connect', function () {

        data.a = randomNum(20, 40);
        data.b = randomNum(10, 100);
        data.c = randomNum(50, 100);
        data.d = randomNum(300, 700);

        socket.emit('sendDataToServer', data);
    });
    // alert("发送数据");
}
// sendData_onclick();
document.onkeydown = function (event) {
    let e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 13) { // 按Enter 
        sendData_onclick();
    }
};
//生成随机数据
function randomNum(minNum, maxNum) {

    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
}

function autoSendData() {
    setInterval(sendData_onclick,1000);
    
}