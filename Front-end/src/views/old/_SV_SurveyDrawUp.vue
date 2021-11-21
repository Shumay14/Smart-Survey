<template>
    <div class="main-container">

        <Header />

        <!-- Projects section start -->
        <div class="page-wrapper section-space--inner--120">
            <div class="project-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="project-item-wrapper">
                                <div class="row">
                                    <div class="col-lg-4 col-sm-6 col-12 section-space--bottom--30"
                                        v-for="project in data.projectGrid" :key="project.id">
                                        <ProjectGrid :project="project" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 페이지 네이션 -->
                    <div class="row section-space--top--60">
                        <div class="col">
                            <ul class="page-pagination">
                                <li><a href="#"><i class="fa fa-angle-left"></i> 처음222</a></li>
                                <li class="active"><a href="#">01</a></li>
                                <li><a href="#">02</a></li>
                                <li><a href="#">03</a></li>
                                <li><a href="#"><i class="fa fa-angle-right"></i> 다음</a></li>
                            </ul>
                        </div>
                    </div>
                    <!-- 페이지 네이션 끝 -->
                </div>
            </div>
        </div>
        <!-- Projects section end -->

        <OffCanvasMobileMenu />

        <!-- back to top start -->
        <back-to-top class="scroll-top" bottom="60px">
            <i class="ion-android-arrow-up"></i>
        </back-to-top>
        <!-- back to top end -->
    </div>
</template>

<script>
    import data from '@/data/project.json'
    import Header from '@/components/_Header';
    import ProjectGrid from '@/components/ProjectGrid'
    import OffCanvasMobileMenu from '@/components/_OffCanvasMobileMenu';

    export default {
        components: {
            Header,
            ProjectGrid,
            OffCanvasMobileMenu
        },
        data() {
            return {
                data,
                items: [{
                        text: 'Home',
                        to: "/"
                    },
                    {
                        text: 'Project',
                        active: true
                    }
                ]
            }
        },
        metaInfo: {
            title: '서베이존 - 참여한 설문조사',
            htmlAttrs: {
                lang: 'ko',
                amp: true
            }
        }
    }
</script>