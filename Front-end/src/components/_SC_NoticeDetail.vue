<template>
    <div class="page-wrapper section-space--inner--120">
        <div class="blog-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 order-1 order-lg-2">
                        <!-- 내용 시작-->
                        <div class="row">
                            <div class="blog-details col-12">
                                <div class="blog-inner">
                                    <div class="content">

                                        <!-- 시작 -->
                                        <table class="table table-hover">
                                            <thead align="center">
                                                <tr>
                                                    <th class="col-2">번호</th>
                                                    <th class="col-8">제목</th>
                                                    <th class="col-2">날짜</th>
                                                </tr>
                                            </thead>
                                            <tbody align="center" >
                                                <tr v-for="(i, num) in notice" :key="num">
                                                    <th class="col-2">{{i.index}}</th>
                                                    <td class="col-8">{{i.title}}</td>
                                                    <td class="col-2">{{i.date}}</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                      
                                        <!-- 끝 -->
                             
                                    </div>
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
                                        <router-link to="/notice" disable>공지사항</router-link>
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
                                        <router-link to="/faq">FAQ</router-link>
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
    import notice from '../data/_notice.json'
    export default {
        components: {

        },

        data() {
            return {
                notice,
            }
        },
        computed: {
        },
        mounted() {},
        methods: {
            test() {
                console.log("this.notice.length", notice.length)
            }
        },
    };
</script>
<style>
    /* .sidebar-blog:hover {
    background-color: coral;
} */
</style>