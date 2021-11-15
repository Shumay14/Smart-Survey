<template>
  <div>
    <button
      class="strip_list wow fadeIn"
      data-wow-delay="0.1s"
      style="width: 100%; text-align: left"
      data-bs-toggle="modal"
      v-bind:data-bs-target="'#Modal' + project.id"
    >
      <!-- <div class="ribbon_1">Popular</div> -->
      <div class="row">
        <div class="col-md-9">
          <div class="desc">
            <div class="thumb_strip">
              <!-- <a href="detail_page.html"> -->
              <img
                :src="require('../../src/assets/img/' + `${project.img}`)"
                alt="thumbnail"
              />
              <!-- <img src="../../src/assets/img/cute.jpg" alt="" /> -->
              <!-- </a> -->
            </div>
            <h3 class="padtop">
              <!-- <router-link to="/project-details"> -->
              {{ project.title }}
              <!-- </router-link> -->
            </h3>
            <!-- <div class="type">Mexican / American</div> -->
            <div class="location margintop">
              보상지급액
              <span
                class="opening"
                style="font-size: 2em; margin-left: 0.5em; font-weight: bold"
              >
                {{ project.reward }}
              </span>
              <span
                class="opening"
                style="margin-left: 0.5em; font-weight: bold"
              >
                SUB</span
              >
              <span> = {{ project.reward * 1300 }}￦</span>
            </div>
          </div>
        </div>
        <hr
          class="line"
          style="
            border: solid 1px gray;
            position: absolute;
            width: 70%;
            margin-top: 6.5%;
            margin-left: 21%;
          "
        />
        <!-- JSON.stringify(project.edate).$diff(
              JSON.stringify(project.sdate),
              "day"
            ) -->
        <div class="col-md-3">
          <h3 class="padtop" style="color: #ff7f00; text-align: center">
            D - {{ this.ddaylist(project.sdate, project.edate) }}
          </h3>
          <!-- <button @click="ddaylist(project.sdate, project.edate)">test</button> -->
          <!-- <h5 class="padtop" style="color: red; text-align: center">
          21.03 - 21.06
        </h5> -->
          <div class="margintop" style="margin-left: 1rem">
            <a
              class="btn_1"
              @mouseover="btnHoverin()"
              @mouseout="btnHoverout()"
            >
              {{ btnname }}
            </a>
          </div>
        </div>
      </div>
      <!-- End row-->
      <!-- <ModalSelect /> -->
    </button>
    <ModalSelect :project="project" />
  </div>
  <!-- End strip_list-->
</template>

<script>
import dayjs from "dayjs";
import ModalSelect from "../components/sections/_ModalSelect.vue";

export default {
  props: ["project"],
  name: "",
  components: { ModalSelect },
  data() {
    return {
      btnname: "참여하기",
      allSelect: "#e8e8e8",
      clickSelect: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    btnHoverin() {
      this.btnname = "1/250";
    },
    btnHoverout() {
      this.btnname = "참여하기";
    },
    ddaylist(a, b) {
      // Json.parse -> object로 변환
      const today = dayjs(JSON.stringify(a));
      const dday = dayjs(JSON.stringify(b));
      const diff = dday.diff(today, "day");
      return diff;
    },
    allbtn() {
      this.allSelect = this.allSelect == "#fee500" ? "#e8e8e8" : "#fee500";
      this.clickSelect =
        this.clickSelect == "2px solid black" ? "" : "2px solid black";
    },
  },
};
</script>
<style scoped>
a:hover {
  color: black;
}
.margintop {
  margin-top: 1.5em;
}
.padtop {
  padding-top: 9px;
}
.line {
  border-width: 1px 0px 0px 0px;
  height: 0.1px;
}
</style>

<style lang="scss" scoped>
.custom {
  position: relative;
}
.locked {
  position: absolute;

  top: 0px;
  left: 0px;

  width: 100%;
  height: 100%;

  // box-sizing: border-box;
  // -moz-box-sizing: border-box; /* 파이어폭스(Firefox)*/
  // -webkit-box-sizing: border-box;
  background-color: RGBA(0, 0, 0, 0.5);

  box-sizing: content-box;
  -moz-box-sizing: content-box; /* 파이어폭스(Firefox)*/
  -webkit-box-sizing: content-box;
}
</style>
