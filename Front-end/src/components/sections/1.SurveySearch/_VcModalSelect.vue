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
      v-bind:id="'Modal' + 'vc' + vcname"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-sm modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ convertkor(vcname) }} 입력
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body modalcerti">
            <input type="text" style="display: inline; width: 10rem" />
            <button
              type="button"
              style="margin-left: 10px; display: inline"
              class="btn btn-secondary btn-sm"
              @click="certification(vcname)"
              v-if="certi == 1"
            >
              인증 요청
            </button>
            <!-- <div class="lds-dual-ring" v-if="certi == 2"></div> -->
            <div class="lds-ring" v-if="certi == 2">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <span
              style="font-weight: bold; margin-left: 1em; color: #00c3ff"
              v-if="certi == 2"
              >인증중</span
            >
            <i
              class="fas fa-check"
              fa-xs
              style="color: green; font-size: 1rem; margin-left: 1rem"
              v-if="certi == 3"
            ></i>
            <span
              style="font-weight: bold; margin-left: 0.5em; color: green"
              v-if="certi == 3"
              >인증완료</span
            >
            <p style="font-size: 12px">
              {{ this.logMsg }}
            </p>
            <!-- <lottie-player
              src="https://assets6.lottiefiles.com/packages/lf20_oblw8lrt.json"
              background="transparent"
              speed="1"
              style="
                margin-left: 4rem;
                width: 90px;
                height: 60px;
                display: inline-block;
              "
              loop
              autoplay
              v-if="!certi"
            ></lottie-player> -->
          </div>

          <!-- <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              저장
            </button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["vcname", "changecolor"],
  name: "",
  components: {},
  data() {
    return {
      logMsg: this.convertkor(this.vcname) + "를 입력해주세요. ",
      msgCnt: 0,
      msgQueue: [
        `VC 인증 서버 연결중...\\`,
        `VC 인증 서버 연결중...--`,
        `VC 인증 서버 연결중.../`,
        `VC 인증 서버 연결중...|`,
        `VC 인증 서버 연결중...\\`,
        `VC 인증 서버 연결중...--`,
        `VC 인증 서버 연결중.../`,
        `VC 인증 서버 연결중...|`,
        `VC 인증 서버 연결중...\\`,
        `VC 인증 서버 연결중...--`,
        `VC 인증 서버 연결중.../`,
        `VC 인증 서버 연결중...|`,
        `VC 인증 서버 연결중...\\`,
        `VC 인증 서버 연결중...--`,
        `VC 인증 서버 연결중.../`,
        `VC 인증 서버 연결중...|`,
        `VC 인증 서버 연결중...\\`,
        `VC 인증 서버 연결중...--`,
        `VC 인증 서버 연결중.../`,
        `VC 인증 서버 연결중...|`,
        `VC 인증 서버 연결중...\\`,
        `VC 인증 서버 연결중...--`,
        `VC 인증 서버 연결중.../`,
        `VC 인증 서버 연결중...|`,
        `VC 인증 서버 연결중...\\`,
        `VC 인증 서버 연결중...--`,
        `VC 인증 서버 연결중.../`,
        `VC 인증 서버 연결중...|`,
        `VC 인증 서버 연결중...\\`,
        `VC 인증 서버 연결중...--`,
        `VC 인증 서버 연결중.../`,
        `VC 인증 서버 연결중...|`,
        `데이터 유효성 검증중...\\`,
        `데이터 유효성 검증중...--`,
        `데이터 유효성 검증중.../`,
        `데이터 유효성 검증중...|`,
        `데이터 유효성 검증중...\\`,
        `데이터 유효성 검증중...--`,
        `데이터 유효성 검증중.../`,
        `데이터 유효성 검증중...\\`,
        `데이터 유효성 검증중...--`,
        `데이터 유효성 검증중.../`,
        `데이터 유효성 검증중...|`,
        `데이터 유효성 검증중...\\`,
        `데이터 유효성 검증중...--`,
        `데이터 유효성 검증중.../`,
        `데이터 유효성 검증중...\\`,
        `데이터 유효성 검증중...--`,
        `데이터 유효성 검증중.../`,
        `데이터 유효성 검증중...|`,
        `데이터 유효성 검증중...\\`,
        `데이터 유효성 검증중...--`,
        `데이터 유효성 검증중.../`,
        `새로운 VC 생성 중...|`,
        `새로운 VC 생성 중...\\`,
        `새로운 VC 생성 중...--`,
        `새로운 VC 생성 중.../`,
        `새로운 VC 생성 중...|`,
        `새로운 VC 생성 중...\\`,
        `새로운 VC 생성 중...--`,
        `새로운 VC 생성 중.../`,
        `새로운 VC 생성 중...\\`,
        `새로운 VC 생성 중...--`,
        `새로운 VC 생성 중.../`,
        `새로운 VC 생성 중...|`,
        `새로운 VC 생성 중...\\`,
        `새로운 VC 생성 중...--`,
        `새로운 VC 생성 중.../`,
        `새로운 VC 생성 중...\\`,
        `새로운 VC 생성 중...--`,
        `새로운 VC 생성 중.../`,
        `새로운 VC 생성 중...|`,
        `새로운 VC 생성 중...\\`,
        `새로운 VC 생성 중...--`,
        `새로운 VC 생성 중.../`,
        `VC 인증 서버 응답 대기...|`,
        `VC 인증 서버 응답 대기...\\`,
        `VC 인증 서버 응답 대기...--`,
        `VC 인증 서버 응답 대기.../`,
        `VC 인증 서버 응답 대기...|`,
        `VC 인증 서버 응답 대기...\\`,
        `VC 인증 서버 응답 대기...--`,
        `VC 인증 서버 응답 대기.../`,
        `VC 인증 서버 응답 대기...|`,
        `VC 인증 서버 응답 대기...\\`,
        `VC 인증 서버 응답 대기...--`,
        `VC 인증 서버 응답 대기.../`,
        `VC 인증 서버 응답 대기...|`,
        `VC 인증 서버 응답 대기...\\`,
        `VC 인증 서버 응답 대기...--`,
        `VC 인증 서버 응답 대기.../`,
        `VC 생성 완료!`,
      ],
      certi: 1,
    };
  },
  setup() {},
  created() {},
  unmounted() {},
  methods: {
    convertkor(vcName) {
      return this.$store.state.vcgradeko[
        this.$store.state.vcgradeengl.indexOf(vcName)
      ];
    },
    certification(vcname) {
      this.certi = 2;
      this.timecheck(vcname);
    },
    timecheck(vcname) {
      var timerId = setInterval(() => {
        this.logMsg = this.msgQueue[this.msgCnt];
        this.msgCnt++;
      }, 100);

      console.log(this.msgQueue.length - 1) * 100;
      // clearInterval(timerId);
      setTimeout(() => {
        clearInterval(timerId);

        this.certi = 3;
        this.$store.commit("vcplus", vcname);
        this.changecolor();
        console.log(vcname);
        console.log("끝");
      }, this.msgQueue.length * 100);
    },
  },
};
</script>

<style scoped>
.modalcerti {
  height: 6rem;
}

.lds-dual-ring {
  margin-left: 2rem;
  display: inline-block;
  width: 18px;
  height: 45px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 34px;
  height: 34px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #00c3ff;
  border-color: #00c3ff transparent #00c3ff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  margin-left: 8px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 21px;
  height: 21px;
  margin: 2px;
  border: 4px solid #00c3ff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #00c3ff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
