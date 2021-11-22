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
import SurveyGrid from "@/components/sections/1.SurveySearch/_SV_SurveyGrid_copy.vue";
import Web3 from "web3";

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
    this.surveyData = await this.$api(
      "get",
      "http://127.0.0.1:3000/api/survey"
    );
    this.addSurveyList();
  },

  methods: {
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

      var _reward = 0;

      _reward = web3.utils.hexToNumber(
        await web3.eth.call({
          to: _contractAddr,
          data: web3.eth.abi.encodeFunctionCall(_abi.estimateReward, _params),
        })
      );
      _reward = _reward / 1000000000000;
      _reward = (Math.round(_reward * 100 + 1) * 10) / 1000;

      return _reward;
    },
    async addSurveyList() {
      let cnt = 0;
      var tmp = 0;

      var rewardtmp = []; //sort된 변수
      var rewardtmp2 = [];
      var rewardindex = [];

      while (this.surveyData.length != this.showUpIdx) {
        var item = this.surveyData[this.showUpIdx];
        // 설문지 리스트에서 인덱스로 가져온 '설문JSON'
        rewardtmp.push(await this.getReward(this.showUpIdx));
        rewardtmp2.push(await this.getReward(this.showUpIdx));

        if (cnt == 7) break;
        this.showUpList.push(item);
        this.showUpIdx++;
        cnt++;
        console.log(item, " added");
      }

      this.showUpList;
      rewardtmp.sort((a, b) => {
        return b - a;
      });

      console.log("rewardtmp: " + rewardtmp);
      console.log("rewardtmp2: " + rewardtmp2);

      for (var i = 0; i < rewardtmp.length; i++) {
        rewardindex.push(rewardtmp.indexOf(rewardtmp2[i]));
      }
      console.log(rewardindex);
    },

    CheckVcCategory(cate, vcObj) {
      vcObj = JSON.parse(vcObj);
      cate = this.$store.state.eng_category[cate];
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
