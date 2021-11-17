<template>
    <div>

        <label class="btn" v-show="!this.$store.state.KakaoUser.email" @click="kakaologin()">
            <img class="custom-login-btn" src="../assets/img/카카오연동.png" />
        </label>

        
        <label class="btn"  v-show="this.$store.state.KakaoUser.email" @click="kakaologout()">
               <img class="custom-login-btn" src="../assets/img/카카오연동해제.png" />
        </label>
        

    </div>

</template>

<script>
    export default {
        name: "",
        components: {},
        data() {
            return {
                sampleData: "",
            };
        },
        //캐싱 해놓았다가 필요한 부분에 다시 재 사용
        computed: {
            KakaoUser() {
                return this.$store.state.KakaoUser;
            },
        },
        setup() {},
        created() {},
        mounted() {},
        unmounted() {},
        //캐싱이라는 개념이 없기 때문에 매번 재 렌더링
        methods: {

            kakaologin() {
                console.log(this.$store.state.KakaoUser);
                Kakao.Auth.login({
                    // scope을 만든다. 닉네임,이메일 등 쓰겠다는 것을 정의해야 한다.
                    scope: "profile_nickname, account_email, gender, age_range, birthday",
                    // ok == truev
                    success: (res) => {
                        Kakao.API.request({
                            url: "/v2/user/me",
                            // res 안에는 value, 이름, 성 등 모든게 들어있다
                            success: (res) => {
                                //console.log(res);
                                console.log(res);
                                //res 중에 카카오에서 받아온 것만 따로 저장하는 것
                                const KakaoAccount = res.kakao_account;
                                console.table(KakaoAccount);
                                //mutations , state 값을 변경할 수 있는 유일한 메서드인 commit을 사용한다.
                                //여러개의 component 에서 아래처럼 state값을 변경하면 추적하기가 어렵다.
                                //특정 시점에 어떤 컴포넌트가 state를 접근하여 변경한 건지 확인하기 어렵다.
                                this.$store.commit("KakaoUser", KakaoAccount);
                            },
                        });
                    },
                    fail: function (error) {
                        console.log(error);
                    },
                });
            },

            kakaologout() {
                console.log(this.$store.state.KakaoUser);
                if (!Kakao.Auth.getAccessToken()) {
                    console.log("아직 로그인 되지 않았습니다.");
                    return;
                }
                Kakao.Auth.logout((res) => {
                    console.log(Kakao.Auth.getAccessToken());
                    //res에는 true값을 반환해준다
                    console.log(res);
                    this.$store.commit("KakaoUser", {});
                });
            },
        },
    };
</script>
<style>
.custom-login-btn{
    height: 40px;
}
</style>