<template>
    <div class="main-container">

        <Header />

        <Breadcrumb :items="items" title="Contact Us" />

        <FavoriteDetail />
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
    import FavoriteDetail from '../components/sections/_MP_FavoriteDetail'
    import Footer from "../components/_Footer";
    import OffCanvasMobileMenu from '@/components/_OffCanvasMobileMenu';

    export default {
        components: {
            Header,
            Breadcrumb,
            OffCanvasMobileMenu,
            FavoriteDetail,
            Footer
        },
        data() {
            return {
                items: [
                    {
                        text: 'Home',
                        to: "/"
                    },
                    {
                        text: 'Contact',
                        active: true
                    }
                ]
            }
        },
        metaInfo: {
            title: 'Castro - Contact Us',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>

