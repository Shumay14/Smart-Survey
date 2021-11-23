<template>
  <div class="page-wrapper section-space--inner--120">
    <!--Projects section start-->
    <div class="project-section">
      <div class="container">
        <div class="row">
          <!-- 관심사 설정 설명 시작-->
          <div class="row">
            <div
              class="
                project-details
                mb-3
                col-lg-8 col-12
                section-space--bottom--30
                pl-30 pl-sm-15 pl-xs-15
              "
            >
              <h2 class="pb-2">관심사 설정</h2>
              <p>
                관심사 설정이란 설정한 관심 항목에 따라 관련 설문조사를 우선으로
                추천해주는 맞춤형 서비스입니다. <br />
                선택된 항목은 관심사 목록으로 이동하며, 목록에서 클릭하는 것으로
                클릭된 항목을 뺄 수 있습니다. <br />
                하단에 사진을 클릭하여 관심사를 추가하세요!
              </p>
              <!-- <div>
                                <button @click="categoryListShow()">테스트</button>
                            </div> -->

              <!-- 이미지 선택 시작 -->

              <div class="row">
                <transition name="fade">
                  <div class="row row-5 image-popup">
                    <div
                      class="col-lg-3 col-sm-4 col-6 section-space--top--10"
                      v-for="(val2, key2, num2) in favoriteList.categorylist"
                      :key="num2"
                      @click="selectCate(key2)"
                    >
                      <div class="gallery-item single-gallery-thumb cate1">
                        <img
                          :src="val2[0].img"
                          class="img-fluid"
                          alt="thumbnail"
                        />
                        <span class="overlayName">{{ val2[0].name }}</span>
                        <span class="plus"></span>
                      </div>
                    </div>
                  </div>
                </transition>

                <transition name="fade">
                  <b-card v-if="selectedCate != null" class="subCate">
                    <div class="row row-5 image-popup">
                      <div
                        class="col-lg-3 col-sm-4 col-6 section-space--top--10"
                        v-for="(val3, num3) in selectedCateDetail"
                        :key="num3"
                        @click="addItem(val3)"
                      >
                        <div class="gallery-item single-gallery-thumb cate1">
                          <img
                            :src="val3.img"
                            class="img-fluid"
                            alt="thumbnail"
                          />
                          <span class="overlayName">{{ val3.name }}</span>
                          <span class="plus"></span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="mt-3 d-grid gap-2 d-md-flex justify-content-md-end"
                    >
                      <button
                        class="btn btn-outline-light"
                        @click="selectedCate = null"
                      >
                        닫기
                      </button>
                    </div>
                  </b-card>
                </transition>
              </div>
              <!-- 이미지 선택 끝 -->
            </div>

            <div class="col-lg-4 col-12 section-space--bottom--30 pt-2">
              <div class="project-information">
                <div class="row">
                  <div class="col">
                    <h3>관심사 목록</h3>
                  </div>
                  <div class="col">
                    <button class="btn btn-outline-light" @click="sendDB()">
                      저장
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  class="favorite_Selected btn btn-outline-light mx-1 my-1"
                  v-for="(i, num) in selectedItem"
                  :key="num"
                  @click="deleteItem(i)"
                >
                  X {{ i.name }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Projects section end-->
</template>

<script>
import favoriteList from "@/data/_favoriteList.json";
export default {
  data() {
    return {
      favoriteList,
      selectedItem: [],
      selectedIndex: [0],
      testv1: "",
      testv2: "",
      testShow: true,
      selectedCate: null,
      selectedCateDetail: null,
      saveCate: [],
    };
  },
  computed: {},
  methods: {
    // 누르면 카테고리 항목이 뜨게
    selectCate(i) {
      this.selectedCate = i;
      console.log(this.selectedCate);

      var select = this.selectedCate;
      this.selectedCateDetail = this.favoriteList.categorylist[select];
    },
    // 만약 카테고리 항목이 뜬 걸 우측에 뜨게함
    addItem(i) {
      if (this.selectedItem.includes(i) == true) {
      } else {
        // index를 따로 분리
        this.selectedItem.push(i);

        // 이것은 항목
        this.selectedCate = i;
        console.log("이것이 뜨고 있다.:", this.selectedCate.category);
        if (this.saveCate.includes(this.selectedCate.category)) {
        } else {
          this.saveCate.push(this.selectedCate.category);
          console.log("이것을 추가했습니다:", this.saveCate);
        }
      }
    },

    deleteItem(x) {
      for (let i = 0; i < this.selectedItem.length; i++) {
        console.log("기존 항목들 리스트: ", i);
        console.log("누른 값: ", x);
        if (this.selectedItem[i] == x) {
          this.selectedItem.splice(i, 1);
          i--;
        }
      }

      for (let l = 0; l < this.selectedIndex.length; l++) {
        if (this.selectedIndex[l] == x.index) {
          this.selectedIndex.splice(l, 1);
          // i--;
        }
      }

      if (this.saveCate.includes(x.category)) {
        for (let i = 0; i < this.selectedItem; i++) {
          console.log("테스트중", this.selectedItem[i].category);
        }
      }
    },

    categoryListShow() {
      console.log(this.saveCate);
    },

    sendDB() {
      for (let i = 0; i < this.selectedItem.length; i++) {
        // console.log("테스트중",this.selectedItem[i].category)

        if (this.saveCate.includes(this.selectedItem[i].category) == false) {
          this.saveCate.push(this.selectedItem[i].category);
        }
      }
      this.$api(
        "POST",
        "http://127.0.0.1:3000/api/category",
        JSON.stringify(this.saveCate)
      );
      alert("저장되었습니다.");
    },
  },
};
</script>
<style lang="scss">
.favorite_Selected {
  border-radius: 30px !important;
  display: inline;
}

.overlayName {
  text-align: center;
  font-size: 1.5rem;
  color: white;
  position: absolute;

  top: 70%;
  left: 0px;

  width: 100%;
  height: 30%;

  background-color: RGBA(0, 0, 0, 0.5);
  // box-sizing: content-box;
  // -moz-box-sizing: content-box;
  // -webkit-box-sizing: content-box;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s;
}

.fade-enter,
    .fade-leave-to

    /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.subCate {
  position: sticky !important;
  background: rgba(0, 0, 0, 0.664) !important;
  display: inline-block;
}
</style>
