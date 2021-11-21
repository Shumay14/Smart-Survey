<template>
    <div class="main-container">

        <Header />

        <Breadcrumb :items="items" title="FAQ" />

        <FAQDetail />
        <Footer/>

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

    import FAQDetail from '@/components/sections/3.CustomerService/_SC_FAQDetail'
    
    import OffCanvasMobileMenu from '@/components/_OffCanvasMobileMenu'
    import Footer from "@/components/_Footer";


    export default {
        components: {
            Header,
            Breadcrumb,
            FAQDetail,
            OffCanvasMobileMenu,
            Footer
        },
        data() {
            return {
                items: [{
                        text: '고객센터',
                        to: "/"
                    },
                    {
                        text: 'FAQ',
                        active: true
                    }
                ]
            }
        },
        metaInfo: {
            title: '서베이존 - FAQ',
            htmlAttrs: {
                lang: 'ko',
                amp: true
            }
        }
    }
</script>