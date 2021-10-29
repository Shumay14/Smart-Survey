<template>
    <div class="main-container">

        <Header />

        <Breadcrumb :items="items" title="설문 리스트" />
        <BrandCarousel addClass="grey-bg" />  <!-- 필요없음 -->  

        <SurveySlider /> <!-- 상단 슬라이드 3개 -->
        <!-- 위 아래 컴포넌트 사이, 보상 가격별 필터링 필요 -->
        <SurveyDetailWrapper /> <!-- 메인 내용, 세부 컴포넌트들을 포함하는 Vue -->
        <!-- More Load 버튼 생성 필요 (계속해서 설문 파일을 가져오는 모듈)-->
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
    import SurveySlider from '../components/sections/_SurveySlider';
    import SurveyDetailWrapper from '../components/sections/_SurveyDetailWrapper'
    import BrandCarousel from '../components/_BrandCarousel'
    import Footer from '../components/Footer'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        components: {
            Header,
            Breadcrumb,
            SurveySlider,
            SurveyDetailWrapper,
            BrandCarousel,
            Footer,
            OffCanvasMobileMenu
        },
        data() {
            return {
                items: [
                    {
                        text: 'Smart Survey',
                        to: "/"
                    },
                    {
                        text: '쓸데없는 내 정보, 팔아서 치킨이나 뜯자. 좀 많이',
                        active: true
                    }
                ]
            }
        },
        metaInfo: {
            title: 'Castro - Blog Left Sidebar',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>

