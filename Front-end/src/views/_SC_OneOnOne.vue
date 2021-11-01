<template>
    <div class="main-container">

        <Header />

        <Breadcrumb :items="items" title="Blog Details" />

        <OneOnOne />

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
    import OneOnOne from '../components/_SC_OneOnOneDetail'
    import OffCanvasMobileMenu from '@/components/_OffCanvasMobileMenu'

    export default {
        components: {
            Header,
            Breadcrumb,
            OneOnOne,
            OffCanvasMobileMenu
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