<template>
    <div class="page-wrapper section-space--inner--120">
        <!--Projects section start-->
        <div class="project-section">
            <div class="container">
                <div class="row">

                    <!-- 관심사 설정 설명 시작-->
                    <div class="col-12">
                        <div class="project-details mb-3">
                            <h2 class="pb-2">관심사 설정</h2>
                            <p>관심사 설정이란 설정한 관심 항목에 따라 관련 설문조사를 우선으로 추천해주는 맞춤형 서비스입니다. <br>
                                선택된 항목은 관심사 목록으로 이동하며, 목록에서 클릭하는 것으로 클릭된 항목을 뺄 수 있습니다. <br>
                                하단에 사진을 클릭하여 관심사를 추가하세요!</p>
                        </div>
                    </div>
                    <!-- 관심사 설정 설명 끝-->



                    <!-- 이미지 선택 시작 -->
                    <div class="col-lg-8 col-12 section-space--bottom--30 pl-30 pl-sm-15 pl-xs-15">
                        <div class="row row-5 image-popup">
                            <div class="col-lg-3 col-sm-4 col-6 section-space--top--10" v-for="(i, num) in favoriteList"
                                :key="num" @click="addItem(i)" v-show="selectedIndex.includes(i.topIndex) == true">
                                <transition name="fade">
                                    <div class="gallery-item single-gallery-thumb "
                                        v-if="selectedIndex.includes(i.topIndex) == true">
                                        <img :src="i.img" class="img-fluid" alt="thumbnail">
                                        <span class="overlayName">{{i.name}}</span>
                                        <span class="plus"></span>
                                    </div>
                                </transition>

                            </div>
                        </div>
                    </div>
                    <!-- 이미지 선택 끝 -->

                    <!-- 관심사 목록 시작 -->
                    <div class="col-lg-4 col-12 section-space--bottom--30 pt-2">
                        <div class="project-information">
                            <h3>관심사 목록</h3>
                            <button type="button" class="favorite_Selected btn btn-outline-light mx-1 my-1"
                                v-for="(i, num) in selectedItem" :key="num" @click="deleteItem(i)">X {{i.name}}
                            </button>
                        </div>
                    </div>
                    <!-- 관심사 목록 끝 -->

                </div>
            </div>
        </div>
        <!--Projects section end-->
    </div>
</template>

<script>
    import favoriteList from '../../data/_favoriteList.json'
    export default {
        data() {
            return {
                favoriteList,
                selectedItem: [],
                selectedIndex: [0],
                testv1: "",
                testv2: "",
            }
        },
        methods: {
            addItem(i) {
                // 만약 셀렉트 아이템이 포함되어있다면
                if (this.selectedItem.includes(i) == true) {

                } else {
                    // index를 따로 분리
                    this.selectedItem.push(i)
                    this.selectedIndex.push(i.index)
                }
            },

            deleteItem(x) {
                for (let i = 0; i < this.selectedItem.length; i++) {
                    console.log("기존 항목들 리스트: ", i)
                    console.log("누른 값: ", x)
                    if (this.selectedItem[i] == x) {
                        this.selectedItem.splice(i, 1);
                        i--;
                    };
                };

                for (let l = 0; l < this.selectedIndex.length; l++) {
                    if (this.selectedIndex[l] == x.index) {
                        this.selectedIndex.splice(l, 1);
                        // i--;
                    }
                };
            },

        }
    }
</script>
<style lang="scss">
    .favorite_Selected {
        border-radius: 30px !important;
        display: inline;
    }

    .overlayName {
        text-align: center;
        font-size: 1.5rem;
        color: white;
        position: absolute;

        top: 70%;
        left: 0px;

        width: 100%;
        height: 30%;

        background-color: RGBA(0, 0, 0, 0.5);
        // box-sizing: content-box;
        // -moz-box-sizing: content-box;
        // -webkit-box-sizing: content-box;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .7s;
    }

    .fade-enter,
    .fade-leave-to

    /* .fade-leave-active below version 2.1.8 */
        {
        opacity: 0;
    }
</style>