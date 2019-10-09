var sendData;
var count = 0;
function window_onload() {
    sendData = document.getElementById('sendData');

}
socket = io.connect();//与服务器建立连接
socket.on('connect', function () {
    dataTable = document.getElementById('dataTable');
    socket.on('sendDataToClient', function (data) {//接收服务器传来的数据，更新数据表
        //每一个客户端的socket.on都会检测服务器触发的事件，
        count += 1;//收到一次数据计数器加一
        console.log(data);
        var str = '';
        str += "<tr>";
        str += "<th scope='row'>" + count + "</th>";
        for (let key in data) {//循环遍历数据
            str += "<td>" + data[key] + "</td>";
        }
        str += "</tr>";
        $("#dataTable").append(str);
        var dataTableTbody = document.getElementById("dataTableTbody"),
            trs = dataTableTbody.getElementsByTagName("tr");
            if(trs.length > 10){
                dataTableTbody.deleteRow(0);
            }

        // for (var i = trs.length - 1; i > 0; i--) {
        //     dataTableTbody.deleteRow(i);
        // }
});
});