<template>
  <div>
    <div>
      <h1>test 존</h1>
      <button @click="test()">test</button>
      <button @click="getPublicKey()">getPublicKey</button>
      {{ this.encrypDataJoin }}
    </div>

    <!-- getContract -->
    <div>
      <button @click="GetContract()">Get Contract Instance</button>
    </div>

    <!-- VC 생성 시작 -->
    <section class="content">
      <div class="container">
        <h1>VC 생성</h1>

        <div>
          헤더
          <!-- <input type="text" id="encryptInput" v-model="vcData.header" placeholder="암호화할 데이터를 입력하세요." /> -->
          {{ vcData.header }}
        </div>

        <div>
          페이로드 - 서브젝트
          <input
            type="text"
            v-model="vcData.payload.subject"
            placeholder="encode할 데이터를 입력하세요."
          />
          {{ vcData.payload.subject }}
        </div>
        <div>
          페이로드 - 타이틀
          <input
            type="text"
            v-model="vcData.payload.title"
            placeholder="encode할 데이터를 입력하세요."
          />
          {{ vcData.payload.title }}
        </div>
        <div>
          페이로드 - 데이터
          <input
            type="text"
            v-model="vcData.payload.data"
            placeholder="encode할 데이터를 입력하세요."
          />
          {{ vcData.payload.data }}
        </div>

        <div>
          <button @click="encrypt1()">VC 생성 버튼</button>
        </div>
      </div>
    </section>
    <!-- VC 생성 시작 -->

    <!-- VP 생성 시작 -->
    <section class="content">
      <div class="container">
        <h1>VP 생성</h1>

        <div>
          {{ vcData.header }}
          {{ vcData.payload }}
        </div>

        <div>
          시그니처 - 로우데이터 + 퍼블릭키
          <input
            type="text"
            v-model="vpData.signature.rawData"
            placeholder="raw data"
          />
          <button @click="createVP()">raw data</button>
        </div>
        <div>
          <h5>createVP 결과</h5>
          {{ createVPResult }}
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
          <input type="text" v-model="nameVC" placeholder="name" />
          성별
          <input type="text" v-model="genderVC" placeholder="gender" />
          나이
          <input type="text" v-model="ageVC" placeholder="age" />
          <button @click="registerVC()">age</button>
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
          <input type="text" v-model="addr" placeholder="set address" />
          VC 번호
          <input type="text" v-model="num" placeholder="set vc num" />
          <button @click="getVC()">set address n num</button>
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

// VC
// header == encrypt encode된거 => 받아와서 VP 에서 그대로 활용
// payload == encrypt encode된거 => 받아와서 VP 에서 그대로 활용

// VP
// header
// payload
// signature == encode( (payload 에서 raw data) + publickey  )

// header.payload.signature

