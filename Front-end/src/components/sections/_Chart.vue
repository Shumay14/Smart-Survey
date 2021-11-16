<template>
  <canvas id="userChart">
    
  </canvas>
</template>
<script>
  
  import userChartData from "../../data/_chartData.js"
  export default {
    data() {
      return {
        userChartData: userChartData,
      }
    },
   
    methods: {
      createChart(charId, chartData) {
        const ctx = document.getElementById(charId);
        const myChart = new Chart(ctx, {
          type: chartData.type,
          data: chartData.data,
          options: chartData.options
        });
      }
    },
     mounted() {
      this.createChart("userChart", this.userChartData)
    },
  };
</script>