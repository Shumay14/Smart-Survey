<template>
    <!--====================  project slider area ====================-->
    <div class="project-slider-area grey-bg section-space--inner--120">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <!-- section title -->
                    <div class="section-title-area text-center">
                        <h2 class="section-title section-space--bottom--50">{{ data.sectionTitleOne }}<span class="title-icon"></span></h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="latest-project-slider">
                        <div class="latest-project-slider__container-area">
                            <div class="swiper-container latest-project-slider__container">
                                <div class="swiper-wrapper latest-project-slider__wrapper">
                                    <swiper :options="swiperOption">
                                        <div class="swiper-slide latest-project-slider__single-slide" v-for="project in data.projectSlider" :key="project.id">
                                            <div class="row row-30 align-items-center">
                                                <div class="col-lg-6">
                                                    <div class="image">
                                                        <img :src="project.image" class="img-fluid" alt="thumbnail">
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="content">
                                                        <h3 class="count">{{ project.count }}</h3>
                                                        <h2 class="title">{{ project.title }}</h2>
                                                        <p class="desc">{{ project.desc }}</p>
                                                        <router-link to="/project-details" class="see-more-link see-more-link--color">VIEW MORE</router-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </swiper>
                                </div>
                            </div>
                            <div class="ht-swiper-button-prev ht-swiper-button-prev-16 ht-swiper-button-nav d-none d-lg-block"><i class="ion-ios-arrow-left"></i></div>
                            <div class="ht-swiper-button-next ht-swiper-button-next-16 ht-swiper-button-nav d-none d-lg-block"><i class="ion-ios-arrow-forward"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--====================  End of project slider area  ====================-->
</template>

<script>
    import data from '../../data/project.json'
    export default {
        data () {
            return {
                data,
                swiperOption: {
                    speed: 1500,
                    loop: true,
                    autoplay: false,
                    slidesPerView: 1,
                    spaceBetween : 30,
                    navigation: {
                        nextEl: '.ht-swiper-button-next',
                        prevEl: '.ht-swiper-button-prev'
                    },
                }
            }
        }
    };
</script>

<style lang="scss">

</style>