<template>
    <div class="container section-space--inner--60 ">
        <div class="comment-wrapper">
            <h3>설문 등록 페이지</h3>
            <div class="comment-form">
                <div class="row">
                    <div class="col-2 section-space--bottom--20 "> 
                        <span class="title-admin-main"> 카테고리 </span>
                        <select id="category" v-model="surveyInfo.category">
                            <option 
                                :value="categoryIndex"
                                :key="categoryIndex" 
                                v-for="category, categoryIndex in categoryList">
                                {{category}}
                            </option>
                        </select>
                    </div>
                    <div class="col-10 section-space--bottom--20 "> 
                        <span class="title-admin-main"> 제목 </span>
                        <span class="required"> *필수사항 </span>
                        <input type="text" v-model="surveyInfo.title">
                    </div>
                    <div class="col-12 section-space--bottom--20 "> 
                        <span class="title-admin-main"> 설명 </span>
                        <input type="text" v-model="surveyInfo.desc">
                    </div>

                    <div class="col-12 section-space--bottom--20 "> 
                        <span class="title-admin-main"> URL </span>
                        <span class="required"> *필수사항 </span>
                        <input type="text" v-model="surveyInfo.url">
                    </div>

                    <div class="col-lg-4 col-sm-12 section-space--bottom--20"> 
                        <span class="title-admin-main"> 보상금 </span>
                        <span class="required"> *필수사항 </span>
                        <input type="text" v-model="surveyInfo.reward">
                    </div>

                    <div class="col-lg-4 col-sm-12 section-space--bottom--20"> 
                        <span class="title-admin-main"> 표본수 </span>
                        <span class="required"> *필수사항 </span>
                        <input type="number" min="1" v-model="surveyInfo.max">
                    </div>

                        <div class="col-lg-4 col-sm-12 section-space--bottom--20"> 
                        <span class="title-admin-main"> 1인당 보상 지급액 </span>
                        <span class="title-admin-sub"> ( 보상 지급액 = 보상금 / 표본수 ) </span>
                        <input type="text" v-model="calcReward">
                    </div>
                    
                    <div class="col-lg-6 section-space--bottom--20"> 
                        <span class="title-admin-main"> 참여 조건 설정</span>
                        <input type="text" placeholder="검색">
                    </div>

                
                    <div class="col-lg-6">
                        <span class="title-admin-main"> 세부 조건 설정 </span>
                        <input type="text" placeholder="검색">
                    </div>

                    <div class="col-lg-12">
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
                                    
                                    <td class="col-8">
                                        <div class="row">
                                            <div class="col-8">
                                                <span v-if="privacyItem.state == 0">제공하지 않음 </span>
                                                <span v-if="privacyItem.state == 1">필수 제공</span>
                                                <span v-if="privacyItem.state == 2">선택적 제공</span>
                                            </div>
                                            
                                            <div class="col-4">
                                                <input type="button" @click="setAgreementState(tableIndex)" value="설정변경">
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    <div class="col-12 d-flex justify-content-center">
                        <input type="submit" value="등록하기" @click="addSurvey()">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        components: {
        },
        data () {
            return {
                categoryList:[
                    '정부',
                    '주거',
                    '자산',
                    '투자',
                    '기타',
                ],
                surveyInfo : {
                    category : 4,
                    title : '',
                    desc : '',
                    sdate : '',
                    edate : '',
                    reward : '',
                    max : '',
                    url : '',
                    vp : {},
                },
                privacyList: [
                    {
                        idx: 0,
                        name: 'birth',
                        description: '생년월일',
                        state: 0,
                    },{
                        idx: 1,
                        name: 'address',
                        description: '거주지',
                        state: 0,
                    },{
                        idx: 2,
                        name: 'phone',
                        description: '핸드폰',
                        state: 0,
                    },{
                        idx: 3,
                        name: 'income',
                        description: '연봉',
                        state: 0,
                    },{
                        idx: 4,
                        name: 'gender',
                        description: '성별',
                        state: 0,
                    },
                ]
            }
        },
        methods: {
            setAgreementState(index){
                this.privacyList[index].state = (this.privacyList[index].state + 1) % 3;
                console.log(this.privacyList[index])
                this.$forceUpdate()
            },
            addSurvey(){
                this.surveyInfo.vp = this.privacyList.filter(item => item.state > 0);
                console.log(this.surveyInfo)
            }
        },
        computed: {
            calcReward() {
                if (this.surveyInfo.reward == 0 || this.surveyInfo.max == 0){
                    return 0
                }
                return this.surveyInfo.reward / this.surveyInfo.max
            }
        }
    };
</script>

<style lang="scss" scoped>
    span{
        font-weight: bold;
    }
    td, th, tr{
        height:30px;
    }
    .required{
        font-size:6px;
        color:red;
        letter-spacing: -0.05rem;
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
