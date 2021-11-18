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
        <select name="sort_rating" id="sort_rating">
          <option value="" selected>Sort by ranking</option>
          <option value="lower">Lowest ranking</option>
          <option value="higher">Highest ranking</option>
        </select>
      </div>
    </div>
    <!-- VC-Tag 선택 위젯 시작 -->
    <div class="sidebar-widget">
      <h3 class="sidebar-title">{{ blogSidebar.tagTitle }}</h3>
      <ul class="sidebar-tag">
        <li v-for="tag in blogSidebar.tags" :key="tag.id">
          <!-- <router-link :to="tag.link">{{ tag.name }}</router-link> -->
          <button
            style="border-radius: 30px"
            class="tagbtn"
            @click="tagselectbtn(tag.name, $event)"
            v-bind:style="{ 'background-color': selectboxcolor }"
          >
            {{ convertvckor(tag.name) }}
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
            <!-- <div class="col-3">
              <i class="fas fa-check" :id="listname"></i>
            </div> -->
          </div>
        </li>
      </ul>
    </div>
    <!-- 카테고리 선택 위젯 끝 -->

    <!-- 인기있는 설문 위젯 시작 -->
    <div class="sidebar-widget">
      <h3 class="sidebar-title">{{ blogSidebar.popularPostTitle }}</h3>
      <div
        class="sidebar-blog"
        v-for="popularPost in blogSidebar.popularPost"
        :key="popularPost.id"
      >
        <router-link to="/blog-details" class="image">
          <img :src="popularPost.image" alt="image" />
        </router-link>
        <div class="content">
          <h5>
            <router-link to="/blog-details">{{
              popularPost.title
            }}</router-link>
          </h5>
          <span>{{ popularPost.date }}</span>
        </div>
      </div>
    </div>
    <!-- 인기있는 설문 위젯 끝 -->
  </div>
</template>

<script>
export default {
  props: ["blogSidebar", "catedata"],
  name: "",
  components: {},
  data() {
    return {
      selectboxcolor: "",
      selectonoff: false,
    };
  },
  setup() {},
  created() {
    this.$store.commit("countnull");
  },
  async mounted() {
    // 전체 설문갯수, 설문참여수,
    // rank 3개
    // web3, api
    // abi

    //this.$api('get','http://127.0.0.1:3000/api/survey', JSON.stringify(this.surveyInfo))
    const web3 = new Web3(window.ethereum);

    var _contractAddr = "0x779155D5F1b4E06e73B870c6aF37A7FC6CdE88fE";
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
    var popularList = [];

    var temp = [];

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

      temp.push(_curUserNum);
      index++;
    }

    for (var testidx = 0; testidx < 3; testidx++) {
      var position = temp.indexOf(Math.max.apply(null, temp));
      temp[position] = -1;
      popularList.push(position);
    }

    console.log(popularList);
  },
  unmounted() {},
  methods: {
    convertcatekor(listName) {
      return this.$store.state.kor_category[
        this.$store.state.eng_category.indexOf(listName)
      ];
    },
    convertvckor(listName) {
      return this.$store.state.vcgradekor[
        this.$store.state.vcgradeenglish.indexOf(listName)
      ];
    },
    tagselectbtn(vcgradeTag, event) {
      if (this.doublecheck(this.$store.state.vsgradelist, vcgradeTag)) {
        this.$store.commit("vcplus", vcgradeTag);
        event.currentTarget.style.background = "black";
        event.currentTarget.style.color = "white";
      } else {
        this.$store.commit("vcdeduplication", vcgradeTag);
        event.currentTarget.style.background = "";
        event.currentTarget.style.color = "black";
      }
      console.log(this.$store.state.vsgradelist);
    },
    cateselectbtn(cateTag, event) {
      if (this.doublecheck(this.$store.state.categorylist, cateTag)) {
        this.$store.commit("cateplus", cateTag);
        event.currentTarget.style.color = "#ff7f00";
      } else {
        this.$store.commit("catededuplication", cateTag);
        event.currentTarget.style.color = "black";
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
</style>
