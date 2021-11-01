<template>
    <div class="page-wrapper section-space--inner--120">
        <div class="blog-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 order-1 order-lg-2">

                        <!-- 내용 시작-->
                        <div class="row">
                            <div class="blog-details col-12">


                                메신져를 넣자
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