export default {
  name: "",
  components: {},
  data() {
    return {
      vcData: {
        header: {
          type: "JWT",
          alg: "X25519_XSalsa20_Poly1305",
        },
        payload: {
          subject: null,
          title: null,
          data: null,
        },
      },
      vpData: {
        header: null,

        payload: null,
        signature: {
          rawData: null,
          pubKey: null,
        },
      },
      encrypDataJoin: null,
      // 알고리즘
      defaultAlg: "X25519_XSalsa20_Poly1305",
      // 공개키
      encryptionPublicKey: null,
      // createVP() result
      createVPResult: null,

      data: "",
      encrypdata: "",
      provider: null,
      //   web3: null,
      account: null,
      contract: "",
      Sub: null,
      Title: null,
      Data: null,

      nameVC: null,
      genderVC: null,
      ageVC: null,

      addr: null,
      num: null,
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
      console.log(this.encryptionPublicKey);
      console.log(" this.encrypDataJoin:", this.encrypDataJoin);
    },

    // 구동 성공
    async getPublicKey() {
      // 이더리움 네트워크 연결
      const provider = window.ethereum;
      //계정 연동
      const accounts = await provider.request({
        method: "eth_requestAccounts",
      });
      const encryptionPublicKey = await provider.request({
        method: "eth_getEncryptionPublicKey",
        params: [accounts[0]],
      });
      console.log("공개키: " + encryptionPublicKey);
      this.encryptionPublicKey = encryptionPublicKey;
      return encryptionPublicKey;
    },

    async encrypt2() {
      const encryptionPublicKey = await this.getPublicKey();
      const buf = Buffer.from(
        JSON.stringify(
          sigUtil.encrypt(
            encryptionPublicKey,
            {
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

      this.encrypDataJoin =
        this.vcData.payload.subject +
        this.vcData.payload.title +
        this.encrypdata;
      console.log(this.encrypDataJoin);

      console.log("여기!");
      // console.log("this.vcData.header:",this.vcData.header)
      await this.createVC(this.vcData.header, this.encrypDataJoin);
    },

    async encrypt1() {
      const encryptionPublicKey = await this.getPublicKey();
      const buf = Buffer.from(
        JSON.stringify(
          sigUtil.encrypt(
            encryptionPublicKey,
            {
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

      this.encrypDataJoin =
        this.vcData.payload.subject +
        this.vcData.payload.title +
        this.encrypdata;
      console.log(this.encrypDataJoin);

      console.log("여기!");
      // console.log("this.vcData.header:",this.vcData.header)
      await this.createVC(this.vcData.header, this.encrypDataJoin);
    },

    async createVC(header, payload) {
      if (!header.alg) header.alg;
      // encodeSection == Base64 Encode Function, 사용자 정의 함수
      var endcodedHeader = this.encodeSection(header);
      this.vpData.Header = endcodedHeader;
      var encodedPayload = this.encodeSection(payload);
      this.vpData.Payload = encodedPayload;
      console.log(this.vpData.Header);
    },

    createVP() {
      console.log("헤더 뜨고있습니다:", this.vpData.Header);
      var header = this.vpData.Header;
      var payload = this.vpData.Payload;
      var signature = this.encodeSection(
        this.vpData.signature.rawData + this.encryptionPublicKey
      );
      this.createVPResult = [header, payload, signature].join(".");
      // return [header, payload, signature].join('.');
    },

    // async createVP(signature) {
    //     header = this.vpData.Header;
    //     payload = this.vpData.Payload;
    //     signature = this.vpData.signature
    //     return [header, payload, signature].join('.');
    // },

    encodeSection(data, shouldCanonicalize) {
      if (shouldCanonicalize === void 0) {
        shouldCanonicalize = false;
      }
      if (shouldCanonicalize) {
        return (0, util_1.encodeBase64url)(
          (0, canonicalize_1["default"])(data)
        );
      } else {
        return (0, util_1.encodeBase64url)(JSON.stringify(data));
      }
    },

    async GetContract() {
      let abi = [
        {
          inputs: [
            {
              internalType: "address",
              name: "_add",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_num",
              type: "uint256",
            },
          ],
          name: "getVC",
          outputs: [
            {
              components: [
                {
                  internalType: "string",
                  name: "nameVC",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "genderVC",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "ageVC",
                  type: "string",
                },
              ],
              internalType: "struct registryDID.repositoryVC",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_nameVC",
              type: "string",
            },
            {
              internalType: "string",
              name: "_genderVC",
              type: "string",
            },
            {
              internalType: "string",
              name: "_ageVC",
              type: "string",
            },
          ],
          name: "registerVC",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ];
      const web3 = new Web3(window.ethereum);
      this.contract = await new web3.eth.Contract(
        abi,
        "0x58f82e407C37e74c6D76E205534659146D794a90"
      );
      // document.getElementById("contract").innerText = contract._address
      console.log(this.contract);

      // await getVC()
    },

    registerVC() {
      let nameVC = this.nameVC;
      let genderVC = this.genderVC;
      let ageVC = this.ageVC;

      this.contract.methods
        .registerVC(nameVC, genderVC, ageVC)
        .then(function (receipt) {
          console.log(receipt);
        });
    },

    getVC() {
      let addr = this.addr;
      let num = this.num;
      console.log("addr", addr);
      this.contract.methods.getVC(addr, num).then(function (receipt) {
        console.log(receipt);
        getList();
      });
    },
    // encodeSection(data, shouldCanonicalize) {
    //     if (shouldCanonicalize === void 0) {
    //         shouldCanonicalize = false;
    //     }
    //     if (shouldCanonicalize) {
    //         return (0, this.sigUtil.encodeBase64url)((0, canonicalize_1["default"])(data));
    //     } else {
    //         return (0, this.sigUtil.encodeBase64url)(JSON.stringify(data));
    //     }
    // },

    async decrypt() {
      // 이더리움 네트워크를 const provider로 표현
      const provider = window.ethereum;

      // 메타마스크에서 "ethereum.request"를 사용하여 주소를 가져옴
      const accounts = await provider.request({
        method: "eth_requestAccounts",
      });

      // 메타마스크에서 "eth_decrypt" 기능을 사용
      const decMsg = await provider.request({
        method: "eth_decrypt",
        // params에 상대방의 암호화된 데이터를 넣으면 됌. encrypt()의 this.encrypdata 값
        params: [this.encrypdata, accounts[0]],
      });
      // decMsg는 해독된 데이터 값이 나옴
      console.log(decMsg);
      return decMsg;
    },
  },
};
</script>
