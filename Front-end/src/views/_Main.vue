<template>
    <div class="main-container">

        <Header />

        <div class="container">
            
            <section class="row content">
                <!-- <div class="d-flex justify-content-center">
                    <img src="assets/img/logo-custom/Logo-text.png" class="img-fluid"  style="width:30em" alt="Brand Logo">
                </div> -->
                <p class="title-sub">
                    탈중앙화 신원인증 기반의 패널인증 설문 플랫폼
                </p>

                <!-- 서비스 정의 한마디 -->
                <p class="title-main">
                    국내 최초 블록체인 기반 설문 <strong>서베이존</strong>,<br>
                    설문조사에 참여해보세요.
                </p>


                <div class="d-flex justify-content-center">
                    <button class="btn-start">
                        설문 조사 참여하기
                    </button>
                </div>

                <!-- 메인이미지 시작 -->
                <div class="d-flex justify-content-center">
                    <!-- <img src="assets/img/main/main-2.png" class="img-main" v-bind:class="{ 'img-main--hidden' : !showNavbar }"/> -->
                    <img src="assets/img/main/main1.png" class="mt-5" style="width:70%" />


                </div>
            </section>


            <div class="row" style="text-align:center;">
                <label class="col-6 simple" v-bind:class="{ btnSimple1 :mainState==true }">
                    <button class="btn-simple" @click="mainState=true"><b>패널</b></button>
                </label>
                <label class=" col-6 simple" v-bind:class="{ btnSimple2 :mainState==false }">
                    <button class="btn-simple" @click="mainState=false"><b>의뢰업체</b></button>
                </label>
            </div>

            <!-- <div style="text-align:center;">
                <input type="checkbox" id="switch1" name="switch1" class="input__on-off">
                <label for="switch1" class="label__on-off">
                    <span class="marble"></span>
                    <span class="on">패 널</span>
                    <span class="off">의뢰업체</span>
                </label>
            </div> -->
        </div>
        <!-- div container 끝 -->

        <!-- div container 시작 -->
        <div class="container">
            <!-- 패널 측 화면 시작 -->
            <transition name="fade">
                <section v-show="mainState==true">
                    <!-- 섹션1 시작 -->
                    <section class="row content">
                        <div class="col-6">
                            <p class="title-sub2">
                                설문조사에 참여하고 <br>
                                쏟아지는 <strong>보상</strong>을 챙겨보세요.
                            </p>
                            <p class="description">
                                설문 의뢰업체가 요구하는 선택적 정보사항을 추가로 제공하고 더 많은 보상을
                                획득 할 수 있습니다.
                            </p>
                        </div>
                        <div class="col-1">

                        </div>
                        <div class="col-5">
                            <img src="assets/img/main/main2.png" style="width:100%" />
                        </div>
                    </section>
                    <!-- 섹션1 종료 -->

                    <!-- 섹션2 시작 -->
                    <section class="row content">

                        <div class="col-5">
                            <img src="assets/img/main/main3.png" style="width:100%" />
                            <!-- class="img-main" v-bind:class="{ 'img-main--hidden' : !showNavbar }"/> -->
                        </div>
                        <div class="col-1">

                        </div>
                        <div class="col-6">
                            <h1 class="title-sub2">
                                개인정보 유출 걱정없는<br>
                                안전한 <strong>설문조사</strong>를 보장합니다.
                            </h1>

                            <p class="description">
                                사용자의 모든 개인정보는 그 누구도 동의없이 확인할 수 없도록 암호화되어
                                블록체인 네트워크 상에서 관리됩니다.
                            </p>
                        </div>
                    </section>
                    <!-- 섹션2 종료 -->
                </section>
            </transition>
            <!-- 패널 측 화면 종료 -->

            <!-- 의뢰업체 측 화면 -->
            <section v-show="mainState==false">
                <!-- 섹션1 시작 -->
                <section class="row content">
                    <div class="col-6">
                        <p class="title-sub2">

                            높은 수준의 <br> <strong>인스던스</strong>를 제공합니다.</p>
                        <p class="description">
                            설문에 참여하는 패널들은 블록체인 상의 DID 발급을 통해 검증된 패널들입니다.
                            이들에게 조건에 맞는 설문조사를 제공하기에, 높은 수준의 인스던스를 달성할 수 있습니다.
                            <!-- 인스던스: 설문의 예상 성공율을 말함 -->
                        </p>
                    </div>
                    <div class="col-1">

                    </div>
                    <div class="col-5">
                        <img src="assets/img/main/mainCom1.png" style="width:100%" />
                    </div>
                </section>
                <!-- 섹션1 종료 -->

                <!-- 섹션2 시작 -->
                <section class="row content">

                    <div class="col-5">
                        <img src="assets/img/main/main3.png" style="width:100%" />
                        <!-- class="img-main" v-bind:class="{ 'img-main--hidden' : !showNavbar }"/> -->
                    </div>
                    <div class="col-1">

                    </div>
                    <div class="col-6">
                        <h1 class="title-sub2">
                            맞춤형 설문 시스템을 통해<br>
                            <strong>스크리닝 비용</strong>을
                            절약합니다.
                        </h1>

                        <p class="description">
                            패널들에게 맞춤형 설문조사 제공을 통한 스크리닝 비용을 감소할 수 있습니다.
                        </p>
                    </div>
                </section>
                <!-- 섹션2 종료 -->
            </section>

            <!-- 의뢰업체 측 화면 종료 -->

            <!-- <section class="row justify-content-center content">
                    <div class="col-6">
                        <h2>"탈중앙화 신원증명, 이미 많은 유저가 경험하고 있습니다."</h2>
                    </div>
                </section> -->

        </div>

        <Footer />

        <OffCanvasMobileMenu />

        <!-- back to top start -->
        <back-to-top class="scroll-top" bottom="60px">
            <i class="ion-android-arrow-up"></i>
        </back-to-top>
        <!-- back to top end -->

        <!--
