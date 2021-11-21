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
                                    <div class="py-3">
                                        <button type="button" class="btn btn-danger mx-1"
                                            @click='selected=blockchain'>블록체인</button>
                                        <button type="button" class="btn btn-danger mx-1"
                                            @click="selected=reword">보상</button>
                                        <button type="button" class="btn btn-danger mx-1"
                                            @click="selected=survey">설문조사</button>
                                        <button type="button" class="btn btn-danger mx-1"
                                            @click="selected=user">회원</button>
                                    </div>
                                    <!-- reword 아코디언 시작 -->
                                    <div class="accordion" v-bind:id="'accordion'+num"
                                        v-for="(i,num) in selected" :key="num">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header " v-bind:id="'flush-heading-reword'+num">
                                                <button class="accordion-button collapsed orange-text" type="button"
                                                    data-bs-toggle="collapse"
                                                    v-bind:data-bs-target="'#flush-collapse-reword'+num"
                                                    aria-expanded="true"
                                                    v-bind:aria-controls="'flush-collapse-reword'+num" >
                                                    {{i.title}}
                                                </button>
                                            </h2>
                                            <div v-bind:id="'flush-collapse-reword'+num"
                                                class="accordion-collapse collapse"
                                                v-bind:aria-labelledby="'flush-heading-reword'+num"
                                                v-bind:data-bs-parent="'#accordion'+num">
                                                <div class="accordion-body">
                                                    {{i.content}}
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
    import blockchain from '@/data/_faq_blockchain.json'
    import reword from '@/data/_faq_reword.json'
    import survey from '@/data/_faq_survey.json'
    import user from '@/data/_faq_user.json'

    export default {
        components: {

        },
        data() {
            return {
                blockchain,
                reword,
                survey,
                user,
                selected: blockchain,
            }
        },
        methods: {

        }
    };
</script>
<style scoped>
    .btn-danger {
        color: #fff;
        background-color: #F38024;
        border-color: #F38024
    }

    .btn-danger:hover {
        color: #fff;
        background-color: #b15912;
        border-color: #ad5208
    }

    .btn-danger.focus,
    .btn-danger:focus {
        color: #fff;
        background-color: #F38024;
        border-color: #eb6f09;
        box-shadow: 0 0 0 .2rem rgba(243, 76, 10, 0.5)
    }

    .btn-danger.disabled,
    .btn-danger:disabled {
        color: #fff;
        background-color: #F38024;
        border-color: #F38024
    }

    .btn-danger:not(:disabled):not(.disabled).active,
    .btn-danger:not(:disabled):not(.disabled):active,
    .show>.btn-danger.dropdown-toggle {
        color: #fff;
        background-color: #b15912;
        border-color: #b15912
    }

    .btn-danger:not(:disabled):not(.disabled).active:focus,
    .btn-danger:not(:disabled):not(.disabled):active:focus,
    .show>.btn-danger.dropdown-toggle:focus {
        box-shadow: 0 0 0 .2rem rgba(225, 83, 97, .5)
    }

    .orange-text{
        color: #F38024;
        
    }
</style>