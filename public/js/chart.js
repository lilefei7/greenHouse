


function displayChart(chartId, chartNaem, color, title) {

    var dataLabels = ['1秒', '2秒', '3秒', '4秒', '5秒', '6秒', '7秒', '8秒', '9秒', '10秒'];
    var dataItem = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var config = {
        type: 'line',
        data: {
            labels: dataLabels,//x轴显示的数据
            datasets: [
                {
                    label: chartNaem,//表中的一项
                    data: dataItem,// 要显示的数据
                    backgroundColor: color,//图标的颜色
                    borderColor: color,//线条的颜色
                    fill: false,//线条下方是否充满颜色
                },
            ]
        },
        options: {
            responsive: false,//设置手动控制大小
            // responsive: true,
            title: {
                display: true,//是否显示图表的名称
                text: title//图标的名称
            },
        }
    };

    var ctx = document.getElementById(chartId).getContext('2d');
    var chart = new Chart(ctx, config);

    return function (dataNum) {
        if (config.data.datasets.length > 0) {

            var last = parseInt(dataLabels[dataLabels.length - 1]);
            var label = last + 1;
            label = label + '秒';

            dataLabels.push(label);
            dataItem.push(dataNum);//接收服务器的温度数据
            console.log(dataNum);

            dataLabels.shift();
            dataItem.shift();
            chart.update();//将存进去的数据显示在页面上
        }
    };
}


