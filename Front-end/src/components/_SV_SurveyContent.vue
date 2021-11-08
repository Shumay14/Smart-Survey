<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="project-item-wrapper">
        <div class="row">
          <div
            class="col-lg-4 col-sm-6 col-12 section-space--bottom--30"
            v-for="project in data.projectGrid"
            :key="project.id"
          >
            <SurveyGrid :project="project" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../data/project.json";
import SurveyGrid from "../components/_SV_SurveyGrid";

export default {
  components: {
    SurveyGrid,
  },
  data() {
    return {
      data,
      userVC: [
        {
          test: "",
          test2: "",
          test3: "",
        },
      ],
      items: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Project",
          active: true,
        },
      ],
    };
  },
};
</script>
