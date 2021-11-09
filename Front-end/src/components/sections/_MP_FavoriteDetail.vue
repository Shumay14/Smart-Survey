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
                            <p>관심사 설정이란 자신에게 맞는 설문조사를 추천해주는 맞춤설정을 할 수 있는 서비스입니다. 하단에 항목을 선택하면 설문조사를 추천할 때 우선으로 띄워줍니다.
                            </p>
                        </div>
                    </div>
                    <!-- 관심사 설정 설명 끝-->

                    <!-- 관심사 목록 시작 -->
                    <div class="col-lg-4 col-12 section-space--bottom--30">
                        <div class="project-information">
                            <h3>관심사 목록</h3>
                            <button type="button" class="favorite_Selected btn btn-outline-light mx-1 my-1"
                                v-for="(i, num) in selectedItem" :key="num" @click="deleteItem(i)">X {{i.name}}
                            </button>
                        </div>
                    </div>
                    <!-- 관심사 목록 끝 -->

                    <!-- 이미지 선택 시작 -->
                    <div class="col-lg-8 col-12 section-space--bottom--30 pl-30 pl-sm-15 pl-xs-15">
                        <div class="row row-5 image-popup">
                            <div class="col-xl-2 col-lg-3 col-sm-4 col-6 section-space--top--10"
                                v-for="(i, num) in favoriteList" :key="num" v-show="i.level == 1" @click=" addItem(i)">
                                <div class="gallery-item single-gallery-thumb">
                                    <img :src="i.img" class="img-fluid" alt="thumbnail">
                                    <span class="overlayName">{{i.name}}</span>
                                    <span class="plus"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 이미지 선택 끝 -->




                    <!-- 아이템 필터링 시작 -->

                    <!-- 아이템 필터링 끝 -->


                </div>
            </div>
        </div>
        <!--Projects section end-->
    </div>
</template>

<script>
    import favoriteList from '../../data/favoriteList.json'
    export default {
        data() {
            return {
                favoriteList,
                selectedItem: [],
            }
        },
        methods: {
            addItem(i) {
                console.log("클릭되고 있습니다!");

                // 1안
                if (this.selectedItem.includes(i) == true) {
                    console.log(i.level)
                } else {
                    this.selectedItem.push(i)
                }


                // console.log(this.selectedItem)
                // console.log(this.selectedItemLevel)
            },

            deleteItem(x) {
                for (let i = 0; i < this.selectedItem.length; i++) {
                    console.log(i)
                    console.log(x)
                    if (this.selectedItem[i] == x) {
                        this.selectedItem.splice(i, 1);
                        i--;
                    }
                }

            }
        }
    };
</script>
<style lang="scss">
    .favorite_Selected {
        border-radius: 30px !important;
        display: inline;
    }

    .overlayName {
        text-align: center;
        font-size: 150%;
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
</style>