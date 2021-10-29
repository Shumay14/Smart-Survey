<template>
    <div class="main-container">

        <Header />

        <Breadcrumb :items="items" title="About Us" />

        <AboutSectionThree />

        <Policy :policyData="data.policy" />

        <Experience :experience="data.experience" />

        <FunFact />

        <TeamMember :teamData="data.team" />

        <Testimonial />

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
    import AboutSectionThree from '../components/sections/AboutSectionThree'
    import Policy from '../components/Policy'
    import Experience from '../components/Experience'
    import FunFact from '../components/FunFact'
    import TeamMember from '../components/sections/TeamMember'
    import Testimonial from '../components/Testimonial'
    import BrandCarousel from '../components/BrandCarousel'
    import Footer from '../components/Footer'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

    import data from '../data/about.json'
    export default {
        components: {
            Header,
            Breadcrumb,
            AboutSectionThree,
            Policy,
            Experience,
            FunFact,
            TeamMember,
            Testimonial,
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
                        text: 'About Us',
                        active: true
                    }
                ]
            }
        },
        metaInfo: {
            title: 'Castro - About Us',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>

