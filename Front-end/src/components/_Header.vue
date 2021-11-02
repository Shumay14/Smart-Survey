<template>
    <!--====================  header area ====================-->
    <div class="header-area">
        <div class="header-area__desktop header-area__desktop--default">

            <fixed-header>
                <!--=======  header info area  =======-->
                <div class="header-info-area" style="border: 0 3px 0 solid red">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-12">
                                <div class="header-info-wrapper align-items-center row">

                                    <!-- logo START -->
                                    <div class="logo col-3">
                                        <router-link to="/">
                                            <img src="assets/img/logo/logo.png" class="img-fluid" alt="Brand Logo">
                                        </router-link>
                                    </div>
                                    <!-- logo END -->

                                    <!-- header contact info -->
                                    <div class="header-contact-info col-6">
                                        <!-- 네비게이션 -->
                                        <div
                                            class="header-navigation header-navigation--header-default position-relative">
                                            <div class="header-navigation__nav position-static">
                                                <nav>
                                                    <ul>
                                                        <li class="has-children has-children--multilevel-submenu">
                                                            <router-link to="/home-one">설문조사</router-link>
                                                            <ul class="submenu">
                                                                <li>
                                                                    <router-link to="/surveylist">전체 설문조사</router-link>
                                                                </li>
                                                                <li>
                                                                    <router-link to="/surveydrawup">참여한 설문조사
                                                                    </router-link>
                                                                </li>
                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <router-link to="/about">설문 등록</router-link>
                                                        </li>

                                                        <li class="has-children has-children--multilevel-submenu">
                                                            <router-link to="/notice">고객센터</router-link>
                                                            <ul class="submenu">
                                                                <li>
                                                                    <router-link to="/notice">공지사항</router-link>
                                                                </li>
                                                                <li>
                                                                    <router-link to="/oneonone">1:1 문의</router-link>
                                                                </li>
                                                                <li>
                                                                    <router-link to="/faq">FAQ</router-link>
                                                                </li>
                                                            </ul>
                                                        </li>

                                                        <li class="has-children has-children--multilevel-submenu">
                                                            <router-link to="/mypage">마이페이지</router-link>
                                                            <ul class="submenu">
                                                                <li>
                                                                    <router-link to="/mypage">마이페이지</router-link>
                                                                </li>
                                                                <li>
                                                                    <router-link to="/project-details">관심사 설정
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

                                    <div class="col-3">
                                        <label type="button" class="btn btn-dark" v-if="!this.$store.state.metamaskAdd"
                                            style="width:7em">
                                            <MetamaskLogo />
                                            로그인
                                            <Web3 />
                                        </label>

                                        <label type="button" class="btn btn-dark" style="width:7em" @click="logout()"
                                            v-show="this.$store.state.metamaskAdd">로그아웃
                                        </label>
                                    </div>


                                    <!-- mobile menu -->
                                    <div class="mobile-navigation-icon" id="mobile-menu-trigger"
                                        @click="mobiletoggleClass('addClass', 'active')">
                                        <i></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </fixed-header>
            <!--=======  End of header info area =======-->
        </div>
    </div>

</template>

<script>
    import FixedHeader from 'vue-fixed-header'
    import Web3 from "@/components/_Web3"
    import MetamaskLogo from "@/components/_MetamaskLogo"

    export default {
        components: {
            FixedHeader,
            Web3,
            MetamaskLogo
        },
        methods: {
            // offcanvas mobilemenu
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
            logout() {
                this.$store.commit("metamaskAdd", null)
            }
        },
    };
</script>

<style lang="scss">
    .vue-fixed-header--isFixed {
        left: 0;
        top: 0;
        width: 100vw;
        z-index: 999;
        position: fixed;
        box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);
        animation: 900ms cubic-bezier(0.2, 1, 0.22, 1) 0s normal none 1 running fadeInDown;
    }
</style>