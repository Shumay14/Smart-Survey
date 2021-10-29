<template>
    <div class="main-container">

        <Header />

        <Breadcrumb :items="items" title="Service Details Right Sidebar" />

        <ServiceDetailsWrapperRight />

        <BrandCarousel addClass="grey-bg" />

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
    import data from '../data/service.json'
    import Header from '@/components/Header';
    import Breadcrumb from '../components/Breadcrumb'
    import ServiceDetailsWrapperRight from '../components/sections/ServiceDetailsWrapperRight'
    import BrandCarousel from '../components/BrandCarousel'
    import Footer from '../components/Footer'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
    export default {
        components: {
            Header,
            Breadcrumb,
            ServiceDetailsWrapperRight,
            BrandCarousel,
            Footer,
            OffCanvasMobileMenu
        },
        data() {
            return {
                data,
                items: [
                    {
                        text: 'Home',
                        to: "/"
                    },
                    {
                        text: 'Service Details Right Sidebar',
                        active: true
                    }
                ]
            }
        },
        metaInfo: {
            title: 'Castro - Service Details Right Sidebar',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>

