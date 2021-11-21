<template>
    <div class="main-container">

        <Header />

        <Breadcrumb :items="items" title="마이페이지" />

        <MyPageDetail />
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
    import MyPageDetail from '@/components/sections/4.MyPage/_MyPageDetail'
    import OffCanvasMobileMenu from '@/components/_OffCanvasMobileMenu';
    import Footer from "@/components/_Footer";


    export default {
        components: {
            Header,
            Breadcrumb,
            OffCanvasMobileMenu,
            MyPageDetail,
            Footer,
        },
        data() {
            return {
                items: [
                    {
                        text: '마이페이지',
                        to: "/"
                    },
                    {
                        text: '마이페이지',
                        active: true
                    }
                ]
            }
        },
        metaInfo: {
            title: '서베이존 - 마이페이지',
            htmlAttrs: {
                lang: 'ko',
                amp: true
            }
        }
    }
</script>

