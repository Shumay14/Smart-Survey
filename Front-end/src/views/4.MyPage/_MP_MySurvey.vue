<template>
    <div class="main-container">

        <Header />

        <Breadcrumb :items="items" title="설문조사 결과" />

        <MySurveyDetail />
        <Footer/>

        <OffCanvasMobileMenu />

        <!-- back to top start -->
        <back-to-top class="scroll-top" bottom="60px">
            <i class="ion-android-arrow-up"></i>
        </back-to-top>
        <!-- back to top end -->
    </div>
</template>

<script>

    import Header from '@/components/_Header';
    import Breadcrumb from '@/components/Breadcrumb'
    import MySurveyDetail from '@/components/sections/4.MyPage/_MySurveyDetail'
    import OffCanvasMobileMenu from '@/components/_OffCanvasMobileMenu';
    import Footer from "@/components/_Footer";


    export default {
        components: {
            Header,
            Breadcrumb,
            OffCanvasMobileMenu,
            MySurveyDetail,
            Footer,
        },
        data() {
            return {
                items: [
                    {
                        text: '설문조사 결과',
                        to: "/"
                    },
                    {
                        text: '설문조사 결과',
                        active: true
                    }
                ]
            }
        },
        metaInfo: {
            title: '서베이존 - 설문조사 결과',
            htmlAttrs: {
                lang: 'ko',
                amp: true
            }
        }
    }
</script>

