export const surveyData = {
    type: "line",
    data: {
        labels: ['4월', '5월', "6월", "7월", "8월", "9월", "10월", "11월"],
        datasets: [
            {
                // 첫 번째 데이터 셋
                label: "획득한 리워드",
                data: [0, 0, 1, 2, 24, 12, 27, 14],
                backgroundColor: [
                    "rgba(255, 178, 119, 0.5)",
                    
                ],
                borderColor: [
                    "#F38024",
                    
                ],
                borderWidth: 3
            },{
                label: "작성한 설문조사",
                data: [4.8, 12.1, 12.7, 6.7, 139.8, 116.4, 50.7, 49.2],
                backgroundColor: [
                    "rgba(226, 37, 0, 0.5",
                ],
                borderColor: [
                    "#e22500",
                ],
                borderWidth: 3
            }
        ]
    },
    options: {
        responsive: true,
        lineTension: 1,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    padding: 25,
                }
            }]
        }
    }
}

export default surveyData;