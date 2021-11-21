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
                                                    Accordion Item #1
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" class="accordion-collapse collapse"
                                                aria-labelledby="flush-headingOne"
                                                data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body">Placeholder content for this accordion,
                                                    which is intended to demonstrate the <code>.accordion-flush</code>
                                                    class. This is the first item's accordion body.</div>
                                            </div>
                                        </div>

                                        
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-headingTwo">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                                    aria-expanded="false" aria-controls="flush-collapseTwo">
                                                    Accordion Item #2
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
                                                    Accordion Item #3
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
                            <h3 class="sidebar-title">최신 공지사항</h3>

                            <!-- 공지사항 1 -->
                            <div class="sidebar-blog">
                                <router-link to="/blog-details" class="image">
                                    <img src="https://lh3.googleusercontent.com/proxy/SPxoTn3gHpdVaCaBrjByJXdHQHgrgV96Cb4S6J34TKmpydcL2ERLcgxrFdUg1OY9lORAtPITqUomeE-48RYCuQ9HCA6I6PvJzT9xip-v0ZuyCkcAgQN0vMHsN5Vc3geQ_6zExVjT62sQje2eLgoTVoI"
                                        alt="image">
                                </router-link>
                                <div class="content">
                                    <h5>
                                        <router-link to="/blog-details">스마트 서베이 개발 시작</router-link>
                                    </h5>
                                    <!-- 날짜 적는 칸 -->
                                    <span>2021.11.01</span>
                                </div>
                            </div>

                            <!-- 공지사항 2 -->
                            <div class="sidebar-blog">
                                <router-link to="/blog-details" class="image">
                                    <img src="https://lh3.googleusercontent.com/proxy/SPxoTn3gHpdVaCaBrjByJXdHQHgrgV96Cb4S6J34TKmpydcL2ERLcgxrFdUg1OY9lORAtPITqUomeE-48RYCuQ9HCA6I6PvJzT9xip-v0ZuyCkcAgQN0vMHsN5Vc3geQ_6zExVjT62sQje2eLgoTVoI"
                                        alt="image">
                                </router-link>
                                <div class="content">
                                    <h5>
                                        <router-link to="/blog-details">스마트 서베이 대규모 개편 안내</router-link>
                                    </h5>
                                    <!-- 날짜 적는 칸 -->
                                    <span>2021.10.30</span>
                                </div>
                            </div>

                            <!-- 공지사항 3 -->
                            <div class="sidebar-blog">
                                <router-link to="/blog-details" class="image">
                                    <img src="https://lh3.googleusercontent.com/proxy/SPxoTn3gHpdVaCaBrjByJXdHQHgrgV96Cb4S6J34TKmpydcL2ERLcgxrFdUg1OY9lORAtPITqUomeE-48RYCuQ9HCA6I6PvJzT9xip-v0ZuyCkcAgQN0vMHsN5Vc3geQ_6zExVjT62sQje2eLgoTVoI"
                                        alt="image">
                                </router-link>
                                <div class="content">
                                    <h5>
                                        <router-link to="/blog-details">서베이 스낵 사이트명 변경 안내</router-link>
                                    </h5>
                                    <!-- 날짜 적는 칸 -->
                                    <span>21.10.25</span>
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