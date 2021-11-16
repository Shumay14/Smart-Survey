<template>
  <div>
    <div v-for="(project, num) in data.projectGrid" :key="num">
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
      <!-- </div> -->
      <!-- <SurveyGrid v-else-if="num < finish" :project="project" /> -->
      <!-- <button @click="CheckVcCategory(project.category, project.vp)">
        aaaaaaaaaaaaaaa
      </button> -->
      <!-- <SurveyGrid v-if="" :project="project" /> -->
    </div>
    <!-- End strip_list-->
    <a
      class="load_more_bt wow fadeIn"
      data-wow-delay="13.2s"
      @click="startplus()"
      style="margin-bottom: 1rem"
      >Load more...</a
    >
  </div>
</template>

<script>
import data from "../data/_survey.json";
import SurveyGrid from "./_SV_SurveyGrid_copy.vue";

export default {
  components: {
    SurveyGrid,
  },
  data() {
    return {
      data,
      finish: 6,
      number: 0,
    };
  },
  methods: {
    startplus() {
      this.finish += 6;
      if (this.finish > data.projectGrid.length)
        this.finish = data.projectGrid.length;
    },

    CheckVcCategory(cate, vcObj) {
      var flag = false;
      var vcObjlist = Object.entries(vcObj);
      var catelist = this.$store.state.cateSelect;
      var vclist = this.$store.state.vcSelect;

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
