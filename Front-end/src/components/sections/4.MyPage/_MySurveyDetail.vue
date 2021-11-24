<template>
    <div class="page-wrapper section-space--inner--120">
        <!--Contact section start-->
        <div class="conact-section">
            <div class="container">
                <div class="row">
                    <div class="col-12 row mx-auto test">


                        <b-card class="mr-2 col-4 text-center">

                            <h4>
                                설문 기간
                            </h4>

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
                                    @click="viewData()" v-for="(num1,val1) in selectChartData.vp" :key="val1">
                                    {{val1}}
                                </button>


                            </div>
                        </b-card>

                        <b-card class="mr-2 col-2 text-center">
                            <h4>
                                보상금액
                            </h4>
                            <div>
                                3 ETH
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
                        <div id="chartMain">
                        </div>
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
                                <button class="btn-start" @click="surveyTable = true">
                                    현재 진행중인 설문조사</button>
                            </div>

                            <div class="col-6">
                                <button class="btn-start" @click="surveyTable = false">
                                    완료된 설문조사</button>
                            </div>
                        </div>
                        <!-- b-card-head 종료 -->

                        <!-- 현재 진행중인 설문조사 시작-->
                        <table class="table survey-table-head table-hover" style=" text-align: center;"
                            v-if="surveyTable == true">
                            <thead>
                                <tr>
                                    <th class="col-1">No</th>
                                    <th class="col-7">설문조사 명</th>
                                    <th class="col-2">참여 인원</th>
                                    <th class="col-2">마감 일자</th>

                                </tr>
                            </thead>
                            <tbody v-for="(val1, num1) in fillterSurveyDataNow" :key="num1">
                                <tr @click="changeChartData(val1)">
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
                        <!-- 현재 진행중인 설문조사 종료 -->

                        <!-- 마감된 설문조사 시작-->
                        <table class="table survey-table-head table-hover" style=" text-align: center;"
                            v-if="surveyTable == false">
                            <thead>
                                <tr>
                                    <th class="col-1">No</th>
                                    <th class="col-7">설문조사 명</th>
                                    <th class="col-2">참여 인원</th>
                                    <th class="col-2">마감 일자</th>

                                </tr>
                            </thead>
                            <tbody v-for="(val1, num1) in fillterSurveyDataPast" :key="num1">
                                <tr @click="changeChartData(val1)">
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
                        <!-- 마감된 진행중인 설문조사 종료 -->


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

    import ChartMain from '@/components/sections/4.MyPage/_ChartMain';
    import surveyData from '@/data/_surveyMock.json';
    import ApexCharts from 'apexcharts'


    export default {
        components: {

            ChartMain,
        },
        data() {
            return {
                viewChartDetail: false,
                today: null,
                data,
                selectSurvey: "",
                selected: '1',
                surveyData,
                surveyTable: true,


                fillterSurveyDataNow: [],
                fillterSurveyDataPast: [],

                // 선택된 차트의 데이터를 저장하는 데이터
                selectChartData: {
                    vp: null
                },


                chartMainOptions: {
                    series: [{
        "name": "선택 1번",
        "data": [100, 55, 41, 37, 22, 43, 21, 1, 1, 1]
      }, {
        "name": "선택 2번",
        "data": [100, 32, 33, 52, 13, 43, 32, 1, 2, 2]
      }, {
        "name": "선택 3번",
        "data": [100, 17, 11, 9, 15, 11, 20, 1, 3, 4]
      }, {
        "name": "선택 4번",
        "data": [100, 7, 5, 8, 6, 9, 4, 1, 5, 5]
      }, {
        "name": "선택 5번",
        "data": [100, 12, 19, 32, 25, 24, 10, 1, 5, 5]
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
                    colors: ['#ffbd0d', '#e8960c', '#ff7f00', '#e85a0c', '#ff3f0d'],
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
                },

                // --------------------------나이 차트 형식--------------------------
                userDataChartAge: {
                    series: [44, 55, 41, 17],
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
                    title: {
                        text: '나이별'
                    },
                    labels: ['20대', '30대', '40대', '50대']
                },
                // -------------------------성별 차트 형식--------------------------
                userDataChartGender: {

                    series: [44, 55],
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
                    title: {
                        text: '성별'
                    },
                    labels: ['남성', '여성'],
                    colors: ['#1b7eff', '#E91E63'],
                    fill: {
                        colors: ['#1b7eff', '#E91E63']
                    },
                    dataLabels: {
                        style: {
                            colors: ["#fff"]
                        },
                    },
                    markers: {
                        colors: ['#1b7eff', '#E91E63']
                    }
                },
                //  --------------------------학력별 차트 형식--------------------------
                userDataChartEdu: {

                    series: [44, 55, 17],
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
                    title: {
                        text: '학력'
                    },
                    labels: ['고졸', '대졸', '대졸 이상'],
                    colors: ['#ffbd0d', '#ff7f00', '#ff3f0d'],
                    fill: {
                        colors: ['#ffbd0d', '#ff7f00', '#ff3f0d']
                    },
                    dataLabels: {
                        style: {
                            colors: ["#fff"]
                        },
                    },
                    markers: {
                        colors: ['#ffbd0d', '#ff7f00', '#ff3f0d']
                    }
                },
                // --------------------------연봉별 차트 형식--------------------------
                userDataChartIncome: {
                    series: [44, 55, 17, 10],
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
                    title: {
                        text: '연봉별 (단위 : 만원)'
                    },
                    labels: ['~3000', '3000 ~ 5000', '5000 ~ 7000', '7000~'],
                    colors: ['#00ff6a', '#00a846', '#005021', '#003115'],
                    fill: {
                        colors: ['#00ff6a', '#00a846', '#005021', '#003115']
                    },
                    dataLabels: {
                        style: {
                            colors: ["#fff"]
                        },
                    },
                    markers: {
                        colors: ['#00ff6a', '#00a846', '#005021', '#003115']
                    }
                },
                // --------------------------차 소유 여부--------------------------
                userDataChartCarowner: {

                    series: [44, 55],
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
                    title: {
                        text: '차 소유 여부'
                    },
                    labels: ['소유 O', '소유 X'],
                    colors: ['#003644', '#007c9b'],
                    fill: {
                        colors: ['#003644', '#007c9b']
                    },
                    dataLabels: {
                        style: {
                            colors: ["#fff"]
                        },
                    },
                    markers: {
                        colors: ['#003644', '#007c9b']
                    }
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
        mounted() {
            // 오늘 날짜를 구했고
            let today = new Date();

            let year = today.getFullYear(); // 년도
            let month = today.getMonth() + 1; // 월
            let date = today.getDate(); // 날짜

            this.today = ((year - 2000) * 10000 + month * 100 + date)
            // console.log(this.today)

            // console.log(this.surveyData.projectGrid[0].edate)

            // 오늘 날짜 기준으로 설문지 정리
            for (var i = 0; i < this.surveyData.projectGrid.length; i++) {
                // console.log(this.surveyData.projectGrid[i].edate)
                // 마감이 아직 남은 경우
                if (this.surveyData.projectGrid[i].edate > this.today) {
                    this.fillterSurveyDataNow.push(this.surveyData.projectGrid[i]);
                    // console.log( this.fillterSurveyDataNow);
                } else {
                    // 마감이 끝난 경우
                    this.fillterSurveyDataPast.push(this.surveyData.projectGrid[i]);
                    // console.log( this.fillterSurveyDataPast);
                }
            }

                var chartMain = new ApexCharts(document.querySelector("#chartMain"), this.chartMainOptions);
                var chartA = new ApexCharts(document.querySelector("#chartA"), this.userDataChartAge);
                var chartB = new ApexCharts(document.querySelector("#chartB"), this.userDataChartGender);

                chartMain.render()
                chartA.render()
                chartB.render()
        },


        methods: {
            viewData(i) {
                console.log(i)
                this.testData = i
            },
            changeChartData(i) {
                this.viewChartDetail = true;
                this.selectChartData = i;

                // vp정보 (여러개)
                this.selectChartData.vp
                console.log("vp정보:", this.selectChartData.vp)

                // 참여인원
                this.selectChartData.participate.num;
                console.log("참여인원:", this.selectChartData.participate.num + "명")

                // 보상금액
                this.selectChartData.reward
                console.log("리워드:", this.selectChartData.reward + "ETH")


                // chartmain의 응답 데이터를 바꿔주는 역할
                this.chartMainOptions.series = this.selectChartData.series

                // 선택된 서베이데이터의 VP가 영어로 되어있기에 바꿔주는 역할
                // this.selectChartData.vp
                // for (var i = 0; i < this.selectChartData.vp.length; i++) {
                //     if (this.selectChartData.vp[i] > "gender") {

                //     } else {

                //     }
                // }

                this.createChartA()



            },
            createChartA() {
                var chartMain = new ApexCharts(document.querySelector("#chartMain"), this.chartMainOptions);
                var chartA = new ApexCharts(document.querySelector("#chartA"), this.userDataChartAge);
                var chartB = new ApexCharts(document.querySelector("#chartB"), this.userDataChartGender);

                chartMain.render()
                chartA.render()
                chartB.render()


                // chartA.render();
                // chartB.render();
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
            background-color: #ffffff;

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