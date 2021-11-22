<template>
  <div>
    <!-- <div class="sidebar-widget">
      <h3 class="sidebar-title">{{ blogSidebar.searchTitle }}</h3>
      <div class="sidebar-search">
        <form action="#">
          <input type="text" placeholder="Search" />
          <button><i class="ion-ios-search"></i></button>
        </form>
      </div>
    </div> -->
    <div id="tools">
      <div class="styled-select">
        <select
          name="sort_rating"
          id="sort_rating"
          v-model="selectkey"
          @change="rewardsortmeth"
        >
          <option value="defaultsort" selected>기본순</option>
          <option value="rewardsort">보상지급액순</option>
          <option value="ddaysort">남은일수순</option>
          <option value="partisort">참여자순</option>
        </select>
      </div>
    </div>
    <!-- VC-Tag 선택 위젯 시작 -->
    <div class="sidebar-widget">
      <h3 class="sidebar-title">{{ blogSidebar.tagTitle }}</h3>
      <ul class="sidebar-tag">
        <li v-for="(tag, num) in blogSidebar.tags" :key="num">
          <!-- <router-link :to="tag.link">{{ tag.name }}</router-link> -->
          <button
            style="border-radius: 30px"
            class="tagbtn"
            :id="tag.name"
            @click="tagselectbtn(tag.name, $event)"
            data-bs-toggle="modal"
            v-bind:data-bs-target="'#Modal' + 'vc' + tag.name"
          >
            {{ convertvckor(tag.name) }}
          </button>
          <VcModalSelect
            :vcname="tag.name"
            :changecolor="changecolor"
            v-if="tag.name == 'carowner'"
          />
        </li>
        <li>
          <button class="tagbtnplus" @click="tagselectbtn(tag.name, $event)">
            +
          </button>
        </li>
      </ul>
    </div>
    <!-- VC-Tag 선택 위젯 끝 -->

    <!-- 카테고리 선택 위젯 시작 -->
    <div class="sidebar-widget">
      <h3 class="sidebar-title">{{ blogSidebar.CategoriesTitle }}</h3>
      <ul class="sidebar-list">
        <li v-for="(category, listname) in catedata" :key="listname">
          <div
            class="row justify-content-between"
            style="cursor: pointer"
            @click="cateselectbtn(listname, $event)"
          >
            <div class="col-5">
              <a>{{ convertcatekor(listname) }}</a>
            </div>
            <div class="col-3">
              <i class="fas fa-check" :id="listname" style="display: none"></i>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 카테고리 선택 위젯 끝 -->
    <!-- 인기있는 설문 위젯 시작 -->
    <div class="sidebar-widget mb-5">
      <h3 class="sidebar-title">{{ blogSidebar.popularPostTitle }}</h3>
      <lottie-player
        src="https://assets6.lottiefiles.com/packages/lf20_oblw8lrt.json"
        background="transparent"
        speed="1"
        stroke="color: red"
        style="width: 300px; height: 200px"
        loop
        autoplay
        v-show="loadingicon == 'loading'"
      ></lottie-player>
      <div
        v-show="loadingicon == 'loadshow'"
        class="sidebar-blog"
        v-for="(popularItem, num) in popularSurvey"
        :key="num"
      >
        <div to="" class="image">
          <!-- <img :src="popularItem.img" alt="image" /> -->
          <i
            v-bind:class="iconimage(popularItem.category)"
            style="margin-left: 1rem"
          ></i>
        </div>
        <div class="content">
          <h5>
            <router-link to="/blog-details">
              {{ popularItem.title }}
            </router-link>
          </h5>
          <span>현재참여자 : {{ listlist[popularList[num]] }} 명</span>
          <span>보상지급액 : {{ popularItem.reward }} SUB</span>
        </div>
      </div>
    </div>
    <!-- 인기있're는 설문 위젯 끝 -->
  </div>
</template>

<script>
import Web3 from "web3";
import VcModalSelect from "@/components/sections/1.SurveySearch/_VcModalSelect.vue";

