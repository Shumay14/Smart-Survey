<template>
  <div>
    <div id="chart">

    </div>
  </div>
</template>
<script>
  import ApexCharts from 'apexcharts'
  import userDataChart from "../../data/_chartData.js"
  export default {
    data() {
      return {
        userDataChart: userDataChart,
      }
    },
    mounted() {
      // this.createChart("userChart", this.userDataChart);
      var chart = new ApexCharts(document.querySelector("#chart"), this.userDataChart);
      chart.render();
    },
  };
</script>