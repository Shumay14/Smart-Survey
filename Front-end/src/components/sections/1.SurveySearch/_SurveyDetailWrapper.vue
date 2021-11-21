<template>
  <!-- Content ================================================== -->
  <div class="container margin_60_35">
    <div class="row">
      <div class="col-lg-4">
        <SurveySidebar
          :blogSidebar="data.blogSidebarData"
          :catedata="catedata.categorylist"
        />
      </div>
      <!--End col-md -->

      <div class="col-lg-8">
        <SurveyContent />
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
import data from "@/data/blog.json";
import catedata from "@/data/_favoriteList.json";
import SurveySidebar from "@/components/sections/1.SurveySearch/_SurveySidebar";
import SurveyContent from "@/components/sections/1.SurveySearch/_SV_SurveyContent_copy.vue";

export default {
  name: "",
  components: {
    SurveySidebar,
    SurveyContent,
  },
  data() {
    return {
      data,
      catedata,
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
@import "../../../assets/css/list_page/list_page.css";
</style>
