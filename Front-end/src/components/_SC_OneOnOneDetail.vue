<template>
    <div class="page-wrapper section-space--inner--120">
        <div class="blog-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 order-1 order-lg-2">
                        
                        <!-- 내용 시작-->
                        <div class="row">
                            <div class="blog-details col-12">


                                <Messenger />
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
                                        <router-link to="/oneonone" disable>1:1 문의</router-link>
                                    </h5>
                                </div>
                            </div>

                            <!-- 공지사항 3 -->
                            <div class="sidebar-blog">
                                <div class="content">
                                    <h5>
                                        <router-link to="/faq" >FAQ</router-link>
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
        import Messenger from '@/components/sections/_Messenger'

    export default {
        components: {
            Messenger,
        },
        data() {
            return {}
        },
    };
</script>