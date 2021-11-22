<template>
    <div >

        <section class="content">
            <!-- section1 -->
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

        <section class="content">
            <!-- section2 -->
            <div class="container">
                <h1>connect wallet</h1>
                <div>
                    
                    <button @click="init()">Connect Wallet</button>
                    <output id="account"></output>
                </div>

                <div>
                    <input type="text" id="decryptInput" placeholder="data to decrypt" />
                    <button @click="decrypt()">decrypt</button>
                    <output id="decryptedMessage"></output>
                </div>
            </div>
        </section>
        


    </div>
</template>
<script>
    const Buffer = require("buffer/").Buffer;
    const sigUtil = require("eth-sig-util");

    import Web3 from "web3";
    import { createVC, createVP } from "../../../DID-blockchain/models/createJWT.js";
    import { JWTHeader, JWTPayload, JWTSignature } from "../../../DID-blockchain/models/createJWT.js";

    export default {
        name: "",
        components: {
   
        },
        data() {
            return {
                data: "",
                encrypdata: "",
                provider: null,
                web3: null,
                account: null,
                contract: null,
                Sub: null,
                Title: null,
                Data: null,
                RawData: null,
                PubKey: null,

                JWTHeader: {
                    typ: "JWT",
                    alg: "X25519_XSalsa20_Poly1305"
                },

                JWTPayload: {
                    sub: null,
                    title: null,
                    data: null
                },

                JWTSignature = {
                    rawData: null,
                    pubKey: null
                }

            };
        },
        computed: {
            // user() {
            //     return this.$store.state.user;
            // },
        },
        created() {},
        mounted() {
            async function GetContract() {
      
                let abi = [
                    {
                    "inputs": [
                        {
                        "internalType": "address",
                        "name": "_add",
                        "type": "address"
                        },
                        {
                        "internalType": "uint256",
                        "name": "_num",
                        "type": "uint256"
                        }
                    ],
                    "name": "getVC",
                    "outputs": [
                        {
                        "components": [
                            {
                            "internalType": "string",
                            "name": "nameVC",
                            "type": "string"
                            },
                            {
                            "internalType": "string",
                            "name": "genderVC",
                            "type": "string"
                            },
                            {
                            "internalType": "string",
                            "name": "ageVC",
                            "type": "string"
                            }
                        ],
                        "internalType": "struct registryDID.repositoryVC",
                        "name": "",
                        "type": "tuple"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                    },
                    {
                    "inputs": [
                        {
                        "internalType": "string",
                        "name": "_nameVC",
                        "type": "string"
                        },
                        {
                        "internalType": "string",
                        "name": "_genderVC",
                        "type": "string"
                        },
                        {
                        "internalType": "string",
                        "name": "_ageVC",
                        "type": "string"
                        }
                    ],
                    "name": "registerVC",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                    }
                ]
                contract = await new web3.eth.Contract(abi, "0x58f82e407C37e74c6D76E205534659146D794a90")
                document.getElementById("contract").innerText = contract._address
                console.log(contract)
            
                await contract.methods.getVC(this.$store.state.metamaskAdd, 0)
            }
            await GetContract()
        },
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