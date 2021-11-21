<template>
  <div>
    <div id="chartA">
    </div>
  </div>
</template>
<script>
  import ApexCharts from 'apexcharts'
  import userDataChartA from "@/data/_chartDataA.js"
  export default {
    components: {
       apexchart: ApexCharts,
        },
    data() {
      return {
        userDataChartA: userDataChartA,
      }
    },
    mounted() {
      // this.createChart("userChart", this.userDataChart);
      var chart = new ApexCharts(document.querySelector("#chartA"), this.userDataChartA);
      chart.render();
    },
  };
</script>