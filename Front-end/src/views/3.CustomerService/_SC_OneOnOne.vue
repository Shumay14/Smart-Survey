<template>
    <div class="main-container">

        <Header />

        <Breadcrumb :items="items" title="1:1 문의" />

        <OneOnOne />

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

    import OneOnOne from '@/components/sections/3.CustomerService/_SC_OneOnOneDetail'
    
    import Footer from "@/components/_Footer";
    import OffCanvasMobileMenu from '@/components/_OffCanvasMobileMenu'

    export default {
        components: {
            Header,
            Breadcrumb,
            OneOnOne,
            Footer,
            OffCanvasMobileMenu
        },
        data() {
            return {
                items: [{
                        text: '고객센터',
                    },
                    {
                        text: '1:1 문의',
                        to: "/oneonone",
                        active: true
                    }
                ]
            }
        },
        metaInfo: {
            title: '서베이존 - 1:1 문의',
            htmlAttrs: {
                lang: 'ko',
                amp: true
            }
        }
    }
</script>