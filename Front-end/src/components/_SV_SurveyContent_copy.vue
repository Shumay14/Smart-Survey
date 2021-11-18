<template>
  <div>
    <div v-for="(project, num) in showUpList" :key="num">
      <!-- <div
        v-if="CheckVcCategory(project.category, project.vp)"
        :project="project"
      > -->
      <transition name="slide-fade">
        <SurveyGrid
          v-if="CheckVcCategory(project.category, project.vp)"
          :project="project"
        />
      </transition>
    </div>
    <!-- End strip_list-->
    <a
      class="load_more_bt wow fadeIn"
      data-wow-delay="13.2s"
      @click="addSurveyList()"
      style="margin-bottom: 1rem"
      >Load more...</a
    >
  </div>
</template>

<script>
import SurveyGrid from "./_SV_SurveyGrid_copy.vue";

export default {
  components: {
    SurveyGrid,
  },

  data() {
    return {
      surveyData: [],
      showUpList: [],
      showUpIdx: 0,
    };
  },

  async mounted() {
    console.log("Asdf");
    this.surveyData = await this.$api(
      "get",
      "http://127.0.0.1:3000/api/survey"
    );
    this.addSurveyList();
  },

  methods: {
    addSurveyList() {
      let cnt = 0;

      while (this.surveyData.length != this.showUpIdx) {
        var item = this.surveyData[this.showUpIdx]; // 설문지 리스트에서 인덱스로 가져온 '설문JSON'

        if (cnt == 7) break;
        this.showUpList.push(item);
        this.showUpIdx++;
        cnt++;
        console.log(item, " added");
      }
    },

    CheckVcCategory(cate, vcObj) {
      var flag = false;
      var vcObjlist = Object.entries(vcObj);

      var catelist = this.$store.state.categorylist;
      var vclist = this.$store.state.vsgradelist;

      if (vclist.length == 0 && catelist.length == 0) {
        flag = true;
      } else if (vclist.length == 0) {
        if (catelist.indexOf(cate) >= 0) {
          flag = true;
        }
      } else if (catelist.length == 0) {
        for (var i = 0; i < vcObjlist.length; i++) {
          if (vclist.indexOf(vcObjlist[i][0]) >= 0) {
            flag = true;
          }
        }
      } else {
        for (var i = 0; i < vcObjlist.length; i++) {
          if (
            vclist.indexOf(vcObjlist[i][0]) >= 0 &&
            catelist.indexOf(cate) >= 0
          ) {
            flag = true;
          }
        }
      }
      return flag;
    },
    asdf() {
      console.log(
        this.$store.state.kor_category[
          this.$store.state.eng_category.indexOf(this.surveyData[0].category)
        ]
      );
    },
  },
};
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
