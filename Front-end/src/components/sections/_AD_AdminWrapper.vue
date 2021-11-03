<template>
    <div class="page-wrapper section-space--inner--120">
        <div class="blog-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 order-1 order-lg-2">
                        <div class="row">
                            <div class="col-12 section-space--top--60">
                                    <div class="comment-wrapper">
                                        <h3>Leave Your Comment</h3>
                                        <div class="comment-form">
                                            <form action="#">
                                                <div class="row row-10">
                                                    <div class="col-md-6 col-12 section-space--bottom--20">
                                                        <input type="text" placeholder="URL">
                                                    </div>
                                                    <div class="col-md-6 col-12 section-space--bottom--20">
                                                        <input type="email" placeholder="보상">
                                                    </div>
                                                    <div class="col-12">
                                                        <textarea placeholder="필수 정보 목록"></textarea>
                                                    </div>
                                                    <div class="col-12">
                                                        <textarea placeholder="선택 정보 목록"></textarea>
                                                    </div>
                                                    <div class="col-12">
                                                        <input type="submit" value="Send Comment">
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                <!-- <BlogComment /> -->
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 order-2 order-lg-1">
                        <BlogSidebar :blogSidebar="data.blogSidebarData" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import data from '../../data/blog.json'

import BlogSidebar from '@/components/sections/BlogSidebar';
import BlogDetailsContent from '@/components/BlogDetailsContent';
import BlogComment from '@/components/BlogComment';
    export default {
        components: {
            BlogSidebar,
            BlogDetailsContent,
            BlogComment
        },
        data () {
            return {
                data
            }
        },
    };
</script>