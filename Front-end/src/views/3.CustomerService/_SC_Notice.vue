<template>
    <div class="main-container">

        <Header />

        <Breadcrumb :items="items" title="공지사항" />

        <NoticeDetail />

        <!-- <BrandCarousel addClass="grey-bg" /> -->

        <Footer />

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

    import NoticeDetail from '@/components/sections/3.CustomerService/_SC_NoticeDetail'

    import OffCanvasMobileMenu from '@/components/_OffCanvasMobileMenu'
    import Footer from "@/components/_Footer";

    export default {
        components: {
            Header,
            Breadcrumb,
            NoticeDetail,
            OffCanvasMobileMenu,
            Footer
        },
        data() {
            return {
                items: [{
                        text: '고객센터',
                        to: "/notice"
                    },
                    {
                        text: '공지사항',
                        active: true
                    }
                ]
            }
        },
        metaInfo: {
            title: '서베이존 - 공지사항',
            htmlAttrs: {
                lang: 'ko',
                amp: true
            }
        }
    }
</script>