"내 개인정보에 잠재된 가치, 서베이존에서 찾아가세요."
(버튼)서베이존 시작하기

"내 정보, 직접 관리하며 설문 보상 획득"
설문조사에 필요한 정보, DID로 관리하면 개인정보 유출을 최소화할 수 있습니다.

"내 정보로 참여할 수 있는 설문조사, 개인정보는 최소화"


"탈중앙화 신원증명, 이미 많은 유저가 경험하고 있습니다."

"내 DID, 메타마스크로 간편하게 시작하기"
대표적인 블록체인 지갑 '메타마스크'로 안전하고 편리하게 DID를 관리할 수 있습니다.

"Partners"
디지털존과 함께 탈중앙화 신원증명을 만들어 나갑니다.
        -->
    </div>
</template>

<script>
    import Header from '@/components/_Header';
    import Footer from '../components/_Footer';
    import OffCanvasMobileMenu from '@/components/_OffCanvasMobileMenu';

    export default {
        components: {
            Header,
            Footer,
            OffCanvasMobileMenu,
        },
        data() {
            return {
                showNavbar_a: true,
                showNavbar_b: true,
                mainState: true,

                lastScrollPosition: 0,

                items: [{
                        text: 'Home',
                        to: "/"
                    },
                    {
                        text: 'Contact',
                        active: true
                    }
                ]
            }
        },
        mounted() {
            window.addEventListener('scroll', this.onScroll)
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.onScroll)
        },
        methods: {
            onScroll() {
                // Get the current scroll position
                const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
                // console.log(currentScrollPosition)
                // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero 
                if (currentScrollPosition < 0) {
                    return
                }
                // Here we determine whether we need to show or hide the navbar 
                this.showNavbar = currentScrollPosition < this.lastScrollPosition
                // Set the current scroll position as the last scroll position 
                this.lastScrollPosition = currentScrollPosition
            },
        }
    }
</script>

<style lang="scss" scoped>
    strong {
        color: RGB(238, 111, 0);
    }

    .container {
        padding-top: 80px;
    }

    .content {
        align-items: center;
        padding-bottom: 180px;
        word-break: keep-all;
    }

    .btn {
        &-start {
            background-color: RGB(238, 111, 0);

            border-radius: 10px;
            border: 0px;

            color: white;
            font-weight: bold;
            font-size: 20px;

            width: 300px;
            height: 60px;
        }
    }

    .title {
        &-main {
            // padding-top: 20px;
            font-size: 55px;
            text-align: center;
            font-weight: bold;
            letter-spacing: -2.72px;
        }

        &-sub {
            padding-top: 20px;
            font-size: 24px;
            text-align: center;
            letter-spacing: -0.72px;
        }

        &-sub2 {
            font-size: 40px;
            font-weight: bold;
            line-height: 1.55;
            letter-spacing: -0.12rem;
        }

        &-img {
            width: 150px;
            height: 33px;
            object-fit: cover;
        }
    }

    .img-main {
        height: 60px;
        width: 100vw;
        background: hsl(200, 50%, 50%);
        position: fixed;
        box-shadow: 0 2px 15px rgba(71, 120, 120, 0.5);
        transform: translate3d(0, 0, 0);
        transition: 0.1s all ease-out;

        //fade in 효과 추가필요

        &--hidden {
            box-shadow: none;
            transform: translate3d(0, -100%, 0);
        }
    }

    .description {
        padding-top: 30px;
        font-size: 20px;
        font-weight: 500;
        line-height: 1.6;
        letter-spacing: -0.06rem;
        color: #666;

        word-break: keep-all;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .simple {
        border: #F38024 solid;
        border-radius: 15px 15px 0px 0px;
        border-width: 0px 0px 2px 0px;

    }

    .btn-simple {
        background-color: white;
        font-size: 2em;
        margin: 1rem;
        border: none;
        color: #F38024;
    }

    .btn-simple:hover {
        color: #b6590d;

        // border: #F38024 solid;
        // border-width: 0px 0px 2px 0px;

        // background-color: rgb(228, 228, 228);
    }

    .btnSimple1 {
        color: #cf640c;
        border: #F38024 solid;
        border-width: 2px 2px 0px 2px;
    }

    .btnSimple2 {
        color: #cf640c;
        border: #F38024 solid;
        border-width: 2px 2px 0px 2px;
    }
</style>