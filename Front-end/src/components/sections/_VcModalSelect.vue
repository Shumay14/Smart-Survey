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
      <div class="modal-dialog modal-dialog-centered">
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
            <input type="text" style="display: inline; margin-top: 2rem" />
            <button
              type="button"
              style="margin-left: 4rem; display: inline"
              class="btn btn-secondary"
              @click="certification(vcname)"
              v-if="certi == 1"
            >
              인증 요청
            </button>
            <div class="lds-dual-ring" v-if="certi == 2"></div>
            <span style="font-weight: bold; color: #ff7f00" v-if="certi == 2"
              >인증중</span
            >
            <i
              class="fas fa-check"
              fa-10x
              style="color: green; font-size: 1.5rem; margin-left: 4rem"
              v-if="certi == 3"
            ></i>
            <span style="font-weight: bold; color: green" v-if="certi == 3"
              >인증완료</span
            >
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

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              저장
            </button>
          </div>
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
      setTimeout(() => {
        this.certi = 3;
        this.$store.commit("vcplus", vcname);
        this.changecolor();
        console.log(vcname);
      }, 3000);
    },
  },
};
</script>

<style scoped>
.modalcerti {
  height: 8rem;
}
.lds-dual-ring {
  margin-left: 4rem;
  display: inline-block;
  width: 18px;
  height: 45px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #ff7f00;
  border-color: #ff7f00 transparent #ff7f00 transparent;
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
</style>
