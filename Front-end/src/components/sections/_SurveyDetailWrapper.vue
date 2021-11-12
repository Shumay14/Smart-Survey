<template>
  <!-- Content ================================================== -->
  <div class="container margin_60_35">
    <div class="row">
      <div class="col-lg-4">
        <SurveySidebar :blogSidebar="data.blogSidebarData" />
      </div>
      <!--End col-md -->

      <div class="col-lg-8">
        <SurveyContent />

        <!-- End strip_list-->
        <a href="#0" class="load_more_bt wow fadeIn" data-wow-delay="3.2s"
          >Load more...</a
        >
      </div>
      <!-- End col-md-9-->
    </div>
    <!-- End row -->
  </div>
  <!-- End container -->
  <!-- End Content =============================================== -->
</template>
<script>
// 왼쪽  --> 검색, 카테고리, 인기있는 설문, 제공할 정보 목록 json
import data from "../../data/blog.json";
import SurveySidebar from "@/components/sections/_SurveySidebar";
import SurveyContent from "../_SV_SurveyContent_copy.vue";

export default {
  name: "",
  components: {
    SurveySidebar,
    SurveyContent,
  },
  data() {
    return {
      data,
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
<style scoped>
@import "../../assets/css/list_page/list_page.css";
</style>