export default {
  props: ["blogSidebar", "catedata", "rewardSort"],
  name: "",
  components: { VcModalSelect },
  data() {
    return {
      iconshow: false,
      selectonoff: false,
      popularSurvey: [],
      temp: [],
      popularList: [],
      listlist: [],
      loadingicon: "loading",
      vcData: [],
      selectkey: "defaultsort",
    };
  },
  setup() {},
  created() {
    this.$store.commit("countnull");
    this.$store.commit("selectdefault");
  },
  async mounted() {
    this.vcData = (
      await this.$api(
        "get",
        `http://127.0.0.1:3000/api/vclist/` + this.$store.state.metamaskAdd
      )
    ).map((obj) => {
      return Object.keys(JSON.parse(obj.vclist));
    })[0];

    for (var i = 0; i < this.vcData.length; i++) {
      this.$store.commit("vcplus", this.vcData[i]);
      document.getElementById(this.vcData[i]).style.background = "black";
      document.getElementById(this.vcData[i]).style.color = "white";
    }

    const web3 = new Web3(window.ethereum);

    var _contractAddr = "0xd13D301B0AD89A576f2416D3Ba03173E489356eB";
    var _abi = {
      getNumOfSurvey: {
        inputs: [],
        name: "getNumOfSurvey",
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
    };

    var _data = web3.eth.abi.encodeFunctionSignature(_abi.getNumOfSurvey);
    var _surveyAmount = web3.utils.hexToNumber(
      await web3.eth.call({
        to: _contractAddr,
        data: _data,
      })
    );

    var index = 0;

    // var temp = [];

    while (index < _surveyAmount) {
      var _params = [index];
      var _data = web3.eth.abi.encodeFunctionCall(
        _abi.getCurrentUserNumber,
        _params
      );

      var _curUserNum = web3.utils.hexToNumber(
        await web3.eth.call({
          to: _contractAddr,
          data: _data,
        })
      );

      this.temp.push(_curUserNum);
      this.listlist.push(_curUserNum);
      index++;
    }

    console.log(this.temp);

    for (var testidx = 0; testidx < 3; testidx++) {
      var position = this.temp.indexOf(Math.max.apply(null, this.temp));
      this.temp[position] = -1;
      this.popularList.push(position);
    }

    console.log(this.popularList);

    // var result = popularList.map(async (idx) =>
    //   await this.$api('get', `http://127.0.0.1:3000/api/survey/${idx}`)
    // );
    this.loadingicon = "loadshow";

    var result = [];

    for (var popularItem of this.popularList)
      result.push(
        (
          await this.$api(
            "get",
            `http://127.0.0.1:3000/api/survey/${popularItem}`
          )
        )[0]
      );

    console.log("POP LIST ", result);
    this.popularSurvey = result;
    //(await this.$api('get', `http://127.0.0.1:3000/api/survey?sqlQuery=${sqlQuery}`)); // 인기있는 설문 JSON 파일
  },
  unmounted() {},
  methods: {
    changecolor() {
      document.getElementById("carowner").style.background = "black";
      document.getElementById("carowner").style.color = "white";
    },
    iconimage(catename) {
      catename = this.$store.state.eng_category[catename];
      switch (catename) {
        case "travel":
          return "fas fa-suitcase-rolling fa-4x";
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
    convertcatekor(listName) {
      return this.$store.state.kor_category[
        this.$store.state.eng_category.indexOf(listName)
      ];
    },
    convertvckor(listName) {
      return this.$store.state.vcgradeko[
        this.$store.state.vcgradeengl.indexOf(listName)
      ];
    },
    tagselectbtn(vcgradeTag, event) {
      if (this.doublecheck(this.$store.state.vsgradelist, vcgradeTag)) {
        if (vcgradeTag !== "carowner") {
          this.$store.commit("vcplus", vcgradeTag);
          event.currentTarget.style.background = "black";
          event.currentTarget.style.color = "white";
        }
      } else {
        this.$store.commit("vcdeduplication", vcgradeTag);
        event.currentTarget.style.background = "";
        event.currentTarget.style.color = "";
      }
      console.log(this.$store.state.vsgradelist);
    },
    cateselectbtn(cateTag, event) {
      if (this.doublecheck(this.$store.state.categorylist, cateTag)) {
        this.$store.commit("cateplus", cateTag);
        event.currentTarget.style.color = "#ff7f00";
        document.getElementById(cateTag).style.display = "";
      } else {
        this.$store.commit("catededuplication", cateTag);
        event.currentTarget.style.color = "black";
        document.getElementById(cateTag).style.display = "none";
      }
      console.log(this.$store.state.categorylist);
    },
    doublecheck(arr, vcgradeTag) {
      var flag = true;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == vcgradeTag) flag = false;
      }
      return flag;
    },
    iconselec() {
      return true;
    },
    rewardsortmeth() {
      this.$store.commit("selectsort", this.selectkey);
      console.log(this.$store.state.selectedsort);
    },
  },
};
</script>
<style scoped>
.sidebar-list a:hover {
  color: #ff7f00;
}
.justify-content-between:hover {
  color: #ff7f00;
}
.clickvctag {
  background-color: black;
  color: white;
}
.nonclickvctag {
  background-color: "";
  color: black;
}
</style>
<style lang="scss" scoped>
.tagbtn {
  display: inline-block;
  padding: 1em 2em;
  border-radius: 0;
  color: black;
  font-weight: bold;
  font-size: 0.678rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  background: linear-gradient(
    to right,
    rgba(black, 0) 25%,
    rgba(black, 0.8) 75%
  );
  background-position: 1% 50%;
  background-size: 400% 300%;
  border: 1px solid black;
  transition: all 0.3s;

  &:hover {
    color: white;
    color: #fff;
    background-position: 99% 50%;
  }
}
.tagbtnplus {
  background-color: #ff7f00;
  color: black;
  display: inline-block;
  padding: 1em 1.5em;
  border-radius: 50%;
  color: black;
  font-weight: bold;
  font-size: 0.7rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  background: linear-gradient(
    to right,
    rgba(black, 0) 25%,
    rgba(black, 0.8) 75%
  );
  background-position: 1% 50%;
  background-size: 400% 300%;
  border: 1px solid black;
  transition: all 0.3s;

  &:hover {
    color: white;
    color: #fff;
    background-position: 99% 50%;
  }
}
</style>
