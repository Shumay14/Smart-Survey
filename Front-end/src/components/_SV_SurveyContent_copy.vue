<template>
  <div>
    <div v-for="(project, num) in data.projectGrid" :key="num">
      <SurveyGrid v-if="num < finish" :project="project" />
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
    };
  },
  methods: {
    startplus() {
      this.finish += 6;
      if (this.finish > data.projectGrid.length)
        this.finish = data.projectGrid.length;
    },
  },
};
</script>
