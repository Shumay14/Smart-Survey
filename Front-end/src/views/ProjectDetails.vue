<template>
    <div class="main-container">

        <Header />

        <Breadcrumb :items="items" title="Project Details" />

        <ProjectDetailsWrapper />

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
    import data from '../data/project.json'
    import Header from '@/components/Header';
    import Breadcrumb from '../components/Breadcrumb'
    import ProjectDetailsWrapper from '../components/sections/ProjectDetailsWrapper'
    import BrandCarousel from '../components/BrandCarousel'
    import Footer from '../components/Footer'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
    export default {
        components: {
            Header,
            Breadcrumb,
            ProjectDetailsWrapper,
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
                        text: 'Project Details',
                        active: true
                    }
                ]
            }
        },
        metaInfo: {
            title: 'Castro - Project Details',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>

