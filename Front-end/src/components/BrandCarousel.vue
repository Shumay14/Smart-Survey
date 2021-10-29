<template>
    <!--====================  brand logo area ====================-->
    <div class="brand-logo-slider-area section-space--inner--60" :class="addClass">
        <div class="container">
            <!-- brand logo slider -->
            <div class="brand-logo-slider__container-area">
                <div class="swiper-container brand-logo-slider__container">
                    <div class="swiper-wrapper brand-logo-slider__wrapper">
                        <swiper :options="swiperOption">
                            <div class="swiper-slide brand-logo-slider__single" v-for="item in data" :key="item.id">
                                <div class="image text-center">
                                    <a href="#">
                                        <img :src="item.brandlogo" class="img-fluid" alt="brand logo">
                                    </a>
                                </div>
                            </div>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--====================  End of brand logo area  ====================-->
</template>

<script>
    import data from '../data/brandlogo.json'
    export default {
        props: ['addClass'],
        data () {
            return {
                data,
                swiperOption: {
                    loop: true,
                    speed: 1000,
                    watchSlidesVisibility: true,
                    spaceBetween : 30,
                    autoplay: {
                        delay: 3000,
                    },
                    // Responsive breakpoints
                    breakpoints: {
                        1499:{
                            slidesPerView : 4
                        },

                        768:{
                            slidesPerView : 3

                        },

                        480:{
                            slidesPerView : 2
                        }
                    }
                }
            }
        }   
    };
</script>