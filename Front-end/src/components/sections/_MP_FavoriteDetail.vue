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
                            <h2>관심사 설정</h2>
                            <p>관심사 설정이란 자신에게 맞는 설문조사를 추천해주는 맞춤설정을 할 수 있는 서비스입니다. 하단에 항목을 선택하면 설문조사를 추천할 때 우선으로 띄워줍니다.
                            </p>
                        </div>
                    </div>
                    <!-- 관심사 설정 설명 끝-->

                    <!-- 관심사 목록 시작 -->
                    <div class="col-lg-4 col-12 section-space--bottom--30">
                        <div class="project-information">
                            <h3>관심사 목록</h3>
                            <button type="button" class="favorite_Selected btn btn-outline-light">X 자동차</button>
                        </div>
                    </div>
                    <!-- 관심사 목록 끝 -->



                    <div class="col-12">
                        <div class="row row-5 image-popup">
                            <div class="col-xl-2 col-lg-3 col-sm-4 col-6 section-space--top--10"
                                v-for="gallery in data.projectDetailsGallery" :key="gallery.id">
                                <router-link to="/project-details" class="gallery-item single-gallery-thumb">
                                    <img :src="gallery.image" class="img-fluid" alt="thumbnail">
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
    import data from '../../data/project.json'
    export default {
        data() {
            return {
                data
            }
        }
    };
</script>
<style lang="scss">
.favorite_Selected{
border-radius: 30px!important;
}
</style>