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
      v-bind:id="'Modal' + project.idx"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <img class="mainimg" src="../../../src/assets/img/pushimg.jpg" />

            <div class="center-name">
              <h4
                class="modal-title"
                id="exampleModalLabel"
                style="line-height: 20px"
              >
                Push
              </h4>
              <p id="exampleModalLabel" style="color: #c5c8c1; font-size: 12px">
                {{ project.title }}
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
                style="padding-left: 15.5px; margin: 5px"
              >
                <i
                  class="far fa-check-circle fa-lg"
                  v-bind:style="{ color: allSelect }"
                ></i
                ><span style="font-weight: 900; font-size: 1rem">
                  개인정보 수집 및 이용 동의<span class="terms_choice"
                    >(필수)</span
                  ></span
                >
              </div>
              <!-- <p
                style="font-size: 12px; margin-left: 3rem; margin-bottom: 1rem"
              >
                전체동의는 선택목적에 대한 동의를 포함하고 있으며, 선택목적에
                대한 동의를 거부해도 서비스 이용이 가능합니다.
              </p> -->
              <div class="terms_box" tabindex="0">
                <div class="policy_summary">
                  <p class="policy_summary__text">
                    개인정보보호법에 따라 서베이존에 회원가입 신청하시는 분께
                    수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적,
                    개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시
                    불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여
                    주시기 바랍니다.
                  </p>
                </div>
                <div class="article">
                  <h3 class="article__title">1. 수집하는 개인정보</h3>
                  <p>
                    이용자는 회원가입을 하지 않아도 정보 검색, 뉴스 보기 등
                    대부분의 서베이존 서비스를 회원과 동일하게 이용할 수
                    있습니다. 이용자가 메일, 캘린더, 카페, 블로그 등과 같이
                    개인화 혹은 회원제 서비스를 이용하기 위해 회원가입을 할
                    경우, 서베이존는 서비스 이용을 위해 필요한 최소한의
                    개인정보를 수집합니다.
                  </p>
                </div>
                <div class="article">
                  <h3 class="article__title">2. 수집한 개인정보의 이용</h3>
                  <p>
                    서베이존 및 서베이존 관련 제반 서비스(모바일 웹/앱 포함)의
                    회원관리, 서비스 개발・제공 및 향상, 안전한 인터넷 이용환경
                    구축 등 아래의 목적으로만 개인정보를 이용합니다.
                  </p>
                  <ul class="sections">
                    <li class="sections__section">
                      - 회원 가입 의사의 확인, 연령 확인 및 법정대리인 동의
                      진행, 이용자 및 법정대리인의 본인 확인, 이용자 식별,
                      회원탈퇴 의사의 확인 등 회원관리를 위하여 개인정보를
                      이용합니다.
                    </li>
                    <li class="sections__section">
                      - 콘텐츠 등 기존 서비스 제공(광고 포함)에 더하여,
                      인구통계학적 분석, 서비스 방문 및 이용기록의 분석,
                      개인정보 및 관심에 기반한 이용자간 관계의 형성, 지인 및
                      관심사 등에 기반한 맞춤형 서비스 제공 등 신규 서비스
                      요소의 발굴 및 기존 서비스 개선 등을 위하여 개인정보를
                      이용합니다.
                    </li>
                    <li class="sections__section">
                      - 법령 및 서베이존 이용약관을 위반하는 회원에 대한 이용
                      제한 조치, 부정 이용 행위를 포함하여 서비스의 원활한
                      운영에 지장을 주는 행위에 대한 방지 및 제재, 계정도용 및
                      부정거래 방지, 약관 개정 등의 고지사항 전달, 분쟁조정을
                      위한 기록 보존, 민원처리 등 이용자 보호 및 서비스 운영을
                      위하여 개인정보를 이용합니다.
                    </li>
                    <li class="sections__section">
                      - 유료 서비스 제공에 따르는 본인인증, 구매 및 요금 결제,
                      상품 및 서비스의 배송을 위하여 개인정보를 이용합니다.
                    </li>
                    <li class="sections__section">
                      - 이벤트 정보 및 참여기회 제공, 광고성 정보 제공 등 마케팅
                      및 프로모션 목적으로 개인정보를 이용합니다.
                    </li>
                    <li class="sections__section">
                      - 서비스 이용기록과 접속 빈도 분석, 서비스 이용에 대한
                      통계, 서비스 분석 및 통계에 따른 맞춤 서비스 제공 및 광고
                      게재 등에 개인정보를 이용합니다.
                    </li>
                    <li class="sections__section">
                      - 보안, 프라이버시, 안전 측면에서 이용자가 안심하고 이용할
                      수 있는 서비스 이용환경 구축을 위해 개인정보를 이용합니다.
                    </li>
                  </ul>
                </div>
                <div class="article">
                  <h3 class="article__title">
                    <strong>3. 개인정보의 보관기간</strong>
                  </h3>
                  <div class="clause large">
                    <h4 class="clause__title">
                      <strong
                        >회사는 원칙적으로 이용자의 개인정보를 회원 탈퇴 시
                        지체없이 파기하고 있습니다.</strong
                      >
                    </h4>
                    <p class="clause__text">
                      <strong
                        >단, 이용자에게 개인정보 보관기간에 대해 별도의 동의를
                        얻은 경우, 또는 법령에서 일정 기간 정보보관 의무를
                        부과하는 경우에는 해당 기간 동안 개인정보를 안전하게
                        보관합니다.</strong
                      >
                    </p>
                    <div class="clause">
                      <h4 class="clause__title">
                        이용자에게 개인정보 보관기간에 대해 회원가입 시 또는
                        서비스 가입 시 동의를 얻은 경우는 아래와 같습니다.
                      </h4>
                      <ul class="sections">
                        <li class="sections__section">
                          - 부정 가입 및 이용 방지 <br />부정 이용자의 가입인증
                          휴대전화번호 또는 DI (만14세 미만의 경우 법정대리인DI)
                          : 탈퇴일로부터 6개월 보관 <br />탈퇴한 이용자의
                          휴대전화번호(복호화가 불가능한 일방향
                          암호화(해시처리)) : 탈퇴일로부터 6개월 보관
                        </li>
                        <li class="sections__section">
                          - QR코드 복구 요청 대응 <br />QR코드 등록 정보:삭제
                          시점으로부터6개월 보관
                        </li>
                        <li class="sections__section">
                          - 스마트플레이스 분쟁 조정 및 고객문의 대응
                          <br />휴대전화번호:등록/수정/삭제 요청 시로부터
                          최대1년
                        </li>
                        <li class="sections__section">
                          - 서베이존 플러스 멤버십 서비스 혜택 중복 제공 방지
                          <br />암호화처리(해시처리)한DI :혜택 제공
                          종료일로부터6개월 보관
                        </li>
                        <li class="sections__section">
                          - 지식iN eXpert 재가입 신청 및 부정 이용 방지 <br />ID
                          : 서비스 탈퇴 후 6개월 보관 <br />eXpert 서비스 및
                          eXpert 센터 가입 등록정보 : 신청일로부터 6개월(등록
                          거절 시, 거절 의사 표시한 날로부터 30일) 보관
                        </li>
                      </ul>
                    </div>
                    <div class="clause">
                      <h4 class="clause__title">
                        전자상거래 등에서의 소비자 보호에 관한 법률,
                        전자금융거래법, 통신비밀보호법 등 법령에서 일정기간
                        정보의 보관을 규정하는 경우는 아래와 같습니다.
                        서베이존는 이 기간 동안 법령의 규정에 따라 개인정보를
                        보관하며, 본 정보를 다른 목적으로는 절대 이용하지
                        않습니다.
                      </h4>
                      <ul class="sections">
                        <li class="sections__section">
                          - 전자상거래 등에서 소비자 보호에 관한 법률 <br />계약
                          또는 청약철회 등에 관한 기록: 5년 보관 <br />대금결제
                          및 재화 등의 공급에 관한 기록: 5년 보관 <br />소비자의
                          불만 또는 분쟁처리에 관한 기록: 3년 보관
                        </li>
                        <li class="sections__section">
                          - 전자문서 및 전자거래 기본법 <br />공인전자주소를
                          통한 전자문서 유통에 관한 기록 : 10년 보관
                        </li>
                        <li class="sections__section">
                          - 통신비밀보호법 <br />로그인 기록: 3개월<br /><br />
                        </li>
                      </ul>
                      <p class="clause__text"></p>
                      <p class="clause__text">
                        참고로 서베이존는 ‘개인정보 유효기간제’에 따라 1년간
                        서비스를 이용하지 않은 회원의 개인정보를 별도로 분리
                        보관하여 관리하고 있습니다.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="article">
                  <h3 class="article__title">
                    4. 개인정보 수집 및 이용 동의를 거부할 권리
                  </h3>
                  <p class="article__text">
                    이용자는 개인정보의 수집 및 이용 동의를 거부할 권리가
                    있습니다. 회원가입 시 수집하는 최소한의 개인정보, 즉, 필수
                    항목에 대한 수집 및 이용 동의를 거부하실 경우, 회원가입이
                    어려울 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
            <!-- <hr style="height: 0.25px" /> -->
            <div style="margin-top: 1rem; border-bottom: 2px solid #f3f3f3">
              <div style="margin-left: 1rem; margin-bottom: 1rem">
                <i
                  class="fas fa-user-circle"
                  style="color: #c5c8c1; margin-left: 0.5rem"
                ></i>
                <span style="margin-left: 0.5rem">{{ metamaskaddr }}</span>
                <p style="font-size: 12px; margin-top: 0.5rem">
                  push 서비스 제공을 위해 회원번호와 함께 개인정보가 제공됩니다.
                  보다 자세한 개인정보 제공항목은 동의 내용에서 확인하실 수
                  있습니다.
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
                  <i
                    class="fas fa-check fa-xs"
                    style="color: #c5c8c1"
                    v-bind:style="{ color: allSelect }"
                  ></i
                  ><span> [필수] 필수 제공 항목</span>
                  <div
                    style="font-size: 16px; color: #c5c8c1; margin-left: 1rem"
                  >
                    <span
                      v-for="project in Object.keys(JSON.parse(project.vp))"
                      :key="project"
                    >
                      <span style="margin-left: 5px"
                        >{{ convertkor(project) }}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <!-- <div>
                <div style="margin-left: 2rem">
                  <div>[선택] 선택 제공 항목</div>
                  <div>
                    <i class="fas fa-check fa-sm" style="color: #c5c8c1"></i>
                    <span style="font-size: 16px; margin-left: 0.5rem"
                      >성별</span
                    >
                  </div>
                </div>
              </div> -->
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
  props: ["project"],
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
  unmounted() {},
  methods: {
    convertkor(vcName) {
      return this.$store.state.vcgradeko[
        this.$store.state.vcgradeengl.indexOf(vcName)
      ];
    },
    allbtn() {
      this.allSelect = this.allSelect == "#ff7f00" ? "#e8e8e8" : "#ff7f00";
      this.allcliclSelect =
        this.allcliclSelect == "2px solid black" ? "" : "2px solid black";
      this.btnbackcolorstyle =
        this.btnbackcolorstyle == "#f6f6f6" ? "#ff7f00" : "#f6f6f6";
      this.btncolorstyle = this.btncolorstyle == "#c5c8c1" ? "" : "#c5c8c1";
    },
    kkk() {
      console.log(this.project.title + "출력");
    },
    printvc(vplist) {
      //JSON.stringify JavaScript 객체를 JSON 텍스트로 바꾸고 해당 JSON 텍스트를 문자열에 저장
      // console.log(JSON.parse(JSON.stringify(this.project.vp.key)));
      console.log(vplist);
      //json데이터에서 key값 추출
      // var keydata = Object.keys(vplist);
      // keydata.forEach((keyname) => {
      //   console.log(keyname);
      // });
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
  height: 48px;
  border-radius: 40%;
  overflow: hidden; /*  넘치는 부분 제거 */
}
.terms_box {
  font-family: Dotum, "돋움", Helvetica, sans-serif;
  font-size: 12px;
  color: #666;
  position: relative;
  overflow: auto;
  height: 88px;
  padding-left: 12px;
  border: 1px solid #dadada;
  background: #fff;
  box-sizing: border-box;
  margin-bottom: 1rem;
  scrollbar-base-color: #d9d9d9;
  scrollbar-arrow-color: #8e8e8e;
  scrollbar-3dlight-color: #d9d9d9;
  scrollbar-darkshadow-color: #d9d9d9;
  scrollbar-face-color: #d9d9d9;
  scrollbar-highlight-color: #d9d9d9;
  scrollbar-shadow-color: #d9d9d9;
  scrollbar-track-color: #f2f2f2;
}
.article,
.policy_summary__text {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: #666;
}
.article {
  margin-top: 15px;
}
.article__title {
  color: #666;
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.clause__title {
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  color: #666;
}
.terms_choice {
  font-size: 12px;
  font-weight: 400;
  color: #8e8e8e;
}
.collect_personal {
  padding-left: 12px;
}
</style>
