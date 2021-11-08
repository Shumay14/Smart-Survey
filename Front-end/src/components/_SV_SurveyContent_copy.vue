<template>
  <div>
    <div v-for="project in data.projectGrid" :key="project.id">
      <SurveyGrid :project="project" />
    </div>
  </div>
</template>

<script>
import data from "../data/project.json";
import SurveyGrid from "./_SV_SurveyGrid_copy.vue";

export default {
  components: {
    SurveyGrid,
  },
  data() {
    return {
      data,
    };
  },
};
</script>
