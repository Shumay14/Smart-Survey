<template>
  <div>
    <!-- Button trigger modal -->
    <!-- <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      참여하기
    </button> -->

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <img class="mainimg" src="../../../src/assets/img/cute.jpg" />
            <div class="center-name">
              <h4
                class="modal-title"
                id="exampleModalLabel"
                style="line-height: 20px"
              >
                Push
              </h4>
              <p id="exampleModalLabel" style="color: #c5c8c1; font-size: 10px">
                Push
              </p>
            </div>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div style="border-bottom: 2px solid #f3f3f3">
              <div
                @click="allbtn()"
                v-bind:style="{ outline: allcliclSelect }"
                style="
                  padding-left: 15.5px;
                  padding-top: 5.5px;
                  margin: 5px;
                  height: 2.5rem; ;
                "
              >
                <i
                  class="far fa-check-circle fa-lg"
                  v-bind:style="{ color: allSelect }"
                ></i
                ><span style="font-weight: 900; font-size: 1rem">
                  전체 동의하기</span
                >
              </div>
              <p
                style="font-size: 12px; margin-left: 3rem; margin-bottom: 1rem"
              >
                전체동의는 선택목적에 대한 동의를 포함하고 있으며, 선택목적에
                대한 동의를 거부해도 서비스 이용이 가능합니다.
              </p>
            </div>
            <!-- <hr style="height: 0.25px" /> -->
            <div style="margin-top: 1rem; border-bottom: 2px solid #f3f3f3">
              <div style="margin-left: 3rem; margin-bottom: 1rem">
                <i class="fas fa-user-circle" style="color: #c5c8c1"></i>
                <span style="margin-left: 0.5rem">{{ metamaskaddr }}</span>
                <p style="font-size: 12px; margin-top: 0.5rem">
                  push 서비스 제공을 위해 회원번호와 함께 개인정보가 제공됩니다.
                  보다 자세한 개인정보 제공항목은 동의 내용에서 확인하실 수
                  있습니다. 정보는 서비스 탈퇴 시 지체없이 파기됩니다.
                </p>
              </div>
            </div>
            <div style="margin-top: 1rem">
              <div>
                <div
                  style="
                    padding-left: 15.5px;
                    padding-top: 5.5px;
                    margin: 5px;
                    height: 2.5rem;
                    margin-bottom: 1rem;
                  "
                >
                  <i class="fas fa-check fa-xs" style="color: #c5c8c1"></i
                  ><span> [필수] 필수 제공 항목</span>
                  <p style="font-size: 12px; color: #c5c8c1; margin-left: 1rem">
                    닉네임
                  </p>
                </div>
              </div>
              <div>
                <div style="margin-left: 2rem">
                  <div>[선택] 선택 제공 항목</div>
                  <div>
                    <i class="fas fa-check fa-sm" style="color: #c5c8c1"></i>
                    <span style="font-size: 16px; margin-left: 0.5rem"
                      >성별</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              v-bind:style="{
                'background-color': btnbackcolorstyle,
                color: btncolorstyle,
              }"
              style="
                width: 100%;
                border: 0;
                padding: 0.5rem;
                border-radius: 0.5rem;
              "
              data-bs-dismiss="modal"
              @click="kkk()"
            >
              동의하고 계속하기
            </button>
            <!-- <button
              type="button"
              style="
                width: 100%;
                background-color: #fee500;
                border: 0;
                padding: 0.5rem;
                border-radius: 0.5rem;
              "
              data-bs-dismiss="modal"
              @click="kkk()"
            >
              동의하고 계속하기
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      metamaskaddr: this.$store.state.metamaskAdd,
      allSelect: "#e8e8e8",
      allcliclSelect: "",
      btnbackcolorstyle: "#f6f6f6",
      btncolorstyle: "#c5c8c1",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    allbtn() {
      this.allSelect = this.allSelect == "#fee500" ? "#e8e8e8" : "#fee500";
      this.allcliclSelect =
        this.allcliclSelect == "2px solid black" ? "" : "2px solid black";
      this.btnbackcolorstyle =
        this.btnbackcolorstyle == "#f6f6f6" ? "#fee500" : "#f6f6f6";
      this.btncolorstyle = this.btncolorstyle == "#c5c8c1" ? "" : "#c5c8c1";
    },
  },
};
</script>

<style scoped>
.center-name {
  /* left: 0;
  right: 0; */
  width: 350px;
  margin-left: auto;
  margin-right: auto; /* 가로 중앙 정렬 */
  /* top: 0;
  bottom: 0; */
  margin-top: auto;
  margin-bottom: auto; /* 세로 중앙 정렬 */
}
.mainimg {
  width: 50px;
  height: 50px;
  border-radius: 40%;
  overflow: hidden; /*  넘치는 부분 제거 */
}
</style>
