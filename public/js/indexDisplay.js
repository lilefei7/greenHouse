var sendData;
var count = 0;
var dataNumTemperature;
function window_onload() {
    sendData = document.getElementById('sendData');

}
socket = io.connect();//与服务器建立连接
socket.on('connect', function () {

    dataTable = document.getElementById('dataTable');
    dataNumTemperatureDiaplay = displayChart('chartTemperature','Temperature', 'rgb(255, 99, 132)','温度(℃)');
    dataNumHumidityDiaplay = displayChart('chartHumidity','humidity', 'rgb(100, 99, 132)','湿度(%RH)');
    dataNumIlluminationDiaplay = displayChart('chartIllumination','illumination', 'rgb(100, 255, 132)','光照强度(klux)');
    dataNumCarbonDioxideDiaplay = displayChart('chartCarbonDioxide','CarbonDioxide', 'rgb(100, 99, 240)','二氧化碳浓度数据(ppm)');
    //创建温度图表的信息
    socket.on('sendDataToClient', function (data) {//接收服务器传来的数据，更新数据表
        //每一个客户端的socket.on都会检测服务器触发的事件，
        count += 1;//收到一次数据计数器加一
        // console.log(data);
        var str = '';
        str += "<tr>";
        str += "<th scope='row'>" + count + "</th>";
        for (let key in data) {//循环遍历数据
            str += "<td>" + data[key] + "</td>";
        }
        dataNumTemperature = data.a;
        dataNumHumidity = data.b;
        dataNumIllumination = data.c;
        dataNumCarbonDioxide = data.d;
        dataNumTemperatureDiaplay(dataNumTemperature);
        dataNumHumidityDiaplay(dataNumHumidity);
        dataNumIlluminationDiaplay(dataNumIllumination);
        dataNumCarbonDioxideDiaplay(dataNumCarbonDioxide);
        //更新温度图标
        // console.log(dataNumTemperature);
        
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