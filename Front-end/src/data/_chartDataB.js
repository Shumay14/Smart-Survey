export const userDataChartB = {



 

    series: [44, 55, 67, 83],
    chart: {
    height: 300,
    type: 'radialBar',
    
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '22px',
        },
        value: {
          fontSize: '16px',
        },
        total: {
          show: true,
          label: '나이별 참여인원',
          formatter: function (w) {
            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
            return 249
          }
        }
      }
    }
  },
  labels: ['20대', '30대', '40대', '50대']
}

export default userDataChartB;