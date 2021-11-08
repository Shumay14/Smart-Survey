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
                                        <!-- <h2 class="title">스마트 서베이 개발 시작</h2>
                                        <div class="desc section-space--bottom--30">
                                            <p>안녕하세요!<br>어느덧 찬바람이 불어오기시작하는 11월 입니다.<br></p>

                                            <blockquote
                                                class="blockquote section-space--bottom--30 section-space--top--30">
                                                <p>블록체인 DID 기반 스마트 서베이 <br>11월 1일 사이트 대규모 개편예정</p>
                                                <span class="author">__HK DID 3팀</span>
                                            </blockquote>

                                            <p>11월 1일 부터 스마트서베이 개발을 시작합니다.<br></p>

                                        </div>
                                        <ul class="meta">
                                            <li>By HK DID 3팀
                                            </li>
                                            <li>
                                                2021.11.01
                                            </li>
                                        </ul> -->
                                        <!-- 시작 -->
                                        <table class="table table-hover">
                                            <thead align="center">
                                                <tr>
                                                    <th class="col-2">번호</th>
                                                    <th class="col-8">제목</th>
                                                    <th class="col-2">날짜</th>
                                                </tr>
                                            </thead>
                                            <tbody align="center">
                                                <tr>
                                                    <th class="col-2">2</th>
                                                    <td class="col-8">대규모 업데이트 공고</td>
                                                    <td class="col-2">2021-11-02</td>
                                                </tr>
                                                <tr>
                                                    <th class="col-2">1</th>
                                                    <td class="col-8">서베이스낵이 변경됩니다</td>
                                                    <td class="col-2">2021-11-01</td>
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
    export default {
        components: {

        },
        data() {
            return {}
        },
    };
</script>
<style>
    /* .sidebar-blog:hover {
    background-color: coral;
} */
</style>