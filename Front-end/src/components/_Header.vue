<template>
  <!--====================  header area ====================-->
  <fixed-header>
    <div class="header-area">
      <div class="header-area__desktop header-area__desktop--default">
        <!--=======  header top bar  =======-->
        <div class="header-top-bar">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-4">
                <!-- top bar left -->
                <div class="top-bar-left-wrapper">
                  <div
                    class="
                      social-links social-links--white-topbar
                      d-inline-block
                    "
                  >
                    <table>
                      <tr class="mx-auto">
                        <td class="table-dark">총 설문 금액</td>
                        <td class="table-dark">참여 가능한 설문 수</td>
                        <td class="table-dark">예상 수익</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--=======  End of header top bar   =======-->
        <div class="header-info-area">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-12">
                <div class="header-info-wrapper align-items-center">
                  <!-- logo START -->
                  <div class="logo">
                    <router-link to="/">
                      <!-- 기존 로고 -->
                      <!-- <img src="assets/img/logo/logo.png" class="img-fluid" alt="Brand Logo"> -->

                      <!-- 커스텀로고     -->
                      <!-- <img src="assets/img/logo-custom/Logo-full-01.png" class="img-fluid" alt="Brand Logo"> -->
                      <img
                        src="assets/img/logo-custom/Logo-full-02.png"
                        class="img-fluid"
                        alt="Brand Logo"
                      />
                      <!-- <img src="assets/img/logo-custom/Logo-full-03.png" class="img-fluid" alt="Brand Logo"> -->

                      <!-- <img src="assets/img/logo-custom/Logo-img-01.png" class="img-fluid" style="width:50px" alt="Brand Logo"> -->
                      <!-- <img src="assets/img/logo-custom/Logo-img-02.png" class="img-fluid" style="width:50px" alt="Brand Logo"> -->
                      <!-- <img src="assets/img/logo-custom/Logo-img-03.png" class="img-fluid" style="width:50px" alt="Brand Logo"> -->
                      <!-- <img src="assets/img/logo-custom/Logo-img-04.png" class="img-fluid" style="width:50px" alt="Brand Logo"> -->
                      <!-- <spans style="">Survey Zone</spans> -->
                    </router-link>
                  </div>
                  <!-- logo END -->

                  <!-- header contact info -->
                  <div class="header-contact-info">
                    <!-- 네비게이션 -->
                    <div
                      class="
                        header-navigation header-navigation--header-default
                        position-relative
                      "
                    >
                      <div class="header-navigation__nav position-static">
                        <nav>
                          <ul>
                            <li
                              class="
                                has-children has-children--multilevel-submenu
                              "
                            >
                              <router-link to="/surveylist"
                                >설문조사</router-link
                              >
                              <ul class="submenu">
                                <li>
                                  <router-link to="/surveylist"
                                    >전체 설문조사</router-link
                                  >
                                </li>
                                <li>
                                  <router-link to="/surveydrawup"
                                    >참여한 설문조사
                                  </router-link>
                                </li>
                              </ul>
                            </li>

                            <li>
                              <router-link to="/admin">설문 등록</router-link>
                            </li>

                            <li
                              class="
                                has-children has-children--multilevel-submenu
                              "
                            >
                              <router-link to="/notice">고객센터</router-link>
                              <ul class="submenu">
                                <li>
                                  <router-link to="/notice"
                                    >공지사항</router-link
                                  >
                                </li>
                                <li>
                                  <router-link to="/oneonone"
                                    >1:1 문의</router-link
                                  >
                                </li>
                                <li>
                                  <router-link to="/faq">FAQ</router-link>
                                </li>
                              </ul>
                            </li>

                            <li
                              class="
                                has-children has-children--multilevel-submenu
                              "
                            >
                              <router-link to="/mypage">마이페이지</router-link>
                              <ul class="submenu">
                                <li>
                                  <router-link to="/mypage"
                                    >마이페이지</router-link
                                  >
                                </li>
                                <li>
                                  <router-link to="/favorite"
                                    >관심사 설정
                                  </router-link>
                                </li>
                              </ul>
                            </li>

                            <!-- <li class="has-children has-children--multilevel-submenu">
                                                <router-link to="/blog-left-sidebar">BLOG</router-link>
                                                <ul class="submenu">
                                                    <li>
                                                        <router-link to="/blog-left-sidebar">Blog Left Sidebar</router-link>
                                                    </li>
                                                    <li>
                                                        <router-link to="/blog-right-sidebar">Blog Right Sidebar</router-link>
                                                    </li>
                                                    <li>
                                                        <router-link to="/blog-details">Blog Details</router-link>
                                                    </li>
                                                    <li>
                                                        <router-link to="/blog-details-right-sidebar">Blog Details Right Sidebar</router-link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <router-link to="/contact">CONTACT</router-link>
                                            </li> -->
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>

                  <div class="col-3 metamask_div desktop-menu-icon">
                    <!-- 메타마스크 아이콘 시작-->
                    <label class="metamask_Logo">
                      <MetamaskLogo
                        v-if="this.$store.state.metamaskAdd == null"
                      />
                      <img
                        :src="user_avatar"
                        style="width: 2em"
                        alt=""
                        v-if="this.$store.state.metamaskAdd != null"
                      />
                    </label>
                    <!-- 메타마스크 아이콘 종료 -->

                    <!-- 로그인 버튼 시작-->
                    <label
                      type="button"
                      class="metamask_Logo_Button btn btn-dark"
                      v-if="this.$store.state.metamaskAdd == null"
                      style="width: 7em"
                    >
                      로그인
                      <Web3 />
                    </label>
                    <!-- 로그인 버튼 종료 -->

                    <!-- 로그아웃버튼 시작 -->
                    <label
                      type="button"
                      class="btn btn-dark metamask_Logo_Button"
                      style="width: 8em"
                      @click="logout()"
                      v-show="this.$store.state.metamaskAdd != null"
                      >{{ this.$store.state.metamaskShortAdd }}
                    </label>
                    <!-- 로그아웃버튼 종료 -->
                  </div>

                  <!-- mobile menu -->
                  <div
                    class="mobile-navigation-icon"
                    id="mobile-menu-trigger"
                    @click="mobiletoggleClass('addClass', 'active')"
                  >
                    <i></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--=======  End of header info area =======-->
      </div>
    </div>
  </fixed-header>
