<template>
    <div class="main-container">

        <Header />

        <Breadcrumb :items="items" title="Blog Details" />

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
    import Breadcrumb from '../components/Breadcrumb'
    import NoticeDetail from '../components/_SC_NoticeDetail'
    import OffCanvasMobileMenu from '@/components/_OffCanvasMobileMenu'
    import Footer from "../components/_Footer";

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
                        text: 'Home',
                        to: "/"
                    },
                    {
                        text: 'Blog Details',
                        active: true
                    }
                ]
            }
        },
        metaInfo: {
            title: 'Castro - Blog Details',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>