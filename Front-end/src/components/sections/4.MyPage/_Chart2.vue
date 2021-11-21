<template>
  <div id="chartC">
    <h4>
    참여도
  </h4>
   
  </div>
</template>
<script>
  import ApexCharts from 'apexcharts'
  import userDataChartC from "@/data/_chartDataC.js"

  export default {
  
    data() {
      return {
        userDataChartC: userDataChartC,
      }
    },
    mounted() {
      // this.createChart("userChart", this.userDataChart);
      var chart = new ApexCharts(document.querySelector("#chartC"), this.userDataChartC);
      chart.render();
    },
  };
</script>