<template>
    <div class="page-wrapper section-space--inner--120">
        <!--Contact section start-->
        <div class="conact-section">
            <div class="container">
                <div class="row">
                                {{testData}}

                    <div class="col-12 row mx-auto test">

                        <b-card class="mr-2 col-4 text-center ">
                             
                                <h4>
                                    설문 기간
                                </h4>
                             
                                <div >
                                    2021.11.01 ~ 2021.11.31
                                </div>
                        </b-card>

                        <b-card class="mr-2 col text-center">
                            <h4>
                                요구 정보
                            </h4>
                            <div>
                                <button type="button" class="favorite_Selected btn btn-outline-dark mx-1 my-1" @click="viewData('gender')">
                                    성별
                                </button>
                                <button type="button" class="favorite_Selected btn btn-outline-dark mx-1 my-1" @click="viewData('age')">
                                    나이
                                </button>
                                <button type="button" class="favorite_Selected btn btn-outline-dark mx-1 my-1" @click="viewData('edu')">
                                    학력
                                </button>
                                <button type="button" class="favorite_Selected btn btn-outline-dark mx-1 my-1" @click="viewData('income')">
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
                            <Chart2 />
                        </b-card>
                        <b-card>
                            <Chart1 />
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
    import Chart from '@/components/sections/4.MyPage/_Chart';
    import Chart1 from '@/components/sections/4.MyPage/_Chart1';
    import Chart2 from '@/components/sections/4.MyPage/_Chart2';
    import ChartMain from '@/components/sections/4.MyPage/_ChartMain';
    import surveyData from '@/data/_surveyMock.json';

    export default {
        components: {
            Chart,
            Chart1,
            Chart2,
            ChartMain,
        },
        data() {
            return {
                data,
                surveyData: false,
                selectSurvey: "",
                selected: '1',
                surveyData,
                


            }
        },


        methods: {
            viewData(i) {
                console.log(i)
                this.testData = i 
            },
         
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