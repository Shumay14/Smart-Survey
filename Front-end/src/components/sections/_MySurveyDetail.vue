<template>
    <div class="page-wrapper section-space--inner--120">
        <!--Contact section start-->
        <div class="conact-section">
            <div class="container">
                <div class="row">



                    <!-- 위젯 시작 -->
                    <b-card>
                        <!-- b-card-head 시작 -->
                        <div class="col-8 row mx-auto" style=" text-align: center;">
                            <div class="col-5">
                                <h4>
                                    현재 진행중인 설문조사</h4>
                            </div>
                            <div class="col-2">
                                <label class="switch-button">
                                    <input type="checkbox" v-model="surveyData" />
                                    <span class="onoff-switch">
                                    </span>
                                </label>
                            </div>
                            <div class="col-5">
                                <h4>
                                    완료된 설문조사</h4>
                            </div>
                        </div>
                        <!-- b-card-head 종료 -->


                        <table class="table survey-table-head table-hover" style=" text-align: center;">
                            <thead>
                                <tr>
                                    <th class="col-1">No</th>
                                    <th class="col-7">설문조사 명</th>
                                    <th class="col-2">참여 인원</th>
                                    <th class="col-2">마감 일자</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        1
                                    </td>
                                    <td>
                                        유튜브 시청자 패널 조사
                                    </td>
                                    <td>
                                        79 / 150
                                    </td>
                                    <td>
                                        2021-11-18
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        2
                                    </td>
                                    <td>
                                        컵라면 수요도 조사
                                    </td>
                                    <td>
                                        289 / 300
                                    </td>
                                    <td>
                                        2021-12-01
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        3
                                    </td>
                                    <td>
                                        배달 음식 플랫폼 설문 조사
                                    </td>
                                    <td>
                                        300 / 300
                                    </td>
                                    <td>
                                        2021-11-20
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                        <!-- 리워드 테이블 끝 -->
                        <!-- 페이지 네이션 -->
                        <div class="row section-space--top--60">
                            <div class="col">
                                <ul class="page-pagination">
                                    <li><a href="#"><i class="fa fa-angle-left"></i><i class="fa fa-angle-left"></i>
                                        </a></li>
                                    <li class="active"><a href="#">01</a></li>
                                    <li><a href="#">02</a></li>
                                    <li><a href="#">03</a></li>
                                    <li><a href="#"><i class="fa fa-angle-right"></i><i
                                                class="fa fa-angle-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <!-- 페이지 네이션 끝 -->
                    </b-card>
                    <!-- 위젯 종료 -->



                    <b-card class="my-2 mr-2 col-7">
                        <div class="contact-form">
                            <h4 class="pb-3">설문조사 데이터</h4>
                            <Chart />
                        </div>
                    </b-card>

                    <b-card class="my-2 col-4">

                        <div id="chart">
                            <apexchart type="radialBar" height="350" :options="data1.chartOptions1"
                                :series="data1.series1">
                            </apexchart>
                        </div>
                    </b-card>




                </div>

            </div>
        </div>
        <!--Contact section end-->
    </div>
</template>

<script>
    import data from '../../data/contact.json'
    import Chart from '@/components/sections/_Chart';

    export default {
        components: {
            Chart
        },
        data() {
            return {
                data,
                surveyData: false,
                selectSurvey: "",



                series1: [67],
                chartOptions1: {
                    chart: {
                        height: 350,
                        type: 'radialBar',
                        offsetY: -10
                    },
                    plotOptions: {
                        radialBar: {
                            startAngle: -135,
                            endAngle: 135,
                            dataLabels: {
                                name: {
                                    fontSize: '16px',
                                    color: undefined,
                                    offsetY: 120
                                },
                                value: {
                                    offsetY: 76,
                                    fontSize: '22px',
                                    color: undefined,
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
                    labels: ['Median Ratio'],



                },



            }
        },
        methods: {

        }
    };
</script>
<style scoped>
    .switch-button {
        position: relative;
        display: inline-block;
        width: 55px;
        height: 30px;
    }

    .switch-button input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .onoff-switch {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 20px;
        background-color: rgb(255, 166, 0);
        box-shadow: inset 1px 5px 1px rgb(207, 135, 0);
        -webkit-transition: 0.2s;
        transition: 0.2s;
    }

    .onoff-switch:before {
        position: absolute;
        content: "";
        height: 22px;
        width: 22px;
        left: 4px;
        bottom: 4px;
        background-color: #fff;
        -webkit-transition: 0.2s;
        transition: 0.2s;
        border-radius: 20px;
    }

    .switch-button input:checked+.onoff-switch {
        background-color: #f0542d;
        box-shadow: inset 1px 5px 1px #b44022;
    }

    .switch-button input:checked+.onoff-switch:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
</style>