<template>
    <div class="container section-space--inner--60 ">
        <div class="comment-wrapper">
            <h3>설문 등록 페이지</h3>
            <div class="comment-form">
                <div class="row">
                    <div class="col-2 section-space--bottom--20 dropdown"> 
                        <span class="title-admin-main"> 카테고리 </span>
                        <span class="required"> *필수사항 </span>
                        <input type="button" class="btn dropdown-toggle" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false" 
                            :value="categoryList[surveyInfo.category]" />
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li>
                                <input type="button" class="dropdown-item"
                                    v-for="category, categoryIndex in categoryList"
                                    :key ="categoryIndex" :value="category" @click="setCategory(categoryIndex)" />
                            </li>
                        </ul>
                    </div>


                    <!-- <div class="col-2 section-space--bottom--20 "> 
                        <span class="title-admin-main"> 카테고리 </span>
                        <div>
                        <select id="category" v-model="surveyInfo.category">
                            <option 
                                :value="categoryIndex"
                                :key="categoryIndex" 
                                v-for="category, categoryIndex in categoryList">
                                {{category}}
                            </option>
                        </select>
                        </div>
                    </div> -->

                    <div class="col-10 section-space--bottom--20 "> 
                        <span class="title-admin-main"> 제목 </span>
                        <span class="required"> *필수사항 </span>
                        <input type="text" v-model="surveyInfo.title">
                    </div>
                    
                    <!-- <div class="col-7 section-space--bottom--20 "> 
                        <span class="title-admin-main"> 제목 </span>
                        <span class="required"> *필수사항 </span>
                        <input type="text" v-model="surveyInfo.title">
                    </div>
                    
                    <div class="col-2 section-space--bottom--20 "> 
                        <span class="title-admin-main"> 이미지 </span>
                        <input type="text" v-model="surveyInfo.img">
                    </div> -->

                    <div class="col-12 section-space--bottom--20 "> 
                        <span class="title-admin-main"> 설명 </span>
                        <input type="text" v-model="surveyInfo.desc">
                    </div>

                    <div class="col-12 section-space--bottom--20 "> 
                        <span class="title-admin-main"> 외부 설문 URL </span>
                        <span class="required"> *필수사항 </span>
                        <input type="text" v-model="surveyInfo.url">
                    </div>

                    <div class="col-lg-4 col-sm-12 section-space--bottom--20"> 
                    
                        <span class="title-admin-main"> 보상금 </span>
                        <span class="required"> *필수사항 </span>
                        
                        <div class="input-group">
                            <input type="text" class="form-control" v-model="surveyInfo.reward">
                            <span class="input-group-text">Klay</span>
                        </div>
                    </div>

                    <div class="col-lg-4 col-sm-12 section-space--bottom--20"> 
                        <span class="title-admin-main"> 표본수 </span>
                        <span class="required"> *필수사항 </span>
                        
                        <div class="input-group">
                            <input type="number" class="form-control" min="1" v-model="surveyInfo.max"> 
                            <span class="input-group-text">명</span>
                        </div> 
                    </div>

                    <div class="col-lg-4 col-sm-12 section-space--bottom--20"> 
                        <span class="title-admin-main"> 1인당 보상 지급액 </span>
                        <span class="title-admin-sub"> ( 보상 지급액 = 보상금 / 표본수 ) </span>
                        <div class="input-group">
                            <input type="text" class="form-control" style="background:white" v-model="calcReward" readonly>
                            <span class="input-group-text">Klay</span>
                        </div>
                    </div>
                    

                    <div class="col-lg-12">
                        <span class="title-admin-main"> 참여 조건 설정</span>
                        <span class="required"> *필수사항 </span>
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
                                                <!-- <span v-if="privacyItem.state == 2">선택적 제공</span> -->
                                            </div>
                                            
                                            <div class="col-4">
                                                <input type="button" class="custom-btn" @click="setAgreementState(tableIndex)" value="변경">
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
    import Web3 from "web3";

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
                    img : '',
                    sdate : '',
                    edate : '',
                    reward : '',
                    max : 1,
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
            setCategory(index){
                this.surveyInfo.category = index
            },

            setAgreementState(index){
                this.privacyList[index].state = (this.privacyList[index].state + 1) % 2;
                this.surveyInfo.vp = this.privacyList.filter(item => item.state > 0);
                this.$forceUpdate()
            },
            
            async addSurvey(){
                const web3 = new Web3(window.ethereum);
                // console.log("!@#", await web3.eth.getAccounts());
                // 컨트랙트주소 :0xCd6238C265Fc5aDb07406e55a034F73CD6FCFd57
                // createSurvey(address, userlimit), 클레이 같이 보내기 필요
                console.log(this.surveyInfo)

                var _account = (await web3.eth.getAccounts())[0]
                var _contractAddr = '0xE6E57c4aCfeE212D1043c09eeec09350B5B0Ef8a';
                var _abi = {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_owner",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_userLimit",
                            "type": "uint256"
                        }
                    ],
                    "name": "createSurvey",
                    "outputs": [],
                    "stateMutability": "payable",
                    "type": "function"
                };

                var _params = [_account, this.surveyInfo.max];
                var _data = web3.eth.abi.encodeFunctionCall(_abi, _params);

                await web3.eth.sendTransaction({
                    from: _account,
                    to: _contractAddr,
                    value: web3.utils.toWei(10000, "ether"),
                    data: _data
                })
            },
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
    .custom-btn{
        height:100%;
        width:90px;
        font-weight: bold;
        border-radius: 22px;
        border: 1px solid #ced4da;
        color: #495057;
    }
    span{
        font-weight: bold;
    }
    td, th, tr{
        height:10px;
    }
    .required{
        padding-left: 3px;
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
