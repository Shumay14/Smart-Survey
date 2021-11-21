<script>
import Web3 from "web3";
import dayjs from "dayjs";
import ModalSelect from "../components/sections/_ModalSelect.vue";

import { createVC, createVP } from "../../../DID-blockchain/models/createJWT.ts";

import {JWTHeader, JWTPayload, JWTSignature} from "../../../DID-blockchain/models/createJWT.ts";


JWTHeader
JWTPayload
JWTSignature


const VC = createVC(header, payload);
const VP = createVP(header, payload, signature);

const _contractAddr = "0x58f82e407C37e74c6D76E205534659146D794a90";
const _abi = [
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
];







export default {
  props: ["project", "surveyIndex"],
  name: "",
  components: { ModalSelect },
  data() {
    return {
      btnname: "참여하기",
      allSelect: "#e8e8e8",
      clickSelect: "",
      reward : '-',
      won : '-',
      // iconimage: "fas fa-suitcase-rolling fa-6x",
    };
  },
  setup() {},
  created() {},
  unmounted() {},
  async mounted() {
    
    this.reward = await this.getReward(this.project.idx) / 1000000000000;
    this.reward = (Math.round(this.reward*100 + 1) * 10)/1000;

    this.won = (Math.round(this.reward * 12)).toLocaleString('ko-KR');;

  },
  methods: {
    iconimage(catename) {
      catename = this.$store.state.eng_category[catename];
      switch (catename) {
        case "travel":
          return "fas fa-suitcase-rolling fa-4x";
        case "car":
          return "fas fa-car fa-4x";
        case "music":
          return "fas fa-music fa-4x";
        case "food":
          return "fas fa-utensils fa-4x";
        case "electronic-products":
          return "fas fa-mobile-alt fa-4x";
        default:
          break;
      }
    },
    async getReward(surveyIndex){
      
      const web3 = new Web3(window.ethereum);

      var _contractAddr = "0xd13D301B0AD89A576f2416D3Ba03173E489356eB";

      var _params = [surveyIndex];
      var _abi = [
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
      console.log(_abi.estimateReward);

      var _reward = 0;

      _reward = web3.utils.hexToNumber(
        await web3.eth.call({
          to: _contractAddr,
          data: web3.eth.abi.encodeFunctionCall(
            _abi.estimateReward,
            _params
          ),
        })
      );

      return _reward;
    },
    async getCharmyeoInfo(surveyIndex) {
      const web3 = new Web3(window.ethereum);

      var _contractAddr = "0xd13D301B0AD89A576f2416D3Ba03173E489356eB";
      var _abi = {
        getCurrentUserNumber: {
          inputs: [
            {
              internalType: "uint256",
              name: "surveyIndex",
              type: "uint256",
            },
          ],
          name: "getCurrentUserNumber",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        getUserLimit: {
          inputs: [
            {
              internalType: "uint256",
              name: "surveyIndex",
              type: "uint256",
            },
          ],
          name: "getUserLimit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      };

      var _params = [surveyIndex];
      console.log(_abi.getCurrentUserNumber);

      var _res = {
        currentUserNumber: 0,
        userLimit: 0,
      };

      _res.currentUserNumber = web3.utils.hexToNumber(
        await web3.eth.call({
          to: _contractAddr,
          data: web3.eth.abi.encodeFunctionCall(
            _abi.getCurrentUserNumber,
            _params
          ),
        })
      );

      _res.userLimit = web3.utils.hexToNumber(
        await web3.eth.call({
          to: _contractAddr,
          data: web3.eth.abi.encodeFunctionCall(_abi.getUserLimit, _params),
        })
      );

      return _res;
    },
    async btnHoverin(surveyIndex) {
      var items = await this.getCharmyeoInfo(surveyIndex);
      console.log(items);
      this.btnname = `${items.currentUserNumber}/${items.userLimit}`;
    },
    btnHoverout() {
      this.btnname = "참여하기";
    },
    ddaylist(a, b) {
      // Json.parse -> object로 변환
      const today = dayjs(JSON.stringify(a));
      const dday = dayjs(JSON.stringify(b));
      const diff = dday.diff(today, "day");
      return diff;
    },
    allbtn() {
      this.allSelect = this.allSelect == "#fee500" ? "#e8e8e8" : "#fee500";
      this.clickSelect =
        this.clickSelect == "2px solid black" ? "" : "2px solid black";
    },
  },
};
</script>