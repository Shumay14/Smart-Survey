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
                                    <div class="accordion accordion-flush" v-bind:id="'accordionFlush'+num"
                                        v-for="(i,num) in reword" :key="num">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" v-bind:id="'flush-heading'+num">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    v-bind:data-bs-target="'#flush-collapse'+num" aria-expanded="false"
                                                    v-bind:aria-controls="'flush-collapse'+num">
                                                    {{i.title}}
                                                </button>
                                            </h2>
                                            <div v-bind:id="'flush-collapse'+num" class="accordion-collapse collapse"
                                                v-bind:aria-labelledby="'flush-heading'+num"
                                                v-bind:data-bs-parent="'#accordionFlush'+num">
                                                <div class="accordion-body">
                                                    {{i.content}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="accordion accordion-flush" v-bind:id="'accordionFlush'+num"
                                        v-for="(i,num) in reword" :key="num">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-heading{{num}}">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    v-bind:data-bs-target="'#flush-collapse'+num" aria-expanded="false"
                                                    v-bind:aria-controls="'flush-collapse'+num">
                                                    {{i.title}}
                                                </button>
                                            </h2>
                                            <div v-bind:id="'flush-collapse'+num" class="accordion-collapse collapse"
                                                v-bind:aria-labelledby="'flush-heading'+num"
                                                v-bind:data-bs-parent="'#accordionFlush'+num">
                                                <div class="accordion-body">
                                                    {{i.content}}
                                                </div>
                                            </div>
                                        </div>
                                    </div> -->
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
                                        <router-link to="/notice">공지사항</router-link>
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
    import reword from '../data/_faq_reword.json'

    export default {
        components: {

        },
        data() {
            return {
                reword,
            }
        },
    };
</script>