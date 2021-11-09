<template>
  <div class="strip_list wow fadeIn" data-wow-delay="0.1s">
    <!-- <div class="ribbon_1">Popular</div> -->
    <div class="row">
      <div class="col-md-9">
        <div class="desc">
          <div class="thumb_strip">
            <a href="detail_page.html"
              ><img src="../../src/assets/img/cute.jpg" alt=""
            /></a>
          </div>
          <h3 class="padtop">국밥에 관한 여론조사</h3>
          <!-- <div class="type">Mexican / American</div> -->
          <div class="location margintop">
            보상지급액
            <span class="opening" style="font-size: 2em; margin-left: 0.5em"
              >2.5</span
            >
            SUB
            <span>= 5,460원</span>
          </div>
        </div>
      </div>
      <!-- <hr class="line" style="border: solid 1px gray" /> -->
      <div class="col-md-3">
        <h3 class="padtop" style="color: red; text-align: center">D-23</h3>
        <div class="go_to margintop">
          <a
            href="detail_page.html"
            class="btn_1"
            @mouseover="btnHoverin()"
            @mouseout="btnHoverout()"
            >{{ btnname }}</a
          >
        </div>
      </div>
    </div>
    <!-- End row-->
  </div>
  <!-- End strip_list-->
</template>

<script>
export default {
  props: ["project"],
  name: "",
  components: {},
  data() {
    return {
      btnname: "참여하기",
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
  },
};
</script>
<style scoped>
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
