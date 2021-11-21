<template>
    <div class="page-wrapper section-space--inner--120">
        <!--Contact section start-->
        <div class="conact-section">
            <div class="container">
                <div class="row">

                    <b-card class="my-2 col">
                        <div class="contact-form">
                            <h4 class="pb-3">설문조사 데이터</h4>
                            <Chart />
                        </div>
                    </b-card>

                    <div class="my-2 col-4 g-0">
                        <b-card class="mb-2">
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

    export default {
        components: {
            Chart,
            Chart1,
            Chart2
        },
        data() {
            return {
                data,
                surveyData: false,
                selectSurvey: "",


            }
        },

        methods: {

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
</style>