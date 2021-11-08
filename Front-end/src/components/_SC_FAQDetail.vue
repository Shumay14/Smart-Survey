<template>
    <div class="page-wrapper section-space--inner--120">
        <div class="blog-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 order-1 order-lg-2">

                        <!-- 내용 시작-->
                        <div class="row">
                            <div class="blog-details col-12">

                                <!-- 이너 시작 -->
                                <div class="blog-inner">
                                    <h1>FAQ</h1>
                                    <!-- 아코디언 시작 -->
                                    <div class="accordion accordion-flush" id="accordionFlushExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-headingOne">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                                    aria-expanded="false" aria-controls="flush-collapseOne">
                                                    DID란 무엇인가요?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" class="accordion-collapse collapse"
                                                aria-labelledby="flush-headingOne"
                                                data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body">
                                                    DID란 탈중앙화 신원증명(Decentralized Identifier, 분산아이디)입니다. 기존 신원확인방식과 달리 중앙 시스템에 의해 통제되지 않으며 개개인이 자신의 정보에 완전한 통제권을 갖도록 하는 기술입니다.
                                                </div>
                                            </div>
                                        </div>


                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-headingTwo">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                                    aria-expanded="false" aria-controls="flush-collapseTwo">
                                                    VC가 뭔가요?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                                aria-labelledby="flush-headingTwo"
                                                data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body">Placeholder content for this accordion,
                                                    which is intended to demonstrate the <code>.accordion-flush</code>
                                                    class. This is the second item's accordion body. Let's imagine this
                                                    being filled with some actual content.</div>
                                            </div>
                                        </div>

                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-headingThree">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                                    aria-expanded="false" aria-controls="flush-collapseThree">
                                                    SUB 토큰은 뭔가요?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseThree" class="accordion-collapse collapse"
                                                aria-labelledby="flush-headingThree"
                                                data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body">Placeholder content for this accordion,
                                                    which is intended to demonstrate the <code>.accordion-flush</code>
                                                    class. This is the third item's accordion body. Nothing more
                                                    exciting happening here in terms of content, but just filling up the
                                                    space to make it look, at least at first glance, a bit more
                                                    representative of how this would look in a real-world application.
                                                </div>
                                            </div>
                                        </div>

                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-heading4">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#flush-collapse4"
                                                    aria-expanded="false" aria-controls="flush-collapse4">
                                                    설문조사에 어떻게 참여하나요?
                                                </button>
                                            </h2>
                                            <div id="flush-collapse4" class="accordion-collapse collapse"
                                                aria-labelledby="flush-heading4"
                                                data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body">Placeholder content for this accordion,
                                                    which is intended to demonstrate the <code>.accordion-flush</code>
                                                    class. This is the third item's accordion body. Nothing more
                                                    exciting happening here in terms of content, but just filling up the
                                                    space to make it look, at least at first glance, a bit more
                                                    representative of how this would look in a real-world application.
                                                </div>
                                            </div>
                                        </div>

                                        </div>
                                    <!-- 아코디언 끝 -->

                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-4 order-2 order-lg-1">



                        <!-- 인기있는 포스터 위젯 -->
                        <div class="sidebar-widget">
                            <!-- 위젯 제목 -->
                            <h3 class="sidebar-title">고객센터</h3>

                            <!-- 공지사항 1 -->
                            <div class="sidebar-blog">
                                <div class="content">
                                    <h5>
                                        <router-link to="/notice" >공지사항</router-link>
                                    </h5>
                                </div>
                            </div>

                            <!-- 공지사항 2 -->
                            <div class="sidebar-blog">
                                <div class="content">
                                    <h5>
                                        <router-link to="/oneonone">1:1 문의</router-link>
                                    </h5>
                                </div>
                            </div>

                            <!-- 공지사항 3 -->
                            <div class="sidebar-blog">
                                <div class="content">
                                    <h5>
                                        <router-link to="/faq" disable>FAQ</router-link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <!-- 인기있는 포스터 위젯 끝 -->

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {

        },
        data() {
            return {}
        },
    };
</script>