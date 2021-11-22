<template>
    <div>
        <div>
            <h1>test 존</h1>
            <button @click="test()">test</button>
            <button @click="getPublicKey()">getPublicKey</button>
            {{this.encrypDataJoin}}
        </div>
        <!-- VC 생성 시작 -->
        <section class="content">
            <div class="container">
                <h1>VC 생성</h1>
                <!-- encrypt 시작 -->
                <div>
                    헤더
                    <!-- <input type="text" id="encryptInput" v-model="vcData.header" placeholder="암호화할 데이터를 입력하세요." /> -->
                    {{vcData.header}}
                </div>
                <!-- encrypt 종료 -->

                <!-- decrypt 시작 -->
                <div>
                    페이로드 - 서브젝트
                    <input type="text" id="decryptInput" v-model="vcData.payload.subject"
                        placeholder="복호화할 데이터를 입력하세요." />
                    {{vcData.payload.subject}}
                </div>
                <div>
                    페이로드 - 타이틀
                    <input type="text" id="decryptInput" v-model="vcData.payload.title"
                        placeholder="복호화할 데이터를 입력하세요." />
                    {{vcData.payload.title}}
                </div>
                <div>
                    페이로드 - 데이터
                    <input type="text" id="decryptInput" v-model="vcData.payload.data" placeholder="복호화할 데이터를 입력하세요." />
                    {{vcData.payload.data}}
                </div>
                <!-- decrypt 종료 -->
                <div>
                    <button @click="encrypt()">VC 생성 버튼</button>
                </div>
            </div>
        </section>
        <!-- VC 생성 시작 -->

        <!-- VP 생성 시작 -->
        <section class="content">
            <div class="container">
                <h1>VP 생성</h1>

                <div>
                    헤더
                    <input type="text" v-model="data" placeholder="data to encrypt" />
                    <button @click="encrypt()">encrypt</button>
                </div>

                <div>
                    페이로드
                    <input type="text" placeholder="data to decrypt" />
                    <button @click="decrypt()">decrypt</button>
                </div>

                <div>
                    시그니쳐
                    <input type="text" placeholder="data to decrypt" />
                    <button @click="decrypt()">decrypt</button>
                </div>

            </div>
        </section>
        <!-- VP 생성 종료 -->

        <!-- VC Repo 시작 -->
        <section class="content">
            <div class="container">
                <h1>VC Repo</h1>

                <div>
                    이름
                    <input type="text" v-model="data" placeholder="data to encrypt" />
                    <button @click="encrypt()">encrypt</button>
                </div>

                <div>
                    성별
                    <input type="text" placeholder="data to decrypt" />
                    <button @click="decrypt()">decrypt</button>
                </div>

                <div>
                    나이
                    <input type="text" placeholder="data to decrypt" />
                    <button @click="decrypt()">decrypt</button>
                </div>
            </div>
        </section>
        <!-- VP Repo 종료 -->

        <!-- Get VC 시작 -->
        <section class="content">
            <div class="container">
                <h1>Get VC</h1>

                <div>
                    지갑 주소
                    <input type="text" v-model="data" placeholder="data to encrypt" />
                    <button @click="encrypt()">encrypt</button>

                </div>
                <div>
                    VC 번호
                    <input type="text" placeholder="data to decrypt" />
                    <button @click="decrypt()">decrypt</button>
                </div>
            </div>
        </section>
        <!-- Get VC 종료 -->

    </div>
</template>
<script>
    const Buffer = require("buffer/").Buffer;
    const sigUtil = require("eth-sig-util");
    const util_1 = require("../../../DID-blockchain/models/util.js");


    import Web3 from "web3";
    // import {
    //     createVC,
    //     createVP
    // } from "../../../DID-blockchain/models/createJWT.js";
    // import {
    //     JWTHeader,
    //     JWTPayload,
    //     JWTSignature
    // } from "../../../DID-blockchain/models/createJWT.js";

    export default {
        name: "",
        components: {

        },
        data() {
            return {
                util_1 : util_1,
                vcData: {
                    header: {
                        type: "JWT",
                        alg: "X25519_XSalsa20_Poly1305"
                    },
                    payload: {
                        subject: null,
                        title: null,
                        data: null
                    }
                },
                encrypDataJoin: null,
                defaultAlg: 'X25519_XSalsa20_Poly1305',
                shouldCanonicalize : false,


                data: "",
                encrypdata: "",
                provider: null,
                web3: null,
                account: null,
                contract: null,
                Sub: null,
                Title: null,
                Data: null,
                encryptionPublicKey: null

            };
        },
        computed: {
            user() {
                return this.$store.state.user;
            },
        },
        created() {},
        mounted() {},
        updated() {},
        unmounted() {},
        methods: {
            test() {
                console.log(this.encryptionPublicKey)
                console.log(" this.encrypDataJoin:", this.encrypDataJoin)
            },
            // 구동 성공
            async getPublicKey() {
                // 이더리움 네트워크 연결
                const provider = window.ethereum;
                //계정 연동
                const accounts = await provider.request({
                    method: 'eth_requestAccounts'
                });
                const encryptionPublicKey = await provider.request({
                    method: "eth_getEncryptionPublicKey",
                    params: [accounts[0]]
                });
                console.log("공개키: " + encryptionPublicKey);
                this.encryptionPublicKey = encryptionPublicKey
                return encryptionPublicKey;
            },

            async encrypt() {
                const encryptionPublicKey = await this.getPublicKey();
                const buf = Buffer.from(
                    JSON.stringify(
                        sigUtil.encrypt(
                            encryptionPublicKey, {
                                data: this.vcData.payload.data,
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

                this.encrypDataJoin = this.vcData.payload.subject + this.vcData.payload.title + this.encrypdata
                console.log(this.encrypDataJoin)

                console.log("여기!")
                // console.log("this.vcData.header:",this.vcData.header)
                await this.createVC(this.vcData.header, this.encrypDataJoin)
            },


            async createVC(header, payload) {
                if (!header.alg)
                    header.alg
                // encodeSection == Base64 Encode Function, 사용자 정의 함수
                var endcodedHeader = this.encodeSection(header, this.shouldCanonicalize);
                var encodedPayload = this.encodeSection(payload, this.shouldCanonicalize);
                return [endcodedHeader, encodedPayload].join('.');
            },


            encodeSection(data, shouldCanonicalize) {
                if (shouldCanonicalize === void 0) {
                    shouldCanonicalize = false;
                }
                if (shouldCanonicalize) {
                    return (0, this.util_1.encodeBase64url)((0, canonicalize_1["default"])(data));
                } else {
                    return (0, this.util_1.encodeBase64url)(JSON.stringify(data));
                }
            },

            async decrypt() {
                // 이더리움 네트워크를 const provider로 표현
                const provider = window.ethereum;

                // 메타마스크에서 "ethereum.request"를 사용하여 주소를 가져옴
                const accounts = await provider.request({
                    method: 'eth_requestAccounts'
                });

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