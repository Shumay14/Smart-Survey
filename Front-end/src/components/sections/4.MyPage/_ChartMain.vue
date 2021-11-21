<template>
    <div id="chart5">

    </div>
</template>
<script>
    import ApexCharts from 'apexcharts'

    export default {
        name: '',
        components: {},
        data() {
            return {
                options: {
                    series: [{
                        name: '선택 1번',
                        data: [44, 55, 41, 37, 22, 43, 21, 1, 1, 1],
                    }, {
                        name: '선택 2번',
                        data: [53, 32, 33, 52, 13, 43, 32, 1, 2, 2]
                    }, {
                        name: '선택 3번',
                        data: [12, 17, 11, 9, 15, 11, 20, 1, 3, 4]
                    }, {
                        name: '선택 4번',
                        data: [9, 7, 5, 8, 6, 9, 4, 1, 5, 5]
                    }, {
                        name: '선택 5번',
                        data: [25, 12, 19, 32, 25, 24, 10, 1, 5, 5]
                    }],
                    chart: {
                        type: 'bar',
                          height: 500,
                        stacked: true,
                        stackType: '100%'
                    },
                    plotOptions: {
                        bar: {
                            horizontal: true,
                        },
                    },
                    stroke: {
                        width: 1,
                        colors: ['#fff']
                    },
                    title: {
                        text: '유튜브 시청자 패널 조사'
                    },
                    xaxis: {
                        categories: ["1번", "2번", "3번", "4번", "5번", "6번", "7번", "8번", "9번", "10번"],
                    },
                     colors: ['#ffbd0d', '#e8960c', '#ff7f00', '#e8a0c', '#ff3f0d'],
                    tooltip: {
                        y: {
                            formatter: function (val) {
                                return val + "명"
                            }
                        }
                    },
                    fill: {
                        opacity: 1,
                        colors: ['#ffbd0d', '#e8960c', '#ff7f00', '#e85a0c', '#ff3f0d']

                    },
                    legend: {
                        position: 'top',
                        horizontalAlign: 'left',
                        offsetX: 40
                    }
                }
            }
        },
        created() {},
        mounted() {
            var chart = new ApexCharts(document.querySelector("#chart5"), this.options);
            chart.render();
        },
        updated() {},
        unmounted() {},
        methods: {}
    }
</script>
<style>
    .red {
        background: #f8ae71;
    }
</style>