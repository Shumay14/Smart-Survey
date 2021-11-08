<template>
    <div class="page-wrapper section-space--inner--120">
        <!--Projects section start-->
        <div class="project-section">
            <div class="container">
                <div class="row">

                    <!-- <div class="col-12 section-space--bottom--40">
                        <div class="project-image"><img :src="data.projectDetails.projectDetailsImage" class="img-fluid" alt="image"></div>
                    </div> -->

                    <!-- 관심사 설정 설명 시작-->
                    <div class="col-lg-8 col-12 section-space--bottom--30 pl-30 pl-sm-15 pl-xs-15">
                        <div class="project-details mb-3">
                            <h2 class="pb-2">관심사 설정</h2>
                            <p>관심사 설정이란 자신에게 맞는 설문조사를 추천해주는 맞춤설정을 할 수 있는 서비스입니다. 하단에 항목을 선택하면 설문조사를 추천할 때 우선으로 띄워줍니다.
                            </p>
                        </div>
                    </div>
                    <!-- 관심사 설정 설명 끝-->

                    <!-- 관심사 목록 시작 -->
                    <div class="col-lg-4 col-12 section-space--bottom--30">
                        <div class="project-information">
                            <h3>관심사 목록</h3>
                            <button type="button" class="favorite_Selected btn btn-outline-light mx-1 my-1">X
                                자동차asdasd</button>

                        </div>
                    </div>
                    <!-- 관심사 목록 끝 -->



                    <div class="col-12">
                        <div class="row row-5 image-popup">
                            <div class="col-xl-2 col-lg-3 col-sm-4 col-6 section-space--top--10"
                                v-for="favoriteItem in favoriteList" :key="favoriteItem">
                                <router-link to="/project-details" class="gallery-item single-gallery-thumb">
                                    <img :src="favoriteItem.img" class="img-fluid" alt="thumbnail">
                                    <span >{{favoriteItem.name}}</span>
                                    <span class="plus"></span>
                                </router-link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
        <!--Projects section end-->
    </div>
</template>

<script>
    import favoriteList from '../../data/favoriteList.json'
    export default {
        data() {
            return {
                favoriteList
            }
        }
    };
</script>
<style lang="scss">
    .favorite_Selected {
        border-radius: 30px !important;
        display: inline;
    }

    .overlayName {
        // position: absolute;
        // display: block;
        // background-color: rgba(0, 0, 0, 0.575);
        // color: white;
        position: absolute;
        
        top: 0px;
        left: 0px;

        width: 100%;
        height: 100%;

        // box-sizing: border-box;
        // -moz-box-sizing: border-box; /* 파이어폭스(Firefox)*/
        // -webkit-box-sizing: border-box;
        background-color: RGBA(0,0,0,0.5);

        box-sizing: content-box;
        -moz-box-sizing: content-box; /* 파이어폭스(Firefox)*/
        -webkit-box-sizing: content-box;


    }
</style>