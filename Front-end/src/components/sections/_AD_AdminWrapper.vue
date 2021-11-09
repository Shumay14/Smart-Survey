<template>
    <!-- <div class="container section-space--inner--60 ">
        <div class="comment-wrapper">
            <h3>설문 등록 페이지</h3>
            <div class="comment-form">
                <div class="row">
                    <div class="col-12 section-space--bottom--20 "> 
                        <span class="title-admin-main"> URL </span>
                        <input type="text">
                    </div>

                    <div class="col-12 section-space--bottom--20 "> 
                        <span class="title-admin-main"> 설명 </span>
                        <input type="text">
                    </div>

                    <div class="col-lg-4 col-sm-12 section-space--bottom--20"> 
                        <span class="title-admin-main"> 보상금 </span>
                        <input type="text">
                    </div>

                    <div class="col-lg-4 col-sm-12 section-space--bottom--20"> 
                        <span class="title-admin-main"> 표본수 </span>
                        <input type="number" min="1">
                    </div>

                        <div class="col-lg-4 col-sm-12 section-space--bottom--20"> 
                        <span class="title-admin-main"> 보상 지급액 </span>
                        <span class="title-admin-sub"> ( 보상 지급액 = 보상금 / 표본수 ) </span>
                        <input type="text">
                    </div>
                     -->
                    <div class="col-lg-6 section-space--bottom--20"> 
                        <span class="title-admin-main"> 참여 조건 설정</span>
                        <input type="text" placeholder="검색">
                        <table class="table table-hover">
                            <thead align="center">
                                <tr>
                                    <th class="col-2">항목명</th>
                                    <th class="col-8">상태</th>
                                </tr>
                            </thead>
                            <tbody align="center">
                                <tr :key="tableIndex" v-for="privacyItem, tableIndex in privacyList" >
                                    <th class="col-2">{{privacyItem.description}}</th>
                                    
                                    <td class="col-8" v-if="surveySetting[tableIndex] === undefined">
                                        "#" {{surveySetting[tableIndex]}}"#" 
                                        <input type="button" @click="testa(tableIndex)" placeholder="test" />
                                    </td>

                                    <td class="col-8" v-else>
                                        test
                                        {{surveySetting[tableIndex]}}@@
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                
                    <!-- <div class="col-lg-6">
                        <span class="title-admin-main"> 세부 조건 설정 </span>
                        <input type="text" placeholder="검색">
                    </div> -->
                    <!-- <div class="col-12 d-flex justify-content-center">
                        <input type="submit" value="등록하기">
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>

<script>

    export default {
        components: {
        },
        data () {
            return {
                surveySetting: [                 
                ],
                privacyList: [
                    {
                        idx: 0,
                        name: 'birth',
                        description: '생년월일'
                    },{
                        idx: 1,
                        name: 'address',
                        description: '거주지'
                    },{
                        idx: 2,
                        name: 'phone',
                        description: '핸드폰'
                    },{
                        idx: 3,
                        name: 'income',
                        description: '연봉'
                    },{
                        idx: 4,
                        name: 'gender',
                        description: '성별'
                    },
                ]
            }
        },
        computed: {
            testa(a){
                console.log("START - ", this.surveySetting[a])
                this.surveySetting[a] = 1;
                
                console.log("OUT - ", this.surveySetting[a]);
            }
        }
    };
</script>

<style lang="scss" scoped>
    span{
        font-weight: bold;
    }
    .title{
        &-admin{
            &-main{
                font-weight: bold;
            }

            &-sub{
                font-size: 10px;
                letter-spacing: -0.05rem;
            }
        }
    }
</style>
