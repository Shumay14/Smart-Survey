<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Launch demo modal
    </button>

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
            <div
              @click="allbtn()"
              v-bind:style="{ border: clickSelect }"
              style="padding: 5px"
            >
              <i
                class="far fa-check-circle fa-lg"
                v-bind:style="{ color: allSelect }"
              ></i
              ><span style="font-weight: 900; font-size: 1rem">
                전체 동의하기</span
              >
            </div>
            전체동의는 선택목적에 대한 동의를 포함하고 있으며, 선택목적에 대한
            동의를 거부해도 서비스 이용이 가능합니다.<br />
            drooom@naver.com<br />
            push 서비스 제공을 위해 회원번호와 함께 개인정보가 제공됩니다. 보다
            자세한 개인정보 제공항목은 동의 내용에서 확인하실 수 있습니다.
            정보는 서비스 탈퇴 시 지체없이 파기됩니다.<br />
            [필수] 필수 제공 항목 닉네임, 프로필 사진 보기 <br />
            [선택] 선택<br />
            제공 항목 보기 성별 연령대 생일/
          </div>
          <div class="modal-footer">
            <button
              type="button"
              style="
                width: 100%;
                background-color: #f6f6f6;
                color: #c5c8c1;
                border: 0;
                padding: 0.5rem;
                border-radius: 0.5rem;
              "
              data-bs-dismiss="modal"
              @click="kkk()"
            >
              동의하고 계속하기
            </button>
            <button
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
            </button>
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
      sampleData: "",
      allSelect: "#e8e8e8",
      clickSelect: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    allbtn() {
      this.allSelect = this.allSelect == "#fee500" ? "#e8e8e8" : "#fee500";
      this.clickSelect =
        this.clickSelect == "2px solid black" ? "" : "2px solid black";
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
