<template>
    <div class="service-grid-item service-grid-item--style2 custom">
        <div class="service-grid-item__image">
            <div class="service-grid-item__image-wrapper">
                <router-link to="/project-details">
                    <img :src="project.image" class="img-fluid" alt="thumbnail">
                </router-link>
            </div>
        </div>
        <div class="service-grid-item__content">
            <h3 class="title">
                <router-link to="/project-details">
                    {{ project.title }}
                </router-link>
            </h3>
            <p class="subtitle">{{ project.desc }}</p>
            <router-link to="/project-details" class="see-more-link">VIEW MORE</router-link>
        </div>
        <div class="locked" v-if="project.title =='Work Manage Construction'"></div>
        <!-- VC GRade가 일치하지 않을 떄 -->
    </div>
</template>

<script>
    export default {
        props: ['project']
    };
</script>

<style lang="scss" scoped>
    .custom{
        position: relative;
    }
    .locked{
        position: absolute;
        
        top: 0px;
        left: 0px;

        width: 100%;
        height: 100%;

        // box-sizing: border-box;
        // -moz-box-sizing: border-box; /* 파이어폭스(Firefox)*/
        // -webkit-box-sizing: border-box;
        background-color: RGBA(0,0,0,0.5);

        box-sizing: content-box;
        -moz-box-sizing: content-box; /* 파이어폭스(Firefox)*/
        -webkit-box-sizing: content-box;
    }
</style>