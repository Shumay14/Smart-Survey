export const userDataChart = {
    series: [{
        name: '응답한 설문조사',
        type: 'column',
        data: [1, 10, 3, 4, 5, 6]
    }, {
        name: '획득한 리워드',
        type: 'line',
        data: [1, 3, 2, 3, 4, 1]
    }],
    chart: {
        height: 350,
        type: 'line',
    },
    stroke: {
        width: [1, 4]
    },
    dropShadow: {
        enabled: true,
        top: 0,
        left: 0,
        blur: 3,
        opacity: 0.5
      },
    // title: {
    //     text: 'Traffic Sources'
    // },
    colors: ['#F38024', '#f0542d', '#f0542d'],
    dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
        
    },
    labels: ['6월', '7월', '8월', '9월', '10월', '11월'],
    xaxis: {
        type: 'month'
    },
    yaxis: [{
        title: {
            text: '응답한 설문조사',
        },

    }, {
        opposite: true,
        title: {
            text: '리워드 내역'
        }
    }]
};

export default userDataChart;