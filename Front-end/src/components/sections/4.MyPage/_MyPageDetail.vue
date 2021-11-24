<template>
  <div class="page-wrapper section-space--inner--120">
    <!--Contact section start-->
    <div class="conact-section">
      <div class="container">
        <div class="row">
          <!-- 위젯 시작 -->
          <b-card>
            <!-- 위젯 제목 -->
            <!-- <div class="row">
                            <h3>사용자 정보</h3>
                        </div> -->

            <!-- 메타마스크 로그인 시작 -->
            <div class="row g-0">
              <!-- 1번쨰 시작-->
              <div class="col-6 row g-0 mx-auto">
                <div class="col-2 d-flex justify-content-center align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="30px"
                    height="30px"
                    viewBox="0 0 450 400"
                    class="simpleIcon"
                  >
                    <path
                      fill-rule="evenodd"
                      stroke="rgb(0, 0, 0)"
                      stroke-width="10px"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                      d="M407.000,208.000 L434.000,300.000 L407.000,390.000 L315.000,367.000 L258.000,405.000 L193.000,406.000 L137.000,366.000 L41.000,389.000 L14.000,298.000 L42.000,210.000 L10.000,74.000 L32.000,10.000 L166.000,60.000 L281.000,60.000 L415.000,10.000 L438.000,74.000 L407.000,208.000 ZM264.000,274.000 L299.000,263.000 L298.000,257.000 L273.000,246.000 L270.000,247.000 L259.000,270.000 L264.000,274.000 ZM183.000,274.000 L188.000,270.000 L177.000,247.000 L174.000,246.000 L149.000,257.000 L148.000,263.000 L183.000,274.000 ZM46.000,28.000 L26.000,80.000 L57.000,195.000 L138.000,174.000 L193.000,128.000 L46.000,28.000 ZM247.000,333.000 L201.000,333.000 L193.000,338.000 L191.000,363.000 L193.000,366.000 L255.000,366.000 L257.000,364.000 L254.000,338.000 L247.000,333.000 ZM403.000,28.000 L256.000,128.000 L311.000,174.000 L392.000,195.000 L423.000,80.000 L403.000,28.000 Z"
                    />
                  </svg>
                </div>

                <div class="col-9">
                  <h5>메타마스크 주소</h5>
                  <div class="metamaskAddress">
                    <p
                      v-show="this.$store.state.metamaskAdd"
                      style="margin: 0px"
                    >
                      {{ this.$store.state.metamaskAdd }}
                    </p>
                    <p
                      v-show="!this.$store.state.metamaskAdd"
                      style="margin: 0px"
                    >
                      메타마스크 로그인을 해주세요.
                    </p>
                  </div>
                </div>
              </div>
              <!-- 1번째 종료 -->

              <!-- 2번째 시작 -->
              <div class="col-6 row g-0 mx-auto">
                <div class="col-2 d-flex justify-content-center align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="30px"
                    height="30px"
                    viewBox="0 0 450 400"
                    class="simpleIcon"
                  >
                    <path
                      fill-rule="evenodd"
                      stroke="rgb(0, 0, 0)"
                      stroke-width="10px"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                      d="M214.995,10.956 C328.210,10.956 419.990,76.168 419.990,156.611 C419.990,237.053 328.210,302.265 214.995,302.265 C204.863,302.265 194.903,301.743 185.165,300.734 C170.484,299.213 85.524,367.000 85.524,367.000 C85.524,367.000 117.939,285.292 106.554,280.240 C48.573,254.510 10.000,208.761 10.000,156.611 C10.000,76.168 101.779,10.956 214.995,10.956 Z"
                    />
                  </svg>
                </div>

                <div class="col-9">
                  <h5>카카오톡 본인 인증</h5>
                  <div class="">
                    <KakaoLogin />
                  </div>
                </div>
              </div>
              <!-- 2번째 종료 -->
            </div>
          </b-card>
          <!-- 위젯 종료 -->

          <b-card class="my-3">
            <div class="contact-form">
              <h3 class="pb-3">리워드 내역</h3>
              <Chart />
            </div>

            <div class="contact-form mt-5">
              <!-- 리워드 테이블 시작 -->
              <table class="table reward_table">
                <thead>
                  <tr>
                    <th class="col-3">일자</th>
                    <th>설문조사 명</th>
                    <th class="col-3">보상</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2021.11.05</td>
                    <td>유튜브 패널 조사</td>
                    <td>0.6 SUB</td>
                  </tr>
                  <tr>
                    <td>2021.11.05</td>
                    <td>소비자 기호도 조사</td>
                    <td>0.4 SUB</td>
                  </tr>
                  <tr>
                    <td>2021.11.05</td>
                    <td>전자제품 선호도 조사</td>
                    <td>0.8 SUB</td>
                  </tr>
                  <tr>
                    <td>2021.11.05</td>
                    <td>갤럭시 핸드폰 만족도 조사</td>
                    <td>0.4 SUB</td>
                  </tr>
                </tbody>
              </table>
              <!-- 리워드 테이블 끝 -->

              <!-- 페이지 네이션 -->
              <div class="row section-space--top--60">
                <div class="col">
                  <ul class="page-pagination">
                    <li>
                      <a href="#"><i class="fa fa-angle-left"></i> 처음</a>
                    </li>
                    <li class="active"><a href="#">01</a></li>
                    <li><a href="#">02</a></li>
                    <li><a href="#">03</a></li>
                    <li>
                      <a href="#"><i class="fa fa-angle-right"></i> 다음</a>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- 페이지 네이션 끝 -->
            </div>
          </b-card>
        </div>
      </div>
    </div>
    <!--Contact section end-->
  </div>
</template>

<script>
import data from "@/data/contact.json";
import KakaoLogin from "@/components/_KakaoLogin";
import Chart from "@/components/sections/4.MyPage/_Chart";

export default {
  components: {
    KakaoLogin,
    Chart,
  },
  data() {
    return {
      data,
    };
  },
  mSUBods: {
    test() {
      console.log(this.$store.state.metamaskAdd);
    },
  },
};
</script>
<style scoped>
.reward_table {
  text-align: center;
}

.metamaskAddress {
  font-size: 0.85em;
}

.simpleIcon {
  padding-left: 0px;
  padding-right: 0px;
}
</style>
