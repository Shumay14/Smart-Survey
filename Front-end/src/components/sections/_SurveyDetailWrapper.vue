<template>
    <div class="page-wrapper section-space--inner--top--50 section-space--inner--bottom--120">
        <div class="blog-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 order-1 order-lg-1">
                        <SurveySidebar :blogSidebar="data.blogSidebarData" />
                    </div>
                    <div class="col-lg-8 order-2 order-lg-2">
                        <div class="row">
                            <div class="blog-details col-12">
                                <SurveyContent :blogDetailsData="data.blogDetails" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import data from '../../data/blog.json'

// import BlogSidebar from '@/components/sections/BlogSidebar';
// import BlogDetailsContent from '@/components/BlogDetailsContent';
// import BlogComment from '@/components/BlogComment';
import SurveySidebar from '@/components/sections/_SurveySidebar';
import SurveyContent from '@/components/_SurveyContent';
import BlogComment from '@/components/BlogComment';
    export default {
        components: {
            SurveySidebar,
            SurveyContent,
            BlogComment
        },
        data () {
            return {
                data
            }
        },
    };
</script>