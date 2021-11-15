<template>
  <!--====================  service grid slider area ====================-->
  <div class="service-grid-slider-area section-space--inner--50">
    <div class="container">
      <h3><i class="fas fa-bell fa-xs"></i> 추천 설문 목록</h3>
      <div class="row">
        <div class="col-lg-12">
          <div class="service-slider">
            <!-- -->
            <div class="swiper-container service-slider__container">
              <div class="swiper-wrapper service-slider__wrapper">
                <swiper :options="swiperOption">
                  <div
                    class="swiper-slide"
                    v-for="service in data.serviceOne.serviceList"
                    :key="service.id"
                  >
                    <ServiceItem :service="service" />
                  </div>
                </swiper>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--====================  End of service grid slider area  ====================-->
</template>

<script>
import ServiceItem from "@/components/ServiceItem.vue";
import data from "../../data/service.json";
export default {
  components: {
    ServiceItem,
  },
  data() {
    return {
      data,
      swiperOption: {
        loop: true,
        speed: 1000,
        watchSlidesVisibility: true,
        spaceBetween: 30,
        // Responsive breakpoints
        breakpoints: {
          1200: {
            slidesPerView: 3,
          },

          768: {
            slidesPerView: 2,
          },

          575: {
            slidesPerView: 1,
          },
        },
      },
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>
<style scoped>
.swiper-button-next,
.swiper-button-prev {
  color: white;
}
</style>
