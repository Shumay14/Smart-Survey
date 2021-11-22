<template>
    <div class="page-wrapper section-space--inner--120">
        <!--Contact section start-->
        <div class="conact-section">
            <div class="container">
                <div class="row">

                    <div class="col-12 row mx-auto test">

                        <b-card class="mr-2 col-4 text-center ">

                            <h4>
                                설문 기간
                            </h4>
                            <button @click="createChartA()">차트생성</button>

                            <div>
                                2021.11.01 ~ 2021.11.31
                            </div>
                        </b-card>

                        <b-card class="mr-2 col text-center">
                            <h4>
                                요구 정보
                            </h4>
                            <div>
                                <button type="button" class="favorite_Selected btn btn-outline-dark mx-1 my-1"
                                    @click="viewData('gender')">
                                    성별
                                </button>
                                <button type="button" class="favorite_Selected btn btn-outline-dark mx-1 my-1"
                                    @click="viewData('age')">
                                    나이
                                </button>
                                <button type="button" class="favorite_Selected btn btn-outline-dark mx-1 my-1"
                                    @click="viewData('edu')">
                                    학력
                                </button>
                                <button type="button" class="favorite_Selected btn btn-outline-dark mx-1 my-1"
                                    @click="viewData('income')">
                                    연봉
                                </button>


                            </div>
                        </b-card>

                        <b-card class="mr-2 col-2 text-center">
                            <h4>
                                보상금액
                            </h4>
                            <div>
                                3 SUB
                            </div>
                        </b-card>

                        <b-card class="col-2 text-center">
                            <h4>
                                참여인원
                            </h4>
                            <div>
                                150명
                            </div>
                        </b-card>


                    </div>

                    <b-card class="my-2 col mr-2">
                        <!-- <div class="contact-form">
                            <h4 class="pb-3">설문조사 데이터</h4>


                            <ChartMain />
        
                        </div> -->
                        <ChartMain />
                    </b-card>

                    <div class="my-2 col-4 g-0 test">
                        <b-card class="mb-2 ">
                            <div id="chartA">
                            </div>
                        </b-card>
                        <b-card>
                            <div id="chartB">
                            </div>
                        </b-card>

                    </div>


                    <!-- 위젯 시작 -->
                    <b-card>
                        <!-- b-card-head 시작 -->
                        <div class="col-8 row mx-auto mb-3" style=" text-align: center;">
                            <div class="col-6">
                                <button class="btn-start">
                                    현재 진행중인 설문조사</button>
                            </div>

                            <div class="col-6">
                                <button class="btn-start">
                                    완료된 설문조사</button>
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
                            <tbody v-for="(val1, num1) in surveyData.projectGrid" :key="num1">
                                <tr>
                                    <td>
                                        {{num1}}
                                    </td>
                                    <td>
                                        {{val1.title}}
                                    </td>
                                    <td>
                                        79 / 150
                                    </td>
                                    <td>
                                        {{val1.edate}}
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






                </div>

            </div>
        </div>
        <!--Contact section end-->
    </div>
</template>

<script>
    import data from '@/data/contact.json'
    // import ChartAge from '@/components/sections/4.MyPage/_ChartAge';
    // import ChartEdu from '@/components/sections/4.MyPage/_ChartEdu';
    import ChartMain from '@/components/sections/4.MyPage/_ChartMain';
    import surveyData from '@/data/_surveyMock.json';
    import ApexCharts from 'apexcharts'


    export default {
        components: {
            // ChartAge,
            // ChartEdu,
            ChartMain,
        },
        data() {
            return {
                data,
                surveyData: false,
                selectSurvey: "",
                selected: '1',
                surveyData,
                     // 차트데이터 A
                userDataChartA: {
                    series: [44, 55, 41, 17, 15],
                    chart: {
                        type: 'donut',
                    },
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }],
                    labels: ['20대', '30대', '40대', '50대']
                },
                // 차트데이터 B
                userDataChartB: {
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
                },
           

            }
        },


        methods: {
            viewData(i) {
                console.log(i)
                this.testData = i
            },
            createChartA() {
                var chart = new ApexCharts(document.querySelector("#chartA"), this.userDataChartA);
                chart.render();
                // 테스트용으로 넣은
                var chart = new ApexCharts(document.querySelector("#chartB"), this.userDataChartB);
                chart.render();
            },
            createChartB() {
                var chart = new ApexCharts(document.querySelector("#chartB"), this.userDataChartB);
                chart.render();
            }

        }
    };
</script>
<style lang="scss" scoped>
    .btn {
        &-start {
            background-color: RGB(238, 111, 0);

            border-radius: 10px;
            border: 0px;

            color: white;
            font-weight: bold;
            font-size: 20px;

            width: 300px;
            height: 60px;
        }

        &-start:hover {
            background-color: white;

            border-radius: 10px;
            border: 2px solid RGB(238, 111, 0);
            // box-shadow:5px 5px RGB(238, 111, 0);

            color: RGB(238, 111, 0);
            font-weight: bold;
            font-size: 20px;

            width: 300px;
            height: 60px;
        }
    }



    .text-center {
        text-align: center;
    }

    .test {
        padding: 0px;
        margin: 0px;
    }

    .favorite_Selected {
        border-radius: 30px !important;
        display: inline;
        font-size: 0.5em;
    }
</style>