<template>
  <div>
    <a
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
              <!-- <img
                :src="require('../../src/assets/img/' + `${project.img}`)"
                alt="thumbnail"
              /> -->
              <i v-bind:class="iconimage(project.category)"></i>
              <!-- <i class="fas fa-car fa-6x"></i>
              <i class="fas fa-music fa-6x"></i>
              <i class="fas fa-utensils fa-6x"></i>
              <i class="fas fa-mobile-alt fa-6x"></i> -->
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
    </a>
    <ModalSelect :project="project" />
  </div>
  <!-- End strip_list-->
</template>

<script>
import Web3 from "web3";
import dayjs from "dayjs";
import ModalSelect from "../components/sections/_ModalSelect.vue";

export default {
  props: ["project", "surveyIndex"],
  name: "",
  components: { ModalSelect },
  data() {
    return {
      btnname: "참여하기",
      allSelect: "#e8e8e8",
      clickSelect: "",
      // iconimage: "fas fa-suitcase-rolling fa-6x",
    };
  },
  setup() {},
  created() {},
  unmounted() {},
  methods: {
    iconimage(catename) {
      switch (catename) {
        case "travel":
          return "fas fa-suitcase-rolling fa-6x";
        case "car":
          return "fas fa-car fa-6x";
        case "music":
          return "fas fa-music fa-6x";
        case "food":
          return "fas fa-utensils fa-6x";
        case "electronic-products":
          return "fas fa-mobile-alt fa-6x";
        default:
          break;
      }
    },
    async getCharmyeoInfo() {
      const web3 = new Web3(window.ethereum);

      var _contractAddr = "0x475853e073b9003Dbfb46Da3Dda197c39eE37991";
      var _abi = {
        getCurrentUserNumber: {
          inputs: [
            {
              internalType: "uint256",
              name: "surveyIndex",
              type: "uint256",
            },
          ],
          name: "getCurrentUserNumber",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        getUserLimit: {
          inputs: [
            {
              internalType: "uint256",
              name: "surveyIndex",
              type: "uint256",
            },
          ],
          name: "getUserLimit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      };

      var _params = [0];
      console.log(_abi.getCurrentUserNumber);

      var _res = {
        currentUserNumber: 0,
        userLimit: 0,
      };

      _res.currentUserNumber = web3.utils.hexToNumber(
        await web3.eth.call({
          to: _contractAddr,
          data: web3.eth.abi.encodeFunctionCall(
            _abi.getCurrentUserNumber,
            _params
          ),
        })
      );

      _res.userLimit = web3.utils.hexToNumber(
        await web3.eth.call({
          to: _contractAddr,
          data: web3.eth.abi.encodeFunctionCall(_abi.getUserLimit, _params),
        })
      );

      return _res;
    },
    async btnHoverin() {
      var items = await this.getCharmyeoInfo();
      console.log(items);
      this.btnname = `${items.currentUserNumber}/${items.userLimit}`;
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
