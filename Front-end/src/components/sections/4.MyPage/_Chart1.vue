<template>
  <div id="chartB">
    <h4>
    나이대 분류
  </h4>
   
  </div>
</template>
<script>
  import ApexCharts from 'apexcharts'
  import userDataChartB from "@/data/_chartDataB.js"

  export default {
  
    data() {
      return {
        userDataChartB: userDataChartB,
      }
    },
    mounted() {
      // this.createChart("userChart", this.userDataChart);
      var chart = new ApexCharts(document.querySelector("#chartB"), this.userDataChartB);
      chart.render();
    },
  };
</script>