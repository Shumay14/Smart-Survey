<template>
    <div class="main-container">

        <Header />

        <HeroOne :sliderData="data.heroOne" />

        <ServiceSlider />

        <FunFact />

        <AboutSection />

        <LatestProject />

        <TeamJob />

        <Testimonial />

        <BlogSection addClass="grey-bg" />

        <BrandCarousel />

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
    import HeroOne from '../components/sections/HeroOne';
    import ServiceSlider from '../components/sections/ServiceSlider';
    import FunFact from '../components/FunFact';
    import AboutSection from '../components/sections/AboutSection';
    import LatestProject from '../components/sections/LatestProject';
    import TeamJob from '../components/sections/TeamJob';
    import Testimonial from '../components/Testimonial';
    import BlogSection from '../components/sections/BlogSection';
    import BrandCarousel from '../components/BrandCarousel';
    import Footer from '../components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

    import data from '../data/slider.json'
    export default {
        data () {
            return {
                data
            }
        },
        components: {
            Header,
            HeroOne,
            ServiceSlider,
            FunFact,
            AboutSection,
            LatestProject,
            TeamJob,
            Testimonial,
            BlogSection,
            BrandCarousel,
            Footer,
            OffCanvasMobileMenu
        },
        metaInfo: {
            title: 'Castro - Home One',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>
