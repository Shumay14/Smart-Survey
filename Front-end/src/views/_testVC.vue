<template>
    <div >

        <section class="content">
            <!-- 페이지 네임 -->
            <div class="container">
                <h1>마이페이지</h1>
                <h1>MetaMask Encryption example</h1>
                <div>
                    <input type="text" id="encryptInput" v-model="data" placeholder="data to encrypt" />
                    <button @click="encrypt()">encrypt</button>
                    <output id="encryptedMessage"></output>
                </div>
                <div>
                    <input type="text" id="decryptInput" placeholder="data to decrypt" />
                    <button @click="decrypt()">decrypt</button>
                    <output id="decryptedMessage"></output>
                </div>
            </div>
        </section>
        <!--end content-->

        <!--*********************************************************************************************************-->
        <!--************ FOOTER *************************************************************************************-->
        <!--*********************************************************************************************************-->
    </div>
</template>
<script>
    if (typeof web3 !== 'undefined') {
        App.web3Provider = web3.currentProvider;
        web3 = new Web3(web3.currentProvider);
    } else {
        // If no injected web3 instance is detected, fallback to Ganache.
        App.web3Provider = new web3.providers.HttpProvider('http://127.0.0.1:7545');
        web3 = new Web3(App.web3Provider);
    }




    const Buffer = require("buffer/").Buffer;
    const sigUtil = require("eth-sig-util");

    export default {
        name: "",
        components: {
   
        },
        data() {
            return {
                data: "",
                encrypdata: "",
            };
        },
        computed: {
            // user() {
            //     return this.$store.state.user;
            // },
        },
        created() {},
        mounted() {},
        updated() {},
        unmounted() {},
        methods: {
            async getPublicKey() {
                // 이더리움 네트워크 연결
                const provider = window.ethereum;
                //계정 연동
                const accounts = await provider.request({ method: 'eth_requestAccounts' });
                const encryptionPublicKey = await provider.request({
                    method: "eth_getEncryptionPublicKey",
                    params: [accounts[0]],
                });
                console.log("공개키: " + encryptionPublicKey);
                return encryptionPublicKey;
            },

            async encrypt() {
                const encryptionPublicKey = await this.getPublicKey();
                    const buf = Buffer.from(
                    JSON.stringify(
                        sigUtil.encrypt(
                            encryptionPublicKey, {
                                data: this.data,
                            },
                            // poly1305 버전
                            "x25519-xsalsa20-poly1305"
                        )
                    ),
                    "utf8"
                );
                //this.encrypt = "0x" + buf.toString("hex"); 

                // 암호화한 데이터를 hex로 버퍼하여 16진수로 변경
                this.encrypdata = "0x" + buf.toString("hex");
                console.log("버퍼 : " + buf);
                console.log(this.encrypdata);
                //return "0x" + buf.toString("hex");
            },

            async decrypt() {
                // 이더리움 네트워크를 const provider로 표현
                const provider = window.ethereum;

                // 메타마스크에서 "ethereum.request"를 사용하여 주소를 가져옴
                const accounts = await provider.request({ method: 'eth_requestAccounts' });

                // 메타마스크에서 "eth_decrypt" 기능을 사용
                const decMsg = await provider.request({
                    method: "eth_decrypt",
                    // params에 상대방의 암호화된 데이터를 넣으면 됌. encrypt()의 this.encrypdata 값
                    params: [
                        this.encrypdata,
                        accounts[0]
                    ],
                });
                // decMsg는 해독된 데이터 값이 나옴
                console.log(decMsg);
                return decMsg;
            },
        },
    };
</script>