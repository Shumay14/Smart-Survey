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
                    v-for="(service, num) in data.serviceOne.serviceList"
                    :key="num"
                  >
                    <ServiceItem
                      :service="service"
                      :imagename="imagefile[num]"
                      :interestlist="interestData[num]"
                    />
                  </div>
                </swiper>
                <!-- <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div> -->
              </div>
            </div>
            <!-- <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--====================  End of service grid slider area  ====================-->
</template>

<script>
import ServiceItem from "@/components/sections/1.SurveySearch/_ServiceItem.vue";
import data from "@/data/service.json";
export default {
  components: {
    ServiceItem,
  },
  async mounted() {
    this.interestData = (
      await this.$api(
        "get",
        `http://127.0.0.1:3000/api/interest/` + this.$store.state.metamaskAdd
      )
    ).map(function (obj) {
      return JSON.parse(obj.interests);
    })[0];

    console.log(
      this.$store.state.metamaskAdd + " 관심사 목록 : " + this.interestData
    );
  },
  data() {
    return {
      data,
      imagefile: [
        "travel.png",
        "car.png",
        "music.png",
        "food.png",
        "electronic_products.png",
      ],
      interestData: [],
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
        speed: 300,
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
          delay: 3700,
        },
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
/* .swiper-button-next {
  margin-top: 4rem;
  background: url("../../../src/assets/img/right.png") no-repeat;
  background-size: 50% auto;
  background-position: center;
}

.swiper-button-prev {
  margin-top: 4rem;
  background: url("../../../src/assets/img/left.png") no-repeat;
  background-size: 50% auto;
  background-position: center;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  display: none;
} */
.swiper-button-next,
.swiper-button-prev {
  color: black;
}
.swiper-button-next:hover,
.swiper-button-prev:hover {
  color: #ff7f00;
}
</style>
