<template>
  <div>
    <a
      class="strip_list wow fadeIn"
      data-wow-delay="0.1s"
      style="width: 100%; text-align: left"
      data-bs-toggle="modal"
      v-bind:data-bs-target="'#Modal' + project.idx"
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
              <i
                v-bind:class="iconimage(project.category)"
                style="margin-top: 18px"
              ></i>
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
              <b>보상지급액</b>
              <span
                class="opening"
                style="font-size: 2em; margin-left: 0.5em; font-weight: bold"
              >
                <!-- {{ project.reward }} -->
                {{ this.reward }}
              </span>
              <span
                class="opening"
                style="margin-left: 0.5em; font-weight: bold"
              >
                SUB
              </span>
              <span style="margin-left: 0.5rem">
                <span style="font-size: 5px; margin-right: 0.5rem"> ≈</span>
                {{ this.won }}￦</span
              >
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
          <h3
            class="padtop pb-3"
            style="
              color: #ff7f00;
              text-align: center;
              font-size: 17px;
              letter-spacing: -0.4px;
              position: relative;
              top: 2px;
              left: -24px;
            "
          >
            {{ this.ddaylist(project.sdate, project.edate) }}일 |
            {{
              this.userCountInfo.userLimit -
              this.userCountInfo.currentUserNumber
            }}명 남음
          </h3>
          <!-- <button @click="ddaylist(project.sdate, project.edate)">test</button> -->
          <!-- <h5 class="padtop" style="color: red; text-align: center">
          21.03 - 21.06
        </h5> -->
          <div class="margintop" style="margin-left: 1rem">
            <a class="btn_1">
              {{ btnname }}
            </a>
          </div>
        </div>
      </div>
      <!-- End row-->
      <!-- <ModalSelect /> -->
    </a>
    <ModalSelect :project="project" :surveyIndex="project.idx - 1" />
  </div>
  <!-- End strip_list-->
</template>

<script>
import Web3 from "web3";
import dayjs from "dayjs";
import ModalSelect from "@/components/sections/1.SurveySearch/_ModalSelect.vue";

export default {
  props: ["project"],
  name: "",
  components: { ModalSelect },
  data() {
    return {
      userCountInfo: {},
      btnname: "참여하기",
      allSelect: "#e8e8e8",
      clickSelect: "",
      reward: "-",
      won: "-",
      // iconimage: "fas fa-suitcase-rolling fa-6x",
    };
  },
  setup() {},
  created() {},
  unmounted() {},
  async mounted() {
    // 각 설문지 별 Reward를 불러오는 부분
    this.reward = (await this.getReward(this.project.idx - 1)) / 1000000000000;
    this.reward = (Math.round(this.reward * 100 + 1) * 10) / 1000;

    this.won = Math.round(this.reward * 12).toLocaleString("ko-KR");

    // 각 설문지 별 참여자 정보를 불러오는 부분
    this.userCountInfo = await this.getCharmyeoInfo(this.project.idx - 1);

    console.log(this.userCountInfo);

    // this.btnname = `${this.userCountInfo.currentUserNumber}/${this.userCountInfo.userLimit}`;
  },
  methods: {
    iconimage(catename) {
      catename = this.$store.state.eng_category[catename];
      switch (catename) {
        case "travel":
          return "fas fa-plane fa-4x";
        case "car":
          return "fas fa-car fa-4x";
        case "music":
          return "fas fa-music fa-4x";
        case "food":
          return "fas fa-utensils fa-4x";
        case "electronic-products":
          return "fas fa-mobile-alt fa-4x";
        default:
          break;
      }
    },
    async getReward(surveyIndex) {
      const web3 = new Web3(window.ethereum);
      var _contractAddr = "0xd13D301B0AD89A576f2416D3Ba03173E489356eB";

      var _params = [surveyIndex];
      var _abi = {
        estimateReward: {
          inputs: [
            {
              internalType: "uint256",
              name: "surveyIndex",
              type: "uint256",
            },
          ],
          name: "estimateReward",
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
      console.log(_abi.estimateReward);

      var _reward = 0;

      _reward = web3.utils.hexToNumber(
        await web3.eth.call({
          to: _contractAddr,
          data: web3.eth.abi.encodeFunctionCall(_abi.estimateReward, _params),
        })
      );

      return _reward;
    },
    async getCharmyeoInfo(surveyIndex) {
      const web3 = new Web3(window.ethereum);

      var _contractAddr = "0xd13D301B0AD89A576f2416D3Ba03173E489356eB";
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

      var _params = [surveyIndex];
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
    // btnHoverin() {
    //   this.btnname = `${this.userCountInfo.currentUserNumber}/${this.userCountInfo.userLimit}`;
    // },
    // btnHoverout() {
    //   this.btnname = "참여하기";
    // },
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
  /* color: #5387DB */
  color: #3e4a5c;
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