</template>
<script>
import FixedHeader from "vue-fixed-header";
import Web3 from "@/components/_Web3";
import MetamaskLogo from "@/components/_MetamaskLogo";

export default {
  components: {
    FixedHeader,
    Web3,
    MetamaskLogo,
  },
  data() {
    return {
      user_avatar: "",
    };
  },
  created() {
    this.userAvatar();
  },
  methods: {
    // offcanvas mobilemenu
    mobiletoggleClass(addRemoveClass, className) {
      const el = document.querySelector("#offcanvas-menu");
      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
    logout() {
      this.$store.commit("metamaskAdd", null);
    },
    userAvatar() {
      this.user_avatar =
        "https://identicon-api.herokuapp.com/" +
        this.$store.state.metamaskAdd +
        "/200?format=png";
    },
  },
};
</script>

<style lang="scss">
.vue-fixed-header--isFixed {
  left: 0;
  top: 0;
  width: 100%;
  z-index: 999;
  position: fixed;
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);
  animation: 900ms cubic-bezier(0.2, 1, 0.22, 1) 0s normal none 1 running
    fadeInDown;
}

.desktop-menu-icon {
  /* Mobile Device */
  // 768px 미만 해상도의 모바일 기기를 위한 코드를 작성한다.
  //  모든 해상도에서 이 코드가 실행됨. 미디어 쿼리를 지원하지 않는 모바일 기기를 위해 미디어 쿼리 구문을 사용하지 않는다.
  display: none;

  @media all and (min-width: 1024px) {
    display: block;
    // 사용자 해상도가 1024px 이상일 때 이 코드가 실행됨. 테블릿과 데스크톱의 공통 코드를 작성한다.
    .metamask_div {
      position: relative;
    }

    .metamask_Logo {
      border: 3px solid black;
      padding: 5px;
      border-radius: 30px;
      top: -18px;
      position: absolute;
      z-index: 3;
      background: white;
    }

    .metamask_Logo_Button {
      position: absolute;
      top: -15px;
      left: 40px;
      z-index: 1;
    }
  }
}
</style>
