export const userDataChartC = {

  series: [67],
          chart: {
          height: 150,
          type: 'radialBar',
          offsetY: -10,
          color: "#f0542d",
        },
        plotOptions: {
          radialBar: {
          
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
          
              name: {
                fontSize: '16px',
                color: "black",
                offsetY: 120
              },
              value: {
                offsetY: 76,
                fontSize: '22px',
                color: "#f0542d",
                formatter: function (val) {
                  return val + "%";
                }
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
              shade: 'dark',
              shadeIntensity: 0.15,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 65, 91]
          },
        },
        stroke: {
          dashArray: 4
        },
        labels: ['참여 인원']}

export default userDataChartC;