<template>
    <div class="main-container">

        <Header />

        <Breadcrumb :items="items" title="Blog Details Right Sidebar" />

        <BlogDetailsWrapperRight />

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
    import Header from '@/components/Header';
    import Breadcrumb from '../components/Breadcrumb'
    import BlogDetailsWrapperRight from '../components/sections/BlogDetailsWrapperRight'
    import BrandCarousel from '../components/BrandCarousel'
    import Footer from '../components/Footer'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

    export default {
        components: {
            Header,
            Breadcrumb,
            BlogDetailsWrapperRight,
            BrandCarousel,
            Footer,
            OffCanvasMobileMenu
        },
        data() {
            return {
                items: [
                    {
                        text: 'Home',
                        to: "/"
                    },
                    {
                        text: 'Blog Details Right Sidebar',
                        active: true
                    }
                ]
            }
        },
        metaInfo: {
            title: 'Castro - Blog Details Right Sidebar',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>

